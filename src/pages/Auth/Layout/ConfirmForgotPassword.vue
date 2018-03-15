<template>
  <landing-layout pageClass="login-page">
    <fade-render-transition>
       <div class="row d-flex justify-content-center">
         <div class="col-12">
          <div class="card card-wizard">
            <form-wizard step-size="sm" 
                        error-color="#f79483"
                        color="#2874A6">

              <h3 slot="title" class="text-center">Create New Password</h3>   

              <tab-content title="Verification"
                          class="col-12"
                          icon="nc-icon nc-badge">
                <verify-code :code="this.model.code"></verify-code>
              </tab-content>

              <tab-content title="New Password"
                          class="col-12"
                          icon="nc-icon nc-lock">
                <verify-code :code="this.model.code"></verify-code>
              </tab-content>
              <div class="empty-row"></div>
              <div slot="footer" class="text-center">
                <button slot="next" class="btn btn-primary btn-round btn-wd btn-next">Next</button>
              </div>
            </form-wizard>
          </div>
         </div>
      </div>
    </fade-render-transition>
  </landing-layout>
</template>

<style lang="scss">
  .vue-form-wizard .wizard-icon-circle.tab_shape {
    background-color: #9A9A9A !important;
    color: white;
  }
  .vue-form-wizard .wizard-tab-content {
    display: flex; // to avoid horizontal scroll when animating
    .wizard-tab-container {
      display: block;
      animation: fadeIn 0.5s;
    }
  }
</style>

<script>
  import { FormWizard, TabContent } from 'vue-form-wizard'
  import { FadeRenderTransition } from 'src/components/index'
  import { PasswordModel } from 'src/models/passwordModel'
  import VerifyCode from './VerifyCode.vue'
  import LandingLayout from 'src/pages/Auth/AuthLayout.vue'
  import 'vue-form-wizard/dist/vue-form-wizard.min.css'
  
  export default {
    components: {
      FadeRenderTransition,
      LandingLayout,
      FormWizard,
      TabContent,
      VerifyCode
    },
    data () {
      return {
        model: new PasswordModel() 
      }
    }
  }
</script>

