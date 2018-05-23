<template>
  <fade-render-transtion>
    <el-container direction="vertical" class="container-fluid center">
      <el-row>
        <h3>Currency Converter</h3>
      </el-row>
      <el-row>
        <el-container direction="verticial" class="center">
          <el-col :span="5"></el-col>
          <el-col :span="6">
            <el-input type="number" clearable></el-input>
          </el-col>
          <el-col :span="2">
            <i class="fa fa-exchange"></i>
          </el-col>
          <el-col :span="6">
            <el-input readonly></el-input>
          </el-col>
          <el-col :span="5"></el-col>
        </el-container>
      </el-row>
      <el-row>
        <el-container direction="verticial" class="center">
          <el-col :span="5"></el-col>
          <el-col :span="6">
            <currency-input class="select-default full-width" @change="ChangeFromCurrency"></currency-input>
          </el-col>
          <el-col :span="2"></el-col>
          <el-col :span="6">
            <currency-input class="select-default full-width" @change="ChangeToCurrency"></currency-input>
          </el-col>
          <el-col :span="5"></el-col>
        </el-container>
      </el-row>
      <el-row v-show="showMoreResult" class="converter-result">
        <el-contaner direction="vertical">
          <el-row>
            <el-button type="success" @click="ShowMoreRates" round>More Rates</el-button>
          </el-row>
        </el-contaner>
      </el-row>
    </el-container>
  </fade-render-transtion>
</template>

<style scoped>
  h3 {
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: center;
  }

  .container-fluid {
    padding: 25px;
  }

  .row {
    padding-top: 10px;
  }

  i{
    margin-top: 44px;
  }

  .converter-result{
    padding-top: 50px;
  }
</style>

<script>
  import { FadeRenderTransition, CurrencyInput } from 'src/components/index'
  export default {
    components: {
      FadeRenderTransition,
      CurrencyInput
    },
    data () {
      return {
        showMoreResult: false,
        fromCurrency: '',
        toCurrency: ''
      }
    },
    methods: {
      ShowMoreRates () {
        this.$router.push('/Dashboard')
      },
      ChangeFromCurrency (val) {
        fromCurrency = val
      },
      ChangeToCurrency () {
        toCurrency = val
      }
    }
  }
</script>
