//const axios = require('axios').default;
import { prepareRequest } from "../../index.js";
import { setParamsToURL } from "../../index.js"
import { COMPANY_API_URL_LIST }from "../../routes/company/index.js";
import  store  from '../../../state/store';

async function getList(params, body) {
  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "GET",
    url: setParamsToURL(COMPANY_API_URL_LIST.LIST_URL,params),
    post: body
  }
  return prepareRequest(config,request);
}

async function getBranchList(params, body) {
  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "GET",
    url: setParamsToURL(COMPANY_API_URL_LIST.BRANCH_LIST_URL,params),
    post: body
  }
  return prepareRequest(config,request);
}


export { getList, getBranchList };