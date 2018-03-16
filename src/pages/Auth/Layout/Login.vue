<template>
  <landing-layout pageClass="login-page" :contentClass="'col-lg-5 col-md-6 col-sm-8'">
    <form method="#" action="#">
      <fade-render-transition>
        <card :title="'Sign In'">
          <!-- Login Inputs -->
          <div>
            <!-- email -->
            <fg-input type="email"
                      name="email"
                      label="Email address"
                      @blur="$v.model.email.$touch()"
                      :class="{'input-error': $v.model.email.$error }"
                      :maxLength="40"
                      v-model="model.email">
            </fg-input>
            <div class="error-message">
              <span v-if="!$v.model.email.required" class="error-message">The email field is required</span>
              <span v-if="!$v.model.email.email" class="error-message">Invalid email format</span>
            </div>
            <!-- password -->
             <fg-input label="Password"
                      type="password"
                      name="password"
                      @blur="$v.model.password.$touch()"
                      :class="{'input-error': $v.model.password.$error }"
                      :maxLength="20"
                      v-model="model.password">
            </fg-input>
            <div class="error-message">
              <span v-if="!$v.model.password.required" class="error-message">The password field is required</span>
            </div>
          </div>
          <div class="empty-row"></div>
          <!-- Buttons -->
          <div class="text-center">
            <button @click.enter.prevent="submitForm" type="submit" class="btn btn-fill btn-primary btn-round btn-wd ">Login</button>
            <div class="empty-row"></div>
            <div class="row">
              <div class="col-lg-6 col-12">
                <router-link to="/reset-password" class="card-category note">Forgot password</router-link>
              </div>
              <div class="col-lg-6 col-12">
                <router-link to="/resend-verification" class="card-category medium">Resend verification code</router-link>
              </div>
            </div>
          </div>
        </card>
      </fade-render-transition>
    </form>
  </landing-layout>
</template>

<script>
  import { FadeRenderTransition } from 'src/components/index'
  import { LoginModel } from 'src/models/loginModel'
  import swal from 'sweetalert2'
  import LandingLayout from 'src/pages/Auth/AuthLayout.vue'

  export default {
    components: {
      FadeRenderTransition,
      LandingLayout
    },
    data () {
      return {
        model: new LoginModel()
      }
    },
    validations: {
      model: LoginModel.validationScheme()
    },
    methods: {
      submitForm (event) {
        if (this.$v.model.$invalid || this.$v.model.$error) {
          this.$v.model.$touch()
          return
        }
        
        this.$store.dispatch('authenticateUser', {
          username: this.model.email,
          password: this.model.password,
        }).then(() => {
          this.swalSuccess('Signed In', '<br/>Comming soon ...')
        }).catch((error) => {
          if (error.code === 'UserNotConfirmedException') {
            this.swalError(error.message + '<br/>You need to click on a link in email to verify your email address.')
          }else {
            this.swalError(error.message)
          }
        })
      }
    },
    beforeMount () {
      this.model.resetState()
    }
  }
</script>