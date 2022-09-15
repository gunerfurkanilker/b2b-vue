//const axios = require('axios').default;
import { prepareRequest } from "../../index.js";
import { setParamsToURL } from "../../index.js"
import { SETTINGS_API_URL_LIST }from "../../routes/settings/index.js";
import  store  from '../../../state/store';

async function getSettings(params, body) {
  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "GET",
    url: setParamsToURL(SETTINGS_API_URL_LIST.LIST_URL,params),
    post: body
  }
  return prepareRequest(config,request, true);
}

async function updateErpSettings(params, body) {
  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "POST",
    url: setParamsToURL(SETTINGS_API_URL_LIST.UPDATE_ERP_SETTINGS_URL,params),
    post: body
  }
  return prepareRequest(config,request);
}

async function updateGeneralSettings(params, body) {
  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "POST",
    url: setParamsToURL(SETTINGS_API_URL_LIST.UPDATE_GENERAL_SETTINGS_URL,params),
    post: body
  }
  return prepareRequest(config,request);
}

async function updateMailSettings(params, body) {
  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "POST",
    url: setParamsToURL(SETTINGS_API_URL_LIST.UPDATE_MAIL_SETTINGS_URL,params),
    post: body
  }
  return prepareRequest(config,request);
}


export { getSettings, updateErpSettings, updateGeneralSettings, updateMailSettings };