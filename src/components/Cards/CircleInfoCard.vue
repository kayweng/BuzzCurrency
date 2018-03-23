<template>
  <div class="row">
    <div class="col-lg-3 col-md-4 col-sm-5 col-12" v-if="$slots.member-image || image">
      <slot name="image">
        <img class="img-circle" :style="imageSize" :src="'/static/img/' + image" alt="image">
      </slot>
    </div>
    <div class="col-lg-9 col-md-8 col-sm-7 col-12" v-if="$slots.member-info || name || title || info">
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
  .img-circle{
    border-radius: 50%;
    position: relative;
    top: 50%;
    margin-left:50px;
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

