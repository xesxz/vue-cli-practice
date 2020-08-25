/*
 * @Autor        : Pat
 * @Description  : 
 * @Email        : gouqingping@yahoo.com
 * @Date         : 2020-03-30 18:05:07
 * @LastEditors  : Pat
 * @LastEditTime : 2020-08-05 13:48:21
 */
// 导入自己需要的组件
import {
    Select,
    Option,
    OptionGroup,
    Input,
    Tree,
    Dialog,
    Row,
    Col,
    Table,
    TableColumn,
    Pagination,
    Button,
    Breadcrumb,
    BreadcrumbItem,
    Menu,
    MenuItem,
    Submenu
} from 'element-ui'
const element = {
    install(Vue) {
        Vue.use(Select)
        Vue.use(Option)
        Vue.use(OptionGroup)
        Vue.use(Input)
        Vue.use(Tree)
        Vue.use(Dialog)
        Vue.use(Row)
        Vue.use(Col)
        Vue.use(Table)
        Vue.use(TableColumn)
        Vue.use(Pagination)
        Vue.use(Button)
        Vue.use(Breadcrumb)
        Vue.use(BreadcrumbItem)
        Vue.use(Menu)
        Vue.use(MenuItem)
        Vue.use(Submenu)
    }
}
export default element