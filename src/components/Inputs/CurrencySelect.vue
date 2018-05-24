<template>
  <el-select v-model="fieldModelValue" placeholder="Select">
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
    props: ['value'],
    computed: {
      fieldModelValue: {
        get() {
          return this.value;
        },
        set(newValue) {
          this.$emit('changed', newValue);
        }
      }
    }
    
  }
</script>
