<template>
    <div class="container-fluid bg">
      <div class="get-started-info row white">
        <h3>Get started to change your way of exchange foregin currency today</h3>
        <p>Register an account to explores more currency rates in our platform and remember authenticate yourself to be a genuine user for enjoy more features.</p>
      </div>
      <div class="row">
        <router-link class="btn btn-primary btn-wd" to="/signup" tag="button">Join now</router-link>
      </div>
    </div>
</template>

<style scoped>
  .bg{
      background: linear-gradient(to right, #154360, #5499C7);
      min-height: 250px;
  }

  .btn{
      margin-left: 100px;
      background-color: #CB4335;
      border-color: white;
      height: 40px;
      box-shadow: 1px 2px grey;
  }

  .get-started-info{
      padding-top: 15px; 
      padding-left: 100px;
      padding-right: 100px;
  }

  .get-started-info > p{
      margin-top: 10px;
      font-size: 14px;
      width: 100%;
  }

  /* Landscape phones and portrait tablets */
  @media (max-width: 767px) {
     .get-started-info{
      padding-left: 75px;
      padding-right: 75px;
    }
    .btn{
      margin-left: 75px;
    }
  }

  /* Portrait phones and smaller */
  @media (max-width: 480px) {
    .get-started-info{
      padding-left: 50px;
      padding-right: 50px;
    }
    .btn{
      margin-left: 50px;
    }
  }

  h3{
      margin-bottom: 0;
      font-weight: bold;
      width: 100%;
  }
</style>
