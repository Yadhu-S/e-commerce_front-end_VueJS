<template>
<div>
  <div id="fixNav">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 pull-right " style="color:#748c8d;">
                <ul class="list-inline">
                    <li class="list-inline-item mainLinks" >
                        Seller's Hub
                    </li>
                    <li v-if="!loggedIn" class="list-inline-item mainLinks" @click="signUp" >
                        Sign up
                    </li>
                    <li v-if="!loggedIn" class="list-inline-item mainLinks" @click="show">
                        Login
                    </li>
                    <li v-if="loggedIn" class="list-inline-item mainLinks">
                        <router-link :to="{path:'/user'}"> Hi {{userName}}! </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-2 col-md-2 col-md-offset-1 col-sm-3">
                <router-link @click.native="home" :to="{ name: 'home' }"><img  class="img-responsive" src="../assets/logo.png" id="logoTop" draggable="false"></router-link>
            </div>
            <div class="col-lg-6 col-md-7 col-sm-7">
            <!--Search Bar-->
                <form v-on:submit.prevent style="margin-top:8px;">
                    <div class="input-group search-bar">
                        <input v-model="searchInput" @keyup.enter="searchSubmit" type="text" placeholder="Search for anything..." class="form-control input-search">
                        <span class="input-group-btn">
                            <button @click="searchSubmit" class="btn btn-search" type="button"><i class="fa fa-search fa-lg" aria-hidden="true"></i>
                            </button>
                        </span>
                    </div>
                    <!-- /input-group -->
                </form>
            </div>
            <div class="col-lg-3 col-md-2 " style="margin-top:12px;">
                <a class="icons" ><i class="fa fa-sliders fa-2x fa-rotate-90" aria-hidden="true"></i></a>
                <a class="icons" ><i class="fa fa-2x fa-map-marker" aria-hidden="true"></i></a>
                <a class="icons" ><i class="fa fa-2x fa-comments" aria-hidden="true"></i></a>
            </div>
        </div>
    </div>
  </div>
  <div class="container-fluid">
        <div class="row " id="navBottomBar" >
            <div class="col-lg-12 col-md-12 col-sm-12">
                <a class="topList"  >Electronics</a>
                <a class="topList"  >Men</a>
                <a class="topList"  >Women</a>
                <a class="topList"  >Kids</a>
                <a class="topList"  >Furniture</a>
                <a class="topList"  >Books</a>
                <a class="topList"  >More</a>
            </div>
        </div>
    </div>
    <!-- Login Modal -->
    <modal name="loginSignup" height="400px" class="loginModal">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <img  class="img-responsive center-block modalIcon" src="../assets/logo.png" draggable="false">
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 customLogin">
            <transition name="fade" mode="out-in">
              <div v-if="showSignIn" key="signIN">
                <mat-input>
                  <input v-model="usnIp" slot="ipField" type="text" class="inputMat" required>
                  <label slot="label" class="labelMat">Username / Mobile Number</label>
                </mat-input>
                <mat-input>
                  <input slot="ipField" type="password" class="inputMat" required>
                  <label slot="label" class="labelMatPass center-block">Password</label>
                </mat-input>
                <p class="botButtonModal center-block">Sign in</p>
                <p id="botButtonModalSignUP" class="center-block" @click="showSignIn=!showSignIn">New User? Sign Up</p>
              </div>
              <div v-else key="signUP">
                <mat-input>
                  <input @click.once="mobFld" v-model="mobIp" slot="ipField" type="text" class="inputMat" required>
                  <label slot="label" class="labelMat">Your Mobile Number</label>
                </mat-input>
                <transition name="slide-fade" mode="out-in">
                  <mat-input v-if="validMob" key="valid" >
                    <input slot="ipField" type="text" class="inputMat" required>
                    <label slot="label" class="labelMatPass center-block">OTP</label>
                  </mat-input >
                  <div v-else class="dummyDiv" key="invalid">
                  </div>
                </transition>
                <p class="botButtonModal center-block" @click.once="sendOtpAndValidate">Continue</p>
                <p id="botButtonModalSignUP" class="center-block" @click="showSignIn=!showSignIn">Existing User? Sign In</p>
              </div>
            </transition>
            <div>
              <h6 class="loginFooter">By signing in you agree to 123 Find's Terms of Service, Privacy Policy and Conditions</h6>
            </div>
          </div>
        </div>
      </div>
    </modal>
</div>  
</template>

<script>
import 'vue-awesome/icons/sliders'
import 'vue-awesome/icons/map-marker'
import Icon from 'vue-awesome/components/Icon'
import MatInputBox from './Helpers/InputBoxMaterial.vue'
import { mapActions } from 'vuex'

