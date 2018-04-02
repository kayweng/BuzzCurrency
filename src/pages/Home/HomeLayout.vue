<template>
  <div class="wrapper">
    <transition-group name="fade" mode="out-in">
      <app-header :key="1"></app-header>
      <app-benefits :key="2"></app-benefits>
      <app-today-currency :key="3"></app-today-currency>
      <app-team :key="4"></app-team>
      <app-get-started :key="5"></app-get-started>
      <app-footer :key="6"></app-footer>
    </transition-group>
  </div>
</template>

<style scoped>
  .container-fluid {
      padding: 0;
  }
</style>

<script>
    import Header from '../../pages/Home/Components/Header.vue'
    import Footer from '../../pages/Home/Components/Footer.vue'
    import Benefits from '../../pages/Home/Components/Benefits.vue'
    import TodayCurrency from '../../pages/Home/Components/TodayCurrency.vue'
    import Team from '../../pages/Home/Components/Team.vue'
    import GetStarted from '../../pages/Home/Components/GetStarted.vue'
    
    export default {
      components: {
        'appHeader': Header,
        'appFooter': Footer,
        'appBenefits': Benefits,
        'appTodayCurrency': TodayCurrency,
        'appTeam': Team,
        'appGetStarted': GetStarted
      }
    }
</script>
