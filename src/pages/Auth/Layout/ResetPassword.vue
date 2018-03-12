<template>
    <landing-layout pageClass="login-page" :contentClass="'col-lg-5 col-md-6 col-sm-8'">>
      <form method="#" action="#">
        <fade-render-transition>
          <card :title="'Forgot Password'">
            <!-- Reset Password Inputs -->
            <fg-input type="email"
                        name="email"
                        label="Email address"
                        @blur="$v.model.email.$touch()"
                        :class="{'input-error': $v.model.email.$error }"
                        v-model="model.email">
            </fg-input>
            <span v-if="!$v.model.email.required" class="error-message">The email field is required</span>
            <span v-if="!$v.model.email.email" class="error-message">Invalid email format</span>

            <fg-input label="Date of Birth" 
                name="dob" 
                @blur="$v.model.dob.$touch()"
                :class="{'input-error': $v.model.dob.$error }"
                v-model="model.dob">
                <el-date-picker v-model="birthdayDate"
                                format="dd-MMM-yyyy"
                                type="date"
                                :class="{'input-error': $v.model.dob.$error }"
                                placeholder="Date of Birth"></el-date-picker>
            </fg-input>
            <span v-if="!$v.model.dob.required" class="error-message">The date of birth field is required</span>
            <span v-if="!$v.model.dob.between" class="error-message">The date of birth must between {{$v.model.dob.$params.between.min.getFullYear() }} and {{$v.model.dob.$params.between.max.getFullYear() - 1}}</span>
            
            <div class="empty-row"></div>
            <div class="text-center">
                <button type="submit" @click.prevent="validate" class="btn btn-round btn-submit btn-wd">Submit</button>
            </div>
            <div name="footer" class="text-center">
                <p class="note">Note: You will receive a reset password email shortly if your email and date of birth are correct</p>
            </div>
          </card>
        </fade-render-transition>
      </form>
    </landing-layout>
</template>

<script>
  import { required, email, between } from 'vuelidate/lib/validators'
  import { DatePicker } from 'element-ui'
  import { FadeRenderTransition } from 'src/components/index'
  import { date } from 'src/plugins/date'
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
          email: null,
          dob: null
        }
      }
    },
    validations: {
      model: {
        email: {
          required,
          email
        },
        dob: {
          required,
          between: between(date.getDateByYearAdded(-80), date.getDateByYearAdded(-18))
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
    },
    watch: {
      birthdayDate: function (val) {
        this.model.dob = val
      }
    }
  }
</script>

