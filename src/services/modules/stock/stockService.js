import { prepareRequest } from "../../index.js";
import { setParamsToURL } from "../../index.js"
import { STOCK_API_URL_LIST }from "../../routes/stock/index.js";
import  store  from '../../../state/store';

async function getStockCategoryList(params, body, urlSegments) {
  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "GET",
    url: setParamsToURL(STOCK_API_URL_LIST.CATEGORY_LIST_URL,params,urlSegments),
    post: body
  }
  return prepareRequest(config,request,true);
}

async function getStockCategorySingle(params, body, urlSegments) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "GET",
      url: setParamsToURL(STOCK_API_URL_LIST.CATEGORY_SINGLE_URL,params,urlSegments),
      post: body
    }
    return prepareRequest(config,request,true);
  }

async function addStockCategory(params, body) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "POST",
      url: setParamsToURL(STOCK_API_URL_LIST.CATEGORY_ADD_URL,params),
      post: body
    }
    return prepareRequest(config,request);
}

async function updateStockCategory(params, body) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "POST",
      url: setParamsToURL(STOCK_API_URL_LIST.CATEGORY_UPDATE_URL,params),
      post: body
    }
    return prepareRequest(config,request);
}


async function deleteStockCategory(params, body) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "POST",
      url: setParamsToURL(STOCK_API_URL_LIST.CATEGORY_DELETE_URL,params),
      post: body
    }
    return prepareRequest(config,request);
}

export { getStockCategoryList, addStockCategory, updateStockCategory, deleteStockCategory, getStockCategorySingle };