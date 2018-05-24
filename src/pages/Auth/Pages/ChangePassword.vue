<template>
  <landing-layout pageClass="login-page" :contentClass="'col-lg-5 col-md-6 col-sm-8'">
    <form method="#" action="#">
      <fade-render-transition>
        <card :title="'Create New Password'">
          <!-- Old Password -->
          <fg-input label="Old Password"
              v-show="!isReset"
              type="password"
              name="old password"
              @blur="$v.model.oldPassword.$touch()"
              :class="{'input-error': $v.model.oldPassword.$error }"
              v-model="model.oldPassword">
          </fg-input>
          <span v-if="!$v.model.oldPassword.requiredIf" class="error-message">The old password field is required</span>
          <span v-if="!$v.model.oldPassword.minLength" class="error-message">The old password field length must have at least {{$v.model.oldPassword.$params.minLength.min}}</span>
          <!-- New Password -->
          <fg-input label="New Password"
              type="password"
              name="new password"
              @blur="$v.model.newPassword.$touch()"
              :class="{'input-error': $v.model.newPassword.$error }"
              v-model="model.newPassword">
          </fg-input>
          <span v-if="!$v.model.newPassword.required" class="error-message">The new password field is required</span>
          <span v-if="!$v.model.newPassword.minLength" class="error-message">The new password field length must have at least {{$v.model.newPassword.$params.minLength.min}}</span>
          <!-- Confirm Password -->
          <fg-input label="Confirm Password"
              type="password"
              name="confirm password"
              @blur="$v.model.confirmPassword.$touch()"
              :class="{'input-error': $v.model.confirmPassword.$error }"
              v-model="model.confirmPassword">
          </fg-input>
          <span v-if="!$v.model.confirmPassword.required" class="error-message">The confirm password field is required</span>
          <span v-if="$v.model.confirmPassword.required && !$v.model.confirmPassword.sameAs" class="error-message">The confirm password must be same as new password</span>
          
          <div class="empty-row"></div>
          <div class="text-center">
              <button type="submit" @click.prevent="validate" class="btn btn-round btn-submit btn-wd">Submit</button>
          </div>
        </card>
      </fade-render-transition>
  </form>
  </landing-layout>
</template>

<script>
  import { required, minLength, sameAs, requiredIf } from 'vuelidate/lib/validators'
  import { FadeRenderTransition } from 'src/components/index'
  import LandingLayout from 'src/pages/Auth/AuthLayout.vue'

  export default {
    components: {
      FadeRenderTransition,
      LandingLayout
    },
    props: {
      isReset: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        model: {
          oldPassword: null,
          newPassword: null,
          confirmPassword: null
        }
      }
    },
    validations: {
      model: {
        oldPassword: {
          minLength: minLength(8),
          requiredIf: requiredIf(function () {
            return !this.isReset
          })
        },
        newPassword: {
          required,
          minLength: minLength(8)
        },
        confirmPassword: {
          required,
          sameAs: sameAs('newPassword')
        }
      }
    },
    methods: {
      validate (event) {
        if (this.$v.model.$invalid || this.$v.model.$error) {
          this.$v.model.$touch()
          return
        }
        
        console.log(event)
      }
    }
  }
</script>

