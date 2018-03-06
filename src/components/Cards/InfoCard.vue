<template>
    <div class="card-item col-md-3 col-sm-6 col-xs-6">
        <slot name="image"></slot>
        <img :src="'/static/img/' + imgName " />
        <p class="text-muted">{{ message }}</p>
    </div>
</template>

<style scoped>
    .card-item {
        display: inline-block;
        vertical-align: top;
        width: 100%;
        height: 180px;
        padding-left: 15px;
        padding-right: 15px;
    }

    .card-item > img{
        height: 60px;
        width: 60px;
        display: block; /*for the img inside your div */ 
        margin: 0 auto; 
    }

    .card-item > p{
        font-size: medium;
        color: #515A5A;
        padding-top: 30px;
        display: block;
        text-align: center;
    }

</style>

<script>
  export default {
    name: 'card-info',
    props: {
      imgName: String,
      message: String
    }
  }
</script>