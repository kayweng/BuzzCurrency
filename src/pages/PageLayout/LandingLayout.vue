<template>
  <div>
    <div class="wrapper wrapper-full-page">
      <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute">
        <div class="container">
          <div class="navbar-wrapper">
            <div class="home">
                <router-link to="/#" tag="button" class="btn btn-social btn-outline btn-round ">
                  <i class="fa fa-home"> </i>
                </router-link>
            </div>
          </div>
        </div>
      </nav>
      <div class="full-page" :data-color="backgroundColor" :class="pageClass">
        <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple | black" -->
        <div class="content">
          <div class="container">
            <slot></slot>
          </div>
        </div>
        <div class="full-page-background"
             style="background-image: url(static/img/full-screen-image-1.jpg) "></div>
        </div>
    </div>
  </div>
</template>
<script>
  import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'

  export default {
    components: {
      [CollapseTransition.name]: CollapseTransition
    },
    props: {
      pageClass: {
        type: String,
        default: 'login-page'
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
