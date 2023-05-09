/**
 * prettier配置
 */
module.exports = {
  // 对象中的空格
  bracketSpacing: true,
  // true-使用单引号 false-使用双引号
  singleQuote: false,
  //能省略括号的时候就省略
  arrowParens: "avoid",
  // 不自动添加行尾逗号
  trailingComma: "none"
  //运行pnpm lint:prettier指令,行尾序列自动修复为‘LF’
  // endOfLine: "lf"
};
