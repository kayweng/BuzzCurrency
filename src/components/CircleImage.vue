<template>
  <div class="container-fluid">
    <img :src="imagePath" :style="sizeStyle" alt="image"/>
    <slot name="title" v-if="$slots.title || title">
      <h5>{{ title }}</h5>
    </slot>
    <slot name="upload" v-if="$slots.upload || isUpload ">
      <div class="empty-row"></div>
      <div class="imgUrl">
        <small>{{ imageUrl }}</small>
      </div>
      <button type="button" @click="uploadImage" class="btn btn-primary btn-sm">Upload Profile Image</button>
    </slot>
  </div>  
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
  }

  .imgUrl {
    color: grey;
    padding-bottom: 8px;
  }
</style>

<script>
  export default {
    name: 'circleImg',
    props: {
      imagePath: {
        type: String
      },
      title: {
        type: String
      },
      sizeStyle: {
        type:String
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
