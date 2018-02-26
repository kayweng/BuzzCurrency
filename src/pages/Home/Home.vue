<template>
    <div class="wrapper">
        <app-header></app-header>
        <app-advantages></app-advantages>
        <app-currency-rates></app-currency-rates>
        <app-get-started></app-get-started>
        <app-footer></app-footer>
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
    import CurrencyRates from '../../pages/Home/Layout/CurrencyRates.vue'
    import GetStarted from '../../pages/Home/Layout/GetStarted.vue'
    
    export default {
        data() {
            return{

            }
        },
        components: {
            'appHeader': Header,
            'appFooter': Footer,
            'appAdvantages': Advantages,
            'appCurrencyRates': CurrencyRates,
            'appGetStarted': GetStarted,
        }
    }
</script>
