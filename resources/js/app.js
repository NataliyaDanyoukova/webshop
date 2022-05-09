import Cart from "./components/Cart";

require('./bootstrap');


import {createApp} from 'vue';
import LoginForm from "./components/LoginForm";
import FooterView from "./components/FooterView";
import HeaderComponent from "./components/HeaderComponent";
import ProductCard from "./components/ProductCard";
import ProductView from "./components/ProductView";
import router from "./router/router";
import store from "./store/index";
import testComponent from "./components/testComponent";
import CartIcon from "./components/CartIcon";
import Checkout from "./components/Checkout";
import CartItem from "./components/CartItem";




/*

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
*/

const app = createApp({});

app.component('LoginForm', LoginForm);
app.component('FooterView', FooterView);
app.component('HeaderComponent', HeaderComponent);
app.component('testComponent', testComponent);
app.component('ProductCard', ProductCard);
app.component('ProductView', ProductView)
app.component('Cart', Cart)
app.component('CartItem', CartItem)
app.component('CartIcon', CartIcon)
app.component('Checkout', Checkout)
app.use(router);
app.use(store);
//app.use(axios);

app.mount('#app');
