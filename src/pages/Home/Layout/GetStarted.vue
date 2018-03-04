<template>
    <div class="container-fluid bg">
        <div class="get-started-info row white">
            <h3>Start exchange your currencies with buzz currency today</h3>
            <p>Register an account to explores various currency exchange posts and <br/>
                authenticate yourself to be genuine user to enjoy more features.</p>
        </div>
        <div class="row">
            <router-link class="btn btn-primary btn-wd" to="/signup" tag="button">Getting Started</router-link>
        </div>
    </div>
</template>

<style scoped>
    .bg{
        background-color: #2874A6;
        min-height: 250px;
    }

    .btn{
        margin-left: 100px;
        background-color: #CB4335;
        height: 40px;
        box-shadow: 1px 2px grey;
    }

    .get-started-info{
        padding-top: 15px; 
        padding-left: 100px;
        padding-right: 100px;
    }

    .get-started-info > p{
        margin-top: 10px;
        font-size: 14px;
        width: 100%;
    }

    h3{
        margin-bottom: 0;
        font-weight: bold;
        width: 100%;
    }

</style>

<script>
    export default {
    
    }
</script>
