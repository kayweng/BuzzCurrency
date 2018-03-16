<template>
  <div>
    <div class="col-md-6 offset-md-3 col-10 offset-1 text-center">
      <fg-input type="email"
                name="email"
                label="Email address"
                @blur="$v.email.$touch()"
                :class="{'input-error': $v.email.$error }"
                :maxLength="40"
                v-model="email">
      </fg-input>
    </div>
    <div class="col-12 text-center error-message">
      <span v-if="!$v.email.required" class="error-message">The email field is required</span>
      <span v-if="!$v.email.email" class="error-message">Invalid email format</span>
    </div>
  </div>
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators'

  export default {
    data () {
      return {
        email: null
      }
    },
    validations: {
      email: {
        required,
        email
      }
    },
    methods: {
      validate () {
        if (this.$v.email.$invalid || this.$v.email.$error) {
          this.$v.email.$touch()
          return false
        }

        this.$emit('on-validated', this.email)
        return true
      }
    }
  }
</script>


