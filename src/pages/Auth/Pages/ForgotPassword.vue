<template>
    <landing-layout pageClass="login-page" :contentClass="'col-lg-5 col-md-6 col-sm-8'">
      <form method="#" action="#">
        <fade-render-transition>
          <card :title="'Forgot Password'">
            <!-- email -->
            <fg-input type="email"
                        name="email"
                        label="Email address"
                        @blur="$v.email.$touch()"
                        :class="{'input-error': $v.email.$error }"
                        v-model="email">
            </fg-input>
            <div class="error-message">
              <span v-if="!$v.email.required" class="error-message">The email field is required</span>
              <span v-if="!$v.email.email" class="error-message">Invalid email format</span>
            </div>
            <div class="empty-row"></div>
            <div class="text-center">
              <button type="submit" @click.prevent="submitForm" class="btn btn-round btn-submit btn-wd">Submit</button>
            </div>
            <div slot="footer" class="text-center">
              <div class="col-12">
                <router-link to="/confirm-password" class="btn btn-simple btn-link btn-sm">Already with verifiction code ?<br/> create new password now</router-link>
              </div>
            </div>
          </card>
        </fade-render-transition>
      </form>
    </landing-layout>
</template>

<script>
  import { FadeRenderTransition } from 'src/components/index'
  import * as validator from 'src/validations/userValidator'
  import LandingLayout from 'src/pages/Auth/AuthLayout.vue'

  export default {
    components: {
      FadeRenderTransition,
      LandingLayout
    },
    data () {
      return {
        email: null
      }
    },
    validations: {
      email: validator.emailAddress
    },
    methods: {
      submitForm (event) {
        if (this.$v.$invalid || this.$v.$error) {
          this.$v.$touch()
          return
        }

        this.$store.dispatch('forgotPassword', {
          username: this.email
        }).then(() => {
          this.$notify({
            component: {
              template: `<span>You will receive a verification email with code</span>`
            },
            timeout: 3000,
            icon: 'nc-icon nc-send',
            horizontalAlign: 'right',
            verticalAlign: 'bottom',
            type: 'primary'
          })

          setTimeout(vm => {
            vm.$router.push('/confirm-password')
          }, 3200)
        }).catch((error) => {
          if (error.code === 'UserNotFoundException') {
            this.swalError('Incorrect Username')
          } else {
            this.swalError(error.message)
          }
        })
      }
    }
  }
</script>

