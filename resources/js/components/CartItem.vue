<template>
    <div class="container mt-5 pt-1 border">
        <div class="row m-1">
            <img :src="'/assets/'+product.image" alt="" class="product-image col-2 ">
            <h5 class="product-name col-4 d-flex align-items-center ">{{ product.product_name }}</h5>


            <div class="d-flex align-items-center">
                <span class="minus col" @click="decrement(product)"><i class="fa fa-minus"></i></span>
                <span class="col-1 ">
                            {{ product.quantity }}
                        </span>
                <span class="plus col" @click="increment(product)"><i class="fa fa-plus"></i></span>
            </div>
            <span class=" col d-flex align-items-center ml-5" @click="removeItemFromCart(product)"><i class="fa fa-trash-o"></i></span>

            <span class="product-price col d-flex align-items-center ml-5"> €{{ product.price }} </span>
            <span
                class="product-price col d-flex align-items-center ml-5 "> €{{
                    totalPrice(product.price)
                }} </span>
        </div>


    </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Modal from "./Modal";

export default {
    name: "CartItem",
    components: {Modal},
    props: ['product'],

    data() {
        return {


        }
    },
    computed: {

        ...mapGetters([
             'getProductsInCart',


        ]),


    },
    methods: {
        ...mapActions([
            'removeProduct',
            'updateCart'

        ]),


        increment(item) {
            this.$store.commit('INCREMENT_PRODUCT_QTY', item)
        },

        decrement(item) {
            this.$store.commit('DECREMENT_PRODUCT_QTY', item)
        },

        remove(index) {
            this.removeProduct(index);
        }
        ,
        removeItemFromCart(item){
            this.$store.commit('REMOVE_PRODUCT', item )
        },

        totalPrice(price) {

            return this.product.quantity * price

        }
        ,
        // hasProduct() {
        //     return this.getProductsInCart;
        // }
    }
}
</script>

<style scoped>

</style>
