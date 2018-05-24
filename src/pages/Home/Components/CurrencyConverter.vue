<template>
  <fade-render-transition>
    <el-container direction="vertical" class="container-fluid center">
      <el-row>
        <h5><i class="fa fa-calculator" />&nbsp;&nbsp;Currency Converter</h5>
      </el-row>
      <el-row class="row">
        <el-col :span="6"></el-col>
        <el-col :span="12">
          <card class="card-form">
            <el-container direction="vertical" class="center">
              <!-- Amount -->
              <el-row>
                <el-col :span="11">
                  <fg-input type="number"
                            name="from amount"
                            label="From Amount"
                            placeholder= "0.00"
                            :maxLength="20"
                            v-model="model.fromAmount">
                  </fg-input>
                </el-col>
                <el-col :span="2">
                  <i class="fa fa-exchange"></i>
                </el-col>
                <el-col :span="11">
                  <fg-input type="number"
                            name="to amount"
                            label="To Amount"
                            placeholder= "0.00"
                            :maxLength="20"
                            readonly 
                            v-model="model.toAmount">
                  </fg-input>
                </el-col>
              </el-row>
              <!-- Currency Code -->
              <el-row>
                <el-col :span="11">
                  <currency-select class="select-default full-width" @changed="model.fromCurrency = $event"></currency-select>
                </el-col>
                <el-col :span="2">&nbsp;</el-col>
                <el-col :span="11">
                  <currency-select class="select-default full-width" @changed="model.toCurrency = $event"></currency-select>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-button type="primary" @click="convertedCurrencyAmount" round>Convert</el-button>
                </el-col>
              </el-row>
            </el-container>
          </card>
        </el-col>
        <el-col :span="6"></el-col> 
      </el-row>
    </el-container>
  </fade-render-transition>
</template>

<style scoped>
  .container-fluid {
    padding: 25px;
  }

  i{
    margin-top: 44px;
  }

  .converter-result{
    padding-top: 50px;
  }
</style>

<script>
  import { FadeRenderTransition, CurrencySelect } from 'src/components/index'
  import { mapActions } from 'vuex'
  import { required } from 'vuelidate/lib/validators'

  export default {
    components: {
      FadeRenderTransition,
      CurrencySelect
    },
    data () {
      return {
        model: {
          fromAmount: null,
          toAmount: null,
          fromCurrency: '',
          toCurrency: ''
        }
      }
    },
    validations: {
      'model.fromAmount': required,
      'model.fromCurrency': required,
      'model.toCurency': required
    },
    methods: {
      ...mapActions([
        'convertCurrencyRate'
      ]),
      convertedCurrencyAmount () {
        // console.log(this.$v.model)
        // if (this.$v.model.$invalid || this.$v.model.$error) {
        //   this.$v.model.$touch()
        //   return
        // }

        this.convertCurrencyRate(this.model.fromCurrency + '_' + this.model.toCurrency).then(response => {
          console.log(response)
        })
      }
    }
  }
</script>
