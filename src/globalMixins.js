import swal from 'sweetalert2'

export default {
  computed: {
    deviceType () {
      var device = 'large-device'

      if (this.$mq.below('width', 420)) {
        device = 'mobile'
      } else if (this.$mq.below('width', 768)) {
        device = 'small-device'
      } else if (this.$mq.below('width', 1204)) {
        device = 'medium-device'
      }

      return device
    },
    countries () {
      const countries = [
        {value: 'MY', label: 'Malaysia'},
        {value: 'SG', label: 'Singapore'}
      ]

      return countries
    },
    genders () {
      const genders = [
        {value: 'M', label: 'Male'},
        {value: 'F', label: 'Female'}
      ]

      return genders
    },
    
  },
  watch: {
    loggedMeIn () {
      const val = localStorage.getItem('keepmeloggedin')
      return val === undefined ? false : val
    }
  },
  methods: {
    toInteger: function (number) {
      return Math.round(Number(number))
    },
    
    swalError (message) {
      swal({
        type: 'error',
        title: 'Oops...',
        html: '<small>' + message + '</small>',
        buttonsStyling: false,
        confirmButtonClass: 'btn btn-warning btn-round btn-wd'
      })
    },

    swalSuccess (title, message) {
      swal({
        type: 'success',
        title: title,
        html: '<small>' + message + '</small>',
        buttonsStyling: false,
        confirmButtonClass: 'btn btn-info btn-round btn-wd'
      })
    },

    logoutUser (sessionExpired) {
      if (!sessionExpired) {
        swal({
          type: 'warning',
          title: 'Logout',
          html: '<small>Are you sure want to logout ?</small>',
          buttonsStyling: false,
          showCancelButton: true,
          confirmButtonClass: 'btn btn-warning btn-round btn-wd',
          confirmButtonText: 'Yes'
        }).then((result) => {
          if (result.value) {
            this.$store.dispatch('signOut')
            this.$router.push(sessionExpired ? '/login?s=true' : 'Login')
          }
        })
      } else {
        this.$store.dispatch('signOut')
        this.$router.push(sessionExpired ? '/login?s=true' : 'Login')
      }
    }
  }
}
