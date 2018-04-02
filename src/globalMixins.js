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
      var countries = [
        { value: 'MY', label: 'Malaysia' },
        { value: 'SG', label: 'Singapore'}
      ]

      return countries
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
    }
  }
}
