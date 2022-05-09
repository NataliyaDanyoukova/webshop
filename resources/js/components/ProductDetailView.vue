<template>
    <div class="container mt-5 pt-3">


        <div class="container single_product_container" v-if="item">

            {{ this.item }}
            <div class="row gy-5">
                <div class="col-lg-7">

                    <div class="single_product_pics">
                        <div class="row">
                            <div class="col-lg-9 image_col order-lg-2 order-1">
                                <div class="single_product_image">
                                    <div class="single_product_image_background">
                                        <img :src="'/assets/'+item.image" alt="img">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="product_details">
                        <div class="product_details_title">
                            <h2>{{ item.product_name }}</h2>
                            <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis.
                                Pellentesque diam dolor, elementum etos lobortis des mollis ut...</p>
                        </div>

                        <div class="m-2">€{{ item.price }}</div>


                        <div class="row ">
                            <span class="col-3">Quantity:</span>
                            <div>
                                <span class="minus col-2" @click="decrement(item)"><i class="fa fa-minus"
                                                                                      aria-hidden="true"></i></span>
                                <span id="quantity_value" class="col">  {{ item.quantity }}</span>
                                <span class="plus col-2" @click="increment(item)"><i class="fa fa-plus"
                                                                                     aria-hidden="true"></i></span>
                            </div>
                            <!--                            <button class="col-4 ml-2">-->
                            <!--                                <add-to-cart-button></add-to-cart-button>-->
                            <!--                            </button>-->

                        </div>
                        <!--                        <button class="btn1 btn-outline-primary px-3">-->
                        <!--                            <add-to-cart-button :product="item"></add-to-cart-button>-->
                        <!--                        </button>-->
                        <div class="d-grid gap-3">
                            <button class="btn-close-white  col m-2 " :product="item" @click="addToCart"> Add to
                                cart
                            </button>
<!-- Modal to show that product is added to your cart -->
                            <modal
                                v-show="isModalVisible"
                                @close="closeModal">
                                <template v-slot:header>

                                </template>
                                <template v-slot:body>
                                    <img :src="'/assets/'+item.image"   alt="img">
                                    {{ item.product_name }} is added to your cart!
                                </template>
<!--                                <template v-slot:footer>-->

<!--                                </template>-->

                            </modal>
<!--                            -->
                            <router-link to="/">
                                <button class="btn-dark col-12 m-2 ">Back</button>
                            </router-link>

                            <router-link to="/cart">
                                <button class="btn-danger col-12 m-2">Shopping cart</button>
                            </router-link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
import productService from "../Services/productService";
import Cart from "./Cart";
import Modal from "./Modal"
import {mapActions} from "vuex";

export default {
    name: "ProductDetailView",
    components: {Cart, Modal},

    props: {
        product: ['product'],
        id: {
            type: String
        }

    },
    data() {
        return {
            isModalVisible: false,
            categories: [],
            products: [],
            item: null,


        }
    },
    created() {

        productService.getProduct(this.id)
            .then(response => {
                this.item = response.data

            })
    },
    methods: {

        closeModal() {
            this.isModalVisible = false;
        },

        increment(item) {
            this.$store.commit('INCREMENT_PRODUCT_QTY', item)
        },

        decrement(item) {
            this.$store.commit('DECREMENT_PRODUCT_QTY', item)
        },
        addToCart() {
            this.$store.commit('ADD_PRODUCT', this.item)
            this.isModalVisible = true;

        }

    }

}
</script>

<style scoped>

</style>
