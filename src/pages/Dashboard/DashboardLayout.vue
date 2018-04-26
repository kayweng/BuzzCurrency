<template>
  <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">
    <notifications></notifications>
    <side-bar>
      <user-menu v-model="userInfo">
        <li class="nav-item">
          <a class="nav-link sidebar-menu-item" href="#/user-profile">
            <i class="nc-icon nc-circle-09"></i>
            <p class="sidebar-normal">My Profile</p>
          </a>
        </li>
        <li class="nav-item" v-if="this.$sidebar.showSidebar">
          <a class="nav-link sidebar-menu-item text-danger" @click="logout">
            <i class="nc-icon nc-button-power"></i>
            <p class="sidebar-normal text-danger">Logout</p>
          </a>
        </li>
      </user-menu>
      <template slot-scope="props" slot="links">
        <!-- dashboard: show summary info -->
        <sidebar-item :link="{name: 'Dashboard', icon: 'nc-icon nc-badge', path: '/dashboard'}">
        </sidebar-item>
        <!-- new post: user create a new exchange request post -->
        <sidebar-item :link="{name: 'Exchange', icon: 'nc-icon nc-puzzle-10'}">
          <sidebar-item :link="{name: 'Request', path: '/components/request'}"></sidebar-item>
          <sidebar-item :link="{name: 'Offer', path: '/components/offer'}"></sidebar-item>
        </sidebar-item>
        <!-- map: show pin location of available post on map -->
        <sidebar-item :link="{name: 'Map', icon: 'nc-icon nc-map-big', path: '/map'}">
        </sidebar-item>
        <!-- setting: application configuration -->
        <sidebar-item :link="{name: 'Setting', icon: 'nc-icon nc-settings-gear-64', path: '/settings'}">
        </sidebar-item>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content @click="toggleSidebar"></dashboard-content>
      <content-footer></content-footer>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import UserMenu from './Components/UserMenu.vue'
  import TopNavbar from './Layout/TopNavbar.vue'
  import ContentFooter from './Layout/ContentFooter.vue'
  import DashboardContent from './Layout/Content.vue'

  export default {
    components: {
      UserMenu,
      TopNavbar,
      ContentFooter,
      DashboardContent
    },
    data () {
      return {
        userInfo: {
          name: null,
          status: null,
          imageUrl: 'static/img/faces/user.jpg'
        }
      }
    },
    computed: {
      ...mapGetters([
        'cognitoUserEmail',
        'cognitoUserName'
      ])
    },
    methods: {
      ...mapActions([
        'getUserProfileInfo'
      ]),
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      },
      logout () {
        this.logoutUser(false)
      },
      async retrieveUserInfo () {
        if (this.cognitoUserEmail !== null) {
          await this.getUserProfileInfo(this.cognitoUserEmail).then(response => {
            if (response === null || response === undefined) {
              this.logoutUser(true)
            } else {
              this.userInfo.name = this.$store.state.user.profile.lastName
              this.userInfo.status = this.$store.state.user.profile.userType === 1 ? 'User' : 'Genuine User'
              this.userInfo.imageUrl = this.$store.state.user.profile.imageUrl === null ? 'static/img/faces/user.jpg' : this.$store.state.user.profile.imageUrl
            }
          }).catch(error => {
            console.log(error)
            this.logoutUser(true)
          })
        } else {
          this.logoutUser(true)
        }
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => { vm.retrieveUserInfo() })
    }
}
</script>
