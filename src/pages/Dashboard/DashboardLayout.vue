<template>
  <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">
    <notifications></notifications>
    <user-menu></user-menu>
    <side-bar>
      <template slot-scope="props" slot="links">
      </template>
    </side-bar>
  </div>
</template>
<script>
  import UserMenu from './Components/UserMenu.vue'

  export default {
    components: {
      UserMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
