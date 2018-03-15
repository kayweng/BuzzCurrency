<template>
    <div class="center card-item">
        <slot if="$slot['image']" name="image">
          <img :src="'/static/img/' + imgName " />
        </slot>
        <h6>{{ title }} </h6>
        <p class="text-muted">{{ message }}</p>
    </div>
</template>

<style scoped>
    h6{
      padding-top: 15px;
      text-align: center;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
    }

    .card-item {
        display: inline-block;
        vertical-align: top;
        width: 100%;
        min-height: 180px;
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
        font-size: small;
        color: #515A5A;
        padding-top: 10px;
        display: block;
        text-align: left;
    }

</style>

<script>
  export default {
    name: 'card-info',
    props: {
      imgName: String,
      title: String,
      message: String
    }
  }
</script>