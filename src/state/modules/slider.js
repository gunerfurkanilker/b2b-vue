//import Swal from "sweetalert2";
//import Vue from "vue";

import { getList, addSlider, deleteSlider, updateSlider } from "../../services/modules/slider/sliderService";
import { showProcessErrorMessage, showProcessPromptMessage, showProcessSuccessMessage } from "../alertHelpers";
import store from "../store";

export const state = {
  sliderList: [],
  sliderListHeaders: [],
  sliderListLoading: false,

};

export const mutations = {
  setSliderList(state, data) {
    state.sliderList = data;
  },
  setSliderListHeaders(state, data) {
    state.sliderListHeaders = data;
  },
  setSliderListLoading(state, data) {
    state.sliderListLoading = data;
  }
}

export const getters = {

};

export const actions = {
  async fetchSliderList(context, { params, body }) {
    context.commit("setSliderListLoading", true)
    let result = await getList(params, body)
    console.log("SLIDER_LIST_RESULT", result);
    context.commit("setSliderList", result.data.data);
    context.commit('setSliderListHeaders', [
      {
        key: 'image',
        label: 'Resim',
        sortable: false,

      },
      {
        key: 'title',
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
    context.commit("setSliderListLoading", false)
    if (result.data.success) {
      return result.data.data;
    }
    else
      return false;
  },

  async sliderAdd(context, { params, body }) {
    context;
    let result = await addSlider(params, body)
    if (result.data.success) {
      showProcessSuccessMessage({
        title: 'İşlem Başarılı',
        text: result.data.message
      })
      context.dispatch("fetchSliderList", {
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

  async sliderUpdate(context, { params, body }) {
    context;
    let result = await updateSlider(params, body)

    if (result.data.success) {
      showProcessSuccessMessage({
        title: 'İşlem Başarılı',
        text: result.data.message
      })
      context.dispatch("fetchSliderList", {
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

  async sliderDelete(context, { params, body, urlSegments }) {
    context;
    showProcessPromptMessage({
      title: 'Slider Silinecek',
      text: "Yapılan işlem geri alınamayacaktır. İşleme devam etmek istiyor musunuz ?",
    }).then(async function (confirm) {
      if (confirm.isConfirmed) {

        let result = await deleteSlider(params, body, urlSegments);
        if (result.data.success) {
          showProcessSuccessMessage({
            title: 'İşlem Başarılı',
            text: result.data.message
          })
          context.dispatch("fetchSliderList", {
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
