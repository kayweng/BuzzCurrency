<template>
    <landing-layout pageClass="login-page" :contentClass="'col-lg-5 col-md-6 col-sm-8'">>
      <form method="#" action="#">
        <fade-render-transition>
          <card :title="'Forgot Password'">
            <!-- email -->
            <fg-input type="email"
                        name="email"
                        label="Email address"
                        @blur="$v.email.$touch()"
                        :class="{'input-error': $v.email.$error }"
                        v-model="email">
            </fg-input>
            <div class="error-message">
              <span v-if="!$v.email.required" class="error-message">The email field is required</span>
              <span v-if="!$v.email.email" class="error-message">Invalid email format</span>
            </div>
            <div class="empty-row"></div>
            <div class="text-center">
              <button type="submit" @click.prevent="submitForm" class="btn btn-round btn-submit btn-wd">Submit</button>
              <p class="note">Note: A verification email will send to your email inbox</p>
            </div>
          </card>
        </fade-render-transition>
      </form>
    </landing-layout>
</template>

<style>
  .navbar-nav .nav-item p {
    line-height: inherit;
    margin-left: 5px;
  }
  .navbar-wrapper{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
  .wrapper-full-page .navbar-toggler,
  .wrapper-full-page .navbar-collapse .navbar-nav{
    margin-right: 30px;
  }
  .navbar-collapse .navbar-nav .nav-link {
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>

<style lang="scss">
  .vue-notifyjs.notifications{
    .list-move {
      transition: transform 0.3s, opacity 0.4s;
    }
    .list-item {
      display: inline-block;
      margin-right: 10px;

    }
    .list-enter-active {
      transition: transform 0.2s ease-in, opacity 0.4s ease-in;
    }
    .list-leave-active {
      transition: transform 1s ease-out, opacity 0.4s ease-out;
    }

    .list-enter {
      opacity: 0;
      transform: scale(1.1);

    }
    .list-leave-to {
      opacity: 0;
      transform: scale(1.2, 0.7);
    }
  }
</style>

<script>
  import { FadeRenderTransition } from 'src/components/index'
  import * as validator from 'src/validations/customValidator'
  import swal from 'sweetalert2'
  import LandingLayout from 'src/pages/Auth/AuthLayout.vue'

  export default {
    components: {
      FadeRenderTransition,
      LandingLayout
    },
    data () {
      return {
        email: null,
        notifications: {
          topCenter: false
        }
      }
    },
    validations: {
      email: validator.emailAddress
    },
    methods: {
      submitForm (event) {
        console.log(event)
        this.$notify(
        {
          component: {
            template: `<span>A verification code is sent to your email.Please check.</span>`
          },
          icon: 'nc-icon nc-app',
          horizontalAlign: 'right',
          verticalAlign: 'top',
          type: 'success'
        })

        if (this.$v.$invalid || this.$v.$error) {
          this.$v.$touch()
          return
        }

        return 

        this.$store.dispatch('forgotPassword', {
          username: this.email
        }).then(() => {

          this.$notify(
          {
            component: {
              template: '<span>A verification code is sent to your email.Please check.</span>'
            },
            horizontalAlign: 'top',
            verticalAlign: 'right',
            type: 'info'
          })

          setTimeout(vm => {
            vm.$router.push('/confirm-password')
          },1000)
          
        }).catch((error) => {
          if (error.code === 'UserNotFoundException') {
            this.swalError('Incorrect Username')
          }else{
            this.swalError(error.message)
          }
        })
      }
    }
  }
</script>

