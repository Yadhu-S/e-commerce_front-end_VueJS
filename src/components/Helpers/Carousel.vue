<template>
<div :class="{container: containerEn}">
  <div class="row">
      <div class="col-lg-12">
          <carousel 
            :perPage="noOfSlides" :navigationEnabled="true" :paginationEnabled="false" 
            :scrollPerPage="fullPage" :navigationClickTargetSize="10" 
            :navigationNextLabel="nextLabel"
            :navigationPrevLabel="prevLabel"
            :nextButtonCss="nextButStyle" :prevButtonCss="prevButStyle" :bothButtonCss="bothButStyle"
            :secondary="secondaryView"
          >
            <slide slot="secondary"  v-for="adShop in adShops" :key="adShop.id">
              <div class="singImg">
                <i class="fa fa-picture-o fa-5x" aria-hidden="true"></i>
              </div>
            </slide>
            <slot></slot>    
          </carousel>
      </div>
  </div>
</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel-without-nav-changed'
import 'vue-awesome/icons/angle-left'
import Icon from 'vue-awesome/components/Icon'

export default{
  components: {
    Carousel,
    Icon,
    Slide
  },
  computed: {
    adShops () {
      return this.$store.state.adShops
    }
  },
  data () {
    return {
      primary: 'primary'
    }
  },
  props: {
    fullPage: {
      type: Boolean,
      default: true
    },
    secondaryView: {
      type: Boolean,
      default: false
    },
    noOfSlides: {
      type: Number,
      default: 3
    },
    nextLabel: {
      type: String,
      default: '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    },
    prevLabel: {
      type: String,
      default: "<i class='fa fa-angle-left' aria-hidden='true'></i>"
    },
    prevButStyle: {
      type: Object,
      default: function () {
        return {
          borderRadius: '30px',
          height: '40px',
          width: '40px',
          left: '-20px',
          paddingLeft: '11px',
          fontSize: '69px'
        }
      }
    },
    nextButStyle: {
      type: Object,
      default: function () {
        return {
          borderRadius: '30px',
          height: '40px',
          width: '40px',
          right: '-4px',
          paddingLeft: '11px',
          fontSize: '69px'
        }
      }
    },
    bothButStyle: {
      type: Object,
      default: function () {
        return {
          position: 'absolute',
          top: '40%',
          boxSizing: 'border-box',
          color: '#000',
          textDecoration: 'none'
        }
      }
    },
    containerEn: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
/* classes are decalred on the page where carousel is called */
/*for main carousel*/
.sliderInnterRect {
    /* top: 30px; */
    /* left: 10px; */
    min-height: 135px;
    margin-top: 45px;
    border-radius: 77px;
    background-color: #ffffff;
    box-shadow: inset 0px 0px 1px 1px rgba(136, 136, 136, 0.52);
}
.sliderInnerLetter {
    font-size: 97px;
    /* margin-top: 50px; */
    /* padding-bottom: 50px; */
    color: #455e74;
    text-align: center;
}
.sliderOuter {
    height: 230px;
    margin-top: 11px;
    width: 96%;
    border-radius: 9px;
    margin-left: 1%;
    box-shadow: 2px 2px 10px 0px rgba(136, 136, 136, 0.52);;
    background-color: white;
    margin-bottom: 35px;
}
.sliderInnerContent{
    text-align: center;
}
.sliderInnerContentDetails,.sliderInnerContentDetailsLoc,.sliderInnerContentDetailsDis{
     font-size: 13px;
        color: #455e74;
    padding-top: 33px;
    padding-bottom: 33px;
}
.sliderInnerContentDetailsLoc{
    padding: 0px;
}
.sliderInnerContentDetailsDis{
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 36px;
    padding-left: 0px;
}
.sliderInnerViewShopButton{
    box-shadow: 2px 2px 10px 0px rgba(136, 136, 136, 0.52);
    
    background-color: #f46150;
    color: white;
    padding-top: 7px;
    padding-bottom: 7px;
    padding-right: 20px;
    padding-left: 24px;
    border-radius: 24px
}
.sliderInnerViewShopButton:hover{
    text-decoration: none;
}
@media (max-width:1199px) {
    .sliderInnerLetter {
    font-size: 75px;
    }
    .sliderInnerContentDetails{
    padding-top: 20px;
    padding-bottom: 20px;
    }
    .sliderInnterRect {
    min-height: 111px;
}
}
@media(max-width:992px){
    .sliderInnerLetter{
        padding-top:0px;
        font-size:55px;
    }
    .sliderInnerContent{
        padding: 5px;
    }
    .sliderInnterRect {
        top: 25px;
        left: 3px;
    }
}
/*for recently viewed carousel*/
.recentView{
    border-radius: 100px;
    padding-left: 38px;
    height: 137px;
    padding-top: 40px;
}

/*for single product view*/
.singImg{

}
</style>
