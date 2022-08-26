//import Swal from "sweetalert2";
//import Vue from "vue";

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
    fetchStockCategoryList(context) {
      context.commit("setStockCategoryListLoading", true)
      setTimeout(function () {
        context.commit('setStockCategoryList', [
          {
            id: 1,
            category: "FAG",
            group: "KOD 4",
            group_val: "FAG",
            top_category: "",
            status: true,
          },
          {
            id: 2,
            category: "CONTI",
            group: "KOD 4",
            group_val: "CONTI",
            top_category: "FAG",
            status: true,
          },
          {
            id: 3,
            category: "A",
            group: "KOD 4",
            group_val: "A",
            top_category: "CONTI",
            status: true,
          },
          {
            id: 4,
            category: "ATLAS",
            group: "KOD 4",
            group_val: "ATLAS",
            top_category: "FAG",
            status: true,
          },
          {
            id: 5,
            category: "DAXON",
            group: "KOD 4",
            group_val: "DAXON",
            top_category: "A",
            status: true,
          }
        ]);
        context.commit('setStockCategoryListHeaders', [
          {
            key: 'category',
            label: 'Kategori Adı',
            sortable: false,
  
          },
          {
            key: 'group',
            label: 'Grup Kod',
            sortable: false,
  
          },
          {
            key: 'group_val',
            label: 'Grup Değer',
            sortable: false,
  
          },
          {
            key: 'status',
            label: 'Durum',
            sortable: true,
          },
          {
            key: 'process',
            label: 'İşlem',
            sortable: false,
            class: "text-center"
  
          }
        ]);
        context.commit("setStockCategoryListLoading", false)
      }, 2000)
    }
  };
  