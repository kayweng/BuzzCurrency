<template>
    <landing-layout pageClass="login-page" :contentClass="'col-lg-5 col-md-6 col-sm-8'">>
      <form method="#" action="#">
        <fade-render-transition>
          <card :title="'Forgot Password'">
            <!-- email -->
            <fg-input type="email"
                        name="email"
                        label="Email address"
                        @blur="$v.model.email.$touch()"
                        :class="{'input-error': $v.model.email.$error }"
                        v-model="model.email">
            </fg-input>
            <div class="error-message">
              <span v-if="!$v.model.email.required" class="error-message">The email field is required</span>
              <span v-if="!$v.model.email.email" class="error-message">Invalid email format</span>
            </div>
            <div class="empty-row"></div>
            <div class="text-center">
              <button type="submit" @click.prevent="submitForm" class="btn btn-round btn-submit btn-wd">Submit</button>
              <p class="note">Note: A verification email will send to your email inbox</p>
            </div>
          </card>
        </fade-render-transition>
      </form>
    </landing-layout>
</template>

<script>
  import { FadeRenderTransition } from 'src/components/index'
  import { PasswordModel } from 'src/models/passwordModel'
  import swal from 'sweetalert2'
  import LandingLayout from 'src/pages/Auth/AuthLayout.vue'

  export default {
    components: {
      FadeRenderTransition,
      LandingLayout
    },
    data () {
      return {
        model: new PasswordModel()
      }
    },
    validations: {
      model: PasswordModel.validationScheme()
    },
    methods: {
      submitForm (event) {
        if (this.$v.model.$invalid || this.$v.model.$error) {
          this.$v.model.$touch()
          return
        }
        
        this.$store.dispatch('forgotPassword', {
          username: this.model.email
        }).then(() => {
          this.$router.push('/confirm-password')
        }).catch((error) => {
          if (error.code === 'UserNotFoundException') {
            this.swalError('Incorrect Username')
          }else{
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

