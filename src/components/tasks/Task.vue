<template>
    <div>
        <h2> <b> Tareas </b>
        <button class="btn btn-dark float-right"> <i class="fa fa-plus-circle"></i> Create new </button>
        </h2>
        <hr>
        <div class="card bg-light mb-3" v-for="(task, index) in tasks" :key="index">
            <!--<div class="card-header"> <b>  </b> </div>-->
            <div class="card-body">
                <div class="btn-group btn-group-sm float-right">
                    <button class="btn btn-sm btn-info"> <i class="fa fa-eye"></i> </button>
                    <button class="btn btn-sm btn-warning"> <i class="fa fa-pencil"></i> </button>
                    <button class="btn btn-sm btn-danger"> <i class="fa fa-trash"></i> </button>
                </div>
                <h4> {{ task.title }} </h4>
                <p> {{ task.description }}</p>
                <span class="badge badge-secondary"> owner: {{ task.created_by }}</span>
                <span class="badge badge-secondary"> assigned to: {{ task.created_by }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Task",
        data () {
            return {
                tasks: [
                    {
                        title: 'Programar los webservices',
                        description: 'Programar los webservices para consumir en tasks',
                        status: 0,
                        priority: 3,
                        created_by: 'Elio G. Solis'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .badge {
        margin-left: 5px;
    }
</style>