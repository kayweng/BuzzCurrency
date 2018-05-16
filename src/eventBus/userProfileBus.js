import Vue from 'vue'

export const UserProfileBus = new Vue({
  methods: {
    setUserProfileImage (data) {
      this.$emit('setUserImage', data)
    }
  }
})
