<template>
    <div class="landing-div">
        <i :class="icon" style="font-size:16px;color:white;"></i>
        <router-link to="/" tag="label" class="pointer">{{ title }}</router-link>
        <div class="button-inline">
            <router-link to="/signup" tag="button" class="btn btn-round btn-signup">Sign Up</router-link>
            <router-link to="/login" tag="button" class="btn btn-outline btn-round btn-login">Sign In</router-link>
        </div>
    </div>
</template>

<style scoped>
  
  .landing-div{
    min-height: 60px;
    width: 100%;
    padding: 10px 15px 10px 15px;
    color: white !important;
    z-index: 100;
    position: relative;
  }

  .button-inline {
    display: inline;
    float: right;
  }

  label{
    padding-top: 8px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: medium;
    font-weight: 900;
  }
</style>

<script>
  export default {
    name: 'landing-nav',
    props: {
      title: String,
      icon: String
    }
  }
</script>
