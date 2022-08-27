import axios from "axios";
//import { initAxiosInstance } from "../index.js";
//import { REQUEST_URL } from "../url.js";
import { BRIDGE_URL } from "../url.js"

async function login(username,password){
    //let axiosInstance = initAxiosInstance();
    
        let response = await axios.post(BRIDGE_URL,{
            "method":"POST",
            "post":{
                "Value": username,
                "Password": password
            }
        },
          {
            headers:{

            }
          } 
        )
        return response;
   
    
}

export { login };