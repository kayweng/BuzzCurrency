<template>
    <div class="container-fluid bg">
        <div>
            <div class="bg-div">
                <i class="fa fa-gg" style="font-size:16px;color:white;"></i>
                <label>Buzz Currency</label>
                <div class="bg-buttons">
                    <button class="btn btn-circle sign-up">Sign Up</button>
                    &nbsp;
                    <button class="btn btn-circle">Sign In</button>
                </div>
            </div>
        </div>
        <div class="bg-space">&nbsp;</div>
        <div class="bg-div">
            <h2>EASY EXCHANGE YOUR CURRENCY</h2>
            <div>
                <span class="italic small">New to Buzz Currency ? &nbsp;</span>
                <i class="fa fa-book" style="font-size:16px;color:white;"></i>
                <a class="white small" href="#">Learn More</a>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .bg{
        background-image: url("/static/img/bg_home.jpg");
        background-size:     cover;                      
        background-repeat:   no-repeat;
        background-position: center center;
    }

    .bg-div{
        padding: 15px 25px 0px 15px;
        color: white;
    }

    .bg-div label{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: medium;
        font-weight: 900;
    }

    .bg-buttons {
        display: inline;
        float: right;
    }

    .btn {
        background-color: transparent;
    }
    .sign-up{
        border-color: orangered;
    }

    h2{
        background: linear-gradient(to right, aliceblue, white);
        background: -webkit-linear-gradient(to right,aliceblue, white);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    /* Large desktops and laptops */
    @media (min-width: 1200px) {
        .bg{
             min-height: 400px;
        }
        .bg-space{
            height: 200px;
        }
    }

    /* Landscape tablets and medium desktops */
    @media (min-width: 992px) and (max-width: 1199px) {
        .bg{
             min-height: 300px;
        }
        .bg-space{
            height: 150px;
        }
    }

    /* Portrait tablets and small desktops */
    @media (min-width: 768px) and (max-width: 991px) {
        .bg{
             min-height: 200px;
        }
        .bg-space{
            height: 120px;
        }
    }

    /* Landscape phones and portrait tablets */
    @media (max-width: 767px) {
        .bg{
             min-height: 100px;
        }
        .bg-space{
            height: 70px;
        }
    }

    /* Portrait phones and smaller */
    @media (max-width: 480px) {
        .bg{
             min-height: 120px;
        }
        .bg-space{
            height: 30px;
        }
    }

</style>


<script>
    export default {
        
    }
</script>
