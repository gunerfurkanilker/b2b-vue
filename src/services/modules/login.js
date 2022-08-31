import { prepareRequest } from "../index.js";
import { setParamsToURL } from "../index.js";
import { USER_API_URL_LIST }from "../routes/user/index.js";

async function login(username,password){
    let response = await prepareRequest(null,{
      method: "POST",
      url: setParamsToURL(USER_API_URL_LIST.LOGIN_URL),
      post: {
        Value: username,
        Password: password
      }
    });
    return response;
}

export { login };