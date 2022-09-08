import router from "../../router";
import { login } from "../../services/modules/login.js";
import { showProcessErrorMessage } from "../alertHelpers";
import jwt_decode from "jwt-decode";

export const state = {
    user: null,
    token: null,
    loginLoadingStatus: false
}

export const mutations = {
    setUser(state, newValue) {
        state.user = newValue
    },
    setToken(state, newValue) {
        state.token = newValue
    },
    setLoginLoadingStatus(state, newValue) {
        state.loginLoadingStatus = newValue
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
   
    async tryLogin( context ,{username, password} ) {
        context.commit("setLoginLoadingStatus",true);
        let response = await login(username,password);
        context.commit("setLoginLoadingStatus",false);
        if(response.error)
            showProcessErrorMessage({
                title: 'Giriş Yapılamadı',
                text: response.message,
            })
        else{
            let userInfo = jwt_decode(response.data.token);
            context.commit("setUser",userInfo);
            context.commit("setToken",response.data.token);
            router.push("/");
        }    
            
    },

    logout({ commit }) {
        commit("unsetUser");
        router.push("/login")
    },
    
}
