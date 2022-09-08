import Swal from "sweetalert2";
import Vue from "vue";
import store from '../store';
import {

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

} from "../../services/modules/user/userService.js";

import { showProcessSuccessMessage, showProcessErrorMessage, showProcessPromptMessage } from "../../state/alertHelpers.js";

export const state = {
  userList: [],
  userListHeaders: [],
  userListLoading: false,
  userReferanceList: [],
  userReferanceListHeaders: [],
  userReferanceListLoading: false,
  userDialogLoadings: {
    roleGroupListLoading: false,
    roleListLoading: false
  }

};

export const mutations = {
  setRoleGroupListLoading(state, data) {
    state.userDialogLoadings.roleGroupListLoading = data;
  },
  setRoleListLoading(state, data) {
    state.userDialogLoadings.roleListLoading = data;
  },
  setUserList(state, data) {
    state.userList = data;
  },
  setUserListHeaders(state, data) {
    state.userListHeaders = data;
  },
  setUserListLoading(state, data) {
    state.userListLoading = data;
  },
  setUserReferanceList(state, data) {
    state.userReferanceList = data;
  },
  setUserReferanceListHeaders(state, data) {
    state.userReferanceListHeaders = data;
  },
  setUserReferanceListLoading(state, data) {
    state.userReferanceListLoading = data;
  },
  deleteUserFromUserList(state, data) {
    var user = state.userList.find(e => e.id == data.id)
    if (user) {
      let userIndex = state.userList.indexOf(user);
      if (userIndex > -1) {
        state.userList.splice(userIndex, 1);
        Swal.fire({
          title: "Kullanıcı Silindi",
          text:
            data.full_name + " adlı kullanıcı silindi",
          icon: "success",
          confirmButtonText: "Tamam",
        });
      }
    }
  },
  saveUser(state, data) {
    console.log("HAMILTON", data.hasOwnProperty("id"));
    if (data.hasOwnProperty("id")) {
      let user = state.userList.find(e => e.id == data.id)
      let userIndex = state.userList.indexOf(user);
      user = data;
      user.full_name = user.name + " " + user.surname;
      console.log("USER", user);
      Vue.set(state.userList, userIndex, user);
      Swal.fire({
        title: "İşlem Başarılı",
        text:
          data.full_name + " adlı kullanıcının bilgileri güncellendi",
        icon: "success",
        confirmButtonText: "Tamam",
      });
    }
    else {
      let lastIDUser = state.userList[state.userList.length - 1];
      data.id = lastIDUser.id + 1;
      data.full_name = data.name + " " + data.surname;
      state.userList.unshift(data);
      Swal.fire({
        title: "İşlem Başarılı",
        text:
          data.full_name + " adlı kullanıcı sisteme eklendi",
        icon: "success",
        confirmButtonText: "Tamam",
      });
    }


  }
}

export const getters = {
  getUserList(state) {
    return state.userList
  }
};

