export default {
  computed: {
    deviceType () {
      var device = 'large-device'

      if (this.$mq.below('width', 767)) {
        device = 'mobile'
      } else if (this.$mq.below('width', 768) && this.$mq.below('width', 991)) {
        device = 'small-device'
      } else if (this.$mq.below('width', 992) && this.$mq.below('width', 1199)) {
        device = 'medium-device'
      }

      return device
    }
  }
}
