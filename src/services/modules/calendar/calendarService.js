import { prepareRequest } from "../../index.js";
import { setParamsToURL } from "../../index.js"
import { CALENDAR_API_URL_LIST } from "../../routes/calendar/index.js";
import store from '../../../state/store';


async function getCalendarCategoryList(params, body, urlSegments) {
    let config = {
        headers: {
            Authorization: "Bearer " + store.state.auth.token
        }
    };
    let request = {
        method: "GET",
        url: setParamsToURL(CALENDAR_API_URL_LIST.CATEGORY_LIST_URL, params, urlSegments),
        post: body
    }
    return prepareRequest(config, request, true);
}

async function getCalendarCategorySingle(params, body, urlSegments) {
    let config = {
        headers: {
            Authorization: "Bearer " + store.state.auth.token
        }
    };
    let request = {
        method: "GET",
        url: setParamsToURL(CALENDAR_API_URL_LIST.CATEGORY_SINGLE_URL, params, urlSegments),
        post: body
    }
    return prepareRequest(config, request, true);
}

async function addCalendarCategory(params, body) {
    let config = {
        headers: {
            Authorization: "Bearer " + store.state.auth.token
        }
    };
    let request = {
        method: "POST",
        url: setParamsToURL(CALENDAR_API_URL_LIST.CATEGORY_ADD_URL, params),
        post: body
    }
    return prepareRequest(config, request);
}

async function updateCalendarCategory(params, body) {
    let config = {
        headers: {
            Authorization: "Bearer " + store.state.auth.token
        }
    };
    let request = {
        method: "POST",
        url: setParamsToURL(CALENDAR_API_URL_LIST.CATEGORY_UPDATE_URL, params),
        post: body
    }
    return prepareRequest(config, request);
}

async function deleteCalendarCategory(params, body) {
    let config = {
        headers: {
            Authorization: "Bearer " + store.state.auth.token
        }
    };
    let request = {
        method: "POST",
        url: setParamsToURL(CALENDAR_API_URL_LIST.CATEGORY_DELETE_URL, params),
        post: body
    }
    return prepareRequest(config, request);
}

export { getCalendarCategoryList, addCalendarCategory, updateCalendarCategory, deleteCalendarCategory, getCalendarCategorySingle };