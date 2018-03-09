<template>
    <landing-layout pageClass="login-page" :contentClass="'col-lg-4 col-md-6 col-sm-8'">>
      <form method="#" action="#">
        <fade-render-transition>
          <card :title="'Reset Password'">
            <fg-input type="email"
                        name="email"
                        label="Email address"
                        v-validate="modelValidations.email"
                        :error="getError('email')"
                        v-model="model.email">
            </fg-input>
            <fg-input label="Date of Birth" 
                name="dob" 
                v-model="model.dob" 
                v-validate="modelValidations.dob" 
                :error="getError('dob')">
                <el-date-picker v-model="birthdayDate"
                                format="dd-MMM-yyyy"
                                type="date"
                                placeholder="Date of Birth"></el-date-picker>
            </fg-input>
            <div class="text-center">
                <button type="submit" @click.prevent="validate" 
                    class="btn btn-round btn-submit btn-wd">Submit</button>
            </div>
            <div name="footer" class="text-center">
                <p class="note">Note: You will receive a reset password email shortly if your email and date of birthday are correct</p>
            </div>
          </card>
        </fade-render-transition>
      </form>
    </landing-layout>
</template>

<script>
  import { DatePicker } from 'element-ui'
  import { FadeRenderTransition } from 'src/components/index'
  import LandingLayout from 'src/pages/Auth/AuthLayout.vue'

  export default {
    components: {
      FadeRenderTransition,
      LandingLayout,
      [DatePicker.name]: DatePicker
    },
    data () {
      return {
        birthdayDate: null,
        model: {
          email: '',
          dob: ''
        },
        modelValidations: {
          email: {
            required: true,
            email: true
          },
          dob: {
            required: true
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
    },
    watch: {
      birthdayDate: function (val) {
        this.model.dob = val.toLocaleDateString()
      }
    }
  }
</script>

