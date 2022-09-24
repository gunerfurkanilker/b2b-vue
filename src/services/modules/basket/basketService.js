import { prepareRequest } from "../../index.js";
import { setParamsToURL } from "../../index.js"
import { BASKET_API_URL_LIST }from "../../routes/basket/index.js";
import  store  from '../../../state/store';

async function getBasketCategoryList(params, body, urlSegments) {
  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "GET",
    url: setParamsToURL(BASKET_API_URL_LIST.CATEGORY_LIST_URL,params,urlSegments),
    post: body
  }
  return prepareRequest(config,request,true);
}

async function getBasketCategorySingle(params, body, urlSegments) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "GET",
      url: setParamsToURL(BASKET_API_URL_LIST.CATEGORY_SINGLE_URL,params,urlSegments),
      post: body
    }
    return prepareRequest(config,request,true);
  }

async function addBasketCategory(params, body) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "POST",
      url: setParamsToURL(BASKET_API_URL_LIST.CATEGORY_ADD_URL,params),
      post: body
    }
    return prepareRequest(config,request);
}

async function updateBasketCategory(params, body) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "POST",
      url: setParamsToURL(BASKET_API_URL_LIST.CATEGORY_UPDATE_URL,params),
      post: body
    }
    return prepareRequest(config,request);
}


async function deleteBasketCategory(params, body) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "POST",
      url: setParamsToURL(BASKET_API_URL_LIST.CATEGORY_DELETE_URL,params),
      post: body
    }
    return prepareRequest(config,request);
}

export { getBasketCategoryList, addBasketCategory, updateBasketCategory, deleteBasketCategory, getBasketCategorySingle };