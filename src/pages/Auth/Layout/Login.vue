<template>
  <landing-layout pageClass="login-page" :contentClass="'col-lg-5 col-md-6 col-sm-8'">
    <form method="#" action="#">
      <fade-render-transition>
        <card :title="'Sign In'">
          <!-- Login Inputs -->
          <div>
            <fg-input type="email"
                      name="email"
                      label="Email address"
                      @blur="$v.model.email.$touch()"
                      :class="{'input-error': $v.model.email.$error }"
                      v-model="model.email">
            </fg-input>
            <span v-if="!$v.model.email.required" class="error-message">The email field is required</span>
            <span v-if="!$v.model.email.email" class="error-message">Invalid email format</span>

            <fg-input label="Password"
                      type="password"
                      name="password"
                      @blur="$v.model.password.$touch()"
                      :class="{'input-error': $v.model.password.$error }"
                      v-model="model.password">
            </fg-input>
            <span v-if="!$v.model.password.required" class="error-message">The password field is required</span>
            <span v-if="!$v.model.password.minLength" class="error-message">The password length must have at least {{$v.model.password.$params.minLength.min}} characters</span>
          </div>
          <div class="empty-row"></div>
          <!-- Buttons -->
          <div class="text-center">
            <button @click.enter.prevent="validate" type="submit" class="btn btn-fill btn-primary btn-round btn-wd ">Login</button>
            <br>
            <div class="forgot">
              <router-link to="/reset-password" class="card-category">Forgot your password?</router-link>
            </div>
          </div>
        </card>
      </fade-render-transition>
    </form>
  </landing-layout>
</template>

<script>
  import { required, email, minLength } from 'vuelidate/lib/validators'
  import { FadeRenderTransition } from 'src/components/index'
  import LandingLayout from 'src/pages/Auth/AuthLayout.vue'

  export default {
    components: {
      FadeRenderTransition,
      LandingLayout
    },
    data () {
      return {
        model: {
          email: null,
          password: null
        }
      }
    },
    validations: {
      model: {
        email: {
          required,
          email
        },
        password: {
          required,
          minLength: minLength(6)
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