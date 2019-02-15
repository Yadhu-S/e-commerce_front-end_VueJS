<template>
<div class="container">
  <div class="row">
    <div class="col-lg-11 col-lg-offset-1 col-md-11 col-md-offset-1">
      <h6> Back to search results</h6>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 o" id="productView">
      <div id="prdCarousel">
        <l-carousel>
        </l-carousel>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { Slide } from 'vue-carousel-without-nav-changed'
import prdCarousel from './Helpers/Slides.vue'

export default {
  components: {
    'l-carousel': prdCarousel,
    Slide
  },
  computed: {
    adShops () {
      return this.$store.state.adShops
    }
  }
}
</script>


<style>
#productView, #prdCarousel{
  box-shadow: 2px 2px 10px 0px rgba(136, 136, 136, 0.52);
  min-height: 480px;
  background-color: white;
  border-radius: 20px
}
#prdCarousel{
  height: 456px;
    margin-top: 11px;
    width: 368px;
    min-height: 383px;
    padding: 29px;
}
.currentView{
  text-align: center;
}
/* .transition-duration: .1s; */

</style>

