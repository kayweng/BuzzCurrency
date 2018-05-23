<template>
  <el-container direction="vertical" class="container-fluid">
    <el-row>
      <h2>Key Features</h2>
    </el-row>
    <el-row>
      <el-col :lg="6" :md="6" :sm="12" :xs="24" v-for="(item, index) in items" :key="index">
        <info-card  :imgName="item.img" 
                    :title="item.title"
                    :message="item.message" ></info-card>
      </el-col>
    </el-row>
    <el-row class="empty-row"></el-row>
  </el-container>
</template>

<style scoped>
  h2 {
      padding-top: 15px;
      padding-bottom: 30px;
      text-align: center;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  .container-fluid{
    padding-left: 30px;
    padding-right: 30px;
    min-height: 100px;
  }

</style>

<script>
  import { InfoCard } from 'src/components/index'

  export default {
    data () {
      return {
        items: [
          {img: 'benefits/genuine_user.png',
            title: 'Genuine User',
            message: 'Genuine user who has been verified and identified by our team to ensure who is trustable in currency exchange activity.'},
          {img: 'benefits/cashflow.png',
            title: 'Exchange Rate',
            message: 'You can offers a competitive currency rate to everyone and accept great exchange rates from someone.'},
          {img: 'benefits/meetup.png',
            title: 'Meet up',
            message: 'Meet up with your buddy to exchange currencies at preferable places such as cafe, restaurant or shopping mall,etc.'},
          {img: 'benefits/aml.png',
            title: 'Anti Money Laundaring',
            message: 'To make a better currency exchange environment, we enforce anti money laundering rules for all currency exchange activity.'},
          {img: 'benefits/alert.png',
            title: 'Rate Alert',
            message: 'You can setup alerts for desire rates. We will send you an email alert.'},
          {img: 'benefits/24_hours.png',
            title: 'Anytime, Anywhere',
            message: 'You can query for exchange currency at anytime and anywhere'},
          {img: 'benefits/coworking.png',
            title: 'Business Partner',
            message: 'We works together with business partners to provide better services and latest currency info.'},
          {img: 'benefits/no_hidden_fee.png',
            title: 'No Fees',
            message: 'We promise no extra charge and hidden fees on all currency exchange activity.'}
        ]
      }
    },
    components: {
      infoCard: InfoCard
    }
  }
</script>

