<template>
  <div class="container-fluid">

    <div class="row">
      <div class="col-lg-3 col-lg-offset-1">
        <p style="font-size:13px">Showing 1-9 of {{filterOption.totalResults}} for "{{serchInputReturned}}"</p>
      </div>

      <div class="pull-right col-lg-1 col-lg-pull-2 col-md-1 col-md-pull-2">
        <div class="searchSettingsRight">
          <i v-html="iconShow"></i>
          <label>  Sort By :</label>
          <select id="sortBox"  v-model="filterOption.sortBy">
            <option v-for="sortOption in sortOptions" :key="sortOption.id" v-bind:value="sortOption.value">{{sortOption.text}}</option>
          </select>
          <i id="sortIcons">
            <i style="cursor: pointer" :class="{'active-button':showMoreViewList}" @click="showMoreViewList=true" class="fa fa-th-large fa-lg" ></i>
            <i style="cursor: pointer" :class="{'active-button':!showMoreViewList}" @click="showMoreViewList=false" class="fa fa-th fa-lg" ></i>
          </i>      
        </div>
      </div>
    </div>

    <div class="row" style="min-height:600px">
      <div class="col-lg-2 col-md-3 col-sm-3">
        <div class="searchSettingsLeft">
          <icon name="align-justify"></icon>
          <label> Category </label>
          <div v-for="cat in productList" :key="cat.id" class="checkboxCat">
            <label class="catLabel" :for="cat.id">{{cat.CatName}}</label>
            <input  type="radio"  :id="cat.id" :value="cat.CatVal"  v-model="srchPicked">
            <br>
          </div>
          <div style="margin-top: 30px;">
            <i class="fa fa-tags" aria-hidden="true"></i>
            <label id='PriceLable'>Price</label>
            <br>
            <input  class="priceNum" type="number" placeholder="Min" v-model="filterOption.minPriceUserSet">
            <i class="fa fa-long-arrow-right hideArrow" aria-hidden="true"></i>
            <input class="priceNum" type="number" placeholder="Max">
          </div>
          <div style="margin-top: 30px;">
            <i class="fa fa-globe" aria-hidden="true"></i>
            <label> Location </label><br>
            <select v-model="filterOption.selectedLoc" class="locationSelect">
              <option disabled value="">Select Your location</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
        </div>
      </div>
      <div class="col-lg-10 col-md-9 col-sm-9">
        <div class="row" >
          <div v-for="product in productList" :key="product.id">
            <router-link :to="{path:product.item+'/prd',params:{prdName:product.item}}" style="color:black">
              <div :class="{'col-lg-4 col-md-6 col-sm-6':showMoreViewList,'col-lg-3 col-md-4 col-sm-4':!showMoreViewList}" >
                <div class="row grow"  style="margin-top:20px;">
                  <div class="col-lg-5 col-md-5 col-sm-5 proDivImg">
                    <i class="fa fa-picture-o fa-5x" aria-hidden="true"></i>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6  proDesc">
                    <p class="prdName">{{product.item}}</p>
                    <p class="descPrd">Condition: {{product.condition}}</p>
                    <p style="font-weight:bold">Price: {{product.price}}</p>
                    <p class="descPrd">Sold By: {{product.SoldBy}}</p>
                    <p style="font-size:12px">{{product.Dist}} Km away from you </p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import 'vue-awesome/icons/th-large'
import 'vue-awesome/icons/th'
import 'vue-awesome/icons/align-justify'
import Icon from 'vue-awesome/components/Icon'

export default{
  components: {
    Icon
  },
  data () {
    return {
      filterOption: {
        sortBy: 'NF',
        minPriceUserSet: '',
        totalResults: '100', // This should be computed after retriving data from server
        selectedLoc: ''
      },
      noOfDispItems: '4',
      srchPicked: '',
      showMoreViewList: true,
      sortOptions: [{text: 'Nearest First', value: 'NF'}, {text: 'Lowest Price First', value: 'LF'}, {text: 'Highest Price First', value: 'HF'}, {text: 'Relavence', value: 'RE'}]
    }
  },
  computed: {
    iconShow () {
      switch (this.filterOption.sortBy) {
        case 'NF':
          return '<i class="fa fa-location-arrow" aria-hidden="true"></i>'
        case 'LF':
          return '<i class="fa fa-sort-amount-asc" aria-hidden="true"></i>'
        case 'HF':
          return '<i class="fa fa-sort-amount-desc" aria-hidden="true"></i>'
        case 'RE':
          return '<i class="fa fa-sort" aria-hidden="true"></i>'
      }
    },
    serchInputReturned () {
      return this.$store.state.searchInput
    },
    categories () {
      return this.$store.getters.getCat
    },
    logToConsole () {
      console.log(this.srchPicked)
    },
    productList () {
      return this.$store.getters.getPrdList
    }
  },
  methods: {
  },
  created: function () {
  }
}
</script>

<style scoped>
  .grow{  cursor: pointer;  }
  .grow:hover { transform: scale(1.02); }
  .grow:active{ transform: scale(0.99); }

  .descPrd{
    color: #858888;
    font-size: 13px
  }
  .prdName{
        padding-top: 7px;
  }
  .proDesc{
    box-shadow: 2px 2px 10px 0px rgba(136, 136, 136, 0.52);
    margin-top: 9px;
    height: 160px;
    background-color: white;
  }
  .proDivImg{
    box-shadow: 2px 2px 10px 0px rgba(136, 136, 136, 0.52);
    border-radius: 4px;
    padding-top: 45px;
    text-align: center;
    height: 176px;
    background-color: white;
    float: left;
    z-index: 1;
  }
  #sortIcons{
    padding-top:5px;
  }
  #sortBox{
    background-image: url(../assets/downSelect.png);
    background-repeat: no-repeat;
    background-size: 12px;
    background-position: 117px 2px;
    outline: none;
    -webkit-appearance: none;
    width: 136px;
    font-size: 12px;
    border-radius: 11px;
    padding-left: 8px;
    border: 1px solid;
  }
  .searchSettingsRight{
    white-space: nowrap;
    color: #455e74;
  }
  .active-button{
    color: #f46150;
    padding-bottom: 2px;
    border-bottom: 1px solid 
  }
  .searchSettingsLeft{
    border-right: solid 1px rgba(0,0,0,0.2);
    white-space: nowrap;
    color: #455e74;
  }
  .catLabel{
    margin-left: 17px;
    font-size: 13px;
    font-weight: normal;
  }
  .priceNum, .locationSelect {
    -webkit-appearance: none;
    outline: none;
    font-size: 12px;
    width: 75px;
    border-radius: 11px;
    padding-left: 8px;
    border: 1px solid;
  }
  .locationSelect{
    width: 150px;
    background-image: url(../assets/downSelect.png);
    background-repeat: no-repeat;
    background-size: 12px;
    background-position: 128px 2px;
  }
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button 
  { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
  }
 @media(max-width:854px){
   .hideArrow{
     display: none;
   }
    
  }
</style>
