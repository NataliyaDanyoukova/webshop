
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
app.use(router);
app.use(store);
//app.use(axios);

app.mount('#app');
