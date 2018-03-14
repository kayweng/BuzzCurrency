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
                        v-model="model.mobile">
              </fg-input>  
              <div class="error-message">
                <span v-if="!$v.model.mobile.numericPlus" class="error-message">Invalid format.Start with + and numeric only</span>
              </div>  
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
              <div class="error-message">
                <span v-if="!$v.model.dob.required">The date of birth field is required</span>
                <span v-if="$v.model.dob.required && !$v.model.dob.between">The date of birth must between {{$v.model.dob.$params.between.min.getFullYear() }} and {{$v.model.dob.$params.between.max.getFullYear() - 1}}</span>
              </div>
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
              <div class="error-message">
                <span v-if="!$v.model.password.required" class="error-message">The password field is required</span>
                <span v-if="$v.model.password.required && !$v.model.password.minLength" class="error-message">Insufficient length ({{$v.model.password.$params.minLength.min}}) of password</span>
              </div>
            </div>
            <div class="col-md-6 col-12">
              <fg-input label="Confirm Password"
                        type="password"
                        name="confirm password"
                        @blur="$v.model.confirmPassword.$touch()"
                        :class="{'input-error': $v.model.confirmPassword.$error }"
                        v-model="model.confirmPassword">
              </fg-input>
              <div class="error-message">
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
              <p class="terms" :class="{'note-message': $v.model.agreement.required, 'error-message': !$v.model.agreement.required }" >Note: Please tick the check box to accept and agree our terms and agreements</p>
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
  import { required, email, minLength, between, sameAs, alpha, numeric } from 'vuelidate/lib/validators'
  import { DatePicker } from 'element-ui'
  import { FadeRenderTransition, Checkbox } from 'src/components/index'
  import { date } from 'src/plugins/date'
  import swal from 'sweetalert2'
  import LandingLayout from 'src/pages/Auth/AuthLayout.vue'
  
  export default {
    components: {
      FadeRenderTransition,
      LandingLayout,
      checkBox: Checkbox,
      [DatePicker.name]: DatePicker
    },
    data () {
      return {
        terms: 'By proceeding, I agree that you can collect, use and disclose the information provided by me in accordance with your <a href="#">Privacy Policy</a> which I have read and understand.',
        birthdayDate: null,
        model: {
          firstName: null,
          lastName: null,
          email: null,
          mobile: null,
          dob: null,
          password: null,
          confirmedPassword: null,
          agreement: false,
          reCaptcha: false
        }
      }
    },
    validations: {
      model: {
        firstName: {
          required,
          alphaSpace: val => {
            var regex = new RegExp(/^[a-zA-Z ]*$/)
            return regex.test(val)
          }
        },
        lastName: {
          required,
          alphaSpace: val => {
            var regex = new RegExp(/^[a-zA-Z ]*$/)
            return regex.test(val)
          }
        },
        email: {
          required,
          email
        },
        mobile: {
          numericPlus: val => {
            if (val === null || val === '' || val === undefined) {
              return true
            }
            
            var regex = new RegExp(/^\+\d{6,14}$/)
            return regex.test(val)
          }
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
    computed: {
      name () {
        return this.model.firstName + ' ' + this.model.lastName
      }
    },
    methods: {
      resetForm () {
        this.model = {}
        this.$v.model.$reset()
      },
      submitForm (event) {
        if (this.$v.model.$invalid || this.$v.model.$error) {
          this.$v.model.$touch()
          return
        }

        var captcha = grecaptcha.getResponse();

        if (captcha.length === 0) {
          alert('Please complete recaptcha upon submit form data')
          return
        }
        
        this.$store.dispatch('signUp', {
          username: this.model.email,
          password: this.model.password,
          attributes: {
            email: this.model.email,
            name: this.name,
            phone_number: this.model.mobile === null ? null : '+' + this.model.mobile,
            birthdate: this.model.dob.toISOString().slice(0,10)
          }
        }).then(() => {
          swal({
            title: 'Created New Account',
            text: 'You have been succesfully create account. Before you can login, please verify your account with the verification link sent to your email address.',
            type: 'success',
            showCancelButton: false,
            confirmButtonClass: 'btn btn-home btn-round btn-wd',
            confirmButtonText: 'Home Page',
            buttonsStyling: false
          }).then(function () {
            this.$route.router.go('/')  // Back to Home page
          })
        }).catch((error) => {
          swal({
            title: 'Error',
            text: error.message,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-info btn-round btn-wd'
          })
        })
      }
    },
    watch: {
      birthdayDate: function (val) {
        this.model.dob = val
      }
    }
  }
</script>