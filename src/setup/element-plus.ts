import type { App } from "vue";
/*全局引用*/
import ElementPlus from "element-plus";
/*按需引用*/
// import {
//     ...
// } from 'element-plus';
import "element-plus/lib/theme-chalk/index.css";

export function setupElementPlus(app: App<Element>): any {
  app.use(ElementPlus); /*全局引用 */
  // app.use(...).use(...).use(...).use(...).use(...);/*按需引用 */
}
