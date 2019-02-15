<template>
<div>
  <carousel-vue :noOfSlides="3" :prevButStyle='mainCarouselPrevBut' :nextButStyle='mainCarouselNextBut'>
    <slide v-for="adShop in adShops" :key="adShop.id">
      <div class="col-lg-12 col-md-12 col-sm-12 sliderOuter">
        <div class="col-lg-5 col-md-5 col-sm-5 sliderInnterRect" >
          <h1 class="sliderInnerLetter" >{{(adShop.name.charAt(0)).toUpperCase()}}</h1>
        </div>
        <div class="col-lg-6 col-lg-offset-1 col-md-offset-1 col-md-6 col-sm-7 sliderInnerContent ">
          <h4 class="sliderInnerContentDetails">{{adShop.name}}</h4>
          <h4 class="sliderInnerContentDetailsLoc">{{adShop.location}}</h4>
          <h4 class="sliderInnerContentDetailsDis">{{adShop.distance}} Km Away from you</h4>
          <a class="sliderInnerViewShopButton" > View Shop </a>
        </div>
      </div>
    </slide>
  </carousel-vue>

  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-4">
        <div class='bottomOffers'>
          <h2 id='welco'>Welcome</h2>
          <h6 id='underWelco'>Sign in for best experience!</h6>
          <div class="row">
            <div class="col-md-offset-5 col-lg-offset-5 col-sm-offset-5">
              <a id='signInBut'> Sign in </a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-8 col-md-8">
        <div class='bottomOffers'>
          <h3 id="trend">Trending Products</h3>
          <div class="col-lg-offset-1 col-md-offset-2 col-sm-offset-1">
            <a id='viewBut'> Sign in </a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 bottomOffers">
        <div class="row">
          <div class="col-lg-2" style="text-align:center">
            <h3>Recently Viewed</h3>
            <p id="viewAllRecent" class="center-block">View All </p>
          </div>
          <div class="col-lg-10">
            <carousel-vue :containerEn="false" :noOfSlides="6" :bothButStyle='recentlyViewBothBut'>
              <slide v-for="adShop in adShops" :key="adShop.id">
                  <div class="recentView">
                    <i class="fa fa-picture-o fa-5x" aria-hidden="true"></i>
                  </div>
              </slide>
            </carousel-vue>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Carousel from './Helpers/Carousel.vue'
import { Slide } from 'vue-carousel-without-nav-changed'

export default {
  components: {
    'carousel-vue': Carousel,
    Slide
  },
  computed: {
    adShops () {
      return this.$store.state.adShops
    },
    // Settings for main carousel
    mainCarouselPrevBut () {
      return {
        backgroundColor: 'white',
        borderRadius: '30px',
        height: '40px',
        width: '40px',
        boxShadow: '2px 2px 10px 1px rgba(136, 136, 136, 0.52)',
        left: '-5px',
        paddingLeft: '11px',
        fontSize: '30px'
      }
    },
    mainCarouselNextBut () {
      return {
        backgroundColor: 'white',
        borderRadius: '30px',
        height: '40px',
        width: '40px',
        boxShadow: '2px 2px 10px 1px rgba(136, 136, 136, 0.52)',
        right: '0px',
        paddingLeft: '16px',
        fontSize: '30px'
      }
    },
    // End
    // Settings for Recently Viewed carousel
    recentlyViewBothBut () {
      return {
        position: 'absolute',
        top: '19%',
        boxSizing: 'border-box',
        color: '#000',
        textDecoration: 'none'
      }
    }
  }
}
</script>

<style>
#viewAllRecent{
  border-radius: 100px;
    background-color: royalblue;
    width: 125px;
    /* height: 30px; */
    padding: 6px;
    color: white;
}
#welco{
    text-align: center;
    color: green;
}
#underWelco{
    text-align: center;
    color: green;
    padding-bottom: 41px;
}
#signInBut{
    color: white;
    background-color: green;
    padding-top: 10px;
    border-radius: 27px;
    padding-bottom: 10px;
    padding-right: 25px;
    padding-left: 25px;
}
.bottomOffers {
    margin-bottom: 10px;
    background-color: white;
    border-radius: 10px;
    margin-top: 30px;
    padding-top: 10px;
    padding-bottom: 40px;
    box-shadow: 2px 2px 10px 0px rgba(136, 136, 136, 0.52);
}
#trend{
    color: royalblue;
    padding-top: 20px;
    padding-left: 45px;
    padding-bottom: 50px;
}
#viewBut{
    color: white;
    background-color: royalblue;
    padding-top: 10px;
    border-radius: 27px;
    padding-bottom: 10px;
    padding-right: 25px;
    padding-left: 25px;
}
</style>
