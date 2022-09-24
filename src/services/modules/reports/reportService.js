import { prepareRequest } from "../../index.js";
import { setParamsToURL } from "../../index.js"
import { REPORT_API_URL_LIST }from "../../routes/reports/index.js";
import  store  from '../../../state/store';

async function getInvoiceProfitabilityReport(params, body) {
  let config= {
    headers:{
      Authorization: "Bearer " + store.state.auth.token
    }
  };
  let request = {
    method: "POST",
    url: setParamsToURL(REPORT_API_URL_LIST.INVOICE_PROFITABILITY_URL,params),
    post: body
  }
  return prepareRequest(config,request,true);
}

async function getStockAnalysisReport(params, body) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "POST",
      url: setParamsToURL(REPORT_API_URL_LIST.STOCK_ANALYSIS_URL,params),
      post: body
    }
    return prepareRequest(config,request,true);
}

async function getStockGroupAnalysisReport(params, body) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "POST",
      url: setParamsToURL(REPORT_API_URL_LIST.STOCK_GROUP_ANALYSIS_ADD_URL,params),
      post: body
    }
    return prepareRequest(config,request,true);
}

async function getStockCode1AnalysisReport(params, body) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "POST",
      url: setParamsToURL(REPORT_API_URL_LIST.STOCK_CODE_1_ANALYSIS_URL,params),
      post: body
    }
    return prepareRequest(config,request,true);
}

async function getStockCode2AnalysisReport(params, body) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "POST",
      url: setParamsToURL(REPORT_API_URL_LIST.STOCK_CODE_2_ANALYSIS_URL,params),
      post: body
    }
    return prepareRequest(config,request,true);
}

async function getStockCode3AnalysisReport(params, body) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "POST",
      url: setParamsToURL(REPORT_API_URL_LIST.STOCK_CODE_3_ANALYSIS_URL,params),
      post: body
    }
    return prepareRequest(config,request,true);
}

async function getStockCode4AnalysisReport(params, body) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "POST",
      url: setParamsToURL(REPORT_API_URL_LIST.STOCK_CODE_4_ANALYSIS_URL,params),
      post: body
    }
    return prepareRequest(config,request,true);
}

async function getStockCode5AnalysisReport(params, body) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "POST",
      url: setParamsToURL(REPORT_API_URL_LIST.STOCK_CODE_5_ANALYSIS_URL,params),
      post: body
    }
    return prepareRequest(config,request,true);
}

async function getSalesPersonStockSaleReport(params, body) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "POST",
      url: setParamsToURL(REPORT_API_URL_LIST.SALES_PERSON_STOCK_SALE_URL,params),
      post: body
    }
    return prepareRequest(config,request,true);
}

async function getBestSalesReport(params, body) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "POST",
      url: setParamsToURL(REPORT_API_URL_LIST.BEST_SALES_URL,params),
      post: body
    }
    return prepareRequest(config,request,true);
}

async function getCurrentPerformanceReport(params, body) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "POST",
      url: setParamsToURL(REPORT_API_URL_LIST.CURRENT_PERFORMANCE_URL,params),
      post: body
    }
    return prepareRequest(config,request,true);
}

async function getGeneralDebtStatementReport(params, body) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "POST",
      url: setParamsToURL(REPORT_API_URL_LIST.GENERAL_DEBT_STATEMENT_URL,params),
      post: body
    }
    return prepareRequest(config,request,true);
}

async function getChequeReport(params, body) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "POST",
      url: setParamsToURL(REPORT_API_URL_LIST.CHEQUE_URL,params),
      post: body
    }
    return prepareRequest(config,request,true);
}

async function getBillReport(params, body) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "POST",
      url: setParamsToURL(REPORT_API_URL_LIST.BILL_URL,params),
      post: body
    }
    return prepareRequest(config,request,true);
}

async function getSafeReport(params, body) {
    let config= {
      headers:{
        Authorization: "Bearer " + store.state.auth.token
      }
    };
    let request = {
      method: "POST",
      url: setParamsToURL(REPORT_API_URL_LIST.SAFE_URL,params),
      post: body
    }
    return prepareRequest(config,request,true);
}

export { 

    getInvoiceProfitabilityReport,
    getStockAnalysisReport,
    getStockGroupAnalysisReport,
    getStockCode1AnalysisReport,
    getStockCode2AnalysisReport,
    getStockCode3AnalysisReport,
    getStockCode4AnalysisReport,
    getStockCode5AnalysisReport,
    getSalesPersonStockSaleReport,
    getBestSalesReport,
    getCurrentPerformanceReport,
    getGeneralDebtStatementReport,
    getChequeReport,
    getBillReport,
    getSafeReport

};