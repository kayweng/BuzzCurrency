<template>
  <fade-render-transition :duration="200">
    <div class="container-fluid">
      <img :src="imagePath" :style="sizeStyle" alt=""/>
      <slot name="title" v-if="$slots.title || title">
        <h5>{{ title }}</h5>
      </slot>
      <slide-render-transition :duration="200">
        <slot name="upload" v-if="$slots.upload || isUpload ">
          <div>
            <div class="empty-row"></div>
            <div class="imgUrl">
              <small>{{ imageUrl }}</small>
            </div>
            <button type="button" @click="uploadImage" class="btn btn-primary btn-sm">Upload Profile Image</button>
          </div>
        </slot>
      </slide-render-transition>
    </div>  
  </fade-render-transition>
</template>

<style scoped>
  .container-fluid{
    width: 100%;
  }

  img {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    min-width: 100px;
    min-height: 100px;
  }

  .imgUrl {
    color: grey;
    padding-bottom: 8px;
  }
</style>

<script>
  import { FadeRenderTransition, SlideRenderTransition } from 'src/components/index'

  export default {
    name: 'circleImg',
    components: {
      FadeRenderTransition,
      SlideRenderTransition
    },
    props: {
      imagePath: {
        type: String
      },
      title: {
        type: String
      },
      sizeStyle: {
        type: String
      },
      isUpload: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        imageUrl: null
      }
    },
    methods: {
      uploadImage () {

      }
    }
  }
</script>
