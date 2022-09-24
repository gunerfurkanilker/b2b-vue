//import Swal from "sweetalert2";
//import Vue from "vue";

import { getList, addCurrent } from "../../services/modules/current/currentService";
import { showProcessErrorMessage, showProcessSuccessMessage } from "../alertHelpers";
import store from "../store";

export const state = {
  currentList: [],
  currentListHeaders: [],
  currentListLoading: false,
};

export const mutations = {
  setCurrentList(state, data) {
    state.currentList = data;
  },
  setCurrentListHeaders(state, data) {
    state.currentListHeaders = data;
  },
  setCurrentListLoading(state, data) {
    state.currentListLoading = data;
  }
}

export const getters = {

};

export const actions = {
  async fetchCurrentList(context, { params, body }) {
    context.commit("setCurrentListLoading", true)
    let result = await getList(params, body)
    console.log("SLIDER_LIST_RESULT", result);
    context.commit("setCurrentList", result.data.data);
    context.commit('setCurrentListHeaders', [
      {
        key: 'name',
        label: 'Başlık',
        sortable: false,

      },
      {
        key: 'text',
        label: 'Yazı',
        sortable: true,

      },
      {
        key: 'sequence',
        label: 'Sıra',
        sortable: true,

      },
      {
        key: 'startDate',
        label: 'Başlangıç Tarihi',
        sortable: true,

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
    context.commit("setCurrentListLoading", false)
    if (result.data.success) {
      return result.data.data;
    }
    else
      return false;
  },

  async currentAdd(context, { params, body }) {
    context;
    let result = await addCurrent(params, body)
    if (result.data.success) {
      showProcessSuccessMessage({
        title: 'İşlem Başarılı',
        text: result.data.message
      })
      context.dispatch("fetchCurrentList", {
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

};
