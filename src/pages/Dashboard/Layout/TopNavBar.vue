<template>
  <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
      <div class="navbar-minimize">
        <button class="btn btn-outline btn-fill btn-round btn-icon d-none d-lg-block" @click="minimizeSidebar">
          <i :class="$sidebar.isMinimized ? 'fa fa-ellipsis-v' : 'fa fa-navicon'"></i>
        </button>
      </div>
      <!-- <a class="navbar-brand">{{this.$route.name}}</a> -->
      <button type="button"
              class="navbar-toggler navbar-toggler-right"
              :class="{toggled: $sidebar.showSidebar}"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
              @click="toggleSidebar">
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav">
          <drop-down position="right">
            <i slot="title" class="nc-icon nc-bullet-list-67"></i>
            <a href="#" @click="logout" class="dropdown-item text-danger">
              <i class="nc-icon nc-button-power"></i> Log out
            </a>
          </drop-down>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data () {
      return {
        activeNotifications: false
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      },
      minimizeSidebar () {
        this.$sidebar.toggleMinimize()
      },
      logout () {
        this.logoutUser(false)
      }
    }
  }

</script>
<style>

</style>
