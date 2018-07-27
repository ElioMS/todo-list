import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    selectedTask: [],
    show: false
};

const getters = {
    getSelectedTask : state => {
        return state.selectedTask;
    }
};

const mutations = {

};

export default new Vuex.Store({
    state, getters, mutations
})

