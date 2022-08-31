const axios = require('axios').default;
import { API_BASE_URL } from "./url.js";
import { BRIDGE_URL } from "./url.js";
import { showProcessErrorMessage } from "../state/alertHelpers.js";

async function prepareRequest(config, request) {


    let result = axios.post(BRIDGE_URL,request,config);

    result.catch(error => {
        showProcessErrorMessage({
            title: 'Hata Oluştu',
            text: error.response ? error.response.data.message : error.message,
        })
    })
    return result



}

function setParamsToURL(url, params, segmentArray = []) {
    let paramsStr = "";

    for (let key in params)
        paramsStr += "&" + key + "=" + params[key];

    paramsStr = paramsStr.substring(1);
    if (paramsStr != "")
        paramsStr = "?" + paramsStr;

    let segmentString = "";    
    for(let i = 0; i < segmentArray.length; i++)
    {
        segmentString =segmentString +  "/" + segmentArray[i]; 
    }    

    return API_BASE_URL + url + segmentString + paramsStr;
}




export { prepareRequest, setParamsToURL };