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
    }
  },
  methods: {
    toInteger: function (number) {
      return Math.round(Number(number))
    }
  }
}
