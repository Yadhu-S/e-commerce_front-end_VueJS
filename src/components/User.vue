<template>
    <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-3 shopDetails">
            <img id="shopLogo" class="center-block" src="../assets/dummyLogo.gif">
            <p id="shopHeading">User</p>
            <p id="shopLocation">Location X</p>
            <p class="minorDetails"><i class="fa fa-mobile" aria-hidden="true"></i> +1 4449998887</p>
          </div>

          <div class="col-lg-9 col-md-9 col-sm-9" style="background-color:white">
            <vue-tabs :extraClass="true">
              <v-tab icon="fa fa-comments" title="Messages">
                
              </v-tab>

              <v-tab icon="fa fa-star" title="Wishlist">
                
              </v-tab>

              <v-tab icon="fa fa-bell" title="Notification">
                
              </v-tab>
              <v-tab icon="fa fa-address-book" title="Contacts">
                
              </v-tab>
              <v-tab icon="fa fa-cogs" title="Account Settings">
                <ul style="display:inline">
                    <li @click="arrowPos=88" class="accntOptions"> <i class="sideIcons fa fa-phone" aria-hidden="true" ></i> Change Phone Number </li>
                    <li @click="arrowPos=142"class="accntOptions"> <i class="sideIcons fa fa-key" aria-hidden="true"></i> Change Password </li>
                    <li @click="arrowPos=196"class="accntOptions"> <i class="sideIcons fa fa-envelope" aria-hidden="true"></i> Change E-Mail </li>
                    <li @click="arrowPos=250"class="accntOptions"> <i class="sideIcons fa fa-user-secret" aria-hidden="true"></i> Privacy Setting </li>
                    <li @click="arrowPos=304"class="accntOptions"> <i class="sideIcons fa fa-trash" aria-hidden="true"></i> Delete Account </li>    
                </ul>
                <div class="arrow-left" :style="`top:${arrowPos}px;`"></div>
                <div class="selectOptions">
                  
                </div>
              </v-tab>
          </vue-tabs>
          </div>
        </div>
    </div>
</template>

<script>
import {VueTabs, VTab} from './Helpers/vue-tabs.common'
import 'vue-nav-tabs/themes/vue-tabs.css'
import MatInputBox from './Helpers/InputBoxMaterial.vue'
// you can also import this in your style tag

// component code
export default{
  components: {
    'mat-input': MatInputBox,
    VueTabs,
    VTab
  },
  data () {
    return {
      arrowPos: null
    }
  }
}
</script>


<style>
.arrow-left {
    transition: .5s;
    left: 267px;
    top: 88px;
    position: absolute;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 10px solid #a0a0a0;
}
.selectOptions {
    left: 277px;
    top: 76px;
    height: 260px;
    position: absolute;
    width: 300px;
    background-color: rgba(136, 136, 136, 0.8);
    border-radius: 3px;
}
.sideIcons{
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    box-shadow: 0px 0px 4px 1px rgba(136, 136, 136, 0.52);
    font-size: 20px;
    width: 36px;
    padding: 9px;
    position: relative;
    background-color: #f5f4f4;
    color: #476074;
    height: 40px;
}
.accntOptions {
    font-size: 12px;
    border-radius: 6px;
    margin-top: 15px;
    list-style-type: none;
    background-color: #465f74;
    color: white;
    width: 240px;
}
.accntOptions:hover {
    box-shadow: 0px 0px 4px 1px rgba(136, 136, 136, 0.52);
}
.accntOptions:active {
    box-shadow: inset -2px 2px 3px 2px #333333c2;
}
.vue-tabs .nav-tabs-navigation {
    text-align: center;
    border-bottom: 1px solid #F1EAE0;
    margin-bottom: 0px;
}
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
.shopDetails {
    z-index: 1;
    min-height: 500px;
    background-color: white;
    box-shadow: 0px 0px 11px 0px rgba(136, 136, 136, 0.52);
}
.minorDetails{
      text-align: center;
    font-size: 13px;
    font-weight: lighter;
}
.tab-content{
    min-height: 453px;
    background-color: white;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
}
.extra-Tab .nav-tabs > li.active > a, .extra-Tab .nav-tabs > li.active > a:hover, .extra-Tab .nav-tabs > li.active > a:focus {
    color: #23527c;
    background-color: #fff;
    border-top: none;
    border-bottom: 2px solid;
    border-bottom-color: rgba(244, 97, 80, 0.85);
    border-right: none;
    border-left: none;
    cursor: default;
}
.extra-Tab .nav-tabs > li > a {
    color: #455e74;
    border-radius: 0px;
    border: none;
}
</style>
