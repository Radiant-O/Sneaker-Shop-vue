<template> 
  <section class="product">
    <div class="product_img">
   
      <Slider />
      <div class="main_prod_img">
        <img src="@/assets/images/image-product-1.jpg" alt="" />
      </div>
      <div class="prod_img_type">
        <div v-for="image in images" :key="image.id" >
        <img :src="image.imageUrl" @click="toggleModal"/>
      </div>
      </div>
      
    </div>
    <div class="product_info">
      <div class="comp_tit">
        <h2>SNEAKER COMPANY</h2>
      </div>
      <div class="prod_info">
        <h4>
          {{item.name}}
        </h4>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div class="price_info">
        <div class="dis_price">
          <p>${{item.price}}</p>
          <span>50%</span>
        </div>
        <p class="norm_price">$250.00</p>
      </div>

      <div class="prod_selc">
        <div class="cart_selec">
          <div class="img">
            <img @click="sub" src="@/assets/icons/icon-minus.svg" alt="" />
          </div>

          <p>{{ itemNumber }}</p>
          <div class="img">
            <img @click="add" src="@/assets/icons/icon-plus.svg" alt="" />
          </div>
        </div>
        <div class="add_cart" @click="addToCart(item.name, itemNumber)">
          <img src="@/assets/icons/icon-cart.svg" alt="" />
          <h3>Add to cart</h3>
        </div>
      </div>
    </div>
  </section>
  <section class="footer">
    <div class="attribution">
      Challenge by
      <a
        class="cLink"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        >Frontend Mentor</a
      >. Coded by <a class="cLink" href="#">RadiantCodes</a>.
    </div>
  </section>


<ProductModal v-if="imageModal" :toggle="toggleModal"/>
</template>

<script>
import ProductModal from "@/views/ProductModal.vue";

import Slider from "@/components/Slider.vue";

//import sneakers from "@/sneakers.json"

export default {
  props: ["addToCart", "item", "index"],
  components: {
    ProductModal,
    Slider
  },
  data() {
    return {
      //goods: sneakers,
      cartItem: {},
      itemNumber: 0,
      imageModal: false,
      images: [
        {
          id: 1,
          imageUrl: require("../assets/images/image-product-1-thumbnail.jpg")
        },
        {
          id: 2,
          imageUrl: require("../assets/images/image-product-2-thumbnail.jpg")
        },
        {
          id: 3,
          imageUrl: require("../assets/images/image-product-3-thumbnail.jpg")
        },
        {
          id: 4,
          imageUrl: require("../assets/images/image-product-4-thumbnail.jpg")
        },
      ]
    };
  },
  methods:{
    add(){
    this.itemNumber++
  },
  sub(){
    this.itemNumber--
  },
  // updateCartItems(){
  //   console.log(this.itemNumber)
  // },
  toggleModal(){
    this.imageModal = !this.imageModal
  },
  // addToCart(){
  //     console.log(this.goods)
  //   }
  }
};
</script>

<style></style>
