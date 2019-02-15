<template>
    <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-3 shopDetails">
            <img id="shopLogo" class="center-block" src="../assets/dummyLogo.gif">
            <p id="shopHeading">Shop Name</p>
            <p id="shopLocation">Location - 1</p>
            <p class="minorDetails"><i class="fa fa-mobile" aria-hidden="true"></i> +91 4449998887</p>
            <p class="minorDetails"><i class="fa fa-phone" aria-hidden="true"></i> +4828 276540</p>
            <p class="minorDetails"><i class="fa fa-envelope" aria-hidden="true"></i> dellsolutions@gmail.com</p>
            <div class="center-block">
              <p style="display:inline; padding-left:10px;" class="minorDetails"><i class="fa fa-car" aria-hidden="true"></i> Parking</p>
              <p style="display:inline; padding-left:10px;" class="minorDetails"><i class="fa fa-car" aria-hidden="true"></i> Credit Card</p>
            </div>
          </div>

          <div class="col-lg-9 col-md-9 col-sm-9">
            <vue-tabs>
              <v-tab title="Products">
                
              </v-tab>

              <v-tab title="Top Viewed Products">
                
              </v-tab>

              <v-tab title="Message Seller">
                
              </v-tab>
              <v-tab title="Contact Info">
                
              </v-tab>
              <v-tab title="Achivements and Ratings">
                
              </v-tab>
          </vue-tabs>
          </div>
        </div>
    </div>
</template>

<script>
import {VueTabs, VTab} from './Helpers/vue-tabs.common'
import 'vue-nav-tabs/themes/vue-tabs.css'
// you can also import this in your style tag

// component code
export default{
  components: {
    VueTabs,
    VTab
  }
}
</script>


<style>
#shopLogo{
  border-radius: 100px;
  padding: 15px;
}
#shopHeading,#shopLocation{
      padding-top: 10px;
    font-size: 18px;
    font-weight: lighter;
    text-align: center;
}
#shopLocation{
  padding: 0px;
  font-size: 13px;
}
.shopDetails{
    box-shadow: 2px 2px 10px 0px rgba(136, 136, 136, 0.52);
    border-radius: 5px;
    min-height: 500px;
    background-color: white;
}
.minorDetails{
      text-align: center;
    font-size: 13px;
    font-weight: lighter;
}
.tab-content{
    padding: 10px;
    box-shadow: 2px 2px 10px 0px rgba(136, 136, 136, 0.52);
    min-height: 458px;
    background-color: white;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
}
.vue-tabs a {
    text-decoration: none;
    color: white;
    background-color: #455e74;
}
.vue-tabs .nav > li > a:hover, .vue-tabs .nav > li > a:focus {
    text-decoration: none;
    background-color: #455e74;
}
.vue-tabs .nav-tabs {
    border-bottom: none;
}
</style>
