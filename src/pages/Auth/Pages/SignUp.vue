<template>
  <landing-layout pageClass="login-page" >
    <form method="#" action="#">
      <fade-render-transition :duration="200">
        <card :title="'Create Account'">
          <!-- User Info -->
          <div class="row">
            <!-- first name -->
            <div class="col-md-6 col-12">
              <fg-input type="text"
                        name="first name"
                        label="First Name"
                        placeholder= "Alan"
                        @blur="$v.model.firstName.$touch()"
                        :class="{'input-error': $v.model.firstName.$error }"
                        :maxLength="20"
                        v-model="model.firstName">
              </fg-input>
              <div class="error-message">
                <span v-if="!$v.model.firstName.required" class="error-message">The first name field is required</span>
                <span v-if="$v.model.firstName.required && !$v.model.firstName.alphaSpace" class="error-message">The first name field must be only alphabet characters</span>
              </div>
            </div>
            <!-- last name -->
            <div class="col-md-6 col-12">
              <fg-input type="text"
                        name="last name"
                        label="Last Name"
                        placeholder= "Bob"
                        @blur="$v.model.lastName.$touch()"
                        :class="{'input-error': $v.model.lastName.$error }"
                        :maxLength="30"
                        v-model="model.lastName">
              </fg-input>
              <div class="error-message">
                <span v-if="!$v.model.lastName.required">The last name field is required</span>
                <span v-if="$v.model.lastName.required && !$v.model.lastName.alphaSpace">The last name field must be only alphabet characters</span>
              </div>
            </div>
          </div> 
          <div class="row">
            <!-- email -->
            <div class="col-md-6 col-12">
              <fg-input type="email"
                        name="email"
                        label="Email address"
                        placeholder= "abc@email.com"
                        @blur="$v.model.email.$touch()"
                        :class="{'input-error': $v.model.email.$error }"
                        :maxLength="40"
                        v-model="model.email">
              </fg-input>
              <div class="error-message">
                <span v-if="!$v.model.email.required">The email field is required</span>
                <span v-if="$v.model.email.required && !$v.model.email.email">Invalid email format</span>
              </div>
            </div>
            <!-- mobile -->
            <div class="col-md-6 col-12">
              <fg-input type="mobile"
                        name="mobile"
                        label="Mobile Number"
                        placeholder= "+6012345678"
                        @blur="$v.model.mobile.$touch()"
                        :class="{'input-error': $v.model.mobile.$error }"
                        :maxLength="14"
                        hintClasses="pointer fa fa-mobile green-sea"
                        @hint="showMobileHint"
                        v-model="model.mobile">
              </fg-input>  
              <div class="error-message">
                <span v-if="!$v.model.mobile.numericPlus" class="error-message">Invalid mobile format.Please start with + and country code</span>
              </div>  
            </div>
          </div>
          <div class="row">
            <!-- birthdate -->
            <div class="col-md-6 col-12">
              <fg-input label="Birth Date" 
                        name="birthdate"
                        @blur="$v.model.birthdate.$touch()"
                        :class="{'input-error': $v.model.birthdate.$error }"
                        v-model="model.birthdate">
                <el-date-picker v-model="calendarDate"
                                format="dd-MMM-yyyy"
                                type="date"
                                :class="{'input-error': $v.model.birthdate.$error }"
                                placeholder="Date of Birth"></el-date-picker>
              </fg-input>
              <div class="error-message">
                <span v-if="!$v.model.birthdate.required">The birth date field is required</span>
                <span v-if="$v.model.birthdate.required && !$v.model.birthdate.between">You must be age of 18 or order to sign up</span>
              </div>
            </div>
            <div class="empty-row"></div>
          </div> 
          <hr/>
          <div class="row">
             <!-- Password -->
            <div class="col-md-6 col-12">
              <fg-input label="Password"
                        type="password"
                        name="password"
                        @blur="$v.model.password.$touch()"
                        :class="{'input-error': $v.model.password.$error }"
                        :maxLength="20"
                        v-model="model.password">
              </fg-input>
              <div class="error-message-36">
                <span v-if="!$v.model.password.required" class="error-message">The password field is required</span>
                <span v-if="$v.model.password.required && !$v.model.password.passwordPolicy" class="error-message">Passwords must be at least 8 characters and numbers in length</span>
              </div>
            </div>
            <!-- confirm Password -->
            <div class="col-md-6 col-12">
              <fg-input label="Confirm Password"
                        type="password"
                        name="confirm password"
                        @blur="$v.model.confirmPassword.$touch()"
                        :class="{'input-error': $v.model.confirmPassword.$error }"
                        :maxLength="20"
                        v-model="model.confirmPassword">
              </fg-input>
              <div class="error-message-36">
                <span v-if="!$v.model.confirmPassword.required" class="error-message">The confirm password field is required</span>
                <span v-if="$v.model.confirmPassword.required && !$v.model.confirmPassword.sameAs" class="error-message">The confirm password must be same as password</span>
              </div>
            </div>
          </div>
          <br/>
          <!-- Agreement -->
          <div class="row">
            <check-box v-model="model.agreement" :class="{'input-error': $v.model.agreement.$error }">
              <span class="terms" v-html="terms"></span>
              <div :class="{'error': !$v.model.agreement.required}">
                <p class="terms" :class="{'note-message': $v.model.agreement.required, 'error-message': !$v.model.agreement.required }" >Note: Please tick the check box to accept and agree our terms and agreements</p>
              </div>
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
                <button type="submit" @click.prevent="submitForm" class="btn btn-round btn-submit btn-wd">Submit</button>
              </div>
            </div>
          </div>
        </card>
      </fade-render-transition>
    </form>
  </landing-layout>
