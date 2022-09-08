//import Swal from "sweetalert2";
//import Vue from "vue";
import { getBranchList } from "../../services/modules/company/companyService";

export const state = {
    companyList: [],
    companyListHeaders: [],
    companyListLoading: false,
  
  };
  
  export const mutations = {
    setCompanyList(state, data) {
      state.companyList = data;
    },
    setCompanyListHeaders(state, data) {
      state.companyListHeaders = data;
    },
    setCompanyListLoading(state, data) {
      state.companyListLoading = data;
    }
  }
  
  export const getters = {
    
  };
  
  export const actions = {
    async fetchBranchList(context, { params,body }) {
      context;
      let result = await getBranchList(params,body)
      console.log("Şube Kod Liste", result);
      return result.data.data;
    }
  };
  