<template>
  <div class="form-group" :class="[{'input-group': hasIcon}, {'has-error': error}, {'is-error el-form-item': error}]">
    <slot name="label">
      <span style="display:block;">
        <label v-if="label" class="control-label" :class="labelClasses">
          {{label}}
        </label>
        <i v-if="hintClasses" :class="hintClasses" class="hint-icon" @click="$emit('hint', $event.target.value)"></i>
      </span>
    </slot>
    <slot name="addonLeft">
      <span v-if="addonLeftIcon" class="input-group-addon">
        <i :class="addonLeftIcon"></i>
      </span>
    </slot>
    <slot>
      <input
        :value="value"
        @blur="$emit('blur',$event.target.value)"
        @change="$emit('blur',$event.target.value)"
        @input="$emit('input',$event.target.value)"
        v-bind="$attrs"
        class="form-control"
        :class="inputClasses"
        :maxlength="maxLength"
        aria-describedby="addon-right addon-left">
    </slot>
    <slot name="helpBlock">
      <small class="text-danger" v-if="error">
        {{ error }}
      </small>
    </slot>
    <slot name="infoBlock"></slot>
    <slot name="addonRight">
      <span v-if="addonRightIcon" class="input-group-addon">
        <i :class="addonRightIcon"></i>
      </span>
    </slot>
  </div>
</template>
<script>
  export default {
    inheritAttrs: false,
    name: 'fg-input',
    props: {
      label: String,
      error: String,
      labelClasses: String,
      inputClasses: String,
      value: [String, Number, Date],
      addonRightIcon: String,
      addonLeftIcon: String,
      maxLength: Number,
      hintClasses: String
    },
    computed: {
      hasIcon () {
        const {addonRight, addonLeft} = this.$slots
        return addonRight !== undefined || addonLeft !== undefined || this.addonRightIcon !== undefined || this.addonLeftIcon !== undefined
      }
    }
  }
</script>

<style scoped>
  .form-group {
    margin-bottom: 0em!important;
  }
  .hint-icon {
    float: right;
    margin-top: 18px;
    margin-right: 4px;
  }
</style>
