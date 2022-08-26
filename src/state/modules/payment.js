//import Swal from "sweetalert2";
//import Vue from "vue";

export const state = {
    paymentTypeList: [],
    paymentTypeListHeaders: [],
    paymentTypeListLoading: false
  };
  
  export const mutations = {
    setPaymentTypeList(state, data) {
      state.paymentTypeList = data;
    },
    setPaymentTypeListHeaders(state, data) {
      state.paymentTypeListHeaders = data;
    },
    setPaymentTypeListLoading(state, data) {
      state.paymentTypeListLoading = data;
    }
  }
  
  export const getters = {
    
  };
  
  export const actions = {
    fetchPaymentTypeList(context) {
      context.commit("setPaymentTypeListLoading", true)
      setTimeout(function () {
        context.commit('setPaymentTypeList', [
          {
            id: 1,
            title: "Cari Hesap",
            description: "Cari Hesap Açıklama",
            iskonto: "15",
            type: "Fiyat 1",
            create_date: "19-08-2021 16:05",
            update_date:"16-09-2021 16:38",
            toERP:false,
            status: true
          },
          {
            id: 2,
            title: "Kredi Kartı",
            description: "Kredi Kartı Açıklama",
            iskonto: "5",
            type: "Fiyat 3",
            create_date: "23-09-2021 11:57",
            update_date:"23-09-2021 12:02",
            toERP:true,
            status: true
          },
        ]);
        context.commit('setPaymentTypeListHeaders', [
          {
            key: 'title',
            label: 'Başlık',
            sortable: false,
  
          },
          {
            key: 'description',
            label: 'Açıklama',
            sortable: false,
  
          },
          {
            key: 'iskonto',
            label: 'İskonto Oranı',
            sortable: true,
  
          },
          {
            key: 'type',
            label: 'Fiyat Tipi',
            sortable: true,
  
          },
          {
            key: 'create_date',
            label: 'Kayıt Tarihi',
            sortable: true,
  
          },
          {
            key: 'update_date',
            label: 'Güncellenme Tarihi',
            sortable: true,
  
          },
          {
            key: 'toERP',
            label: 'ERP',
            sortable: true,
            class: "text-center"
  
          },
          {
            key: 'status',
            label: 'Durum',
            sortable: true,
            class: "text-center"
  
          },
          {
            key: 'process',
            label: 'İşlem',
            sortable: false,
            class: "text-center"
  
          }
        ]);
        context.commit("setPaymentTypeListLoading", false)
      }, 2000)
    }
  };
  