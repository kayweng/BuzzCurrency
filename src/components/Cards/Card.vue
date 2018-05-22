<template>
  <div class="card">
    <div v-if="canHide">
      <i class="nc-icon nc-simple-remove hide-card" @click="$emit('closeCard', $event.target.value)"></i>
    </div>
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

<style scoped>
  .hide-card {
    cursor: pointer;
  }
</style>

<script>
  export default {
    name: 'card',
    props: {
      canHide: {
        type: Boolean,
        required: false,
        default: false
      },
      title: String,
      subTitle: String
    }
  }
</script>
