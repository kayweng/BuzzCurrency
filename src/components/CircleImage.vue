<template>
  <fade-render-transition :duration="200">
    <div class="container-fluid">
      <div class="center" v-if="this.$loading.anyLoading">
        <v-loading loader='loadImage'>
          <template slot='spinner'>
            <loading-spinner height='30px' width='30px' />
          </template>
        </v-loading>
      </div>
      <img :src="imagePath" :style="sizeStyle" alt="" v-else/>
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
            <p class="file">
              <input type="file" @change="uploadImage" name="file" id="fileUpload" accept="image/x-jpg,image/jpeg"/>
              <label for="fileUpload">Upload</label>
            </p>
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
    min-width: 120px;
    min-height: 120px;
  }

  .imgUrl {
    color: grey;
    padding-bottom: 8px;
  }
</style>

<script>
  import { FadeRenderTransition, SlideRenderTransition } from 'src/components/index'
  import loadingSpinner from 'vuex-loading/src/spinners/spinner.vue'

  export default {
    name: 'circleImg',
    components: {
      FadeRenderTransition,
      SlideRenderTransition,
      loadingSpinner
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
      },
      maxSize: {
        type: Number,
        default: 500000  // 500KB
      }
    },
    data () {
      return {
        imageUrl: null
      }
    },
    methods: {
      uploadImage () {
        var uploadControl = document.getElementById('fileUpload')

        if (uploadControl.files.length > 0) {
          var file = uploadControl.files[0]

          // check file size, 450KB
          if (file.size > this.maxSize) {
            this.swalError(`Selected file size of image exceeds ${this.maxSize / 1000} KB.`)
            return
          }

          // check image types
          if (file.type.substring(0, 5) !== 'image') {
            this.swalError('Accept only image file such as JPG/JPEG')
            return
          }

          // return image object
          this.$emit('change', file)
        }
      }
    },
    watch: {
      imagePath (val) {
        if (val) {
          this.$loading.endLoading('loadImage')
        } else {
          this.$loading.startLoading('loadImage')
        }
      }
    }
  }
</script>
