<template>
  <div class="container-fluid">
    <div class="center">
      <h4>Today Currency</h4>
    </div>
    <div class="row container-currency">
      <div class="chevron">
        <button class="btn">
          <i class="fa fa-chevron-left" />
        </button>
      </div>
      <div class="currencies">
        <transition-group name="fade" tag="div">
          <div style="display:inline-block;" v-for="curr in currencies" :key="curr.id">
            <rate-box :rate="curr"></rate-box>
          </div>
        </transition-group>
      </div>
      <div class="chevron">
        <button class="btn">
          <i class="fa fa-chevron-right" />
        </button>
      </div>
      <div class="fixer">
        <span>
          <i class="fa fa-globe" style="font-size:14px;" />
          <small>&nbsp;currencies rate from <a href="http://fixer.io">fixer.io</a></small>
        </span>
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
  import rateBox from 'src/components/Rates/RateCell.vue'

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
        'currencies'
      ])
    },
    mounted () {
      var currCount = 24

      switch (this.deviceType) {
        case 'mobile':
          currCount = 6
          break
        case 'small-device':
          currCount = 12
          break
        case 'medium-device':
          currCount = 18
          break
        default:
          currCount = 24
      }

      this.getCurrencies(currCount)
    }
  }
</script>
