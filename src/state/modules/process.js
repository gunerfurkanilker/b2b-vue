//import Swal from "sweetalert2";
//import Vue from "vue";

export const state = {
    processLoading: false
  };
  
  export const mutations = {
    initProcessLoading(state, data) {
      state.processLoading = data;
    }
  }
  
  export const getters = {
    
  };
  
  export const actions = {
    setProcessLoading(context, data){
        context.commit("initProcessLoading",data);
    }
  };
  