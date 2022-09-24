//import Swal from "sweetalert2";
//import Vue from "vue";
//import store from '../../state/store';

import { addBasketCategory, deleteBasketCategory, getBasketCategoryList, getBasketCategorySingle, updateBasketCategory } from "../../services/modules/basket/basketService.js";
import { showProcessErrorMessage, showProcessPromptMessage, showProcessSuccessMessage } from "../alertHelpers.js";

export const state = {
    basketCategoryList: [],
    basketCategoryListHeaders: []
};

export const mutations = {
  setBasketCategoryList(state, data) {
    state.basketCategoryList = data;
  },
  setBasketCategoryListHeaders(state, data) {
    state.basketCategoryListHeaders = data;
  }
}

export const getters = {

};

export const actions = {
  async fetchBasketCategoryList(context, { params, body }) {

    context.commit('setBasketCategoryListHeaders', [
      {
        key: 'name',
        label: 'Kategori Adı',
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
    console.log("PARAMS",params);
    let result = await getBasketCategoryList(params, body);
    console.log("BASKET_CATEGORY_LIST_RESULT",result);
    context.commit("setBasketCategoryList", result.data.data);


    return result;
  },

  async fetchSingle(context, { params, body, urlSegments }) {
    context;
    let result = await getBasketCategorySingle(params, body, urlSegments);
    return result;
  },

  async basketCategoryAdd(context, { params, body }) {
    context;
    let result = await addBasketCategory(params, body)

    if (result.data.success) {
      showProcessSuccessMessage({
        title: 'İşlem Başarılı',
        text: result.data.message
      }).then(() => {
        context.dispatch("fetchBasketCategoryList", {
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

  async basketCategoryUpdate(context, { params, body }) {
    context;
    let result = await updateBasketCategory(params, body)

    if (result.data.success) {
      showProcessSuccessMessage({
        title: 'İşlem Başarılı',
        text: result.data.message
      }).then(() => {
        context.dispatch("fetchBasketCategoryList", {
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

  async basketCategoryDelete(context, { params, body }) {
    context;
    showProcessPromptMessage({
      title: 'Sepet Kategorisi Silinecek',
      text: "Yapılan işlem geri alınamayacaktır. İşleme devam etmek istiyor musunuz ?",
    }).then(async function (confirm) {
      if (confirm.isConfirmed) {
        
        let result = await deleteBasketCategory(params, body);
        if (result.data.success) {
          showProcessSuccessMessage({
            title: 'İşlem Başarılı',
            text: result.data.message
          }).then(() => {
            context.dispatch("fetchBasketCategoryList", {
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
