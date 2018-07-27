<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#"> Todo List </a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <router-link class="nav-link" to="/"> Home </router-link>
                    <router-link class="nav-link" to="/tasks"> Tasks </router-link>
                </ul>
            </div>
        </nav>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>


export default {
    name: 'app',

}
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Varela+Round');

    #app {
        font-family: 'Varela Round', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }


    .container {
        padding-top: 10px;
    }
</style>
