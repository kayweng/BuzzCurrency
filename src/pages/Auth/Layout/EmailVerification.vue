<template>
  <landing-layout pageClass="login-page" :contentClass="'col-lg-5 col-md-6 col-sm-8'">
    <form method="#" action="#">
      <fade-render-transition>
        <card v-if="!expired">
          <div class="text-center">
            <info-card  :imgName="'email_verification.png'" 
                        :title="'Verify Your Email'"
                        :message="'Welcome back. Click the button to verify your email'" ></info-card>
          </div>
          <div class="empty-row"></div>
          <div class="text-center">
              <button type="submit" @click.prevent="verify" class="btn btn-round btn-verify btn-wd">Verify</button>
          </div>
        </card>
        <card v-if="expired">
          <div class="text-center">
            <info-card  :imgName="'email_verification.png'" 
                        :title="'Verify Your Email'"
                        :message="'Opps, your account had been deactivated due to expired. Please contact our team for further action.'" ></info-card>
          </div>
          <div class="empty-row"></div>
        </card>
      </fade-render-transition>
    </form>
  </landing-layout>
</template>

<style scoped>

</style>

<script>
  import { FadeRenderTransition, InfoCard } from 'src/components/index'
  import LandingLayout from 'src/pages/Auth/AuthLayout.vue'
  
  export default {
    components: {
      FadeRenderTransition,
      LandingLayout,
      InfoCard
    },
    data () {
      return {
        expired: true
      }
    },
    methods: {
      verify () {

      }
    }
  }
</script>
