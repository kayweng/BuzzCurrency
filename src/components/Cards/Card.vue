<template>
  <div class="card">
    <div class="card-image" v-if="$slots.image">
      <slot name="image"></slot>
    </div>
    <div class="card-header text-center" v-if="$slots.header || title">
      <slot name="header">
        <h3 class="card-title">{{title}}</h3>
        <p class="card-category">{{subTitle}}</p>
      </slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div class="card-footer" v-if="$slots.footer">
      <hr>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'card',
    props: {
      title: String,
      subTitle: String
    }
  }
</script>
<style>
</style>
