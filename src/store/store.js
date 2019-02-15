import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    adShops: [
      {name: 'Test - Shop', distance: 14, location: 'Location'},
      {name: 'Test - Shop', distance: 17, location: 'Location'},
      {name: 'Test - Shop', distance: 13, location: 'Location'},
      {name: 'Test - Shop', distance: 18, location: 'Location'},
      {name: 'Test - Shop', distance: 20, location: 'Location'},
      {name: 'Test - Shop', distance: 20, location: 'Location'},
      {name: 'Test - Shop', distance: 18, location: 'Location'}
    ],
    productList: [
      {item: 'Cannon 1300D', condition: 'New', price: '40000', SoldBy: 'Cannon', Place: 'KTm', Dist: '48km', CatName: 'Cameras', CatVal: 'CAM'},
      {item: 'Zenfone 6', condition: 'Old', price: '888', SoldBy: 'Asus ', Place: 'Ktm', Dist: '45km', CatName: 'Mobile Phones', CatVal: 'MOB'},
      {item: 'One Plus 1', condition: 'New', price: '10000', SoldBy: 'Sam\'s mob', Place: 'Mdkm', Dist: '9km', CatName: 'Mobile Phones', CatVal: 'MOB'}
    ],
    topOffers: ['Electronics', 'Fashion', 'Groceries', 'Health', 'Books & Music', 'House Hold', 'Real Estate', 'Automobile', 'Pets', 'Services'],
    searchInput: '',
    srchCategory: [{text: 'Mobile Phones', value: 'MP'}, {text: 'Accessories', value: 'AC'}, {text: 'Dealers', value: 'Dl'}],
    serverMsg: ''
  },
  mutations: {
    searchInputUpdate (state, payload) {
      state.searchInput = payload
    },
    updateServMsg (state, payload) {
      state.serverMsg = payload
    }
  },
  actions: {
    getServMsg (context) {
      axios.get('http://192.168.100.5:8000')
      .then(response => {
        let payload = response.data
        context.commit('updateServMsg', payload)
      })
      .catch(e => {
        console.log('Server not found')
      })
    },
    postMobNum: (context, payload) => {
      console.log(payload)
      axios.post('http://192.168.100.5:8000/signup/mob', {
        MobNum: payload
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  },
  getters: {
    getCat: state => {
      return state.srchCategory
    },
    getPrdList: state => {
      return state.productList
    }
  }
})
