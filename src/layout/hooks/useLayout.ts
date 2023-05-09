import { computed } from "vue";

import { settingStore } from "/@/store/modules/settings";
/**
 * 布局Hook
 */
export function useLayoutHook() {
  const useSettingStore = settingStore();

  /**
   * 侧边栏是否折叠 true-折叠 false-展开
   */
  const isCollapse = computed(() => {
    return !useSettingStore.getSidebarIsOpen;
  });

  /**
   * 改变侧边栏折叠/伸展状态的方法
   */
  function toggleSideBar() {
    useSettingStore.toggleSideBar();
  }

  return {
    isCollapse,
    toggleSideBar
  };
}
