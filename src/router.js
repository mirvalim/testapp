import Vue from "vue";
import VueRouter from "vue-router";
import MyProducts from "./page/MyProducts";
import Home from "./components/Home";


Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:"/",
            component:Home,
            redirect:"/myproducts",
            children:[
                {
                    path:"/myproducts",
                    component:MyProducts
                }
            ]
        }

    ]
})
