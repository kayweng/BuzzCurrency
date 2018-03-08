<template>
  <div class="container-fluid">
    <div class="center">
      <h4>Exchange Rates - {{ currency_data['base']}}</h4>
    </div>
    <div class="row container-currency">
      <div class="chevron">
        <button class="btn">
          <i class="fa fa-chevron-left" />
        </button>
      </div>
      <div class="currencies">
        <!-- <transition-group name="fade" tag="div">
          <div style="display:inline-block;" v-for="(rate, index) in currencyRates" :key="index">
            <rate-box :rate="rate"></rate-box>
          </div>
        </transition-group> -->
      </div>
      <div class="chevron">
        <button class="btn">
          <i class="fa fa-chevron-right" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
    
  h3 {
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: center;
  }

  .container-currency{
    background-color: #F7F9F9;
  }

  .container-currency > div:not(.fixer) {
    display: inline-block;
    min-height: 300px;
  }

  i{
    text-align: center;
    color: black;
    font-size: 20px;
  }

  .chevron{
    width: 10%;
    min-width:10px;
  }

  .chevron > button{
    width: 100%;
    height: 100%;
    border: 0px;
    background: transparent;
  }

  .currencies{
    min-width: 80%;
    max-width: 80%;
    padding: 10px;
    text-align: center;
  }

  .fixer{
    text-align: center;
    width: 100%;
    margin-right: 15px;
    min-height: 30px;
    max-height: 30px !important;
  }

  .fixer > span > small{
    vertical-align: middle;
    display: inline-block;
    line-height: normal;
  }

</style>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import rateBox from 'src/components/Cards/RateCard.vue'

  export default {
    components: {
      rateBox: rateBox
    },
    methods: {
      ...mapActions([
        'getCurrencies'
      ])
    },
    computed: {
      ...mapGetters([
        'currency_data',
        'currencyRates'
      ])
    },
    mounted () {
      this.getCurrencies()
    }
  }
</script>
