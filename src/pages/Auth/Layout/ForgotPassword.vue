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
            </div>
            <div name="footer" class="text-center">
              <p class="note">Note: A verification email will send to your email inbox</p>
            </div>
          </card>
        </fade-render-transition>
      </form>
    </landing-layout>
</template>

<script>
  import { FadeRenderTransition } from 'src/components/index'
  import { email } from 'src/models/auth'
  import swal from 'sweetalert2'
  import LandingLayout from 'src/pages/Auth/AuthLayout.vue'

  export default {
    components: {
      FadeRenderTransition,
      LandingLayout
    },
    data () {
      return {
        model: email
      }
    },
    validations: {
      model: email.validations
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
          swal({
            title: 'Verification',
            html: '<small>Please enter a verification code that sent to your email</small>',
            input: 'number',
            showCancelButton: true,
            showLoaderOnConfirm: true,
            confirmButtonText: 'Submit',
            cancelButtonClass: 'btn btn-default btn-round btn-wd',
            confirmButtonClass: 'btn btn-submit btn-round btn-wd',
            preConfirm: (number) => {
              return new Promise((resolve) => {
                this.$store.dispatch('confirmForgotPassword', {
                  username: this.model.email
                }).then(() => {
                  resolve()
                }).catch((error) => {
                  this.swalError(error.message)
                })
              })
            },
            allowOutsideClick: () => !swal.isLoading()
          }).then((result) => {
            if (result.value) {
              this.$router.push('/change-password', {'forceReset': true } )
            }
          })
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
      email.resetState()
    }
  }
</script>

