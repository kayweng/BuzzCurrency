<template>
    <landing-layout pageClass="login-page" :contentClass="'col-lg-4 col-md-6 col-sm-8'">>
      <form method="#" action="#">
        <fade-render-transition>
          <card :title="'Create New Password'">
              
            <fg-input label="Old Password"
                v-show="isReset"
                type="password"
                name="old password"
                v-validate="modelValidations.password"
                :error="getError('old password')"
                v-model="model.password">
            </fg-input>
              
            <fg-input label="New Password"
                type="password"
                name="new password"
                v-validate="modelValidations.password"
                :error="getError('new password')"
                v-model="model.password">
            </fg-input>

            <fg-input label="Confirm Password"
                type="password"
                name="confirm password"
                v-validate="modelValidations.confirmPassword"
                :error="getError('confirm password')"
                v-model="model.confirmPassword">
            </fg-input>

            <div class="text-center">
                <button type="submit" @click.prevent="validate" 
                    class="btn btn-round btn-submit btn-wd">Submit</button>
            </div>
          </card>
        </fade-render-transition>
    </form>
    </landing-layout>
</template>

<script>
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
          oldPassword: '',
          newPassword: '',
          confirmPassword: ''
        },
        modelValidations: {
          password: {
            required: true,
            min: 6
          },
          confirmPassword: {
            required: true,
            confirmed: 'password'
          }
        }
      }
    },
    methods: {
      getError (fieldName) {
        return this.errors.first(fieldName)
      },
      validate () {
        this.$validator.validateAll().then(isValid => {
          this.$emit('on-submit', this.signUp, isValid)
        })
      }
    }
  }
</script>

