import router from "../../router";
import { login } from "../../services/modules/login.js"

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
   
    async tryLogin( {commit} ,{username, password} ) {
        let response = await login(username,password);
        console.log("LOGIN_RESPONSE", response);
        commit("setUser",{username, password})
        //router.push("/")
    },

    logout({ commit }) {
        commit("unsetUser");
        router.push("/login")
    },
    
}
