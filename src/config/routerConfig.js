/*
 * @Autor        : Pat
 * @Description  : 
 * @Email        : gouqingping@yahoo.com
 * @Date         : 2020-08-03 12:41:47
 * @LastEditors  : Pat
 * @LastEditTime : 2020-08-11 17:54:24
 */
import { moduleName } from "@/init/amb.js"
// const Layout = () => import("@/components/nav/index.vue")
const Home = () => import("@/page/home.vue")

export const constantRoutes = [

    {
        path: '*',
        component: () => import("@/page/test.vue"),
        meta: {
            name: "test"
        }
    }
    ,
    {
        path: '/home',
        component: () => import("@/page/home.vue"),
        meta: {
            name: "home"
        },
        props: 'abcd'
    }


]

// 动态路由配置
export const asyncRoutes = [{
    name: 'test',
    path: "/test",
    // component: Layout,
    //redirect: "noredirect",
    children: []
}]