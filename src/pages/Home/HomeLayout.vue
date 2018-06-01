<template>
  <div class="wrapper">
    <transition-group name="fade" mode="out-in">
      <app-header :key="1"></app-header>
      <app-features :key="2"></app-features>
      <app-local-currency :key="3"></app-local-currency>
      <app-currency-converter :key="4"></app-currency-converter>
      <app-get-started :key="5"></app-get-started>
      <app-footer :key="6"></app-footer>
    </transition-group>
  </div>
</template>

<style scoped>
  .container-fluid {
    padding: 0!important;
  }
</style>

<script>
  import Header from './Components/Header.vue'
  import Footer from './Components/Footer.vue'
  import Features from './Components/Features.vue'
  import LocalCurrency from './Components/LocalCurrency.vue'
  import CurrencyConverter from './Components/CurrencyConverter.vue'
  import GetStarted from './Components/GetStarted.vue'
  
  export default {
    components: {
      'appHeader': Header,
      'appFooter': Footer,
      'appFeatures': Features,
      'appLocalCurrency': LocalCurrency,
      'appCurrencyConverter': CurrencyConverter,
      'appGetStarted': GetStarted
    }
  }
</script>
