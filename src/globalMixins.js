import swal from 'sweetalert2'
import currency_data from 'src/js/currency_data.js'

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
    currencies () {
      return currency_data
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
    loggedMeIn () {
      const val = localStorage.getItem('keepMeSignedIn')
      return val === undefined ? false : (val === 'true')
    },
    profileImageUrl () {
      return `https://s3-ap-southeast-1.amazonaws.com/profileimage.buzzcurrency.com/${this.cognitoUserEmail}.jpg`
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

    showNotifyMessage (message, duration, type, icon, hAlign, vAlign) {
      this.$notify({
        component: {
          template: `<span>${message}</span>`
        },
        timeout: duration || 3000,
        icon: icon || 'nc-icon nc-bulb-63',
        horizontalAlign: hAlign || 'right',
        verticalAlign: vAlign || 'top',
        type: type || 'primary'
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
