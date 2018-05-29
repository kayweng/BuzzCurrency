<template>
  <div class="row text-center">
    <div class="col-sm-6 col-12">
      <fg-input label="New Password"
                type="password"
                name="new password"
                @blur="$v.model.newPassword.$touch()"
                :class="{'input-error': $v.model.newPassword.$error }"
                v-model="model.newPassword">
      </fg-input>
      <div class="error-message-36">
        <span v-if="!$v.model.newPassword.required" class="error-message">The password field is required</span>
        <span v-if="$v.model.newPassword.required && !$v.model.newPassword.passwordPolicy" class="error-message">Passwords must be at least 8 characters and numbers in length</span>
      </div>
    </div>
    <div class="col-sm-6 col-12">
      <fg-input label="Confirm Password"
                type="password"
                name="confirm password"
                @blur="$v.model.confirmPassword.$touch()"
                :class="{'input-error': $v.model.confirmPassword.$error }"
                v-model="model.confirmPassword">
      </fg-input>
      <div class="error-message-36">
        <span v-if="!$v.model.confirmPassword.required" class="error-message">The confirm password field is required</span>
        <span v-if="$v.model.confirmPassword.required && !$v.model.confirmPassword.sameAs" class="error-message">The confirm password must be same as password</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { password, confirmNewPassword } from 'src/validations/userValidator.js'

  export default {
    data () {
      return {
        model: {
          newPassword: null,
          confirmPassword: null
        }
      }
    },
    validations: {
      model: {
        newPassword: password,
        confirmPassword: confirmNewPassword
      }
    },
    methods: {
      validate () {
        if (this.$v.model.$invalid || this.$v.model.$error) {
          this.$v.model.$touch()
          return false
        }

        this.model.confirmPassword = this.model.newPassword

        this.$emit('on-validated', this.model)
        return true
      },
      reset () {
        this.model.newPassword = null
        this.model.confirmPassword = null
      }
    }
  }
</script>