export const actions = {

  async userAdd(context, { params, body }) {
    context;

    let result = await addUser(params, body);
    if (result.data.success)
      showProcessSuccessMessage({
        title: 'İşlem Başarılı',
        text: "Kullanıcı sisteme kaydedildi",
      }).then(
        context.dispatch('fetchUserList', {
          params: {
            userId: store.state.auth.user.UserId
          },
          body: {
            RoleGroupId: null,
            RoleId: null,
            SalesPersonCode: null,
            LastLoginDate: null,
            isActive: null,
            SearchText: null,
          },
        })
      );
    else
      showProcessErrorMessage({
        title: 'İşlem Başarısız',
        text: result.data.message,
      });
    console.log("ADD_RESULT", result);
    return result;
  },

  async userUpdate(context, { params, body }) {

    let result = await updateUser(params, body);
    if (result.data.success)
      showProcessSuccessMessage({
        title: 'İşlem Başarılı',
        text: "Kullanıcı bilgileri güncellendi",
      }).then(
        context.dispatch('fetchUserList', {
          params: {
            userId: store.state.auth.user.UserId
          },
          body: {
            RoleGroupId: null,
            RoleId: null,
            SalesPersonCode: null,
            LastLoginDate: null,
            isActive: null,
            SearchText: null,
          },
        })
      );
    else
      showProcessErrorMessage({
        title: 'İşlem Başarısız',
        text: result.data.message,
      });
    return result;

  },

  async userDelete(context, { params, body }) {
    context;
    showProcessPromptMessage({
      title: 'Kullanıcı Silinecek',
      text: "Yapılan işlem geri alınamayacaktır. İşleme devam etmek istiyor musunuz ?",
    }).then(async function (confirm) {
      if (confirm.isConfirmed) {
        console.log("PARAMS", params);
        let result = await deleteUser(params, body);
        if (result.data.success)
          showProcessSuccessMessage({
            title: 'İşlem Başarılı',
            text: result.data.message,
          }).then(
            context.dispatch('fetchUserList', {
              params: {
                userId: store.state.auth.user.UserId
              },
              body: {
                RoleGroupId: null,
                RoleId: null,
                SalesPersonCode: null,
                LastLoginDate: null,
                isActive: null,
                SearchText: null,
              },
            })
          );
        else
          showProcessErrorMessage({
            title: 'İşlem Başarısız',
            text: result.data.message,
          });
        console.log("DELETE_RESULT", result);
        return result;
      }
    }
    )


  },

  async userPasswordChange(context, { params, body }) {
    context;
    let result = await changePasswordUser(params, body);
    if (result.data.success)
      showProcessSuccessMessage({
        title: 'İşlem Başarılı',
        text: "Şifre güncellendi",
      });
    else
      showProcessErrorMessage({
        title: 'İşlem Başarısız',
        text: result.data.message,
      });
    console.log("CHANGE_PASSWORD_RESULT", result);
    return result;
  },


  async fetchUserList(context, { params, body }) {
    context.commit("setUserListLoading", true)
    let result = await getList(params, body);
    console.log("LIST_RESULT", result);
    context.commit("setUserListLoading", false)
    context.commit("setUserList", result.data);
    context.commit('setUserListHeaders', [
      {
        key: 'full_name',
        label: 'Ad Soyad',
        sortable: true,

      },
      {
        key: 'email',
        label: 'E-Posta',
        sortable: false,

      },
      {
        key: 'phoneNumber',
        label: 'Telefon',
        sortable: true,

      },
      {
        key: 'erpCode',
        label: 'Cari Kod',
        sortable: false,

      },
      {
        key: 'salesPersonCode',
        label: 'Plasiyer Kod',
        sortable: false,

      },
      {
        key: 'lastLoginDate',
        label: 'Son Giriş Tarihi',
        sortable: false,

      },
      {
        key: 'isActive',
        label: 'Durum',
        sortable: false,

      },
      {
        key: 'process',
        label: 'İşlem',
        sortable: false,
        class: "text-center"

      }
    ]);
  },

  async fetchSingleUser(context, { params, body, urlSegments }) {
    context;
    let result = await getSingle(params, body, urlSegments);
    return result.data.data;
  },

  async fetchRoleGroupList(context, { params, body }) {
    context.commit("setRoleGroupListLoading", true);
    let result = await getRoleGroupList(params, body);
    context.commit("setRoleGroupListLoading", false)
    return result.data.data;
  },

  async fetchRoleList(context, { params, body }) {
    context.commit("setRoleGroupListLoading", true);
    let result = await getRoleList(params, body);
    context.commit("setRoleGroupListLoading", false)
    console.log("ROLE_GRUP_LIST", result);
    return result.data.data;
  },

  async fetchUserReferanceList(context, { params, body }) {
    context.commit("setUserReferanceListLoading", true)
    context.commit('setUserReferanceListHeaders', [
      {
        key: 'current_code',
        label: 'Cari Kod',
        sortable: false,

      },
      {
        key: 'full_name',
        label: 'Ad Soyad',
        sortable: true,

      },
      {
        key: 'tc_no',
        label: 'T.C Kimlik No',
        sortable: true,

      },
      {
        key: 'phone',
        label: 'Telefon',
        sortable: false,

      },
      {
        key: 'email',
        label: 'E-Posta',
        sortable: false,

      },
      {
        key: 'applicant_date',
        label: 'Plasiyer Kod',
        sortable: false,

      },
      {
        key: 'ip_address',
        label: 'IP Adresi',
        sortable: false,

      },
      {
        key: 'status',
        label: 'Durum',
        sortable: false,
        class: "text-center"
      },
      {
        key: 'process',
        label: 'Onay / Red',
        sortable: false,
        class: "text-center"

      }
    ]);
    let result = await getReferanceList(params, body);
    console.log("REFERANCE_LIST_RESULT", result);
    context.commit("setUserReferanceListLoading", false)
    
  },

  async fetchSingleUserReferance(context, { params, body, urlSegments }) {
    context;
    let result = await getSingleReferance(params, body, urlSegments)
    console.log("SINGLE_REFERANCE_RESULT", result);
  },

  async userReferanceAdd(context, { params, body }) {
    context;
    let result = await addUserReferance(params, body)
    console.log("ADD_USER_REFERANCE_RESULT", result);
  },

  async userReferanceUpdate(context, { params, body }) {
    context;
    let result = await updateUserReferance(params, body)
    console.log("UPDATE_USER_REFERANCE_RESULT", result);
  },

  async userReferanceApprove(context, { params, body }) {
    context;
    let result = await approveUserReferance(params, body)
    console.log("APPROVE_USER_REFERANCE_RESULT", result);
  },

  async userReferanceDeny(context, { params, body }) {
    context;
    let result = await denyUserReferance(params, body)
    console.log("DENY_USER_REFERANCE_RESULT", result);
  },



  saveUserToUserList(context, data) {
    context.commit("saveUser", data);
  },
  deleteUser(context, user) {
    Swal.fire({
      title: "Kullanıcı Silme İşlemi",
      text: user.full_name + " adlı kullanıcıyı silmek istediğinize emin misiniz ?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Evet",
      cancelButtonText: "Hayır"
    })
      .then(function (confirm) {
        if (confirm.isConfirmed) {
          context.commit("deleteUserFromUserList", user);
        }
      });
  }
};
