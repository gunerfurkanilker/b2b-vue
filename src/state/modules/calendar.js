//import Swal from "sweetalert2";
//import Vue from "vue";
//import store from '../../state/store';

import { addCalendarCategory, deleteCalendarCategory, getCalendarCategoryList, getCalendarCategorySingle, updateCalendarCategory } from "../../services/modules/calendar/calendarService";
import { showProcessErrorMessage, showProcessPromptMessage, showProcessSuccessMessage } from "../alertHelpers.js";

export const state = {
    calendarCategoryList: [],
    calendarCategoryListHeaders: []
};

export const mutations = {
    setCalendarCategoryList(state, data) {
        state.calendarCategoryList = data;
    },
    setCalendarCategoryListHeaders(state, data) {
        state.calendarCategoryListHeaders = data;
    }
}

export const getters = {

};

export const actions = {
    async fetchCalendarCategoryList(context, { params, body }) {

        context.commit('setCalendarCategoryListHeaders', [
            {
                key: 'name',
                label: 'Kategori Adı',
                sortable: false,

            },
            {
                key: 'badge',
                label: 'Renk',
                sortable: false,
            },
            {
                key: 'isActive',
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
        console.log("PARAMS", params);
        let result = await getCalendarCategoryList(params, body);
        console.log("CALENDAR_CATEGORY_LIST_RESULT", result);
        context.commit("setCalendarCategoryList", result.data.data);


        return result;
    },

    async fetchSingleCalendarCategory(context, { params, body, urlSegments }) {
        context;
        let result = await getCalendarCategorySingle(params, body, urlSegments);
        return result;
    },

    async calendarCategoryAdd(context, { params, body }) {
        context;
        let result = await addCalendarCategory(params, body)

        if (result.data.success) {
            showProcessSuccessMessage({
                title: 'İşlem Başarılı',
                text: result.data.message
            }).then(() => {
                context.dispatch("fetchCalendarCategoryList", {
                    params: {

                    },
                    body: {}
                })
            })

        }

        else
            showProcessErrorMessage({
                title: 'İşlem Başarısız',
                text: result.data.message
            })
        return result;
    },

    async calendarCategoryUpdate(context, { params, body }) {
        context;
        let result = await updateCalendarCategory(params, body)

        if (result.data.success) {
            showProcessSuccessMessage({
                title: 'İşlem Başarılı',
                text: result.data.message
            }).then(() => {
                context.dispatch("fetchCalendarCategoryList", {
                    params: {

                    },
                    body: {}
                })
            })
        }
        else
            showProcessErrorMessage({
                title: 'İşlem Başarısız',
                text: result.data.message
            })
        return result;
    },

    async calendarCategoryDelete(context, { params, body }) {
        context;
        showProcessPromptMessage({
            title: 'Takvim Kategorisi Silinecek',
            text: "Yapılan işlem geri alınamayacaktır. İşleme devam etmek istiyor musunuz ?",
        }).then(async function (confirm) {
            if (confirm.isConfirmed) {

                let result = await deleteCalendarCategory(params, body);
                if (result.data.success) {
                    showProcessSuccessMessage({
                        title: 'İşlem Başarılı',
                        text: result.data.message
                    }).then(() => {
                        context.dispatch("fetchCalendarCategoryList", {
                            params: {

                            },
                            body: {}
                        })
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
