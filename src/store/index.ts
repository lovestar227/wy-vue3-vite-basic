import { createPinia } from "pinia";
import type { App } from "vue";
const store = createPinia();

/**
 * 初始化pinia
 * @param app vue实例
 */
export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };
