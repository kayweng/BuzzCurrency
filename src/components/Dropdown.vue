<template>
  <component class="dropdown nav-item"
             :is="tag"
             :class="[{show: isOpen}]"
             aria-haspopup="true"
             :aria-expanded="isOpen"
             @click="toggleDropDown"
             v-click-outside="closeDropDown">

    <a class="dropdown-toggle nav-link"
       :class="{'hide-arrow': hideArrow}"
       data-toggle="dropdown">
      <slot name="title">
        <i :class="icon"></i>
        <span class="no-icon">{{title}}</span>
        <b class="caret"></b>
      </slot>
    </a>
    <ul class="dropdown-menu"
        :class="[{'dropdown-menu-right': position === 'right'}, {show: isOpen}]">
      <slot></slot>
    </ul>
  </component>
</template>
<script>
  export default {
    name: 'drop-down',
    props: {
      title: String,
      icon: String,
      position: String,
      hideArrow: Boolean,
      tag: {
        type: String,
        default: 'li'
      }
    },
    data () {
      return {
        isOpen: false
      }
    },
    methods: {
      toggleDropDown () {
        this.isOpen = !this.isOpen
        this.$emit('change', this.isOpen)
      },
      closeDropDown () {
        this.isOpen = false
        this.$emit('change', this.isOpen)
      }
    }
  }
</script>
<style>
  li.dropdown {
    list-style-type: none;
  }

  .dropdown .dropdown-toggle {
    cursor: pointer;
  }
</style>
