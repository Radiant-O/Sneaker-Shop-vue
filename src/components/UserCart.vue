<template>
  <nav>
    <div class="user-cart">
      <span class="cart"
        ><span class="items_number">{{goodsTotal}}</span><img @click="togcart" style="width:25px" src="@/assets/icons/icon-cart.svg" alt=""
      /></span>
      <span class="avatar"
        ><img style="width:38px" src="@/assets/images/image-avatar.png" alt=""
      /></span>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["togcart", "goodsTotal"],

  data(){
    return{
      
    }
  },
  methods:{
    
  }
};
</script>

<style></style>
