//const axios = require('axios').default;
import { prepareRequest } from "../../index.js";
import { setParamsToURL } from "../../index.js"
import { USER_API_URL_LIST }from "../../routes/user/index.js";
import  store  from '../../../state/store';

async function getList(params, body) {
  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "GET",
    url: setParamsToURL(USER_API_URL_LIST.LIST_URL,params),
    post: body
  }
  return prepareRequest(config,request);
}

async function getSingle(params, body, urlSegment) {
  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "GET",
    url: setParamsToURL(USER_API_URL_LIST.SINGLE_USER_URL,params,urlSegment),
    post: body
  }
  return prepareRequest(config,request);
}

async function getRoleGroupList(params, body) {
  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "GET",
    url: setParamsToURL(USER_API_URL_LIST.ROLE_GROUP_LIST_URL,params),
    post: body
  }
  return prepareRequest(config,request);
}

async function getRoleList(params, body) {
  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "GET",
    url: setParamsToURL(USER_API_URL_LIST.ROLE_LIST_URL,params),
    post: body
  }
  return prepareRequest(config,request);
}

export { getList, getSingle, getRoleGroupList, getRoleList };