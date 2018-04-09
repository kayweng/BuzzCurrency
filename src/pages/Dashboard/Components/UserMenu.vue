<template>
  <div class="user">
    <div class="photo">
      <img :src="image" alt="profile"/>
    </div>
    <div class="info">
      <a data-toggle="collapse" :aria-expanded="!isClosed" @click.stop="toggleMenu" href="#">
        <span class="title" v-if="title">
          {{title}}
          <b class="caret"></b>
        </span>
        <span class="subtitle" v-if="subtitle">
          <small>{{ subtitle }}</small>
        </span>
      </a>
      <div class="clearfix"></div>
      <div>
        <el-collapse-transition>
          <ul class="nav" v-show="!isClosed">
            <slot>
            </slot>
          </ul>
        </el-collapse-transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .collapsed {
    transition: opacity 1s;
  }

  .user .photo {
    height: 60px;
    width: 60px;
    margin-left: 11px !important;
  }

  .subtitle {
    padding-top: 4px;
    font-size: medium;
    color: grey;
  }
  
  .nav {
    padding-top: 10px;
  }

  .nc-icon{
    font-size: 28px!important;
    width: 30px;
    text-align: center;
    vertical-align: middle;
    float: left;
  }

</style>

<script>
  import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'

  export default {
    components: {
      [CollapseTransition.name]: CollapseTransition
    },
    props: {
      title: {
        type: String
      },
      subtitle: {
        type: String
      },
      image: {
        type: String
      }
    },
    data () {
      return {
        isClosed: true
      }
    },
    methods: {
      toggleMenu () {
        this.isClosed = !this.isClosed
      }
    }
  }
</script>
