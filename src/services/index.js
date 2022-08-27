const axios = require('axios').default;

import {BRIDGE_URL} from "./url.js";

function initAxiosInstance(headers){
    let axiosInstance = axios.create({
        baseURL: BRIDGE_URL,  
        headers: headers
    })
    return axiosInstance;
}


export { initAxiosInstance };