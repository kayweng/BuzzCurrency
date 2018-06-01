<template>
  <fade-render-transition>
    <el-container direction="vertical" class="container-fluid center">
      <el-row>
        <h4><i class="fa fa-calculator" />&nbsp;&nbsp;Currency Converter</h4>
      </el-row>
      <el-row class="row">
        <el-col :lg="6" :md="6" :sm="2" :xs="2" ></el-col>
        <el-col :lg="12" :md="12" :sm="20" :xs="20">
          <card class="card-form center">
            <el-container direction="vertical">
              <!-- Amount -->
              <el-row>
                <el-col :sm="11" :xs="8">
                  <fg-input type="number"
                            name="from amount"
                            label="From Amount"
                            placeholder= "0.00"
                            :maxLength="20"
                            @blur="$v.model.frAmount.$touch()"
                            :class="{'input-error': $v.model.frAmount.$error }"
                            v-model="model.frAmount">
                  </fg-input>
                </el-col>
                <el-col :sm="2" :xs="6">&nbsp;</el-col>
                <el-col :sm="11" :xs="8">
                  <fg-input type="number"
                            name="to amount"
                            label="To Amount"
                            placeholder= "0.00"
                            :maxLength="20"
                            readonly
                            :class="{'border-green': model.toAmount !== null}"
                            v-model="model.toAmount">
                  </fg-input>
                </el-col>
              </el-row>
              <!-- Currency Code -->
              <el-row>
                <el-col :sm="11" :xs="8" :class="{'input-error': $v.model.frCurrency.$error }">
                  <currency-select  class="select-default element-fluid" 
                                    v-model="model.frCurrency"
                                    @changed="model.frCurrency = $event" ></currency-select>
                </el-col>
                <el-col :sm="2" :xs="6">
                  <button class="btn btn-link" @click="shiftCurrencyCodes">
                    <i class="fa fa-exchange"></i>
                  </button>
                </el-col>
                <el-col :sm="11" :xs="8" :class="{'input-error': $v.model.toCurrency.$error }">
                  <currency-select  class="select-default element-fluid"  
                                    v-model="model.toCurrency"
                                    @changed="model.toCurrency = $event" ></currency-select>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <button class="btn btn-wd btn-primary btn-round" @click="convertCurrency">Convert</button>
                </el-col>
              </el-row>
            </el-container>
          </card>
        </el-col>
        <el-col :lg="6" :md="6" :sm="2" :xs="2"></el-col> 
      </el-row>
    </el-container>
  </fade-render-transition>
</template>

<style scoped>

  .container-fluid {
    padding: 25px;
  }
  
</style>

<script>
  import { FadeRenderTransition, CurrencySelect } from 'src/components/index'
  import { mapActions } from 'vuex'
  import { required, numeric } from 'vuelidate/lib/validators'

  export default {
    components: {
      FadeRenderTransition,
      CurrencySelect
    },
    data () {
      return {
        model: {
          frAmount: null,
          toAmount: null,
          frCurrency: null,
          toCurrency: null
        }
      }
    },
    validations: {
      model: {
        frAmount: { required, numeric },
        frCurrency: { required },
        toCurrency: { required }
      }
    },
    methods: {
      ...mapActions([
        'convertCurrencyRate'
      ]),
      convertCurrency () {
        if (this.$v.model.$invalid || this.$v.model.$error) {
          this.$v.model.$touch()
          return
        }

        this.convertCurrencyRate(this.model.frCurrency + '_' + this.model.toCurrency).then(response => {
          if(response.data !== null && response.data.results !== null) {
            const key = Object.keys(response.data.results)[0]

            if (response.data.results[key] !== null){
              var rate = response.data.results[key]['val']
              this.model.toAmount = Number(this.model.frAmount * rate).toFixed(2)
            }
          }
        }, error =>{
          console.log(error)
        })
      },
      shiftCurrencyCodes () {
        if (this.$v.model.frCurrency.$invalid) {
          this.$v.model.frCurrency.$touch()
          return
        }

        if (this.$v.model.toCurrency.$invalid) {
          this.$v.model.toCurrency.$touch()
          return
        }
        
        const fr = this.model.frCurrency
        const to = this.model.toCurrency
       
        this.model.frCurrency = to
        this.model.toCurrency = fr
        this.model.toAmount = null
      }
    }
  }
</script>
