<template>
  <el-container direction="vertical">
    <el-row class="col-12 center">
      <div :class="{'text-success': confirmPasswordResult.success, 'text-danger': !confirmPasswordResult.success  }">
        {{ confirmPasswordResult.message }}
      </div>
      <div class="empty-row"></div>
      <div class="row" v-if="!confirmPasswordResult.success">
        <div class="col-md-6 col-12">
          <button type="button" @click="resetWizardForm" class="btn btn-simple btn-link btn-sm">Try again</button>
        </div>
        <div class="col-md-6 col-12">
          <button type="button" @click="resetVerficationCode" class="btn btn-simple btn-link btn-sm">Resend verification code</button>
        </div>
      </div>
    </el-row>
  </el-container>
</template>

<script>
  export default {
    props: ['confirmPasswordResult'],
    methods: {
      resetWizardForm () {
        this.$emit('reset', true)
      },
      resetVerficationCode () {
        this.$router.push('/reset-password')
      }
    }
  }
</script>


