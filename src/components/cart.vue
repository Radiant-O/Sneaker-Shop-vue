<template>
  <teleport to="body">
    <section class="cart_box">
      <div class="cart_head">
        <p>Cart</p>
      </div>

      <div class="cart_body" v-for="(itemNumber, key, i) in cartItem" :key="i">
        <img src="@/assets/images/image-product-1-thumbnail.jpg" />
        <div class="cart_item">
          <p class="item_name">{{ key }}</p>
          <p class="item_amount">
            ${{getPrice(key)}}x{{itemNumber}} <span class="item_total">{{ (itemNumber * getPrice(key)).toFixed(2) }}</span>
          </p>
        </div>
        <div @click="remove(key)" class="cart_remove">
          <img src="@/assets/icons/icon-delete.svg" alt="" />
        </div>
      </div>

      <p class="empty_cart" v-if="!Object.keys(cartItem).length">
        <em>Your Cart is Empty</em>
      </p>
      
      <div class="check">
        <div class="cart_check">
          <p>Checkout</p>
        </div>
      </div>

      
    </section>
  </teleport>
</template>

<script>
export default {
  props: ["goods", "cartItem", "remove"],
  data() {
    return {
      
    };
  },
  methods:{
    getPrice(itemName){
      const productName = this.goods.find((price) => {
        return price.name === itemName;
      })
      return productName.price;
    },

  }
};
</script>

<style></style>
