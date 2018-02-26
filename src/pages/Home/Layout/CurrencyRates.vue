<template>
    <div class="container-fluid">
        <div class="center"><h4>Today Currency</h4></div>
        <div class="row container-currency">
            <div class="chevron">
                <button class="btn">
                    <i class="fa fa-chevron-left" />
                </button>
            </div>
            <div class="currencies">
                <div style="display:inline-block;" v-for="curr in currencies" :key="curr.id">
                    <rate :rate="curr"></rate>
                </div>
            </div>
            <div class="chevron">
                <button class="btn">
                    <i class="fa fa-chevron-right" />
                </button>
            </div>
            <div class="fixer">
                <span>
                    <i class="fa fa-globe" style="font-size:14px;" />
                    <small>&nbsp;currencies rate from <a href="http://fixer.io">fixer.io</a></small>
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
    h3 {
        padding-top: 15px;
        padding-bottom: 15px;
        text-align: center;
    }

    .container-currency{
        background-color: #F7F9F9;
    }

    .container-currency > div:not(.fixer) {
        display: inline-block;
        min-height: 300px;
    }

    i{
        text-align: center;
        color: black;
        font-size: 20px;
    }

    .chevron{
        width: 10%;
    }

    .chevron > button{
        width: 100%;
        height: 100%;
        border: 0px;
        background: transparent;
    }

    .currencies{
        min-width: 80%;
        max-width: 80%;
        padding: 40px 40px 10px 40px;
        text-align: center;
    }

    .fixer{
        text-align: center;
        width: 100%;
        margin-right: 15px;
        min-height: 30px;
        max-height: 30px !important;
    }

    .fixer > span > small{
        vertical-align: middle;
        display: inline-block;
        line-height: normal;
    }

</style>

<script>
    import rate from 'src/components/Rates/RateCell.vue'

    export default {
        data(){
            return {
                currencies: [
                    { id: 1, code: 'USD', rate: '1.4320' },
                    { id: 2, code: 'SGD', rate: '1.0000' },
                    { id: 3, code: 'MYR', rate: '2.9594' },
                    { id: 4, code: 'JPN', rate: '10.9002' },
                    { id: 5, code: 'USD', rate: '1.4320' },
                    { id: 6, code: 'SGD', rate: '1.0000' },
                    { id: 7, code: 'MYR', rate: '2.9594' },
                    { id: 8, code: 'JPN', rate: '10.9002' },
                    { id: 9, code: 'USD', rate: '1.4320' },
                    { id: 10, code: 'SGD', rate: '1.0000' },
                    { id: 11, code: 'MYR', rate: '2.9594' },
                    { id: 12, code: 'JPN', rate: '10.9002' },
                    { id: 13, code: 'USD', rate: '1.4320' },
                    { id: 14, code: 'SGD', rate: '1.0000' },
                    { id: 15, code: 'MYR', rate: '2.9594' },
                    { id: 16, code: 'JPN', rate: '10.9002' },
                    { id: 17, code: 'MYR', rate: '2.9594' },
                    { id: 19, code: 'JPN', rate: '10.9002' },
                    { id: 20, code: 'MYR', rate: '2.9594' },
                    { id: 21, code: 'JPN', rate: '10.9002' },
                    { id: 22, code: 'MYR', rate: '2.9594' },
                    { id: 23, code: 'JPN', rate: '10.9002' },
                    { id: 24, code: 'MYR', rate: '2.9594' },
                    { id: 25, code: 'JPN', rate: '10.9002' },
                ]
            }
        },
        components: {
            rate: rate,
        }
    }
</script>
