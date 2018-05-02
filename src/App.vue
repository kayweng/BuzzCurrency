<template>
  <router-view></router-view>
</template>

<script>
  import { store } from 'src/store/index'

  export default {
    data () {
      return {
        interval: null
      }
    },
    methods: {
      clearOff () {
        if (!this.loggedMeIn) {
          store.dispatch('signOut')
        }
      }
    },
    created () {
      window.addEventListener('beforeunload', this.clearOff)
      var vm = this

      if (this.loggedMeIn) {
        this.interval = setInterval(function(){
          store.dispatch('refreshSession').then(response => {
          }, (error) =>{
            this.logoutUser(true)
            clearInterval(vm.interval)
          })
        }, 3000000) //3000000 = 50mins
      }
    } 
  }
</script>
