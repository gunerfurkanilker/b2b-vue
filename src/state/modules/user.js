import Swal from "sweetalert2";
import Vue from "vue";

export const state = {
  userList: [],
  listHeaders: [],
  userListLoading: false,
};

export const mutations = {
  setUserList(state, data) {
    state.userList = data;
  },
  setListHeaders(state, data) {
    state.listHeaders = data;
  },
  setUserListLoading(state, data) {
    state.userListLoading = data;
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
  saveUser(state,data){
    console.log("HAMILTON",data.hasOwnProperty("id"));
    if(data.hasOwnProperty("id")){
      let user = state.userList.find(e => e.id == data.id)
      let userIndex = state.userList.indexOf(user);
      user = data;
      user.full_name = user.name + " " + user.surname;
      console.log("USER",user);
      Vue.set(state.userList, userIndex, user);
      Swal.fire({
        title: "İşlem Başarılı",
        text:
        data.full_name + " adlı kullanıcının bilgileri güncellendi",
        icon: "success",
        confirmButtonText: "Tamam",
    });
    }
    else
    {
      let lastIDUser = state.userList[state.userList.length-1];
      data.id = lastIDUser.id+1;
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
  getUserList(state){
    return state.userList
  }
};

export const actions = {
  fetchUserList(context) {
    context.commit("setUserListLoading", true)
    setTimeout(function () {
      context.commit('setUserList', [
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
          last_login: "14.08.2022",
          rolegrup: "Yönetici",
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
          last_login: "19.07.2022 19:41",
          rolegrup: "Plasiyer",
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
          last_login: "02.09.2021 16:40",
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
          last_login: "13.08.2022 11:07",
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
          last_login: "09.09.2021 19:40",
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
          last_login: "13.08.2022 15:05",
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
          last_login: "13.08.2022 17:23",
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
          last_login: "19.07.2022 19:41",
          rolegrup: "Müşteri",
          status: true,
        },
        {
          id: 9,
          tckn: "36254681452",
          full_name: "Nurullah Kaya",
          name: "Nurullah",
          surname: "Kaya",
          username: "nurullah.kaya",
          email: "n.kaya@ofiscom.net",
          phone: "5446419336",
          current_code: "",
          salesman_code: "210",
          last_login: "02.09.2021 16:40",
          rolegrup: "Müşteri",
          status: true,
        },
        {
          id: 10,
          tckn: "36254681452",
          full_name: "Bilal Recep",
          name: "Bilal",
          surname: "Recep",
          username: "bilal.recep",
          email: "bilal@akabepazarlama.com",
          phone: "2324576699",
          current_code: "00002",
          salesman_code: "",
          last_login: "13.08.2022 11:07",
          rolegrup: "Müşteri",
          status: true,
        },
        {
          id: 11,
          tckn: "36254681452",
          full_name: "Star Rulman",
          name: "Star",
          surname: "Rulman",
          username: "starrulman",
          email: "b2b@starrulmancilik.com.tr",
          phone: "1111111111",
          current_code: "00003",
          salesman_code: "00",
          last_login: "09.09.2021 19:40",
          rolegrup: "Müşteri",
          status: true,
        },
        {
          id: 12,
          tckn: "36254681452",
          full_name: "mustafa özeren",
          name: "mustafa",
          surname: "özeren",
          username: "mustafa.ozeren",
          email: "m.ozeren@hotmail.com",
          phone: "5067939516",
          current_code: "00067",
          salesman_code: "",
          last_login: "13.08.2022 15:05",
          rolegrup: "Plasiyer",
          status: true,
        },
        {
          id: 13,
          tckn: "36254681452",
          full_name: "Vedat ÖCAL",
          name: "Vedat",
          surname: "ÖCAL",
          username: "vedat.ocal",
          email: "ocallartarim@hotmail.com",
          phone: "5322750204",
          current_code: "00459",
          salesman_code: "",
          last_login: "13.08.2022 17:23",
          rolegrup: null,
          status: true,
        },
        {
          id: 14,
          tckn: "36254681452",
          full_name: "Atakan Dindar",
          name: "Atakan",
          surname: "Dindar",
          username: "atak.dindar",
          email: "atakan.dindar@ofiscom.net",
          phone: "5392903530",
          current_code: "02552",
          salesman_code: "",
          last_login: "19.07.2022 19:41",
          rolegrup: null,
          status: true,
        },
        {
          id: 15,
          tckn: "36254681452",
          full_name: "Nurullah Kaya",
          name: "Nurullah",
          surname: "Kaya",
          username: "nur.kaya",
          email: "n.kaya@ofiscom.net",
          phone: "5446419336",
          current_code: "",
          salesman_code: "210",
          last_login: "02.09.2021 16:40",
          rolegrup: null,
          status: true,
        },
        {
          id: 16,
          tckn: "36254681452",
          full_name: "Bilal Recep",
          name: "Bilal",
          surname: "Recep",
          username: "bilal.reco",
          email: "bilal@akabepazarlama.com",
          phone: "2324576699",
          current_code: "00002",
          salesman_code: "",
          last_login: "13.08.2022 11:07",
          rolegrup: null,
          status: true,
        },
        {
          id: 17,
          tckn: "36254681452",
          full_name: "Star Rulman",
          name: "Star",
          surname: "Rulman",
          username: "starrulman",
          email: "b2b@starrulmancilik.com.tr",
          phone: "1111111111",
          current_code: "00003",
          salesman_code: "00",
          last_login: "09.09.2021 19:40",
          rolegrup: null,
          status: true,
        },
        {
          id: 18,
          tckn: "36254681452",
          full_name: "mustafa özeren",
          name: "mustafa",
          surname: "özeren",
          username: "mustafaozeren",
          email: "m.ozeren@hotmail.com",
          phone: "5067939516",
          current_code: "00067",
          salesman_code: "",
          last_login: "13.08.2022 15:05",
          rolegrup: null,
          status: true,
        },
        {
          id: 19,
          tckn: "36254681452",
          full_name: "Vedat ÖCAL",
          name: "Vedat",
          surname: "ÖCAL",
          username: "vedatocal",
          email: "ocallartarim@hotmail.com",
          phone: "5322750204",
          current_code: "00459",
          salesman_code: "",
          last_login: "13.08.2022 17:23",
          rolegrup: null,
          status: true,
        },
        {
          id: 20,
          tckn: "36254681452",
          full_name: "Star Rulman",
          name: "Star",
          surname: "Rulman",
          username: "starrulman",
          email: "b2b@starrulmancilik.com.tr",
          phone: "1111111111",
          current_code: "00003",
          salesman_code: "00",
          last_login: "09.09.2021 19:40",
          rolegrup: null,
          status: true,
        },

      ]);
      context.commit('setListHeaders', [
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
          key: 'phone',
          label: 'Telefon',
          sortable: false,

        },
        {
          key: 'current_code',
          label: 'Cari Kod',
          sortable: false,

        },
        {
          key: 'salesman_code',
          label: 'Plasiyer Kod',
          sortable: false,

        },
        {
          key: 'last_login',
          label: 'Son Giriş',
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
          label: 'İşlem',
          sortable: false,
          class: "text-center"

        }
      ]);
      context.commit("setUserListLoading", false)
    }, 4000)
  },
  saveUserToUserList(context, data){
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
