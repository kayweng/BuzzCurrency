<template>
  <router-view></router-view>
</template>

<script>
  import { store } from 'src/store/index'

  export default {
    methods: {
      clearOff () {
        if (!this.loggedMeIn) {
          store.dispatch('signOut')
        }
      }
    },
    created () {
      window.addEventListener('beforeunload', this.clearOff)
   } 
  }
</script>
