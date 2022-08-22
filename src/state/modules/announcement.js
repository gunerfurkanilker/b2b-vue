//import Swal from "sweetalert2";
//import Vue from "vue";

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
  fetchAnnouncementList(context) {
    context.commit("setAnnouncementListLoading", true)
    setTimeout(function () {
      context.commit('setAnnouncementList', [
        {
          id: 1,
          subject: "ÖLÇÜ İLE ARAMA",
          content: "Rulmanlari ölçü ile aramak için ''X'' tusunu kullaniniz.Örnegin:17X65X26",
          start_date: "2021-10-16",
          end_date: "2025-10-16",
        },
        {
          id: 2,
          subject: "BİLGİ",
          content: "FIRSAT ÜRÜNLERINI INCELEMENIZI TAVSIYE EDERIZ..",
          start_date: "2022-02-18",
          end_date: "2023-05-18",
        },
        {
          id: 3,
          subject: "KAYIS ARAMA",
          content: "Tirtirli ve Düz kayislari aramak için * simgesini kullanin.Örnegin:12,5*1075 - 9,5*1100 AX",
          start_date: "2022-02-18",
          end_date: "2026-02-18",
        }
      ]);
      context.commit('setAnnouncementListHeaders', [
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
      context.commit("setAnnouncementListLoading", false)
    }, 2000)
  }
};
