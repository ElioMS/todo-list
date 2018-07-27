<template>
    <div>
        <h2>
            <b> Tareas </b>
            <button class="btn btn-dark float-right"> <i class="fa fa-plus-circle"></i> Create new </button>
        </h2>
        <hr>
        <div class="card bg-light mb-3" v-for="(task, index) in tasks" :key="index">
            <div class="card-body">
                <div class="btn-group btn-group-sm float-right">
                    <button type="button" class="btn btn-sm btn-info" @click="show(task.id)"> <i class="fa fa-eye"></i> </button>
                    <button class="btn btn-sm btn-warning"> <i class="fa fa-pencil"></i> </button>
                    <button class="btn btn-sm btn-danger" @click="deleteTask(index)"> <i class="fa fa-trash"></i> </button>
                </div>
                <h4> {{ task.title }} </h4>
                <p> {{ task.description }}</p>
                <span class="badge badge-secondary"> owner: {{ task.created_by }}</span>
                <span class="badge badge-secondary"> assigned to: {{ task.created_by }}</span>
            </div>
            <!--<Edit :task="task"></Edit>-->
            <Edit></Edit>
        </div>
    </div>
</template>

<script>
    import Edit from './Edit.vue'

    export default {
        name: "Task",
        components: {
            Edit
        },
        data () {
            return {
                tasks: [
                    {
                        id: 1,
                        title: 'Programar los webservices',
                        description: 'Programar los webservices para consumir en tasks',
                        status: 0,
                        priority: 3,
                        show: false,
                        created_by: 'Elio G. Solis'
                    },
                    {
                        id: 2,
                        title: 'Aprender a usar modal con VUE',
                        description: 'Usar modales en VUE',
                        status: 0,
                        priority: 3,
                        show: false,
                        created_by: 'Elio G. Solis'
                    }
                ]
            }
        },
        methods: {
            show (id) {
                let task = this.tasks.find(task => task.id == id);
                // task.show = true;
                this.$store.state.selectedTask = task;
                this.$store.state.show = true;
            },
            deleteTask (index) {
                this.$delete(this.tasks, index);
            }

        }
    }
</script>

<style scoped>
    .badge {
        margin-left: 5px;
    }
</style>