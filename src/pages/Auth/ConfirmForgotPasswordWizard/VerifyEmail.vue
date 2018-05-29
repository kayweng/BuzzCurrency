<template>
  <el-container direction="vertical">
    <el-row class="col-md-6 offset-md-3 col-10 offset-1 center">
      <fg-input type="email"
                name="email"
                label="Email address"
                @blur="$v.email.$touch()"
                :class="{'input-error': $v.email.$error }"
                :maxLength="40"
                v-model="email">
      </fg-input>
    </el-row>
    <div class="center error-message">
      <span v-if="!$v.email.required" class="error-message">The email field is required</span>
      <span v-if="!$v.email.email" class="error-message">Invalid email format</span>
    </div>
  </el-container>
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
      },
      reset () {
        this.email = null
      }
    }
  }
</script>


