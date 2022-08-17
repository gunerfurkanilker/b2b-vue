import router from "../../router";

export const state = {
    user: null,
}

export const mutations = {
    setUser(state, newValue) {
        state.user = newValue
    },
    unsetUser(state){
        state.user = null;
    }
}

export const getters = {
    getUser(state){
        return state.user;
    }
}

export const actions = {
   
    login( {commit} ,{username, password} ) {
        commit("setUser",{username, password})
        router.push("/")
    },

    logout({ commit }) {
        commit("unsetUser");
        router.push("/login")
    },
    
}
