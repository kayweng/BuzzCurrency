<template>
  <landing-layout pageClass="login-page">
    <fade-render-transition>
       <div class="row d-flex justify-content-center">
         <div class="col-12">
          <div class="card card-wizard">
            <form-wizard step-size="sm" ref="wizardForm"
                        error-color="#f79483"
                        color="#2874A6">
              <h3 slot="title" class="text-center">Create New Password</h3>   
              <!-- verify email -->
              <tab-content title="Email"
                          class="col-12"
                          :tabId="1"
                          :before-change="() => validateStep('verifyEmail')"
                          icon="nc-icon nc-circle-09">
                <verify-email ref="verifyEmail" @on-validated="returnEmail"></verify-email>
              </tab-content>
              <!-- verify code -->
              <tab-content title="Verification"
                          class="col-12"
                          :tabId="2"
                          :before-change="() => validateStep('verifyCode')"
                          icon="nc-icon nc-lock-circle-open">
                <verify-code ref="verifyCode" @on-validated="returnVerificationCode"></verify-code>
              </tab-content>
              <!-- enter new password -->
              <tab-content title="Password"
                          class="col-12"
                          :tabId="3"
                          :before-change="() => validateStep('newPassword')"
                          icon="nc-icon nc-key-25">
                <new-password ref="newPassword" @on-validated="returnNewPassword"></new-password>
              </tab-content>
               <!-- confirm to create -->
              <tab-content title="Completion"
                          class="col-12"
                          :tabId="4"
                          :before-change="() => validateStep('createNewPassword')"
                          icon="nc-icon nc-check-2">
                <create-password ref="createNewPassword" v-on:resetWizardForm="resetForm" :confirmPasswordResult="confirmPasswordResult"></create-password>
              </tab-content>

              <div class="empty-row"></div>

              <template slot="footer" slot-scope="props">
                <div class=wizard-footer-left>
                  <wizard-button  v-if="props.activeTabIndex > 0 && !props.isLastStep" @click.native="props.prevTab()" :style="props.fillButtonStyle">Previous</wizard-button>
                </div>
                <div class="wizard-footer-right">
                  <wizard-button v-if="!props.isLastStep" @click.native="props.nextTab()" class="wizard-footer-right" :style="props.fillButtonStyle">Next</wizard-button>
                </div>
              </template>
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

  .wizard-btn {
    border-radius: 30px !important;
    padding: 8px 16px;
  }

</style>

<script>
  import { FormWizard, TabContent, WizardButton } from 'vue-form-wizard'
  import { FadeRenderTransition } from 'src/components/index'
  import { PasswordModel } from 'src/models/passwordModel'
  import VerifyEmail from '../ConfirmForgotPasswordWizard/VerifyEmail.vue'
  import VerifyCode from '../ConfirmForgotPasswordWizard/VerifyCode.vue'
  import NewPassword from '../ConfirmForgotPasswordWizard/NewPassword.vue'
  import CompleteForgotPassword from '../ConfirmForgotPasswordWizard/CompleteForgotPassword.vue'
  import LandingLayout from 'src/pages/Auth/AuthLayout.vue'
  import 'vue-form-wizard/dist/vue-form-wizard.min.css'
  
  export default {
    components: {
      FadeRenderTransition,
      LandingLayout,
      FormWizard,
      WizardButton,
      TabContent,
      VerifyEmail,
      VerifyCode,
      NewPassword,
      'createPassword': CompleteForgotPassword
    },
    data () {
      return {
        model: new PasswordModel(),
        confirmPasswordResult: {
          success: false,
          message: '',
          resultTitle: ''
        }
      }
    },
    validations: {
      model: PasswordModel.validationScheme()
    },
    methods: {
      validateStep (ref) {
        if (this.$refs[ref].validate()) {
          if (ref !== 'newPassword') {
            return true
          }

          if (!this.$v.model.$error) {
            this.$store.dispatch('confirmPassword', {
              username: this.model.email,
              code: this.model.code,
              newPassword: this.model.newPassword
            }).then(() => {
              this.confirmPasswordResult = {
                success: true,
                message: 'Your password has been created.'
              }
            }).catch((error) => {
              this.confirmPasswordResult = {
                success: false,
                message: error.message
              }
            })
            
            return true
          } else {
            this.swalError('Your provided info may not valid.<br/>Please correct it and try again.')
          }
        }

        return false
      },
      returnEmail (val) {
        this.model.email = val
      },
      returnVerificationCode (val) {
        this.model.code = val
      },
      returnNewPassword (val) {
        this.model.newPassword = val.newPassword
        this.model.confirmPassword = val.confirmPassword
      },
      resetForm (val) {
        this.model.resetState()
        this.$refs['wizardForm'].reset()
        this.$refs['verifyEmail'].reset()
        this.$refs['verifyCode'].reset()
        this.$refs['newPassword'].reset()
      },
      beforeMount () {
        this.model.resetState()
        this.mode.forceReset = true
      }
    }
  }
</script>

