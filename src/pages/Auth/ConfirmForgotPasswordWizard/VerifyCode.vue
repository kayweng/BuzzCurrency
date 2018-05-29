<template>
  <el-container direction="vertical">
    <el-row class="col-md-4 offset-md-4 col-6 offset-3 center">
      <fg-input label="Enter Code"
                pattern="\d*"
                name="code"
                :maxLength="6"
                @blur="$v.code.$touch()"
                :class="{'input-error': $v.code.$error, 'center': true }"
                v-model="code">
      </fg-input>
    </el-row>
    <div class="center error-message">
      <span v-if="!$v.code.required" class="error-message">The verification code field is required</span>
      <span v-if="$v.code.required && !$v.code.numeric" class="error-message">The verification code field accept numeric only</span>
    </div>
  </el-container>
</template>

<script>
  import { required, numeric } from 'vuelidate/lib/validators'

  export default {
    data () {
      return {
        code: null
      }
    },
    validations: {
      code: {
        required,
        numeric
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
      },
      reset () {
        this.code = null
      }
    }
  }
</script>


