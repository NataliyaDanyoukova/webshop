import {createRouter, createWebHashHistory} from 'vue-router'
import ProductView from "../components/ProductView";
import Checkout from "../components/Checkout";
import Cart from "../components/Cart";


const routes = [

    {
        path: '/',
        name: 'all',
        component: ProductView
    },

    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },


    // {
    //     path: '/categories',
    //     name: 'test',
    //     component: ProdCatSubcat,
    //     props: true,
    //
    // },

    {
        path: '/products/:id',
        name: 'details',
        component: () => import(/* webpackChunkName: "details" */ '../components/ProductDetailView'),
        props: true
    }



]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
