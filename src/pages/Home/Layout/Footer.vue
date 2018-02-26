<template>
    <div class="container-fluid bg">
        <div class="row">
            <div class="col-xs-12 col-md-10">
                <p class="copyright">© Buzz Currency 2018</p>
            </div>
            <div class="col-xs-12 col-md-2">
                <div class="social">
                   <i class="fa fa-facebook-square" />
                   <i class="fa fa-instagram" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .bg{
        vertical-align: middle;
        background-color: #34495E;
    }

    p.copyright{
        float: left;
        margin: 12px 8px 16px 8px;
    }

    .social{
        float: right;
        margin: 8px 16px;
    }

    .social > i {
        vertical-align: middle;
        font-size: 20px;
        color: white;
        padding: 0 20px 0 20px;
        cursor: pointer;
    }
</style>

<script>
    export default {
    
    }
</script>
