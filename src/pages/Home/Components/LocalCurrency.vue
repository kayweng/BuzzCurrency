<template>
  <el-container direction="vertical" class="container-fluid">
    <el-row class="center">
      <h4>{{ $store.state.currency.currencyBasedCode }} Currency Data</h4>
    </el-row>
    <el-row class="container-currency">
      <div class="currencies center">
        <transition name="fade" tag="div" mode="out-in">
          <carousel v-if="baseCurrencyRates.length > 0">
            <slide v-for="(arr, i) in carouselPages" :key="i">
              <transition-group name="fade" tag="div">
                <div style="display:inline-block;" v-for="(rate, j) in arr" :key="j">
                  <small-note-card class="small-note-hover" :rate="rate"></small-note-card>
                </div>
              </transition-group>
              </slide>
          </carousel>
          <div class="center" v-if="baseCurrencyRates.length === 0">
            <v-loading loader='loadBaseCurrency'>
              <template slot='spinner'>
                <loading-spinner height='30px' width='30px' />
              </template>
            </v-loading>
          </div>
        </transition>
      </div>
    </el-row>
  </el-container>
</template>

<style scoped>
    
  .container-fluid{
    background-color: #F7F9F9;
  }

  .container-currency > div:not(.fixer) {
    display: inline-block;
    min-height: 300px;
  }

  .currencies{
    min-width: 100%;
    max-width: 100%;
    padding: 50px;
  }

</style>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { SmallNoteCard } from 'src/components/index'
  import { Carousel, Slide } from 'vue-carousel'
  import loadingSpinner from 'vuex-loading/src/spinners/spinner.vue'

  export default {
    components: {
      SmallNoteCard,
      Carousel,
      Slide,
      loadingSpinner
    },
    methods: {
      ...mapActions([
        'getBaseCurrencies'
      ])
    },
    computed: {
      ...mapGetters([
        'currencyBasedCode',
        'baseCurrencyRates'
      ]),
      carouselPages () {
        var count = 0
        var arr = []

        switch (this.deviceType) {
          case 'large-device':
            count = 16
            break
          case 'medium-device':
            count = 12
            break
          case 'small-device':
            count = 6
            break
          case 'mobile':
            count = 3
            break
        }
       
        var temp = JSON.parse(JSON.stringify(this.baseCurrencyRates))
     
        for (var i = 0; i < temp.length; i++) {
          var increament = i + 1
          var sliceArray = temp.slice(count * i, (count * (increament)))

          arr.push(sliceArray)
          
          if (count * (i === 0 ? 1 : increament) >= temp.length) {
            break
          }
        }
        return arr
      }
    },
    mounted () {
      this.$loading.startLoading('loadBaseCurrency')
      
      this.getBaseCurrencies().then(response => {
        this.$loading.endLoading('loadBaseCurrency')
      }, error => {
        console.log(error)
      })
    }
  }
</script>
