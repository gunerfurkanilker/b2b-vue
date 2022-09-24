//import Swal from "sweetalert2";
//import Vue from "vue";

import { addPaymentMethod, getList, updatePaymentMethod } from "../../services/modules/payment/paymentService";
import { showProcessErrorMessage, showProcessSuccessMessage } from "../alertHelpers";

import store from '../../state/store';

export const state = {
    paymentMethodList: [],
    paymentMethodListHeaders: [],
    paymentMethodListLoading: false
  };
  
  export const mutations = {
    setPaymentMethodList(state, data) {
      state.paymentMethodList = data;
    },
    setPaymentMethodListHeaders(state, data) {
      state.paymentMethodListHeaders = data;
    },
    setPaymentMethodListLoading(state, data) {
      state.paymentMethodListLoading = data;
    }
  }
  
  export const getters = {
    
  };
  
  export const actions = {
    async fetchPaymentMethodList(context, { params,body }) {
      let result = await getList(params,body);
      console.log("PAYMENT_TYPE_LIST",result);
      if(result.data.success)
        context.commit("setPaymentMethodList",result.data.data);
      context.commit('setPaymentMethodListHeaders', [
        {
          key: 'name',
          label: 'Başlık',
          sortable: true,

        },
        {
          key: 'description',
          label: 'Açıklama',
          sortable: false,

        },
        {
          key: 'discount',
          label: 'İskonto Oranı',
          sortable: true,

        },
        {
          key: 'priceType',
          label: 'Fiyat Tipi',
          sortable: false,

        },
        {
          key: 'createDate',
          label: 'Kayıt Tarihi',
          sortable: true,

        },
        {
          key: 'editDate',
          label: 'Güncellenme Tarihi',
          sortable: true,

        },
        {
          key: 'erpExport',
          label: 'ERP',
          sortable: false,
          class: "text-center"

        },
        {
          key: 'isActive',
          label: 'Durum',
          sortable: false,
          class: "text-center"

        },
        {
          key: 'process',
          label: 'İşlem',
          sortable: false,
          class: "text-center"

        }
      ]);
      return result.data.data;
    },

    async paymentMethodAdd(context, { params, body }) {
      context;
      let result = await addPaymentMethod(params, body)
  
      if (result.data.success) {
        showProcessSuccessMessage({
          title: 'İşlem Başarılı',
          text: result.data.message
        })
        context.dispatch("fetchPaymentMethodList", {
          params: {
            userId: store.state.auth.user.UserId
          },
          body: {}
        })
      }
  
      else
        showProcessErrorMessage({
          title: 'İşlem Başarısız',
          text: result.data.message
        })
      return result;
    },
  
    async paymentMethodUpdate(context, { params, body }) {
      context;
      let result = await updatePaymentMethod(params, body)
  
      if (result.data.success) {
        showProcessSuccessMessage({
          title: 'İşlem Başarılı',
          text: result.data.message
        })
        context.dispatch("fetchPaymentMethodList", {
          params: {
            userId: store.state.auth.user.UserId
          },
          body: {}
        })
      }
      else
        showProcessErrorMessage({
          title: 'İşlem Başarısız',
          text: result.data.message
        })
      return result;
    },

  };
  