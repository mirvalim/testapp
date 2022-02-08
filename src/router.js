import Vue from "vue";
import VueRouter from "vue-router";
import MyProducts from "./page/MyProducts";


Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:"/myproducts",
            component:MyProducts
        }
    ]
})
