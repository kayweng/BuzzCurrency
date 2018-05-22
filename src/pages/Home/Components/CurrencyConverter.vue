<template>
  <fade-render-transtion>
    <el-container direction="vertical" class="container-fluid">
      <el-row class="center">
        <h3>Currency Converter</h3>
      </el-row>
      <el-row>
        <el-container direction="verticial" class="center">
          <el-col :span="5"></el-col>
          <el-col :span="6">
            <el-input clearable></el-input>
          </el-col>
          <el-col :span="2">
            <i class="fa fa-exchange"></i>
          </el-col>
          <el-col :span="6">
            <el-input clearable></el-input>
          </el-col>
          <el-col :span="5"></el-col>
        </el-container>
      </el-row>
      <el-row>
        <el-container direction="verticial" class="center">
          <el-col :span="5"></el-col>
          <el-col :span="6">
            <el-select class="select-default full-width" placeholder="Select Currency">
              <el-option v-for="option in countries"
                          class="select-default"
                          :value="option.value"
                          :label="option.label"
                          :key="option.label">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="2"></el-col>
          <el-col :span="6">
            <el-select class="select-default full-width" placeholder="Select Currency">
              <el-option v-for="option in countries"
                          class="select-default"
                          :value="option.value"
                          :label="option.label"
                          :key="option.label">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="5"></el-col>
        </el-container>
      </el-row>
      <el-row></el-row>
    </el-container>
  </fade-render-transtion>
</template>

<style scoped>
  h3 {
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: center;
  }

  .container-fluid {
    padding-top: 25px;
    padding-bottom: 50px
  }

  .row {
    padding-top: 10px;
  }

  i{
    margin-top: 44px;
  }
</style>

<script>
  import { FadeRenderTransition } from 'src/components/index'

  export default {
    components: {
      FadeRenderTransition
    }
  }
</script>
