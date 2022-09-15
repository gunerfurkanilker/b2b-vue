//import Swal from "sweetalert2";
//import Vue from "vue";
import store from '../../state/store';

import { 
  addBankAccount,
  addBankInstallment, 
  addBankParameter, 
  deleteBankAccount, 
  deleteBankInstallment, 
  deleteBankParameter, 
  getBankAccountList, 
  getBankInstallmentList, 
  getBankList, 
  getBankParametersList, 
  getSafeDepositsList, 
  updateBankAccount, 
  updateBankInstallment, 
  updateBankParameter
} from "../../services/modules/bank/bankService";
import { 
  showProcessErrorMessage, 
  showProcessPromptMessage, 
  showProcessSuccessMessage } from "../alertHelpers";

export const state = {
    bankList: [],
    bankAccountList: [],
    bankInstallmentList: [],
    bankParametersList: [],
    bankListHeaders: [],
    bankAccountListHeaders: [],
    bankInstallmentListHeaders: [],
    bankParametersListHeaders: [],
    bankListLoading: false,
    bankAccountListLoading: false,
    bankInstallmentListLoading: false,
    bankParametersListLoading: false,
  };
  
  export const mutations = {
    setBankList(state, data) {
      state.bankList = data;
    },
    setBankAccountList(state, data) {
      state.bankAccountList = data;
    },
    setBankInstallmentList(state, data) {
      state.bankInstallmentList = data;
    },
    setBankParametersList(state, data) {
      state.bankParametersList = data;
    },
    setBankListHeaders(state, data) {
      state.bankListHeaders = data;
    },
    setBankAccountListHeaders(state, data) {
      state.bankAccountListHeaders = data;
    },
    setBankInstallmentHeaders(state, data) {
      state.bankInstallmentListHeaders = data;
    },
    
    setBankParametersHeaders(state, data) {
      state.bankParametersListHeaders = data;
    },
    setBankListLoading(state, data) {
      state.bankListLoading = data;
    },
    setBankInstallmentListLoading(state, data) {
      state.bankInstallmentListLoading = data;
    },
    setBankAccountListLoading(state, data) {
      state.bankAccountListLoading = data;
    },
    setBankParametersListLoading(state, data) {
      state.bankParametersListLoading = data;
    }
  }
  
  export const getters = {
    
  };
  
  export const actions = {

    async fetchSafeDepositsList(context, { params,body }){
      context;
      let result = await getSafeDepositsList(params,body);
      return result.data.data;
    },

    async fetchBankList(context, { params, body }) {
      context.commit("setBankListLoading", true)
      let result = await getBankList(params,body);

      context.commit('setBankListHeaders', [
        {
          key: 'sube',
          label: 'Şube',
          sortable: false,

        },
        {
          key: 'sube_kodu',
          label: 'Şube Kodu',
          sortable: false,

        },
        {
          key: 'hesap_no',
          label: 'Hesap No',
          sortable: true,

        },
        {
          key: 'IBAN',
          label: 'IBAN',
          sortable: true,

        },
        {
          key: 'banka',
          label: 'Banka',
          sortable: true,

        },
        {
          key: 'process',
          label: 'İşlem',
          sortable: false,
          class: "text-center"

        }
      ]);
      context.commit("setBankListLoading", false);
      if(result.data.success){
        context.commit("setBankList",result.data.data);
        return result.data.data;
      }
      else{
        return false;
      }
      
    },

    async fetchBankAccountList(context, { params, body }) {
      context.commit("setBankAccountListLoading", true)
      let result = await getBankAccountList(params,body);

      context.commit('setBankAccountListHeaders', [
        {
          key: 'bank',
          label: 'Banka',
          sortable: false,

        },
        {
          key: 'branch',
          label: 'Şube',
          sortable: false,

        },
        {
          key: 'branchCode',
          label: 'Şube Kodu',
          sortable: false,

        },
        {
          key: 'iban',
          label: 'IBAN',
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
      context.commit("setBankAccountListLoading", false);
      if(result.data.success){
        context.commit("setBankAccountList",result.data.data);
        return result.data.data;
      }
      else{
        return false;
      }
      
    },
    async fetchSingleBankAccount(context, { params, body }) {
      let result = await getBankAccountList(params,body);

      
      if(result.data.success){
        context.commit("setBankAccountList",result.data.data);
        return result.data.data;
      }
      else{
        return false;
      }
      
    },
    async bankAccountAdd(context, { params, body }){
      let result = await addBankAccount(params,body);

      if (result.data.success) {
        showProcessSuccessMessage({
          title: 'İşlem Başarılı',
          text: result.data.message
        })
        context.dispatch("fetchBankAccountList", {
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
    },
    async bankAccountUpdate(context, { params, body }){
      let result = await updateBankAccount(params,body);

      if (result.data.success) {
        showProcessSuccessMessage({
          title: 'İşlem Başarılı',
          text: result.data.message
        })
        context.dispatch("fetchBankAccountList", {
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
    },

    async bankAccountDelete(context, { params, body }) {
      context;
      showProcessPromptMessage({
        title: 'Banka Hesabı Silinecek',
        text: "Yapılan işlem geri alınamayacaktır. İşleme devam etmek istiyor musunuz ?",
      }).then(async function (confirm) {
        if (confirm.isConfirmed) {
          
          let result = await deleteBankAccount(params, body);
          if (result.data.success) {
            showProcessSuccessMessage({
              title: 'İşlem Başarılı',
              text: result.data.message
            })
            context.dispatch("fetchBankAccountList", {
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
        }
      }
      )
    },

    async fetchBankInstallmentList(context, { params, body }) {
      context.commit("setBankInstallmentListLoading", true)
      let result = await getBankInstallmentList(params,body);

      context.commit('setBankInstallmentHeaders', [
        {
          key: 'bank',
          label: 'Banka Adı',
          sortable: false,

        },
        {
          key: 'number',
          label: 'Taksit Sayısı',
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
      context.commit("setBankInstallmentListLoading", false);
      if(result.data.success){
        context.commit("setBankInstallmentList",result.data.data);
        return result.data.data;
      }
      else{
        return false;
      }
      
    },

    async bankInstallmentAdd(context, { params, body }){
      let result = await addBankInstallment(params,body);

      if (result.data.success) {
        showProcessSuccessMessage({
          title: 'İşlem Başarılı',
          text: result.data.message
        })
        context.dispatch("fetchBankInstallmentList", {
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
    },

    async bankInstallmentUpdate(context, { params, body }){
      let result = await updateBankInstallment(params,body);

      if (result.data.success) {
        showProcessSuccessMessage({
          title: 'İşlem Başarılı',
          text: result.data.message
        })
        context.dispatch("fetchBankInstallmentList", {
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
    },

    async bankInstallmentDelete(context, { params, body }) {
      context;
      showProcessPromptMessage({
        title: 'Banka Taksiti Silinecek',
        text: "Yapılan işlem geri alınamayacaktır. İşleme devam etmek istiyor musunuz ?",
      }).then(async function (confirm) {
        if (confirm.isConfirmed) {
          
          let result = await deleteBankInstallment(params, body);
          if (result.data.success) {
            showProcessSuccessMessage({
              title: 'İşlem Başarılı',
              text: result.data.message
            })
            context.dispatch("fetchBankInstallmentList", {
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
        }
      }
      )
    },

    async fetchBankParametersList(context, { params, body }) {
      context.commit("setBankParametersListLoading", true)
      let result = await getBankParametersList(params,body);

      context.commit('setBankParametersHeaders', [
        {
          key: 'bank',
          label: 'Banka Adı',
          sortable: false,

        },
        {
          key: 'merchantNumber',
          label: 'Merchant Number',
          sortable: false,

        },
        {
          key: 'process',
          label: 'İşlem',
          sortable: false,
          class: "text-center"

        }
      ]);
      context.commit("setBankParametersListLoading", false);
      if(result.data.success){
        context.commit("setBankParametersList",result.data.data);
        return result.data.data;
      }
      else{
        return false;
      }
      
    },

    async bankParameterAdd(context, { params, body }){
      let result = await addBankParameter(params,body);

      if (result.data.success) {
        showProcessSuccessMessage({
          title: 'İşlem Başarılı',
          text: result.data.message
        })
        context.dispatch("fetchBankParametersList", {
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
    },

    async bankParameterUpdate(context, { params, body }){
      let result = await updateBankParameter(params,body);

      if (result.data.success) {
        showProcessSuccessMessage({
          title: 'İşlem Başarılı',
          text: result.data.message
        })
        context.dispatch("fetchBankParametersList", {
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
    },

    async bankParameterDelete(context, { params, body }) {
      context;
      showProcessPromptMessage({
        title: 'Banka Parametresi Silinecek',
        text: "Yapılan işlem geri alınamayacaktır. İşleme devam etmek istiyor musunuz ?",
      }).then(async function (confirm) {
        if (confirm.isConfirmed) {
          
          let result = await deleteBankParameter(params, body);
          if (result.data.success) {
            showProcessSuccessMessage({
              title: 'İşlem Başarılı',
              text: result.data.message
            })
            context.dispatch("fetchBankParametersList", {
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
        }
      }
      )
    },

  };
  