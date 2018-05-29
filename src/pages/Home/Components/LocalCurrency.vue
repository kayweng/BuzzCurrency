<template>
  <el-container direction="vertical" class="container-fluid">
    <el-row class="center">
      <h4>{{ $store.state.currency.currencyBasedCode }} Currency Data</h4>
    </el-row>
    <el-row class="container-currency">
      <div class="currencies center">
        <transition name="fade" tag="div" mode="out-in">
          <el-carousel v-if="baseCurrencyRates.length > 0">
            <el-carousel-item v-for="(arr, i) in carouselPages" :key="i">
              <div style="display:inline-block;" v-for="(rate, j) in arr" :key="j">
                <small-note-card class="small-note-hover" :rate="rate"></small-note-card>
              </div>
            </el-carousel-item>
            </el-carousel>
          <div class="center" v-else>
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
    background-color: #E5E8E8;
  }

  .container-currency > div:not(.fixer) {
    display: inline-block;
    min-height: 300px;
  }

  .currencies{
    min-width: 100%;
    max-width: 100%;
    padding: 25px;
  }

</style>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { SmallNoteCard } from 'src/components/index'
  import loadingSpinner from 'vuex-loading/src/spinners/spinner.vue'

  export default {
    components: {
      SmallNoteCard,
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
            count = 21  // 7*3
            break
          case 'medium-device':
            count = 15 // 5*3
            break
          case 'small-device':
            count = 9 // 3*3
            break
          case 'mobile':
            count = 6 // 2*3
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
        throw new Error(error)
      })
    }
  }
</script>
