<template>
    <div class="container-fluid">
        <div>
            <h2>What You Should Know</h2>
        </div>
        <div class="row">
            <info-card  v-for="(item, index) in items" :key="index" class="col-md-3 col-sm-6 col-6"
                        :imgName="item.img" 
                        :title="item.title"
                        :message="item.message" ></info-card>
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
          {img: 'genuine_user.png',
            title: 'Genuine User',
            message: 'Genuine user who has been verified and identified by our team to ensure user is responsibilities to the currency exchange.'},
          {img: 'currency_rate.png',
            title: 'Exchange Rate',
            message: 'You can offers yours competitive exchange rates to everyoneor accept interesting exchange rates from each other.'},
          {img: 'meetup.png',
            title: 'Meet up',
            message: 'Meet up with buddy for exchange currency at safety location such as cafe, restaurant or shopping mall,etc.'},
          {img: 'aml.png',
            title: 'Money Laundaring',
            message: 'To make a better currency exchange way, money laundering is strictly not allow.You have responsbility to prevent money laundering activity.'}
        ]
      }
    },
    components: {
      infoCard: InfoCard
    }
  }
</script>

