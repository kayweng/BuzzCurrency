<template>
    <div>
        <i class="fa fa-forumbee" style="font-size:16px;color:white;"></i>
        <label>Buzz Currency</label>
        <div class="button-inline">
            <button class="btn btn-round ">Sign Up</button>
            <router-link to="/login" tag="button" class="btn btn-outline btn-round ">Sign In</router-link>
        </div>
    </div>
</template>

<style scoped>
    .button-inline {
        display: inline;
        float: right;
    }

    label{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: medium;
        font-weight: 900;
    }
</style>
