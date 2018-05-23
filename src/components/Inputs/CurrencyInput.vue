<template>
  <el-select v-model="selectedCurrency" @change="$emit('change',selectedCurrency)" placeholder="Select">
    <el-option
      v-for="item in currencies"
      :key="item.currency_code"
      :label="item.country"
      :value="item.currency_code">
      <span style="float: left">{{ item.country }}</span>
      <span style="float: right; color: #8492a6; font-size: 12px">{{ item.currency_code }}</span>
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data () {
      return {
        selectedCurrency: ''
      }
    }
  }
</script>
