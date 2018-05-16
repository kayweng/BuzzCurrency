<template>
  <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">
    <notifications></notifications>
    <side-bar>
      <user-menu v-model="model">
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
    <v-loading v-if="$loading.isLoading('loading')" class="overlay" loader='loading'>
      <template slot='spinner'>
        <loading-spinner height='30px' width='30px' />
      </template>
    </v-loading>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import UserModel from 'src/models/userModel'
  import UserMenu from './Components/UserMenu.vue'
  import TopNavbar from './Layout/TopNavbar.vue'
  import ContentFooter from './Layout/ContentFooter.vue'
  import DashboardContent from './Layout/Content.vue'
  import loadingSpinner from 'vuex-loading/src/spinners/spinner.vue'
  import swal from 'sweetalert2'

  export default {
    components: {
      UserMenu,
      TopNavbar,
      ContentFooter,
      DashboardContent,
      loadingSpinner
    },
    data () {
      return {
        model: new UserModel()
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
        await this.getUserProfileInfo(this.cognitoUserEmail).then(response => {
          if (response) {
            this.model = this.$store.state.user.profile
          } else {
            this.logoutUser(true)
          }
        })
      },
      resetSessionExpire (vm) {
        setTimeout(function () {
          swal({
            type: 'warning',
            title: 'Session Expire',
            html: '<small>Your session will expire in 60 seconds.<br/>Click Yes to continue, or Cancel to logout.</small>',
            buttonsStyling: false,
            showCancelButton: true,
            confirmButtonClass: 'btn btn-primary btn-round btn-wd',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.value) {
              vm.$store.dispatch('refreshSession').then(response => {
                vm.resetSessionExpire(vm)
              }, (error) => {
                console.log(error)
                vm.logoutUser(true)
              })
            } else {
              vm.logoutUser(true)
            }
          })
        }, 3000000)
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.retrieveUserInfo()
        vm.resetSessionExpire(vm)
      })
    }
}
</script>
