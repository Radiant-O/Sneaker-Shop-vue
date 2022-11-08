<template>
  <section class="page_bg" @click="toggle"></section>

  <!-- <section class="prods_section">
    <div class="slide_prod">
      <div class="modal_close">
        <img src="@/assets/icons/icon-close.svg" alt="">
      </div>
      <div class="slides">
        <div class="dir prev">
          <img src="@/assets/icons/icon-previous.svg" alt="" />
        </div>
        <img  class="prod_img"  src="@/assets/images/image-product-1.jpg" alt="" />
        <div class="dir next">
          <img src="@/assets/icons/icon-next.svg" alt="" />
        </div>
      </div>
      <div class="img_thumbnails">
        <img src="@/assets/images/image-product-1.jpg" alt="" />
      </div>
    </div>
  </section> -->

  <section class="prods_section">
    <div class="slide_prod">
      <div class="modal_close" @click="toggle">
        <img src="@/assets/icons/icon-close.svg" alt="" />
      </div>

      <swiper
        class="parallax-slider slides"
        parallax
        :navigation="{ nextEl: '.next', prevEl: '.prev' }"
      >
        <div class="dir prev">
          <img src="@/assets/icons/icon-previous.svg" class="dir_img"/>
        </div>

        <swiper-slide v-for="image in images" :key="image.id">
          <img :src="image.imageUrl" class="prod_img" />
        </swiper-slide>
        <div class="dir next">
          <img src="@/assets/icons/icon-next.svg" class="dir_img" />
        </div>
      </swiper>
    </div>
  </section>
</template>

<script>
import SwiperCore, { Navigation, Parallax } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([Navigation, Parallax]);
export default {
  props:["toggle"],
  data() {
    return {
      parallaxSwiperWidth: 0,
      images: [
        {
          id: 1,
          imageUrl: require("../assets/images/image-product-1.jpg"),
        },
        {
          id: 2,
          imageUrl: require("../assets/images/image-product-2.jpg"),
        },
        {
          id: 3,
          imageUrl: require("../assets/images/image-product-3.jpg"),
        },
        {
          id: 4,
          imageUrl: require("../assets/images/image-product-4.jpg"),
        },
      ],
    };
  },
 
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style></style>
