import { prepareRequest } from "../../index.js";
import { setParamsToURL } from "../../index.js"
import { SLIDER_API_URL_LIST } from "../../routes/slider/index.js";
import  store  from '../../../state/store';

async function getList(params, body, urlSegments) {
    let config= {
        headers:{
            Authorization: "Bearer " + store.state.auth.token
        }
    };
    let request = {
        method: "GET",
        url: setParamsToURL(SLIDER_API_URL_LIST.LIST_URL,params,urlSegments),
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
        url: setParamsToURL(SLIDER_API_URL_LIST.SINGLE_URL,params,urlSegments),
        post: body
    }
    return prepareRequest(config,request,true);
}

async function addSlider(params, body) {
    let config= {
        headers:{
            Authorization: "Bearer " + store.state.auth.token
        }
    };
    let request = {
        method: "POST",
        url: setParamsToURL(SLIDER_API_URL_LIST.ADD_URL,params),
        post: body
    }
    return prepareRequest(config,request);
}

async function updateSlider(params, body) {
    let config= {
        headers:{
            Authorization: "Bearer " + store.state.auth.token
        }
    };
    let request = {
        method: "POST",
        url: setParamsToURL(SLIDER_API_URL_LIST.UPDATE_URL,params),
        post: body
    }
    return prepareRequest(config,request);
}


async function deleteSlider(params, body, urlSegments) {
    let config= {
        headers:{
            Authorization: "Bearer " + store.state.auth.token
        }
    };
    let request = {
        method: "POST",
        url: setParamsToURL(SLIDER_API_URL_LIST.DELETE_URL,params,urlSegments),
        post: body
    }
    return prepareRequest(config,request);
}

export { getList, addSlider, updateSlider, deleteSlider, getSingle };