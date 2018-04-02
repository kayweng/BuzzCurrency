<template>
  <div class="row">
    <div class="col-md-3 col-sm-5 col-12 text-center" v-if="$slots.member-image || image">
      <slot name="image">
        <img class="img-circle" :style="imageSize" :src="'/static/img/' + image" alt="image">
      </slot>
    </div>
    <div class="col-md-9 col-sm-7 col-12" v-if="$slots.member-info || name || title || info">
      <slot name="info">
          <div class="inner-info white">
            <h5>{{ name }}</h5>
            <p class="italic gill-Sans"><span>{{title}}</span></p>
            <p class="info gill-Sans">{{info}}</p>
          </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>

  /* Large desktops and laptops */
  @media (min-width: 1200px) {
    .img-circle{
      margin-left: 15px;
    }
  }

  @media (max-width: 767px) {
    .inner-info{
      text-align: center;
    }
  }

  .img-circle{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .inner-info{
    padding: 20px;
    height:200px;
    max-height: 200px;
  }

  @media (max-width: 480px) {
    .info{
      display: none;
    }
  }
</style>

<script>
  export default {
    name: 'circle-info-card',
    props: ['image', 'name', 'title', 'info', 'imageSize']
  }
</script>

