import { ref } from "vue";

// 定义入参格式
interface FetchApiProps {
  apiFun: (props?: any) => Promise<any>;
}
/**
 * 按钮hook：按钮调用接口，触发loading
 * @param {FetchApiProps} props 传入接口
 */
export function useBtnLoading(props: FetchApiProps) {
  const { apiFun } = props;
  //loading状态
  const loading = ref(false);

  /* 调用接口请求数据 */
  const loadData = <Q, P>(props?: Q): Promise<P> => {
    loading.value = true;
    return apiFun(props).then(
      data => {
        //接口调用成功
        loading.value = false;
        return data;
      },
      err => {
        // 未知错误，可能是代码抛出的错误，或是网络错误
        loading.value = false;
        // 接着抛出错误
        return Promise.reject(err);
      }
    );
  };

  return {
    loading,
    loadData
  };
}
