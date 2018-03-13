<template>
  <div class="container-fluid bg">
    <div class="row">
      <div class="col-6">
        <button class="btn btn-social btn-facebook btn-link white">
          <p class="copyright">© Buzz Currency 2018</p>
        </button>  
      </div>
      <div class="col-6">
        <div class="social">
          <button class="btn btn-social btn-round btn-facebook btn-outline white">
              <i class="fa fa-facebook"> </i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .bg{
      vertical-align: middle;
      background: linear-gradient(to right, #34495E, #5499C7);
      max-height: 55px !important;
  }

  p.copyright{
      padding-top: 10px;
      padding-left: 30px;
  }

  .social{
      float: right;
      padding-top: 10px;
      padding-right: 15px;
  }
</style>