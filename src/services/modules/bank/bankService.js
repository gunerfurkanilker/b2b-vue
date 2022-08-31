//const axios = require('axios').default;
import { prepareRequest } from "../../index.js";
import { setParamsToURL } from "../../index.js"
import { BANK_API_URL_LIST }from "../../routes/bank/index.js";
import  store  from '../../../state/store';

async function getSafeDepositsList(params, body) {
  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "GET",
    url: setParamsToURL(BANK_API_URL_LIST.SAFE_DEPOSITS_LIST_URL,params),
    post: body
  }
  return prepareRequest(config,request);
}


export { getSafeDepositsList };