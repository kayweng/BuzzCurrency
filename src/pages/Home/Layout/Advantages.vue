<template>
    <div class="container-fluid">
        <div>
            <h2>What You Should Know Here</h2>
        </div>
        <div class="row">
            <info-card v-for="(item, index) in items" :key="index" :imgName="item.img" :message="item.message" ></info-card>
        </div>
    </div>
</template>

<style scoped>
  h2 {
      padding-top: 15px;
      padding-bottom: 60px;
      text-align: center;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  .container-fluid{
      padding-left: 30px;
      padding-right: 30px;
  }
</style>

<script>
  import {InfoCard} from 'src/components/index'

  export default {
    data () {
      return {
        items: [
          {img: 'genuine_user.png', message: 'Exchange currency with genuine users'},
          {img: 'currency_rate.png', message: 'Choose your comfortable currency rates'},
          {img: 'meetup.png', message: 'Meet up with each other for face to face exchange'},
          {img: 'aml.png', message: 'Prevent money laundering activity'}
        ]
      }
    },
    components: {
      infoCard: InfoCard
    }
  }
</script>

