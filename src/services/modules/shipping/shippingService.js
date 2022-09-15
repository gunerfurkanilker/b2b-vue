//const axios = require('axios').default;
import { prepareRequest } from "../../index.js";
import { setParamsToURL } from "../../index.js"
import { SHIPPING_API_URL_LIST }from "../../routes/shipping/index.js";
import  store  from '../../../state/store';

async function getShippingCompanies(params, body) {
  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "GET",
    url: setParamsToURL(SHIPPING_API_URL_LIST.LIST_SHIPPING_COMPANY_URL,params),
    post: body
  }
  return prepareRequest(config,request);
}

async function getShippingCompany(params, body, urlSegments) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "GET",
      url: setParamsToURL(SHIPPING_API_URL_LIST.SINGLE_SHIPPING_COMPANY_URL,params,urlSegments),
      post: body
    }
    return prepareRequest(config,request);
  }

  async function addShippingCompany(params, body) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "POST",
      url: setParamsToURL(SHIPPING_API_URL_LIST.ADD_SHIPPING_COMPANY_URL,params),
      post: body
    }
    return prepareRequest(config,request);
  }

async function updateShippingCompany(params, body) {
  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "POST",
    url: setParamsToURL(SHIPPING_API_URL_LIST.UPDATE_SHIPPING_COMPANY_URL,params),
    post: body
  }
  return prepareRequest(config,request);
}

async function deleteShippingCompany(params, body, urlSegments) {
  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "POST",
    url: setParamsToURL(SHIPPING_API_URL_LIST.DELETE_SHIPPING_COMPANY_URL,params,urlSegments),
    post: body
  }
  return prepareRequest(config,request);
}


export { getShippingCompanies, getShippingCompany, addShippingCompany, updateShippingCompany, deleteShippingCompany };