</template>

<script>
  import { FadeRenderTransition, Checkbox } from 'src/components/index'
  import SignUpModel from 'src/models/signUpModel'
  import swal from 'sweetalert2'
  import LandingLayout from 'src/pages/Auth/AuthLayout.vue'
  
  export default {
    components: {
      FadeRenderTransition,
      LandingLayout,
      checkBox: Checkbox
    },
    data () {
      return {
        terms: 'By proceeding, I agree that you can collect, use and disclose the information provided by me in accordance with your <a href="#/policy">Privacy Policy</a> which I have read and understand.',
        calendarDate: null,
        model: new SignUpModel()
      }
    },
    validations: {
      model: SignUpModel.validationScheme()
    },
    methods: {
      showMobileHint () {
        this.showNotifyMessage('Please add country code to a mobile number.', 3000, 'info', 'fa fa-mobile')
      },
      resetForm () {
        swal({
          type: 'warning',
          title: 'Reset Sign Up Form',
          html: '<small>Are you confirm to reset all field data in sign up form ?</small>',
          buttonsStyling: false,
          showCancelButton: true,
          confirmButtonClass: 'btn btn-warning btn-round btn-wd',
          confirmButtonText: 'Yes'
        }).then((result) => {
          if (result.value) {
            this.model.resetState()
            this.$v.model.$reset()
          }
        })
      },

      submitForm (event) {
        if (this.$v.model.$invalid || this.$v.model.$error) {
          this.$v.model.$touch()
          return
        }
        
        if (location.hostname !== 'localhost') {
          try {
            var captcha = grecaptcha.getResponse()
            if (captcha.length === 0) {
              throw new Error('Please complete recaptcha upon submit form data')
            }
          } catch (error) {
            this.swalError(error.message)
            return
          }
        }

        this.$store.dispatch('signUp', {
          username: this.model.email,
          password: this.model.password,
          attributes: {
            email: this.model.email,
            name: this.model.name(),
            phone_number: this.model.mobile === null ? null : this.model.mobile,
            birthdate: this.model.birthdate.toISOString().slice(0, 10)
          }
        }).then(() => {
          swal({
            type: 'success',
            title: 'Successfully Signed Up',
            html: '<small>You have been succesfully created an account.<br/>Before you can login, please verify your account with the verification link sent to your email address.</small>',
            showCancelButton: false,
            confirmButtonClass: 'btn btn-primary btn-round btn-wd',
            confirmButtonText: '<i class="fa fa-home"></i> Home',
            buttonsStyling: false
          }).then(function () {
            location.href = '/#/'
          })
        }).catch((error) => {
          this.swalError(error.message)
        })
      }
    },
    watch: {
      calendarDate: function (val) {
        this.model.birthdate = val
      }
    },
    beforeMount () {
      this.model.resetState()
    }
  }
</script>