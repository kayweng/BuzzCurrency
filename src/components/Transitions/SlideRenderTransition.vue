<template>
  <transition name="slide"
              @before-appear="beforeAppear"
              @appear="onAppear"
              @after-appear="afterAppear"
              appear>
    <slot></slot>
  </transition>
</template>
<script>
  export default {
    name: 'slide-render-transition',
    props: {
      duration: {
        type: Number,
        default: 300
      },
      delay: {
        type: Number,
        default: 0
      }
    },
    methods: {
      beforeAppear (el) {
        el.style.opacity = 0
      },
      onAppear (el) {
        el.style.transform = `translateY(25px)`
        el.style.transition = `slide-out ${this.duration / 1000}s forwards`
        if (this.delay > 0) {
          el.style.transition = `${el.style.transition} ${this.delay / 1000}s`
        }
      },
      afterAppear (el) {
        el.style.opacity = 1
        el.style.transform = `translateY(0)`
      }
    }
  }
</script>
<style lang="scss">
  @import "../../assets/sass/lbd/variables";
  @import "../../assets/sass/lbd/mixins";
  
  .slide-enter-active {
    animation: slide-in .4s forwards;
  }
    
  .slide-leave-active{
    animation: slide-out .4s forwards;
    transition: opacity .4s;
    opacity: 0;
  }
  
</style>
