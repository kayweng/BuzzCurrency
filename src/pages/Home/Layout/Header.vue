<template>
  <div class="container-fluid bg">
    <landing-nav></landing-nav>
    <div class="empty-row">&nbsp;</div>
    <div class="bg-div">
      <div>
        <h2>EASY EXCHANGE YOUR CURRENCY</h2>
      </div>
      <div style="padding-bottom: 10px; color: white">
        <small>New to Buzz Currency ? </small>
        <i class="fa fa-book" style="font-size:16px; color: white;"></i>
        <a class="small white" href="#">Learn More</a>
      </div>
    </div>
  </div>
</template>

<style scoped>

  .bg{
      padding-left: 15px;
      background-image: url("/static/img/background/bg_home.jpg");
      background-size: cover;                      
      background-repeat: no-repeat;
      background-position: center center;
  }

  .bg-div{
      padding: 15px;
      color: white;
  }

  h2{
      background: -webkit-linear-gradient(to right, white, #808B96);
      background: linear-gradient(to right, white, #808B96);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
  }

  /* Large desktops and laptops */
  @media (min-width: 1200px) {
      .bg{
            min-height: 400px;
      }
      .empty-row{
          height: 200px;
      }
  }

  /* Landscape tablets and medium desktops */
  @media (min-width: 992px) and (max-width: 1199px) {
      .bg{
            min-height: 300px;
      }
      .empty-row{
          height: 150px;
      }
  }

  /* Portrait tablets and small desktops */
  @media (min-width: 768px) and (max-width: 991px) {
      .bg{
            min-height: 200px;
      }
      .empty-row{
          height: 120px;
      }
  }

  /* Landscape phones and portrait tablets */
  @media (max-width: 767px) {
      .bg{
            min-height: 100px;
      }
      .empty-row{
          height: 70px;
      }
  }

  /* Portrait phones and smaller */
  @media (max-width: 480px) {
      .bg{
            min-height: 120px;
      }
      .empty-row{
          height: 30px;
      }
  }
</style>

<script>
  import LandingNav from 'src/components/LandingNav.vue'

  export default {
    components: {
      landingNav: LandingNav
    }
  }
</script>
