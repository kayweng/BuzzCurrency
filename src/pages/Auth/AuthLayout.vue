<template>
  <div class="wrapper wrapper-full-page">
    <landing-nav></landing-nav>
    <div class="full-page" :data-color="backgroundColor" :class="pageClass">
      <div class="content">
        <div class="container">
          <div class="row d-flex justify-content-center align-items-center">
            <div :class="contentClass">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
      <div class="full-page-background" style="background-image: url(static/img/bg_auth.jpg) "></div>
    </div>
  </div>
</template>

<script>
  import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
  import LandingNav from 'src/components/LandingNav.vue'

  export default {
    components: {
      [CollapseTransition.name]: CollapseTransition,
      landingNav: LandingNav
    },
    props: {
      pageClass: {
        type: String,
        default: 'login-page'
      },
      contentClass: {
        type: String,
        default: 'col-lg-8 col-sm-10'
      },
      backgroundColor: {
        type: String,
        default: 'black'
      }
    },
    data () {
      return {
        showMenu: true
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
