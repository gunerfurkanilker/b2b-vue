//import jwt_decode from "jwt-decode";

import { showProcessSuccessMessage, showProcessErrorMessage, showProcessPromptMessage } from "../../state/alertHelpers.js";

import { addShippingCompany, deleteShippingCompany, getShippingCompanies, getShippingCompany, updateShippingCompany } from "../../services/modules/shipping/shippingService.js";

export const state = {
    shippingCompanyList: [],
    shippingCompanyHeaders: [],
    shippingCompanyListLoading: false,
};

export const mutations = {
    setShippingCompanyList(state, data) {
        state.shippingCompanyList = data;
    },
    setShippingCompanyHeaders(state, data) {
        state.shippingCompanyHeaders = data;
    },
    setShippingCompanyListLoading(state, data) {
        state.shippingCompanyListLoading = data;
    }
}

export const getters = {

};

export const actions = {
    async fetchShippingCompanyList(context, { params, body }) {
        context;
        context.commit("setShippingCompanyListLoading", true);
        let result = await getShippingCompanies(params, body);
        context.commit("setShippingCompanyListLoading", false);
        context.commit("setShippingCompanyHeaders", [
            {
                key: 'name',
                label: 'Kargo Firma Adı',
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
                class: 'text-center'
            },
        ]

        )
        context.commit("setShippingCompanyList", result.data.data)
        return result;

    },

    async fetchSingleShippingCompany(context, { params, body, urlSegments }) {
        context;
        let result = await getShippingCompany(params, body, urlSegments);
        return result;
    },

    async shippingCompanyAdd(context, { params, body }) {
        context;
        let result = await addShippingCompany(params, body);

        if (result.data.success) {
            showProcessSuccessMessage({
                title: 'İşlem Başarılı',
                text: result.data.message
            })
            context.dispatch("fetchShippingCompanyList", {
                params: {

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

    async shippingCompanyUpdate(context, { params, body }) {
        context;
        let result = await updateShippingCompany(params, body);

        if (result.data.success)
        {
            showProcessSuccessMessage({
                title: 'İşlem Başarılı',
                text: result.data.message
            })
            context.dispatch("fetchShippingCompanyList", {
                params: {

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

    async shippingCompanyDelete(context, { params, body, urlSegments }) {
        context;
        showProcessPromptMessage({
            title: 'Firma Silinecek',
            text: "Yapılan işlem geri alınamayacaktır. İşleme devam etmek istiyor musunuz ?",
        }).then(async function (confirm) {
            if (confirm.isConfirmed) {

                let result = await deleteShippingCompany(params, body, urlSegments);
                if (result.data.success) {
                    showProcessSuccessMessage({
                        title: 'İşlem Başarılı',
                        text: result.data.message
                    })
                    context.dispatch("fetchShippingCompanyList", {
                        params: {

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
    }
};
