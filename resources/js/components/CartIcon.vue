<template>
    <router-link :to="{name: 'cart'}" :authUser="authUser">
        <i class="fa fa-shopping-cart" aria-hidden="true">Cart</i>
<!--        <span id="checkout_items" class="checkout_items">{{ $store.state.cart.length }}</span>-->
        <span id="checkout_items" class="checkout_items">{{ cartQuantity }}</span>



    </router-link>
</template>

<script>
export default {
    name: "CartIcon",
    props:{
        authUser:['authUser']
    },
    computed: {
        counterCart() {
            return this.$store.getters['cart'].length;
            // return this.$store.getters.quantity;
        }
        ,
        cartQuantity() {
            return this.$store.state.cart.reduce((acc, item) => acc + item.quantity, 0);
        },
    }
}
</script>

<style scoped>

</style>
