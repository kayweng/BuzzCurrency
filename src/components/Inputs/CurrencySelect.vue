<template>
  <el-select v-model="selectedCurrency" @change="$emit('changed',selectedCurrency)" placeholder="Select">
    <el-option
      v-for="(item, index) in currencies"
      :key="index" 
      :label="item.currency_code"
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
