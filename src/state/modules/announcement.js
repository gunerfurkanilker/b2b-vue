//import Swal from "sweetalert2";
//import Vue from "vue";
import store from '../../state/store';

import { addAnnouncement, deleteAnnouncement, getList, getSingle, updateAnnouncement } from "../../services/modules/announcement/announcementService.js";
import { showProcessErrorMessage, showProcessPromptMessage, showProcessSuccessMessage } from "../alertHelpers.js";

export const state = {
  announcementList: [],
  announcementListHeaders: [],
  announcementListLoading: false,

};

export const mutations = {
  setAnnouncementList(state, data) {
    state.announcementList = data;
  },
  setAnnouncementListHeaders(state, data) {
    state.announcementListHeaders = data;
  },
  setAnnouncementListLoading(state, data) {
    state.announcementListLoading = data;
  }
}

export const getters = {

};

export const actions = {
  async fetchAnnouncementList(context, { params, body }) {
    context.commit("setAnnouncementListLoading", true)
    context.commit('setAnnouncementListHeaders', [
      {
        key: 'subject',
        label: 'Konu',
        sortable: false,

      },
      {
        key: 'body',
        label: 'İçerik',
        sortable: false,

      },
      {
        key: 'start_date',
        label: 'Başlangıç Tarihi',
        sortable: true,

      },
      {
        key: 'finish_date',
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
    let result = await getList(params, body);
    context.commit("setAnnouncementList", result.data.data);

    context.commit("setAnnouncementListLoading", false)
    return result;
  },

  async fetchSingle(context, { params, body, urlSegments }) {
    context;
    let result = await getSingle(params, body, urlSegments);
    return result;
  },

  async announcementAdd(context, { params, body }) {
    context;
    let result = await addAnnouncement(params, body)

    if (result.data.success) {
      showProcessSuccessMessage({
        title: 'İşlem Başarılı',
        text: result.data.message
      })
      context.dispatch("fetchAnnouncementList", {
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

  async announcementUpdate(context, { params, body }) {
    context;
    let result = await updateAnnouncement(params, body)

    if (result.data.success) {
      showProcessSuccessMessage({
        title: 'İşlem Başarılı',
        text: result.data.message
      })
      context.dispatch("fetchAnnouncementList", {
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

  async announcementDelete(context, { params, body }) {
    context;
    showProcessPromptMessage({
      title: 'Duyuru Silinecek',
      text: "Yapılan işlem geri alınamayacaktır. İşleme devam etmek istiyor musunuz ?",
    }).then(async function (confirm) {
      if (confirm.isConfirmed) {
        
        let result = await deleteAnnouncement(params, body);
        if (result.data.success) {
          showProcessSuccessMessage({
            title: 'İşlem Başarılı',
            text: result.data.message
          })
          context.dispatch("fetchAnnouncementList", {
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
