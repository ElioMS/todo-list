<template>
    <div class="col-m">


        <div class="col-md-4 offset-4">

            <div class="card">
                <div class="card-header">
                    <span class="card-title"> L O G I N </span>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label> Username </label>
                        <input type="text" class="form-control">
                    </div>

                    <div class="form-group">
                        <label> Password </label>
                        <input type="text" class="form-control">
                    </div>

                    <div>
                        <button class="btn btn-dark btn-block"> L O G I N </button>
                    </div>

                </div>

                <div class="card-footer">
                    <a href="" class="float-right"> Create new account </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Raleway:300,400,600");

    .card-header {
        text-align: center;
    }

    .card-title {
        font-weight: bold;
    }

    .card-footer a {
        font-weight: bold;
        font-size: 12px;
        color: #343a40
    }

    #app {
        font-family: 'Raleway', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>