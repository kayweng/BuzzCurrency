<template>
  <div class="wrapper">
    <transition-group name="fade" mode="out-in">
      <app-header :key="1"></app-header>
      <app-advantages :key="2"></app-advantages>
      <app-today-currency :key="3"></app-today-currency>
      <app-get-started :key="4"></app-get-started>
      <app-footer :key="5"></app-footer>
    </transition-group>
  </div>
</template>

<style scoped>
  .container-fluid {
      padding: 0;
  }
</style>

<script>
    import Header from '../../pages/Home/Layout/Header.vue'
    import Footer from '../../pages/Home/Layout/Footer.vue'
    import Advantages from '../../pages/Home/Layout/Advantages.vue'
    import TodayCurrency from '../../pages/Home/Layout/TodayCurrency.vue'
    import GetStarted from '../../pages/Home/Layout/GetStarted.vue'
    
    export default {
      components: {
        'appHeader': Header,
        'appFooter': Footer,
        'appAdvantages': Advantages,
        'appTodayCurrency': TodayCurrency,
        'appGetStarted': GetStarted
      }
    }
</script>
