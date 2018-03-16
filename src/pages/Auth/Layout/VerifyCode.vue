<template>
  <div class="col-6 offset-3 text-center">
    <fg-input label="Enter Code"
              type="number"
              name="code"
              :maxLength="6"
              @blur="$v.code.$touch()"
              :class="{'input-error': $v.code.$error }"
              v-model="code">
    </fg-input>
    <div class="error-message">
      <span v-if="!$v.code.required" class="error-message">The verification code field is required</span>
      <span v-if="$v.code.required && !$v.code.minLength" class="error-message">Insufficient length of code</span>
    </div>
  </div>
</template>

<script>
  import { required, numeric, minLength, maxLength } from 'vuelidate/lib/validators'

  export default {
    data () {
      return {
        code: null
      }
    },
    validations: {
      code: {
        required,
        numeric,
        minLength: minLength(6),
        maxLength: maxLength(6)
      }
    },
    methods: {
      validate () {
        if (this.$v.code.$invalid || this.$v.code.$error) {
          this.$v.code.$touch()
          return false
        }

        this.$emit('on-validated', this.code)
        return true
      }
    }
  }
</script>


