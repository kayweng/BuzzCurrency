<template>
  <landing-layout pageClass="login-page" :contentClass="'col-lg-5 col-md-6 col-sm-8'">
    <form method="#" action="#">
      <fade-render-transition>
        <card :title="'Sign In'">
          <!-- Login Inputs -->
          <div direction="vertical">
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
                      :type="passwordType"
                      name="password"
                      @blur="$v.model.password.$touch()"
                      :class="{'input-error': $v.model.password.$error }"
                      :maxLength="20"
                      :hintClasses="passwordIconClasses"
                      @hint="showPassword"
                      v-model="model.password"
                      ref="txtPassword">
            </fg-input>
            <div class="error-message">
              <span v-if="!$v.model.password.required" class="error-message">The password field is required</span>
            </div>
          </div>
          <!-- Remember Me -->
          <div class="empty-row"></div>
          <div class="row">
            <check-box ref="chkLoggedIn" :checked="this.loggedMeIn" @input="keepMeLoggedIn">
              <span class="note-message">keep me signed in</span>
            </check-box>
          </div>
          <div class="empty-row"></div>
          <!-- Buttons -->
          <div class="center">
            <button @click.enter.prevent="submitForm" type="submit" class="btn btn-fill btn-primary btn-round btn-wd ">Login</button>
          </div>
          <div slot="footer" class="row center">
              <div class="col-sm-6 col-12">
                <router-link to="/reset-password" class="btn btn-simple btn-link btn-sm">Forgot password</router-link>
              </div>
              <div class="col-sm-6 col-12">
                <router-link to="/resend-confirmation" class="btn btn-simple btn-link btn-sm">Resend Confirmation</router-link>
              </div>
            </div>
        </card>
      </fade-render-transition>
    </form>
  </landing-layout>
</template>

<script>
  import { FadeRenderTransition, Checkbox } from 'src/components/index'
  import { LoginModel } from 'src/models/loginModel'
  import LandingLayout from 'src/pages/Auth/AuthLayout.vue'

  export default {
    components: {
      FadeRenderTransition,
      LandingLayout,
      checkBox: Checkbox
    },
    data () {
      return {
        model: new LoginModel(),
        passwordIconClasses: 'pointer fa fa-eye green-sea',
        passwordType: 'password'
      }
    },
    validations: {
      model: LoginModel.validationScheme()
    },
    methods: {
      showPassword () {
        const type = this.$refs.txtPassword.$attrs.type
        this.passwordType = type === 'password' ? 'text' : 'password'
        this.passwordIconClasses = type === 'password' ? 'pointer fa fa-eye-slash green-sea' : 'pointer fa fa-eye green-sea'
      },
      submitForm (event) {
        if (this.$v.model.$invalid || this.$v.model.$error) {
          this.$v.model.$touch()
          return
        }
        
        this.$store.dispatch('authenticateUser', {
          username: this.model.email,
          password: this.model.password
        }).then(() => {
          this.$router.push('Dashboard')
        }).catch((error) => {
          if (error.code === 'UserNotConfirmedException') {
            this.swalError(error.message + '<br/>You need to click on a link in email to verify your email address.')
          } else {
            this.swalError(error.message)
          }
        })
      },
      keepMeLoggedIn (checked) {
        localStorage.setItem('keepMeSignedIn', checked)
      },
      notifySessionExpired () {
        this.$notify({
          component: {
            template: `<span>Your session was expired.<br/>Please continue site with login.</span>`
          },
          timeout: 3000,
          icon: 'nc-icon nc-bulb-63',
          horizontalAlign: 'right',
          verticalAlign: 'bottom',
          type: 'primary'
        })
      }
    },
    beforeMount () {
      this.model.resetState()
    },
    mounted () {
      if (this.$route.query.s !== undefined && this.$route.query.s === 'true') {
        this.notifySessionExpired()
      }
    }
  }
</script>