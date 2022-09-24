//import Swal from "sweetalert2";
//import Vue from "vue";

import { getStockCategoryList } from "../../services/modules/stock/stockService";

export const state = {
    stockCategoryList: [],
    stockCategoryListHeaders: [],
    stockCategoryListLoading: false,
  
  };
  
  export const mutations = {
    setStockCategoryList(state, data) {
      state.stockCategoryList = data;
    },
    setStockCategoryListHeaders(state, data) {
      state.stockCategoryListHeaders = data;
    },
    setStockCategoryListLoading(state, data) {
      state.stockCategoryListLoading = data;
    }
  }
  
  export const getters = {
    
  };
  
  export const actions = {
    async fetchStockCategoryList(context, { params,body }) {
      context.commit("setStockCategoryListLoading", true)
      let result = await getStockCategoryList(params,body);
      context.commit('setStockCategoryListHeaders', [
        {
          key: 'name',
          label: 'Kategori Adı',
          sortable: false,

        },
        {
          key: 'groupValue',
          label: 'Grup Kod',
          sortable: false,

        },
        {
          key: 'isActive',
          label: 'Durum',
          sortable: false,
        },
        {
          key: 'process',
          label: 'İşlem',
          sortable: false,
          class: "text-center"

        }
      ]);
      console.log("STOCK_CATEGORY_LIST",result);
      context.commit("setStockCategoryListLoading", false)
      if(result.data.success)
        context.commit("setStockCategoryList",result.data.data);
      return result.data.data;
    }
  };
  