<template>
  <landing-layout pageClass="login-page" >
    <form method="#" action="#">
      <fade-render-transition :duration="200">
        <card :title="'Create Account'">
          <!-- User Info -->
          <div class="row">
            <div class="col-lg-6 col-xs-12">
              <fg-input type="text"
                        name="first name"
                        label="First Name"
                        v-validate="modelValidations.firstName"
                        :error="getError('first name')"
                        v-model="model.firstName">
              </fg-input>
            </div>
            <div class="col-lg-6 col-xs-12">
              <fg-input type="text"
                        name="last name"
                        label="Last Name"
                        v-validate="modelValidations.lastName"
                        :error="getError('last name')"
                        v-model="model.lastName">
              </fg-input>
            </div>
          </div> 
          <div class="row">
            <div class="col-lg-6 col-xs-12">
              <fg-input type="email"
                        name="email"
                        label="Email address"
                        v-validate="modelValidations.email"
                        :error="getError('email')"
                        v-model="model.email">
              </fg-input>
            </div>
            <div class="col-lg-6 col-xs-12">
              <fg-input type="mobile"
                        name="mobile"
                        label="Mobile Number"
                        v-validate="modelValidations.mobile"
                        :error="getError('mobile')"
                        v-model="model.mobile">
              </fg-input> 
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-xs-12">
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
            </div>
            <div class="col-lg-6 col-xs-12"></div>
          </div> 
          <hr/>
          <!-- Password -->
          <div class="row">
            <div class="col-lg-6 col-xs-12">
              <fg-input label="Password"
                        type="password"
                        name="password"
                        v-validate="modelValidations.password"
                        :error="getError('password')"
                        v-model="model.password">
              </fg-input>
            </div>
            <div class="col-lg-6 col-xs-12">
              <fg-input label="Confirm Password"
                        type="password"
                        name="confirm password"
                        v-validate="modelValidations.confirmPassword"
                        :error="getError('confirm password')"
                        v-model="model.confirmPassword">
              </fg-input>
            </div>
          </div>
          <br/>

          <!-- Terms -->
          <div class="row">
            <check-box v-model="model.agreement">
                <span class="terms" v-html="terms"></span>
              </check-box>
          </div>
          <br/>
          <!-- Recaptcha -->
          <div class="row center-item">
              <div class="g-recaptcha" data-sitekey="6LfwwUkUAAAAAGcTAv-UXTyeRdH2UKoydww1wsab"></div>
          </div>
          <br/>

          <!-- Buttons -->
          <div class="row">
            <div class="text-center col-lg-12">
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
  import { DatePicker, Input, Button } from 'element-ui'
  import { FadeRenderTransition, Checkbox } from 'src/components/index'
  import LandingLayout from 'src/pages/Auth/LandingLayout.vue'
  
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
          dob: '',
          password: '',
          confirmedPassword: '',
          agreement: false
        },
        modelValidations: {
          firstName: {
            required: true
          },
          lastName: {
            required: true
          },
          email: {
            required: true,
            email: true
          },
          mobile: {
            required: true
          },
          password: {
            required: true,
            min: 6
          },
          confirmPassword: {
            required: true,
            confirmed: 'password'
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
      resetForm () {
        this.model = {}
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