<template>
    <!--            <div v-if="!hasProduct()" class="checkout-message">-->
    <!--                <h3>No products in cart...</h3>-->
    <!--            </div>-->
    <div class="row m-3 ">
        <div class="col-xl-10  mt-5">

            <div v-for="product in getProductsInCart" :key="product" class="checkout-product ">
                <cart-item :product="product"></cart-item>

            </div>

        </div>
        <!--        <div v-if="!hasProduct" class="checkout-message">-->
        <!--            <h3>No products...</h3>-->
        <!--            &lt;!&ndash;            <router-link to="./">Back to list of products</router-link>&ndash;&gt;-->
        <!--        </div>-->
        <!--                <h3 class="total" v-if="hasProduct">-->
        <!--                    Total: {{ totalPrice }}-->
        <!--                </h3>-->
    </div>

    <div class="row">
        <div class="col-11 d-flex justify-content-end">
            <div class="col-6 m-3 ">
                <div class="row p-2 d-flex justify-content-end">
                    <span class="col">Total </span>
                    <span class="total_cart col"> {{ cartTotal }} </span>

                </div>
                <div class="row p-2">
                    <span class="BTW_on_total col"> VAT 21%  </span>
                    <span class="total col"> {{ vatAmount }} </span>

                </div>
                <div class="row p-2">
                    <span class="Total_with_BTW col"> Total  </span>
                    <span class="total col"> {{ totalWithVat }} </span>

                </div>
            </div>
            <router-link to="/checkout">
                <button class="btn-danger col-12 m-2">Checkout</button>
            </router-link>
        </div>
    </div>

    <!--    _____________________-->


</template>


<script>
import {mapGetters} from 'vuex';
import Checkout from './Checkout'

export default {
    name: "Cart.vue",
    components: {Checkout},

    props: ['product'],

    computed: {

        ...mapGetters([
            'getProductsInCart',

        ]),
        vatAmount() {
            let total = this.$store.getters.cartTotal
            return (total * 21 / 100).toFixed(2)
        },
        totalWithVat() {
            let total = parseFloat(this.$store.getters.cartTotal)
            let vat = parseFloat(this.vatAmount)
            return (vat + total).toFixed(2)

        },
        cartTotal() {
            let amount = this.$store.state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
            //amount = (amount / 100);
            return amount.toLocaleString('EUR', {style: 'currency', currency: 'EUR'});
        }
    },
    methods: {}


}
</script>

<style scoped>

</style>
