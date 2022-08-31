//import Swal from "sweetalert2";
//import Vue from "vue";
import { getSafeDepositsList } from "../../services/modules/bank/bankService";

export const state = {
    bankList: [],
    bankInstallmentList: [],
    bankParametersList: [],
    bankListHeaders: [],
    bankInstallmentListHeaders: [],
    bankParametersListHeaders: [],
    bankListLoading: false,
    bankInstallmentListLoading: false,
    bankParametersListLoading: false,
  };
  
  export const mutations = {
    setBankList(state, data) {
      state.bankList = data;
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
    setBankInstallmentHeaders(state, data) {
      state.bankInstallmentListHeaders = data;
    },
    setBankParametersHeaders(state, data) {
      state.bankParametersListHeaders = data;
    },
    setBankListLoading(state, data) {
      state.bankListLoading = data;
    },
    setBankInstallmentLoading(state, data) {
      state.bankInstallmentListLoading = data;
    },
    setBankParametersLoading(state, data) {
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

    fetchBankList(context) {
      context.commit("setBankListLoading", true)
      setTimeout(function () {
        context.commit('setBankList', [
          {
            id: 1,
            sube: "GAZİEMİR",
            sube_kodu: "GZMR35",
            hesap_no: "GZ12312567856341",
            IBAN: "TR 12 231 2412141241412",
            banka: "Ziraat Bankası",
            status: true
          },
          {
            id: 2,
            sube: "ÇİĞLİ",
            sube_kodu: "CGL35",
            hesap_no: "CGL62341411315",
            IBAN: "TR 45 54 5346347231142",
            banka: "Denizbank",
            status: true
          },
        ]);
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
        context.commit("setBankListLoading", false)
      }, 2000)
    },
    fetchBankInstallmentList(context) {
      context.commit("setBankInstallmentLoading", true)
      setTimeout(function () {
        context.commit('setBankInstallmentList', [
          {
            id: 1,
            sube: "GAZİEMİR",
            sube_kodu: "GZMR35",
            hesap_no: "GZ12312567856341",
            IBAN: "TR 12 231 2412141241412",
            banka: "Ziraat Bankası",
            taksit: 1,
            status: true
          },
          {
            id: 2,
            sube: "ÇİĞLİ",
            sube_kodu: "CGL35",
            hesap_no: "CGL62341411315",
            IBAN: "TR 45 54 5346347231142",
            banka: "Denizbank",
            taksit: 3,
            status: true
          },
        ]);
        context.commit('setBankInstallmentHeaders', [
          {
            key: 'banka',
            label: 'Banka Adı',
            sortable: false,
  
          },
          {
            key: 'taksit',
            label: 'Taksit',
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
        context.commit("setBankInstallmentLoading", false)
      }, 2000)
    },
    fetchBankParametersList(context) {
      context.commit("setBankParametersLoading", true)
      setTimeout(function () {
        context.commit('setBankParametersList', [
          {
            id: 1,
            banka: "Ziraat Bankası",
            merchant_number: "1654984321",
            terminal_no: "123123",
            security_code: "ilkerfurkan353596",
            url: "google.com"
          },
          {
            id: 2,
            banka: "Yapı ve Kredi Bankası",
            merchant_number: "846543123",
            terminal_no: "549843",
            security_code: "furkanilker123123",
            url: "yahoo.com"
          },
        ]);
        context.commit('setBankParametersHeaders', [
          {
            key: 'banka',
            label: 'Banka Adı',
            sortable: false,
  
          },
          {
            key: 'merchant_number',
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
        context.commit("setBankParametersLoading", false)
      }, 2000)
    }
  };
  