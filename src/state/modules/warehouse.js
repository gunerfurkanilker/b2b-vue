//import Swal from "sweetalert2";
//import Vue from "vue";
import { getList } from "../../services/modules/warehouse/warehouseService";

export const state = {
    warehouseList: [],
    warehouseListHeaders: [],
    warehouseListLoading: false,
  
  };
  
  export const mutations = {
    setWarehouseList(state, data) {
      state.warehouseList = data;
    },
    setWarehouseListHeaders(state, data) {
      state.warehouseListHeaders = data;
    },
    setWarehouseListLoading(state, data) {
      state.warehouseListLoading = data;
    }
  }
  
  export const getters = {
    getWarehouseList(state){
      return state.warehouseList;
    }
  };
  
  export const actions = {
    async fetchWarehouseList(context,{ params,body }) {
      context.commit("setWarehouseListLoading", true)
      let result = await getList(params,body);
      return result.data.data;
      /*context.commit("setWarehouseList",result.data.data);
      console.log("WarehouseResult", result);
        context.commit("setWarehouseListLoading", false)
      context.commit('setWarehouseListHeaders', [
        {
          key: 'subject',
          label: 'Konu',
          sortable: false,

        },
        {
          key: 'content',
          label: 'İçerik',
          sortable: false,

        },
        {
          key: 'start_date',
          label: 'Başlangıç Tarihi',
          sortable: true,

        },
        {
          key: 'end_date',
          label: 'Bitiş Tarihi',
          sortable: true,

        },
        {
          key: 'process',
          label: 'İşlem',
          sortable: false,
          class: "text-center"
        }
      ]);
       */
     
    }
  };
  