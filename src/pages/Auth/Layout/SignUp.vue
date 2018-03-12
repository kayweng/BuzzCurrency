<template>
  <landing-layout pageClass="login-page" >
    <form method="#" action="#">
      <fade-render-transition :duration="200">
        <card :title="'Create Account'">
          <!-- User Info -->
          <div class="row">
            <div class="col-md-6 col-12">
              <fg-input type="text"
                        name="first name"
                        label="First Name"
                        @blur="$v.model.firstName.$touch()"
                        :class="{'input-error': $v.model.firstName.$error }"
                        v-model="model.firstName">
              </fg-input>
              <span v-if="!$v.model.firstName.required" class="error-message">The first name field is required</span>
              <span v-if="!$v.model.firstName.alpha" class="error-message">The first name field must be only alphabet characters</span>
            </div>
            <div class="col-md-6 col-12">
              <fg-input type="text"
                        name="last name"
                        label="Last Name"
                        @blur="$v.model.lastName.$touch()"
                        :class="{'input-error': $v.model.lastName.$error }"
                        v-model="model.lastName">
              </fg-input>
              <span v-if="!$v.model.lastName.required" class="error-message">The last name field is required</span>
              <span v-if="!$v.model.lastName.alpha" class="error-message">The last name field must be only alphabet characters</span>
            </div>
          </div> 
          <div class="row">
            <div class="col-md-6 col-12">
              <fg-input type="email"
                        name="email"
                        label="Email address"
                        @blur="$v.model.email.$touch()"
                        :class="{'input-error': $v.model.email.$error }"
                        v-model="model.email">
              </fg-input>
              <span v-if="!$v.model.email.required" class="error-message">The email field is required</span>
              <span v-if="!$v.model.email.email" class="error-message">Invalid email format</span>
            </div>
            <div class="col-md-6 col-12">
              <fg-input type="mobile"
                        name="mobile"
                        label="Mobile Number"
                        @blur="$v.model.mobile.$touch()"
                        :class="{'input-error': $v.model.mobile.$error }"
                        v-model="model.mobile">
              </fg-input>    
              <span v-if="!$v.model.mobile.required" class="error-message">The mobile number field is required</span>
              <span v-if="!$v.model.mobile.numeric" class="error-message">The mobile number field must be only numeric</span>
              <span v-if="$v.model.mobile.numeric && !$v.model.mobile.minLength" class="error-message">The mobile number field must have at least {{ $v.model.mobile.$params.minLength.min}} numbers</span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-12">
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
            </div>
            <div class="empty-row"></div>
          </div> 
          <hr/>
          <!-- Password -->
          <div class="row">
            <div class="col-md-6 col-12">
              <fg-input label="Password"
                        type="password"
                        name="password"
                        @blur="$v.model.password.$touch()"
                        :class="{'input-error': $v.model.password.$error }"
                        v-model="model.password">
              </fg-input>
              <span v-if="!$v.model.password.required" class="error-message">The password field is required</span>
              <span v-if="!$v.model.password.minLength" class="error-message">The password field length must have at least {{$v.model.password.$params.minLength.min}}</span>
            </div>
            <div class="col-md-6 col-12">
              <fg-input label="Confirm Password"
                        type="password"
                        name="confirm password"
                        @blur="$v.model.confirmPassword.$touch()"
                        :class="{'input-error': $v.model.confirmPassword.$error }"
                        v-model="model.confirmPassword">
              </fg-input>
              <span v-if="!$v.model.confirmPassword.required" class="error-message">The confirm password field is required</span>
              <span v-if="$v.model.confirmPassword.required && !$v.model.confirmPassword.sameAs" class="error-message">The confirm password must be same as password</span>
            </div>
          </div>
          <br/>

          <!-- Agreement -->
          <div class="row">
            <check-box v-model="model.agreement" :class="{'input-error': $v.model.agreement.$error }">
              <span class="terms" v-html="terms"></span>
              <span v-if="!$v.model.agreement.required" class="error-message terms">(Please tick the check box to accept and agree our terms and agreements)</span>
            </check-box>
          </div>
          <br/>
          <!-- Recaptcha -->
          <div class="row center-item">
              <div class="g-recaptcha" data-sitekey="6LfwwUkUAAAAAGcTAv-UXTyeRdH2UKoydww1wsab"></div>
              <input type="hidden" v-model="model.reCaptcha" />
          </div>
          <br/>

          <!-- Buttons -->
          <div class="row">
            <div class="text-center col-12">
              <div class="button-inline">
                <button type="reset" @click="resetForm" class="btn btn-round btn-reset btn-wd">Reset</button>
                <button type="submit" @click.prevent="validate" class="btn btn-round btn-submit btn-wd">Submit</button>
              </div>
            </div>
          </div>
        </card>
      </fade-render-transition>
    </form>
  </landing-layout>
</template>

<script>
  import { required, email, minLength, between, sameAs, alpha, numeric } from 'vuelidate/lib/validators'
  import { DatePicker, Input, Button } from 'element-ui'
  import { FadeRenderTransition, Checkbox } from 'src/components/index'
  import { date } from 'src/plugins/date'
  import LandingLayout from 'src/pages/Auth/AuthLayout.vue'
  
  export default {
    components: {
      FadeRenderTransition,
      LandingLayout,
      checkBox: Checkbox,
      [DatePicker.name]: DatePicker,
      [Input.name]: Input,
      [Button.name]: Button
    },
    data () {
      return {
        terms: 'By proceeding, I agree that you can collect, use and disclose the information provided by me in accordance with your <a href="#">Privacy Policy</a> which I have read and understand.',
        birthdayDate: null,
        model: {
          firstName: '',
          lastName: '',
          email: '',
          mobile: '',
          dob: null,
          password: '',
          confirmedPassword: '',
          agreement: false,
          reCaptcha: false
        }
      }
    },
    validations: {
      model: {
        firstName: {
          required,
          alpha
        },
        lastName: {
          required,
          alpha
        },
        email: {
          required,
          email
        },
        mobile: {
          required,
          numeric,
          minLength: minLength(8)
        },
        dob: {
          required,
          between: between(date.getDateByYearAdded(-80), date.getDateByYearAdded(-18))
        },
        password: {
          required,
          minLength: minLength(8)
        },
        confirmPassword: {
          required,
          sameAs: sameAs('password')
        },
        agreement: {
          required
        }
      }
    },
    methods: {
      resetForm () {
        this.model = {}
        this.$v.model.$reset()
      },
      validate (event) {
        if (this.$v.model.$invalid || this.$v.model.$error) {
          this.$v.model.$touch()
          return
        }

        var captcha = grecaptcha.getResponse();

        if (captcha.length === 0) {
          alert('Please complete recaptcha upon submit form data')
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