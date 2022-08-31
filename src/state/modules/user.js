import Swal from "sweetalert2";
import Vue from "vue";
import {

  getList,
  getSingle,
  getRoleGroupList,
  getRoleList

} from "../../services/modules/user/userService.js";

export const state = {
  userList: [],
  userListHeaders: [],
  userListLoading: false,
  userApplicantList: [],
  userApplicantListHeaders: [],
  userApplicantListLoading: false,
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
  setUserApplicantList(state, data) {
    state.userApplicantList = data;
  },
  setUserApplicantListHeaders(state, data) {
    state.userApplicantListHeaders = data;
  },
  setUserApplicantListLoading(state, data) {
    state.userApplicantListLoading = data;
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

  async fetchSingleUser(context, { params, body }) {
    context;
    let result = await getSingle(params, body, [2]);
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

  fetchUserApplicantList(context) {
    context.commit("setUserApplicantListLoading", true)
    setTimeout(function () {
      context.commit('setUserApplicantList', [
        {
          id: 1,
          tckn: "36254681452",
          full_name: "İlker Furkan Güner",
          name: "İlker Furkan",
          surname: "Güner",
          username: "gladius",
          email: "gunerilkerfurkan@gmail.com",
          phone: "5051095345",
          current_code: "03536",
          salesman_code: "055",
          applicant_date: "14.08.2022",
          rolegrup: "Yönetici",
          ip_address: "192.168.2.1",
          status: true,
        },
        {
          id: 2,
          tckn: "36254681452",
          full_name: "Atakan Dindar",
          name: "Atakan",
          surname: "Dindar",
          username: "atakan.dindar",
          email: "atakan.dindar@ofiscom.net",
          phone: "5392903530",
          current_code: "02552",
          salesman_code: "",
          applicant_date: "19.07.2022 19:41",
          rolegrup: "Plasiyer",
          ip_address: "192.176.2.1",
          status: false,
        },
        {
          id: 3,
          tckn: "36254681452",
          full_name: "Nurullah Kaya",
          name: "Nurullah",
          surname: "Kaya",
          username: "n.kaya",
          email: "n.kaya@ofiscom.net",
          phone: "5446419336",
          current_code: "",
          salesman_code: "210",
          applicant_date: "02.09.2021 16:40",
          ip_address: "176.182.4.5",
          rolegrup: "Müşteri",
          status: false,
        },
        {
          id: 4,
          tckn: "36254681452",
          full_name: "Bilal Recep",
          name: "Bilal",
          surname: "Recep",
          username: "bilal",
          email: "bilal@akabepazarlama.com",
          phone: "2324576699",
          current_code: "00002",
          salesman_code: "",
          applicant_date: "13.08.2022 11:07",
          ip_address: "142.103.7.1",
          rolegrup: "Plasiyer",
          status: true,
        },
        {
          id: 5,
          tckn: "36254681452",
          full_name: "Star Rulman",
          name: "Star",
          surname: "Rulman",
          username: "starrulman",
          email: "b2b@starrulmancilik.com.tr",
          phone: "1111111111",
          current_code: "00003",
          salesman_code: "00",
          applicant_date: "09.09.2021 19:40",
          ip_address: "156.178.5.2",
          rolegrup: "Müşteri",
          status: true,
        },
        {
          id: 6,
          tckn: "36254681452",
          full_name: "mustafa özeren",
          name: "mustafa",
          surname: "özeren",
          username: "m.ozeren",
          email: "m.ozeren@hotmail.com",
          phone: "5067939516",
          current_code: "00067",
          salesman_code: "",
          applicant_date: "13.08.2022 15:05",
          ip_address: "156.178.5.2",
          rolegrup: "Müşteri",
          status: true,
        },
        {
          id: 7,
          tckn: "36254681452",
          full_name: "Vedat ÖCAL",
          name: "Vedat",
          surname: "ÖCAL",
          username: "ocallartarim",
          email: "ocallartarim@hotmail.com",
          phone: "5322750204",
          current_code: "00459",
          salesman_code: "",
          applicant_date: "13.08.2022 17:23",
          ip_address: "156.178.5.2",
          rolegrup: "Yönetici",
          status: true,
        },
        {
          id: 8,
          tckn: "36254681452",
          full_name: "Atakan Dindar",
          name: "Atakan",
          surname: "Dindar",
          username: "a.dindar",
          email: "atakan.dindar@ofiscom.net",
          phone: "5392903530",
          current_code: "02552",
          salesman_code: "",
          applicant_date: "19.07.2022 19:41",
          ip_address: "156.178.5.2",
          rolegrup: "Müşteri",
          status: true,
        }

      ]);
      context.commit('setUserApplicantListHeaders', [
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
      context.commit("setUserApplicantListLoading", false)
    }, 2000)
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