export default{
  components: {
    'mat-input': MatInputBox,
    Icon
  },
  data () {
    return {
      usnIp: '',
      mobIp: '',
      searchInput: null,
      showSignIn: true,
      validMob: false,
      serverMsg: ''
    }
  },
  methods: {
    sendOtpAndValidate () {
      if (this.mobIp.length === 10) { // if user deleted the '+91'
        this.validMob = true
        this.mobIp = '+91' + this.mobIp
        this.postMobNum(this.mobIp) // Send to server
      } else if (this.mobIp.length === 13) {
        this.validMob = true
        this.postMobNum(this.mobIp) // Send to server
      } else {
        this.validMob = false
      }
    },
    searchSubmit: function () {
      console.log(this.searchInput)
      if (this.searchInput !== null) {
        this.$store.commit('searchInputUpdate', this.searchInput)
        this.$router.push({path: '/search', query: {srch: this.searchInput}})
      }
    },
    // Adds the +91 country code when clicked on the input field
    mobFld () {
      this.mobIp = '+91'
    },
    home () {
      this.searchInput = ''
    },
    topBar () {
      return this.$store.state.topOffers
    },
    show () {
      this.showSignIn = true
      this.$modal.show('loginSignup')
    },
    signUp () {
      this.showSignIn = false
      this.$modal.show('loginSignup')
    },
    hide () {
      this.$modal.hide('loginSignup')
    },
    ...mapActions([
      'getServMsg',
      'postMobNum'
    ])
  },
  computed: {
    loggedIn () {
      return false
    },
    userName  () {
      return 'Sam'
    },
    readServMsg () {
      if (this.serverMsg !== '') {
        return this.serverMsg
      } else {
        return 'Server Offline'
      }
    }
  },
  created: function () {
    this.getServMsg()
    this.$store.commit('searchInputUpdate', this.$route.query.srch) // Read query from link and update it to store
    this.searchInput = this.$store.state.searchInput // Read from store
  }
}

</script>

<style>
.dummyDiv{
  height: 67px;
}
/* transition animations */
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

.botButtonModal{
    width: 180px;
    border-radius: 5px;
    padding: 15px;
    color: white;
    background-color: #1E88E5;
    text-align: center;
    height: 50px;
    margin-top: 40px;
    cursor: pointer;
    box-shadow: 2px 2px 10px 0px rgba(136, 136, 136, 0.52);
}
#botButtonModalSignUP{
    width: 180px;
    border-radius: 5px;
    padding: 15px;
    color: #f46150;
    background-color: white;
    text-align: center;
    height: 50px;
    margin-top: 15px;
    cursor: pointer;
    box-shadow: 2px 2px 10px 0px rgba(136, 136, 136, 0.52);
}
.loginFooter{
  font-size: 11px;
  text-align: center;
  color: gray;
  margin-top: 35px;
}
    .modalIcon{
      margin-top: 59%;
      max-width: 180px;
    }
    .mainLinks {
      cursor: pointer;
    }
    .mainLinks:hover {
        color:#f46150;
    }
    .input-search {
        border-radius:2px;
        background-color: #fff;
        box-shadow: none;
        border: none;
        border-right: 1px solid #fff;
        padding-right: 32px;
    }

    .input-search:focus {
        box-shadow: none;
    }

    .input-group .form-control:first-child, .input-group-addon:first-child, .input-group-btn:first-child>.btn, .input-group-btn:first-child>.btn-group>.btn, .input-group-btn:first-child>.dropdown-toggle, .input-group-btn:last-child>.btn-group:not(:last-child)>.btn, .input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle) {
        border: 1px solid;
        border-color: #748c8d;
        border-radius: 22px;
    }

    .input-group-btn:last-child>.btn, .input-group-btn:last-child>.btn-group {
        z-index: 10;
        color: #748c8d;
        background-color: transparent;
    }

    .search-bar {
        width: 100%;
    }
    .search-bar .input-group-btn {
        position: absolute;
        font-size: 0;
        right: 35px;
    }

    .btn-search:hover,.btn-search:focus, .btn-search:active, .btn-search:visited {
    outline: none;
    color: #fff;
    width: 41px;
    border-bottom-right-radius: 40px;
    border-top-right-radius: 40px;
    /* box-shadow: none; */
    }
    .icons{
        color: #748c8d;
        margin-right:20px;
        cursor: pointer;
    }
    .icons:active{
      box-shadow: inset 2px 2px 10px 0px rgba(136, 136, 136, 0.52);
    }
    @media screen and (max-width:900px){
        .icons{
            padding-right: 10px;
        }
    }
    .fa-search:before {
        text-shadow: -1px 1px 3px #888888;
        font-size: 20px;
    }
    #logoTop{
            margin-top: -5px;
            padding-bottom: 2px;
            max-width: 150px;
    }
    .fa-sign-in:before {
        content: "\f090";
        font-size: 16px;
    }
    .topList{
        color: white;
        padding: 20px;
        padding-top: 7px;
        padding-bottom: 7px;
        text-decoration: none;
    }
    .topList:hover{
        cursor: pointer;
        border-radius: 17px;
        background-color: #f46150;
        color: white;
        text-decoration: none;
    }
    #navBottomBar{
        margin-bottom: 20px;
        text-align: center;
        background-color: #455e74;
        padding-top: 9px;
        padding-bottom: 7px;
        border-bottom-style: solid;
        border-bottom-color: #e2e2e2;
        border-bottom-width: 1px;
    }
    #fixNav {
        padding-bottom: 5px;
        position: relative;
        z-index: 20;
        width: 100%;
        background-color: white;
    }
    .nearShop{
        height: 350px;
        background-color: #f6a0a3;
        color: #fff;
    }
</style>

