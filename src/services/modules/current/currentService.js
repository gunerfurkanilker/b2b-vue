import { prepareRequest } from "../../index.js";
import { setParamsToURL } from "../../index.js"
import { CURRENT_API_URL_LIST } from "../../routes/current/index.js";
import  store  from '../../../state/store';

async function getList(params, body, urlSegments) {
    let config= {
        headers:{
            Authorization: "Bearer " + store.state.auth.token
        }
    };
    let request = {
        method: "GET",
        url: setParamsToURL(CURRENT_API_URL_LIST.LIST_URL,params,urlSegments),
        post: body
    }
    return prepareRequest(config,request,true);
}

async function getSalesPersonList(params, body, urlSegments) {
    let config= {
        headers:{
            Authorization: "Bearer " + store.state.auth.token
        }
    };
    let request = {
        method: "GET",
        url: setParamsToURL(CURRENT_API_URL_LIST.LIST_URL,params,urlSegments),
        post: body
    }
    return prepareRequest(config,request,true);
}

async function getSingle(params, body, urlSegments) {
    let config= {
        headers:{
            Authorization: "Bearer " + store.state.auth.token
        }
    };
    let request = {
        method: "GET",
        url: setParamsToURL(CURRENT_API_URL_LIST.SINGLE_URL,params,urlSegments),
        post: body
    }
    return prepareRequest(config,request,true);
}

async function addCurrent(params, body) {
    let config= {
        headers:{
            Authorization: "Bearer " + store.state.auth.token
        }
    };
    let request = {
        method: "POST",
        url: setParamsToURL(CURRENT_API_URL_LIST.ADD_URL,params),
        post: body
    }
    return prepareRequest(config,request);
}


export { getList, getSalesPersonList, addCurrent, getSingle };