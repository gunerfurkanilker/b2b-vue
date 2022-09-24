import { prepareRequest } from "../../index.js";
import { setParamsToURL } from "../../index.js"
import { PAYMENT_API_URL_LIST }from "../../routes/payment/index.js";
import  store  from '../../../state/store';

async function getList(params, body, urlSegments) {
  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "GET",
    url: setParamsToURL(PAYMENT_API_URL_LIST.LIST_URL,params,urlSegments),
    post: body
  }
  return prepareRequest(config,request,true);
}

async function addPaymentMethod(params, body) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "POST",
      url: setParamsToURL(PAYMENT_API_URL_LIST.ADD_URL,params),
      post: body
    }
    return prepareRequest(config,request);
}

async function updatePaymentMethod(params, body) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "POST",
      url: setParamsToURL(PAYMENT_API_URL_LIST.UPDATE_URL,params),
      post: body
    }
    return prepareRequest(config,request);
}

export { getList, addPaymentMethod, updatePaymentMethod };