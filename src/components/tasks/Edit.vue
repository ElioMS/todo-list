<template>
    <transition name="modal" v-if="show">
        <div class="modal-mask">
            <div class="modal-container" @click.stop>
                <div class="modal-header">
                    <h3>New Post</h3>
                </div>
                <div class="modal-body">
                    <label class="form-label">
                        Title
                        <input :value="task.title" class="form-control">
                    </label>
                    <label class="form-label">
                        Body
                        <textarea rows="3" class="form-control"> {{ task.description }} </textarea>
                    </label>

                    <div class="row">
                        <div class="col">
                            <label class="form-label">  Fecha inicio </label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="col">
                            <label class="form-label">  Fecha fin </label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="modal-footer text-right">
                    <button class="btn btn-default modal-btn" @click="close">
                        CLOSE
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Edit",
        // props: [
        //     'task'
        // ],
        data () {
            return {
                active: false
            }
        },
        methods: {
            close () {
                this.$store.state.show = false;
            }
        },
        computed: {
            task () {
                return this.$store.getters.getSelectedTask;
            },
            show() {
                return this.$store.state.show;
            }
        }
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }

    .modal-btn {
        font-size: 13px;
        font-weight: bold;
    }

    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        transition: opacity .3s ease;
    }

    .modal-container {
        width: 600px;
        margin: 40px auto 0;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #000;
        font-weight: bold;
    }

    .modal-body {
        margin: 20px 0;
    }

    .text-right {
        text-align: right;
    }

    .form-label {
        display: block;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: bold;
        margin-bottom: 1em;
    }

    .form-label > .form-control {
        margin-top: 0.5em;
    }

    .form-control {
        display: block;
        width: 100%;
        padding: 0.5em 1em;
        line-height: 1.5;
        border: 1px solid #ddd;
    }

    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>