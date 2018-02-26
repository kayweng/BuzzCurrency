<template>
    <div>
        <div class="currency one-edge-shadow">
            <span class="code">
                <small>{{ rate.code }}</small>
            </span>
            <span class="rate">
                <small>{{ rate.rate }}</small>
            </span>
        </div>
    </div>
</template>

<style scoped>
    .currency{
       border: 0;
       padding: 4px;
       background: #F2F3F4;
       min-height: 60px;
       display: table;
       margin-right: 20px;
       margin-bottom: 5px;
       min-width: 140px;
       max-width: 200px;
    }

    span {
        display: table-cell;
        vertical-align: middle;
    }

    span.code{
        padding-left: 15px;
        padding-right: 15px;
    }

    span.rate{
        color: blue;
        padding-left: 15px;
    }
</style>

<script>
    export default {
        props:['rate']
    }
</script>

