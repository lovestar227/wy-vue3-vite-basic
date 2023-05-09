import dayjs, { Dayjs } from "dayjs";
import duration from "dayjs/plugin/duration";
import { readdir, stat } from "fs";
import { sum } from "lodash-unified";
import pc from "picocolors";
import type { Plugin } from "vite";
import compressPlugin from "vite-plugin-compression";
dayjs.extend(duration);

//打包开始时间
let startTime: Dayjs;

//包目录
let staticPath: string;
//打包总体积(字节数)
const allSizeList: number[] = [];
//打包后.gz体积
const gzipSizeList: number[] = [];
//打包后.br体积
const brotliSizeList: number[] = [];
//打包后未压缩文件体积
const noCompressSizeList: number[] = [];

/**
 * 记录打包开始时间的插件
 * @returns {Plugin}
 */
const buildStartTime = (): Plugin => {
  return {
    name: "build-size-output",
    apply: "build",
    configResolved({ command, build: { outDir } }) {
      staticPath = outDir;
    },
    buildStart() {
      //记录打包开始时间
      startTime = dayjs(new Date());
    }
  };
};

/**
 * 计算打包文件大小
 * @param {string} folder 当前解析的文件/文件夹地址
 * @param {Function} callback 回调
 */
const recursiveDirectory = (folder: string, callback: Function) => {
  /* 以异步的方式读取文件目录 */
  readdir(folder, (err, files: string[]) => {
    if (err) throw err;
    let count = 0;
    const checkEnd = () => {
      ++count == files.length && callback();
    };
    files.forEach((item: string) => {
      stat(folder + "/" + item, async (err, stats) => {
        if (err) throw err;
        if (stats.isFile()) {
          allSizeList.push(stats.size);
          //记录gizp压缩文件体积大小
          if (item.indexOf(".gz") > -1) {
            gzipSizeList.push(stats.size);
          }
          //记录brotli压缩文件体积大小
          else if (item.indexOf(".br") > -1) {
            brotliSizeList.push(stats.size);
          }
          //记录未压缩体积大小
          else {
            noCompressSizeList.push(stats.size);
          }
          checkEnd();
        } else if (stats.isDirectory()) {
          recursiveDirectory(`${folder}/${item}/`, checkEnd);
        }
      });
    });
    //空文件夹
    files.length === 0 && callback();
  });
};

/**
 * 分析包体积，转化为方便理解的单位
 * @param {number} size 总体积（字节数）
 * @param {number} reservedBigits 保留位数
 * @returns {string} 包的体积
 */
const formatBytes = (size: number, reservedBigits = 2): string => {
  if (size == 0) return "0 Bytes";
  const base = 1024,
    sizeMap = ["Bytes", "KB", "MB", "GB", "TB"],
    //计算单位
    rank = Math.floor(Math.log(size) / Math.log(base));
  return (
    parseFloat((size / Math.pow(base, rank)).toFixed(reservedBigits)) +
    " " +
    sizeMap[rank]
  );
};

/**
 * vite-plugin-compressiond打包完成的回调
 */
const success = (): void => {
  //递归统计打包目录里的文件大小
  recursiveDirectory(staticPath, () => {
    console.log(
      pc.bold(
        pc.green(
          `恭喜打包完成🎉（总用时${dayjs
            .duration(dayjs(new Date()).diff(startTime))
            .format("mm分ss秒")}，打包后的大小为${formatBytes(
            sum(allSizeList)
          )}）`
        )
      )
    );
    console.log("gizp压缩后体积：", pc.blue(formatBytes(sum(gzipSizeList))));
    console.log(
      "brotli压缩后体积：",
      pc.blue(formatBytes(sum(brotliSizeList)))
    );
    console.log(
      "未压缩文件体积：",
      pc.blue(formatBytes(sum(noCompressSizeList)))
    );
  });
};

/**
 * 非压缩模式计算文件体积的插件
 * @returns {Plugin}
 */
const noneCompressSizePlugin = (): Plugin => {
  return {
    name: "vite:buildInfo",
    apply: "build",
    closeBundle() {
      success();
    }
  };
};

/**
 * gzip压缩 & brotli压缩
 * @param {ViteCompression} compress 压缩指令
 * @returns {Plugin[]}
 */
export const configCompressPlugin = (
  compress: ViteCompression = "none"
): Plugin[] | null => {
  const gz = {
    // 生成的压缩包后缀
    ext: ".gz",
    //压缩算法
    algorithm: "gzip" as const,
    // 体积大于threshold才会被压缩
    threshold: 0,
    // 默认为 '/.(js|mjs|json|css|html)$/i' 压缩.js|mjs|json|css|html后缀文件，设置成true，压缩全部文件
    filter: () => true,
    // 压缩后是否删除原始文件,默认false
    deleteOriginFile: false
    // verbose: true：是否在控制台输出压缩结果，默认为 true
    // disable: false：是否禁用压缩，默认为 false
  };
  const br = {
    //生成的压缩包后缀
    ext: ".br",
    //压缩算法
    algorithm: "brotliCompress" as const,
    // 体积大于threshold才会被压缩
    threshold: 0,
    // 默认为 '/.(js|mjs|json|css|html)$/i' 压缩.js|mjs|json|css|html后缀文件，设置成true，压缩全部文件
    filter: () => true,
    // 压缩后是否删除原始文件,默认false
    deleteOriginFile: false
    // verbose: true：是否在控制台输出压缩结果，默认为 true
    // disable: false：是否禁用压缩，默认为 false
  };

  //压缩指令map
  const codeList = [
    { key: "gzip", value: gz },
    { key: "brotli", value: br },
    { key: "both", value: [gz, br] }
  ];

  //返回的插件数组
  const plugins: Plugin[] = [];

  //匹配压缩模式添加压缩插件
  codeList.forEach(item => {
    if (compress.includes(item.key)) {
      //压缩后是否删除原始文件
      if (compress.includes("clear")) {
        //both 两种压缩 gz && br
        if (Array.isArray(item.value)) {
          //gz
          plugins.push(
            compressPlugin(Object.assign(gz, { deleteOriginFile: true }))
          );
          //br
          plugins.push(
            compressPlugin(
              Object.assign(br, { deleteOriginFile: true, success })
            )
          );
        }
        //一种压缩 gz || br
        else {
          plugins.push(
            compressPlugin(
              Object.assign(item.value, { deleteOriginFile: true, success })
            )
          );
        }
      }
      //压缩后不删除原始文件
      else {
        //both 两种压缩 gz && br
        if (Array.isArray(item.value)) {
          //gz
          plugins.push(compressPlugin(gz));
          //br
          plugins.push(compressPlugin(Object.assign(br, { success })));
        }
        //一种压缩 gz || br
        else {
          plugins.push(compressPlugin(Object.assign(item.value, { success })));
        }
      }
    }
  });
  //添加记录打包开始时间的插件
  plugins.push(buildStartTime());
  //添加非压缩模式计算文件体积的插件
  if (compress === "none") {
    plugins.push(noneCompressSizePlugin());
  }
  return plugins;
};
