<template>
  <section class="all">
    <header class="header">
      <div class="menu_icon" @click="menuBar">
        <img src="@/assets/icons/icon-menu.svg" alt="" />
      </div>
      <div class="navlog">
        <!-- Logo -->
        <div class="">
          <img src="./assets/icons/logo.svg" alt="" />
        </div>
        <!-- NAvBar -->
        <Navbar :menu="menu" />
      </div>

      <!-- Cart and UserAvartar -->
      <UserCart :togcart="toggleCart" :goodsTotal="goodsTotal" />
    </header>
    <section class="body">
      <Product
        v-for="(item, index) in goods"
        :index="index"
        :item="item"
        :key="item.id"
        :addToCart="addToCart"/>
    </section>
  </section>

  <Cart v-if="cart" :goods="goods" :cartItem="cartItem" :remove="removeItem"/>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import UserCart from "./components/UserCart.vue";
import Product from "./views/Product.vue";
import Cart from "./components/cart.vue";

//Product Json
import sneakers from "@/sneakers.json";

export default {
  components: {
    Navbar,
    UserCart,
    Product,
    Cart,
  },

  data() {
    return {
      cart: false,
      menu: false,
      goods: sneakers,
      cartItem: {}
      //itemNumber: 0,
    };
  },
  computed: {
    goodsTotal() {
      return Object.values(this.cartItem).reduce((acc, curr) => {
        return acc + curr;
      }, 0);
    },
  },
  methods: {
    toggleCart() {
      this.cart = !this.cart;
    },
    menuBar() {
      this.menu = !this.menu;
    },
    addToCart(name, quantity) {
      if (!this.cartItem[name]) this.cartItem[name] = 0;
      this.cartItem[name] += quantity;
      this.itemNumber = 0;
    },
    removeItem(name) {
      delete this.cartItem[name];
    },
  },
};
</script>

<style></style>
