<template>
    <router-link to="/cart" >
        <i class="fa fa-shopping-cart" aria-hidden="true">Cart</i>
        <span id="checkout_items" class="checkout_items">{{ counterCart }}</span>
    </router-link>
</template>

<script>
export default {
    name: "CartIcon",
    computed: {
        counterCart() {
            return this.$store.getters['cart'].length;
            // return this.$store.getters.quantity;
        }
    }
}
</script>

<style scoped>

</style>
