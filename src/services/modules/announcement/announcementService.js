import { prepareRequest } from "../../index.js";
import { setParamsToURL } from "../../index.js"
import { ANNOUNCEMENT_API_URL_LIST }from "../../routes/announcement/index.js";
import  store  from '../../../state/store';

async function getList(params, body, urlSegments) {
  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "GET",
    url: setParamsToURL(ANNOUNCEMENT_API_URL_LIST.LIST_URL,params,urlSegments),
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
      url: setParamsToURL(ANNOUNCEMENT_API_URL_LIST.SINGLE_URL,params,urlSegments),
      post: body
    }
    return prepareRequest(config,request,true);
  }

async function addAnnouncement(params, body) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "POST",
      url: setParamsToURL(ANNOUNCEMENT_API_URL_LIST.ADD_URL,params),
      post: body
    }
    return prepareRequest(config,request);
}

async function updateAnnouncement(params, body) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "POST",
      url: setParamsToURL(ANNOUNCEMENT_API_URL_LIST.UPDATE_URL,params),
      post: body
    }
    return prepareRequest(config,request);
}


async function deleteAnnouncement(params, body) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "POST",
      url: setParamsToURL(ANNOUNCEMENT_API_URL_LIST.DELETE_URL,params),
      post: body
    }
    return prepareRequest(config,request);
}

export { getList, addAnnouncement, updateAnnouncement, deleteAnnouncement, getSingle };