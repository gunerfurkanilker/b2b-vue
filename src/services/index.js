const axios = require('axios').default;
import { API_BASE_URL } from "./url.js";
import { BRIDGE_URL } from "./url.js";
import { showProcessErrorMessage } from "../state/alertHelpers.js";
import store from '../state/store';

async function prepareRequest(config, request, loading = false) {

    store.commit('process/initProcessLoading',loading)

    let result = await axios.post(BRIDGE_URL,request,config)
        .catch(error => {
            showProcessErrorMessage({
                title: 'Hata Oluştu',
                text: error.response ? error.response.data.message : error.message,
            })
            return false;
        })
        .finally(() => {
            store.commit('process/initProcessLoading',false)
        })

    return result;
    
}

function setParamsToURL(url, params, urlSegments = []) {
    let paramsStr = "";

    for (let key in params)
        paramsStr += "&" + key + "=" + params[key];

    paramsStr = paramsStr.substring(1);
    if (paramsStr != "")
        paramsStr = "?" + paramsStr;

    let segmentString = "";    
    for(let i = 0; i < urlSegments.length; i++)
    {
        segmentString =segmentString +  "/" + urlSegments[i]; 
    }    

    return API_BASE_URL + url + segmentString + paramsStr;
}




export { prepareRequest, setParamsToURL };