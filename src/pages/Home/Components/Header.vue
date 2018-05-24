<template>
  <el-container direction="vertical" class="container-fluid">
    <landing-nav></landing-nav>
    <el-container direction="vertical">
      <el-main class="container-body">
        <el-row class="container-body-row">
          <el-col :span="24">
            <div class="empty-row"></div>
            <h2>EASY EXCHANGE YOUR CURRENCY</h2>
          </el-col>
        </el-row>
      </el-main>
      <el-footer class="default-row">
        <el-row>
          <el-col :span="12">
            <small class="italic white">We are not money changer, we merely provide a better way of currency exchange.</small>
          </el-col>
          <el-col :span="12">
            <div class="right">
              <button class="btn btn-social btn-round btn-outline btn-email white" title="Email us" @click="emailUs">
                <i class="fa fa-envelope-o"></i>
              </button>
              <button class="btn btn-social btn-round btn-outline btn-facebook white" title="Buzz Currency Official Facebook Page" @click="openFacebookPage">
                <i class="fa fa-facebook"></i>
              </button>
            </div>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </el-container>
</template>

<style scoped>

  .container-fluid{
    min-height: 100vh;
    color: white;
    padding-left: 15px;
    background-image: url("/static/img/background/bg_home.jpg");
    background-size: cover;                      
    background-repeat: no-repeat;
    background-position: center center;
  }

  h2{
    background: -webkit-linear-gradient(to right, white, #808B96);
    background: linear-gradient(to right, white, #808B96);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .container-body {
    position: relative;
  }

  .container-body-row {
    position: absolute;
    bottom: 0%;
  }

  /* Large desktops and laptops */
  /* @media (min-width: 768px) {
    .container-fluid{
      min-height: 100vh;
    }
    .empty-row{
      height: 300px;
    }
  }*/
  
  /* Landscape tablets and medium desktops */
  /* @media (min-width: 992px) and (max-width: 1199px) {
    .empty-row{
      height: 250px;
    }
  } */

  /* Portrait tablets and small desktops */
  /* @media (min-width: 768px) and (max-width: 991px) {
    .empty-row{
      height: 200px;
    }
  } */

  /* Landscape phones and portrait tablets */
  /* @media (max-width: 767px) {
    .empty-row{
      height: 180px;
    }
  } */

  /* Portrait phones and smaller */
  /* @media (max-width: 480px) {
      .container-fluid{
        min-height: 240px;
      }
      .empty-row{
        height: 60px;
      }
  } */
</style>

<script>
  import LandingNav from 'src/components/LandingNav.vue'
  
  export default {
    components: {
      landingNav: LandingNav
    },
    methods: {
      openFacebookPage () {
        var fb = window.open('http://www.facebook.com', '_blank');
        fb.focus();
      },
      emailUs () {
        window.location.href = "mailto:customer_support@buzzcurrency.com?";
      }
    }
  }
</script>
