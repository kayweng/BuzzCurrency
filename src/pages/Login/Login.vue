<template>
  <landing-layout pageClass="login-page">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-lg-4 col-md-6 col-sm-8">
        <form method="#" action="#">
          <!--You can specify transitions on initial render. The `card-hidden` class will be present initially and then it will be removed-->
          <fade-render-transition>
            <card>
              <div slot="header">
                <h3 class="card-title text-center">Login</h3>
              </div>
              <div>
                <fg-input label="Email address"
                          placeholder="Enter email"
                          type="email"
                          v-model="model.email">

                </fg-input>
                <fg-input label="passsword"
                          type="password"
                          placeholder="Password"
                          v-model="model.password">
                </fg-input>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-fill btn-primary btn-round btn-wd ">Login</button>
                <br>
                <div class="forgot">
                  <router-link to="/register" class="card-category">
                    Forgot your password?
                  </router-link>
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
        }
      }
    },
    methods: {
      toggleNavbar () {
        document.body.classList.toggle('nav-open')
      },
      closeMenu () {
        document.body.classList.remove('nav-open')
        document.body.classList.remove('off-canvas-sidebar')
      }
    },
    beforeDestroy () {
      this.closeMenu()
    }
  }
</script>
<style>
  .navbar-nav .nav-item p{
    line-height: inherit;
    margin-left: 5px;
  }
</style>
