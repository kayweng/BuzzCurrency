<template>
  <landing-layout pageClass="login-page">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-lg-4 col-md-6 col-sm-8">
        <form method="#" action="#">
          <fade-render-transition>
            <card>
              <!-- Header -->
              <div slot="header">
                <h3 class="card-title text-center">Sign In</h3>
              </div>
              <!-- Login Inputs -->
              <div>
                <fg-input type="email"
                          name="email"
                          label="Email address"
                          v-validate="modelValidations.email"
                          :error="getError('email')"
                          v-model="model.email">
                </fg-input>
                <fg-input label="Password"
                          type="password"
                          name="password"
                          v-validate="modelValidations.password"
                          :error="getError('password')"
                          v-model="model.password">
                </fg-input>
              </div>
              <!-- Buttons -->
              <div class="text-center">
                <button type="submit" class="btn btn-fill btn-primary btn-round btn-wd ">Login</button>
                <br>
                <div class="forgot">
                  <router-link to="/register" class="card-category">Forgot your password?</router-link>
                </div>
              </div>
            </card>
          </fade-render-transition>
        </form>
      </div>
    </div>
  </landing-layout>
</template>
<script>

  import { FadeRenderTransition } from 'src/components/index'
  import LandingLayout from 'src/pages/PageLayout/LandingLayout.vue'
 
  export default {
    components: {
      FadeRenderTransition,
      LandingLayout
    },
    data () {
      return {
        model: {
          email: '',
          password: '',
        },
        modelValidations: {
          email: {
            required: true
          },
          password: {
            required: true
          }
        }
      }
    },
    methods: {
      getError (fieldName) {
        return this.errors.first(fieldName)
      }
    }
  }
</script>