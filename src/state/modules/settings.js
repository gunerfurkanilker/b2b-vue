//import jwt_decode from "jwt-decode";

import { showProcessSuccessMessage, showProcessErrorMessage } from "../../state/alertHelpers.js";

import {
    getSettings, updateErpSettings, updateGeneralSettings, updateMailSettings
} from "../../services/modules/settings/settingsService";

export const state = {
    erpSettings: {},
    generalSettings: {},
    mailSettings: {},
    settingsLoading: false
  };
  
  export const mutations = {
    setErpSettings(state, data) {
      state.erpSettings = data;
    },
    setGeneralSettings(state, data) {
        state.generalSettings = data;
    },
    setMailSettings(state, data) {
        state.mailSettings = data;
    },
    setSettingsLoading(state, data) {
        state.settingsLoading = data;
    }
  }
  
  export const getters = {
    
  };
  
  export const actions = {
    async fetchSettings(context, { params, body }) {
      
      let result = await getSettings(params,body);
      
      if(result.data.success)
      {
        let resultObject = result.data.data;
        
        context.commit("setErpSettings",{
            netsisCompanyName: resultObject.netsisCompanyName,
            netsisBranchCode: resultObject.netsisBranchCode,
            netsisUserName: resultObject.netsisUserName,
            netsisUserPassword: resultObject.netsisUserPassword,
            netsisCurrentSerie: resultObject.netsisCurrentSerie,
            netsisOrderSerie: resultObject.netsisOrderSerie,
            netsisWarehouseCode : resultObject.netsisWarehouseCode,
            netOpenXRestUrl: resultObject.netOpenXRestUrl,
            eLogoUserName: resultObject.eLogoUserName,
            eLogoPassword: resultObject.eLogoPassword,
            specialCode1: resultObject.specialCode1,
            specialCode2: resultObject.specialCode2,
            netsisCurrencySale: resultObject.netsisCurrencySale,
            netsisCurrencySaleType: resultObject.netsisCurrencySale,
            stockListShowBalance: resultObject.stockListShowBalance,
            cartShowBalance: resultObject.cartShowBalance,
            orderApprove: resultObject.orderApprove,
            conditionOperation: resultObject.conditionOperation,
            campaignOperation: resultObject.campaignOperation,
            salesPersonOffersAdminApproveToCustomer:  resultObject.salesPersonOffersAdminApproveToCustomer,
            paymentSaveErp: resultObject.paymentSaveErp,
            paymentMethodDiscount: resultObject.paymentMethodDiscount,
            hideBalanceType: resultObject.hideBalanceType,// Bu alan doğru mu emin değilim
            minimumStockConstraint: resultObject.minimumStockConstraint,
            maximumStockConstraint: resultObject.maximumStockConstraint,
            netsisSalePrice: resultObject.netsisSalePrice,
            stockSearch: resultObject.stockSearch,
            currentSearch: resultObject.currentSearch,
            extraPriceField: resultObject.extraPriceField,
            stockVatStatus: resultObject.stockVatStatus,
            stockListOrderBy:  resultObject.stockListOrderBy,
            stockBalanceLimit: resultObject.stockBalanceLimit
        });

        context.commit("setGeneralSettings",{
            companyLogo: resultObject.companyLogo,
            companyName: resultObject.companyName,
            companyCity: resultObject.companyCity,
            companyTown: resultObject.companyTown,
            companyAddress: resultObject.companyAddress,
            companyPhoneNumber: resultObject.companyPhoneNumber,
            companyEmail: resultObject.companyEmail,
            companyWeb: resultObject.companyWeb,
            orderEmailTo: resultObject.orderEmailTo,
            orderEmailCc: resultObject.orderEmailCc,
            customerOrderInfoEmail: resultObject.customerOrderInfoEmail,
            customerOfferInfoEmail: resultObject.customerOfferInfoEmail,
            customerLockOrderProcess: resultObject.customerLockOrderProcess,
            customerTicketInfoEmailToSalesPerson: resultObject.customerTicketInfoEmailToSalesPerson,
            unApproveOfferWaterMark: resultObject.unApproveOfferWaterMark,
            mailBgColor: resultObject.mailBgColor
        });

        context.commit("setMailSettings",{
            emailSenderName: resultObject.emailSenderName,
            email: resultObject.email,
            emailPassword: resultObject.emailPassword,
            emailPort: resultObject.emailPort,
            emailHost: resultObject.emailHost,
            emailSSL: resultObject.emailSSL
        });

      }

      return result;

    },

    async erpSettingUpdate(context, { params, body }) {
        context;
        let result = await updateErpSettings(params, body);
        if(result.data.success)
          showProcessSuccessMessage({
            title: 'İşlem Başarılı',
            text: result.data.message
          })
        else
          showProcessErrorMessage({
            title: 'İşlem Başarısız',
            text: result.data.message
          })
        return result;
    },

    async generalSettingsUpdate(context, { params, body }) {
        context;
        let result = await updateGeneralSettings(params, body);

        if(result.data.success)
          showProcessSuccessMessage({
            title: 'İşlem Başarılı',
            text: result.data.message
          })
        else
          showProcessErrorMessage({
            title: 'İşlem Başarısız',
            text: result.data.message
          })
        return result;
    },

    async mailSettingsUpdate(context, { params, body }) {
      context;
      let result = await updateMailSettings(params, body);

      if(result.data.success)
        showProcessSuccessMessage({
          title: 'İşlem Başarılı',
          text: result.data.message
        })
      else
        showProcessErrorMessage({
          title: 'İşlem Başarısız',
          text: result.data.message
        })
      return result;
  }
  };
  