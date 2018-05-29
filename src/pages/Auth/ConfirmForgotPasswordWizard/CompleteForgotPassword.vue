<template>
  <el-container direction="vertical">
    <el-row class="center" v-if="this.$loading.anyLoading">
      <v-loading loader='loadForgotPassword'>
        <template slot='spinner'>
          <loading-spinner height='30px' width='30px' />
        </template>
      </v-loading>
    </el-row>
    <el-row v-else class="col-12 center">
      <div :class="{'text-success': confirmPasswordResult.success, 'text-danger': !confirmPasswordResult.success  }">
        {{ confirmPasswordResult.message }}
      </div>
      <div class="empty-row"></div>
      <div class="row" v-if="!confirmPasswordResult.success">
        <div class="col-md-6 col-12">
          <el-button type="text" @click="resetWizardForm">Try Again</el-button>
        </div>
        <div class="col-md-6 col-12">
          <el-button type="text" @click="resetVerficationCode">Resend verification code</el-button>
        </div>
      </div>
    </el-row>
  </el-container>
</template>

<script>
  import loadingSpinner from 'vuex-loading/src/spinners/spinner.vue'

  export default {
    components: {
      loadingSpinner
    },
    watch:{
      confirmPasswordResult () {
        this.$loading.endLoading('loadForgotPassword')
      }
    },
    props: ['confirmPasswordResult'],
    methods: {
      resetVerficationCode () {
        this.$router.push('/reset-password')
      },
      resetWizardForm () {
        this.$emit('resetWizardForm', null)
      }
    },
    mounted () {
      this.$loading.startLoading('loadForgotPassword')
    }
  }
</script>


