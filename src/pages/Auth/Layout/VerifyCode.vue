<template>
  <div class="col-4 offset-4 text-center">
    <fg-input label="Enter Code"
              type="number"
              name="code"
              :maxLength="6"
             >
    </fg-input>
    <div class="empty-row"></div>
  </div>
</template>

<style scoped>
 
</style>


<script>
  export default {
    props: ['code']
  }
</script>

