<template>
  <swiper
    class="parallax-slider small"
    parallax
    :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
  >
    <div class="parralax-slider-navigation">
        <div class="small_dir">
            <img
        class="small_prev prevArrow arrow"
        src="@/assets/icons/icon-previous.svg"
        alt=""
      />
        
      <img
        class="small_next nextArrow arrow"
        src="@/assets/icons/icon-next.svg"
        alt=""
      />
      </div>
      
    </div>
    <swiper-slide v-for="image in images" :key="image.id">
      <img :src="image.imageUrl" class="mobileimg" />
    </swiper-slide>
  </swiper>
</template>
<!-- <div class="prod_img_type" v-for="image in images" :key="image.id">
    <img :src="image.imageUrl"/>
    
  </div> -->

<script>
import SwiperCore, { Navigation, Parallax } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([Navigation, Parallax]);

export default {
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
