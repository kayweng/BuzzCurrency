<template>
    <div class="container-fluid">
        <h3>What you should know before exchange currency</h3>
        <div class="row">
            <div class="layout-item col-md-3 col-sm-6 col-xs-12" v-for="(item, index) in items" :key="index">
                <img :src="'/static/img/' + item.img ">
                <p>{{ item.message }}</p>
            </div>
        </div>
    </div>
</template>

</<style scoped>

    h3 {
        padding-top: 15px;
        padding-bottom: 60px;
        text-align: center;
    }

    .container-fluid{
        padding-left: 30px;
        padding-right: 30px;
    }

    .layout-item {
        display: inline-block;
        vertical-align: top;
        width: 100%;
        height: 150px;
        padding-left: 15px;
        padding-right: 15px;
    }

    .layout-item > img{
        height: 60px;
        width: 60px;
        display: block; /*for the img inside your div */ 
        margin: 0 auto; 
    }

    .layout-item > p{
        font-size: medium;
        color: #515A5A;
        padding-top: 30px;
        display: block;
        text-align: center;
    }
</style>

<script>
    export default {
        data() {
            return {
                items: [
                    {img: 'genuine_user.png', message: 'Exchange currency with genuine users'},
                    {img: 'currency_rate.png', message: 'Choose your preferable currency rate'},
                    {img: 'meetup.png', message: 'Meet up with your buddy for exchange'},
                    {img: 'aml.png', message: 'Prevent money laundering activity'},
                ]
            }
         }
    }
</script>

