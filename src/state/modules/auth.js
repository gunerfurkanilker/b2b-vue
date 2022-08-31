import router from "../../router";
import { login } from "../../services/modules/login.js";
import { showProcessErrorMessage } from "../alertHelpers";
import jwt_decode from "jwt-decode";

export const state = {
    user: null,
    token: null
}

export const mutations = {
    setUser(state, newValue) {
        state.user = newValue
    },
    setToken(state, newValue) {
        state.token = newValue
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
        if(response.error)
            showProcessErrorMessage({
                title: 'Giriş Yapılamadı',
                text: response.message,
            })
        else{
            let userInfo = jwt_decode(response.data.token);
            commit("setUser",userInfo);
            commit("setToken",response.data.token);
            router.push("/");
        }    
            
    },

    logout({ commit }) {
        commit("unsetUser");
        router.push("/login")
    },
    
}
