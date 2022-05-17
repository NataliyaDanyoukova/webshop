import {createStore, mapGetters} from 'vuex'
import axios from 'axios'
import {runInContext as apiClient} from "lodash";

// function updateLocalStorage(cart) {
//     localStorage.setItem('cart', JSON.stringify(cart))
// }

export default createStore({
    state: {

        user: false,
        authenticated: false,
        products: [],
        cart: [],
        order: [],

        total: 0,
        quantity: 0,

        apiClient: axios.create({
            baseURL: 'http://localhost:8000',
            withCredentials: false,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
    },
    mutations: {
        updateUser(state, data) {
            state.user = data
        },

        /*authentication*/
        SET_AUTHENTICATED(state, value) {
            state.authenticated = value;
        },
        SET_USER(state, value) {
            state.user = value;
        },

        /*cart*/
        INCREMENT_PRODUCT_QTY(state, product) {
            let item = state.cart.find(i => i.id === product.id)
            item.quantity++

            // console.log(item.quantity)
        },
        DECREMENT_PRODUCT_QTY(state, product) {
            let item = state.cart.find(i => i.id === product.id)

            if (item.quantity === 0) {
                alert('There are no more products')
                return item.quantity = 0
            } else {
                item.quantity--

            }
        },
        GET_QUANTITY: (state, qty) => {
            state.quantity = qty
        },

        ADD_PRODUCT: (state, product) => {
            // check if product exist in cart
            let item = state.cart.find(i => i.id === product.id)
            if (item) {
                product.quantity++

            } else {
                product.quantity = 1
                state.cart.push(product)
            }

            // product.quantity = 1
            // state.cart.push(product);
        },
        REMOVE_PRODUCT: (state, product) => {
            // state.cart.splice(index, 1); => find product by id to delete correct product otherwise you delete wrong product(by index)
            let item = state.cart.find(i => i.id === product.id)

            if (item.quantity > 1) {
                item.quantity--
            } else {
                state.cart.splice(state.cart.indexOf(item), 1);
            }

        },
        UPDATE_PRODUCT_ITEMS(state, payload) {
            state.products = payload
        },
        UPDATE_CART(state, cart) {
            state.cart = cart;
        },
        UPDATE_ORDER(state, order) {
            state.order = order;
        },


    },

    actions: {
        async Login2() {
            try {
                await axios.get('/sanctum/csrf-cookie')

                await axios.post('/login', this.form)
                    .then(response => {
                        this.getUser()
                        // console.log(response.data)
                    })

            } catch (error) {
                this.errors = error.response.data.errors
            }
        },
        getUser() {
            axios.get('/api/user').then(response => {
                this.user = response.data

                console.log(this.user)
            })
        },


        /*authentication */
        // getUser({commit}) {
        //     return axios
        //         .get("/api/user")
        //         .then(({data}) => {
        //             commit("SET_USER", data);
        //             commit("SET_AUTHENTICATED", true);
        //             return data;
        //         })
        //         .catch(({response: {data}}) => {
        //             commit("SET_USER", {});
        //             commit("SET_AUTHENTICATED", false);
        //             return data;
        //         });
        // },
        logout({commit}) {
            return axios.get("/logout").then(() => {
                commit("SET_USER", {});
                commit("SET_AUTHENTICATED", false);
            });
        },

        /*cart actions*/
        getQuantity(context, product) {
            context.commit('GET_QUANTITY', product);
        },
        addProduct(context, product) {
            context.commit('ADD_PRODUCT', product);

        },
        // currentProduct: (context, product) => {
        //     context.commit('CURRENT_PRODUCT', product);
        // },
        removeProduct: (context, index) => {
            context.commit('REMOVE_PRODUCT', index);
        },

        addToCart(context) {
            context.commit('ADD_TO_CART')
        },
        clearCart({commit}) {
            commit('UPDATE_CART', []);
        }

    },


    getters: {
        /*authentication*/
        getAuthenticated(state) {
            return state.authenticated;
        },
        authenticated: state => state.user !== null,
        getUser(state) {
            return state.user;
        },

        /*cart functionality*/
        cartTotal(state) {
            let total = state.total
            state.cart.forEach(item => total += item.price * item.quantity)
            return total
        },
        cartVAT(state) {
            let total = state.total
            return total
        },

        // getCurrentProduct(state) {
        //     return state.currentProduct
        // },
        getProductsInCart(state) {
            return state.cart
        },

        quantity(state) {
            return state.quantity;
        },
        cart(state) {
            return state.cart;
        }
    }
})


