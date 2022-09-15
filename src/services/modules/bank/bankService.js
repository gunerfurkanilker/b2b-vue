//const axios = require('axios').default;
import { prepareRequest } from "../../index.js";
import { setParamsToURL } from "../../index.js"
import { BANK_API_URL_LIST } from "../../routes/bank/index.js";
import store from '../../../state/store';

async function getBankList(params, body) {
  let config = {
    headers: {
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "GET",
    url: setParamsToURL(BANK_API_URL_LIST.BANK_LIST_URL, params),
    post: body
  }
  return prepareRequest(config, request);
}

async function getSafeDepositsList(params, body) {
  let config = {
    headers: {
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "GET",
    url: setParamsToURL(BANK_API_URL_LIST.SAFE_DEPOSITS_LIST_URL, params),
    post: body
  }
  return prepareRequest(config, request);
}

async function getBankAccountList(params, body) {
  let config = {
    headers: {
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "GET",
    url: setParamsToURL(BANK_API_URL_LIST.BANK_ACCOUNT_LIST_URL, params),
    post: body
  }
  return prepareRequest(config, request);
}

async function addBankAccount(params, body) {
  let config = {
    headers: {
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "POST",
    url: setParamsToURL(BANK_API_URL_LIST.BANK_ACCOUNT_ADD_URL, params),
    post: body
  }
  return prepareRequest(config, request, true);
}

async function updateBankAccount(params, body) {
  let config = {
    headers: {
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "POST",
    url: setParamsToURL(BANK_API_URL_LIST.BANK_ACCOUNT_UPDATE_URL, params),
    post: body
  }
  return prepareRequest(config, request, true);
}

async function deleteBankAccount(params, body) {
  let config = {
    headers: {
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "POST",
    url: setParamsToURL(BANK_API_URL_LIST.BANK_ACCOUNT_DELETE_URL, params),
    post: body
  }
  return prepareRequest(config, request, true);
}

async function getBankInstallmentList(params, body) {
  let config = {
    headers: {
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "GET",
    url: setParamsToURL(BANK_API_URL_LIST.BANK_INSTALLMENT_LIST_URL, params),
    post: body
  }
  return prepareRequest(config, request);
}

async function addBankInstallment(params, body) {
  let config = {
    headers: {
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "POST",
    url: setParamsToURL(BANK_API_URL_LIST.BANK_INSTALLMENT_ADD_URL, params),
    post: body
  }
  return prepareRequest(config, request, true);
}

async function updateBankInstallment(params, body) {
  let config = {
    headers: {
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "POST",
    url: setParamsToURL(BANK_API_URL_LIST.BANK_INSTALLMENT_UPDATE_URL, params),
    post: body
  }
  return prepareRequest(config, request, true);
}

async function deleteBankInstallment(params, body) {
  let config = {
    headers: {
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "POST",
    url: setParamsToURL(BANK_API_URL_LIST.BANK_INSTALLMENT_DELETE_URL, params),
    post: body
  }
  return prepareRequest(config, request, true);
}

async function getBankParametersList(params, body) {
  let config = {
    headers: {
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "GET",
    url: setParamsToURL(BANK_API_URL_LIST.BANK_PARAMETER_LIST_URL, params),
    post: body
  }
  return prepareRequest(config, request);
}

async function addBankParameter(params, body) {
  let config = {
    headers: {
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "POST",
    url: setParamsToURL(BANK_API_URL_LIST.BANK_PARAMETER_ADD_URL, params),
    post: body
  }
  return prepareRequest(config, request, true);
}

async function updateBankParameter(params, body) {
  let config = {
    headers: {
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "POST",
    url: setParamsToURL(BANK_API_URL_LIST.BANK_PARAMETER_UPDATE_URL, params),
    post: body
  }
  return prepareRequest(config, request, true);
}

async function deleteBankParameter(params, body) {
  let config = {
    headers: {
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "POST",
    url: setParamsToURL(BANK_API_URL_LIST.BANK_PARAMETER_DELETE_URL, params),
    post: body
  }
  return prepareRequest(config, request, true);
}




export {
  getSafeDepositsList,
  getBankList,
  getBankAccountList,
  addBankAccount,
  updateBankAccount,
  deleteBankAccount,
  getBankInstallmentList,
  addBankInstallment,
  updateBankInstallment,
  deleteBankInstallment,
  getBankParametersList,
  addBankParameter,
  updateBankParameter,
  deleteBankParameter,
};