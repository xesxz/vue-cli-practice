/*
 * @Autor        : Pat
 * @Description  : 
 * @Email        : gouqingping@yahoo.com
 * @Date         : 2020-02-19 15:31:14
 * @LastEditors  : Pat
 * @LastEditTime : 2020-08-10 16:56:42
 */
import Vue from 'vue'
import Router from 'vue-router'
import { constantRoutes } from "@/config/routerConfig"
Vue.use(Router)
const createRouter = () => new Router({
	scrollBehavior: () => ({ y: 0 }),
	routes: constantRoutes
})

const router = createRouter()
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
	const newRouter = createRouter()
	router.matcher = newRouter.matcher // reset router
}

export default router