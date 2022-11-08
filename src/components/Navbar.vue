<template>
  <nav class="navopt ">
    <a href="#">Collections</a>
    <a href="#">Men</a>
    <a href="#">Women</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>

  <!-- Mobile NavMenu -->
  
  <div class="navbar" v-if="menu">
    <nav class="mobile_nav">
      <img class="nav_close" @click="menu=!menu" src="@/assets/icons/icon-close.svg" alt="">
    <a href="#">Collections</a>
    <a href="#">Men</a>
    <a href="#">Women</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
  </div>
 
</template>

<script>
export default {
  props: ["menu"],
  data(){
    return{
      closeMenu : false,
    }
  }
};
</script>

<style></style>
