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

async function getSingle(params, body, urlSegments) {
  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "GET",
    url: setParamsToURL(USER_API_URL_LIST.SINGLE_USER_URL,params,urlSegments),
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

async function addUser(params,body){
  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "POST",
    url: setParamsToURL(USER_API_URL_LIST.ADD_USER_URL,params),
    post: body
  }
  return prepareRequest(config,request);
}

async function updateUser(params,body){
  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "POST",
    url: setParamsToURL(USER_API_URL_LIST.UPDATE_USER_URL,params),
    post: body
  }
  return prepareRequest(config,request);
}


async function deleteUser(params,body){
  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "POST",
    url: setParamsToURL(USER_API_URL_LIST.DELETE_USER_URL,params),
    post: body
  }
  return prepareRequest(config,request);
}


async function changePasswordUser(params,body){
  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "POST",
    url: setParamsToURL(USER_API_URL_LIST.CHANGE_USER_PASSWORD_URL,params),
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

async function getReferanceList(params, body) {
  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "GET",
    url: setParamsToURL(USER_API_URL_LIST.REFERANCE_LIST_URL,params),
    post: body
  }
  return prepareRequest(config,request);
}

async function getSingleReferance(params, body) {
  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "GET",
    url: setParamsToURL(USER_API_URL_LIST.REFERANCE_SINGLE_URL,params),
    post: body
  }
  return prepareRequest(config,request);
}

async function approveUserReferance(params,body){

  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "POST",
    url: setParamsToURL(USER_API_URL_LIST.REFERANCE_APPROVE_URL,params),
    post: body
  }
  return prepareRequest(config,request);

}

async function denyUserReferance(params,body){

  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "POST",
    url: setParamsToURL(USER_API_URL_LIST.REFERANCE_DENY_URL,params),
    post: body
  }
  return prepareRequest(config,request);

}

async function addUserReferance(params,body){

  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "POST",
    url: setParamsToURL(USER_API_URL_LIST.REFERANCE_ADD_URL,params),
    post: body
  }
  return prepareRequest(config,request);

}

async function updateUserReferance(params,body){

  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "POST",
    url: setParamsToURL(USER_API_URL_LIST.REFERANCE_UPDATE_URL,params),
    post: body
  }
  return prepareRequest(config,request);

}




export { 
  getList, 
  getSingle, 
  getRoleGroupList, 
  getRoleList, 
  addUser, 
  updateUser, 
  deleteUser, 
  changePasswordUser, 
  getReferanceList,
  getSingleReferance,
  approveUserReferance,
  denyUserReferance,
  addUserReferance,
  updateUserReferance 
};