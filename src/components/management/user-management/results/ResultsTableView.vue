<template>
  <div class="card">
    <div class="card-body">
      <b-table
        :items="userList.data"
        :fields="userListHeaders"
        hover
        responsive
        sort-icon-left
        :current-page="currentPage"
        :busy="userListLoading"
      >
        <template #table-busy>
          <div class="text-center">
            <b-spinner
              variant="primary"
              size="lg"
              label="Lütfen Bekleyin..."
            ></b-spinner>
          </div>
        </template>
        <template #cell(full_name)="data">
          {{ data.item.firstName.concat(" ",data.item.lastName) }}
        </template>
        <template #cell(isActive)="data">
          <v-chip small :color="data.item.isActive ? 'success lighten-1' : 'secondary'" label> {{ data.item.isActive ? 'Aktif' : 'Pasif' }} </v-chip>
        </template>
        <template #cell(lastLoginDate)="data">
          {{ data.item.lastLoginDate ? moment(data.item.lastLoginDate).locale("tr").format("DD MM YYYY hh:mm:ss") : '' }}
        </template>
        <template #cell(process)="data">
          <div class="text-center">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  icon
                  color="amber darken-2"
                  @click="openUserEditDialog(data.item, 'edit')"
                >
                  <v-icon>mdi-account-edit</v-icon>
                </v-btn>
              </template>
              <span>Kullanıcı Düzenle</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon color="indigo darken-2" @click="openChangePasswordDialog(data.item)">
                  <v-icon>mdi-lock-reset</v-icon>
                </v-btn>
              </template>
              <span>Şifre Değiştir</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon color="danger darken-2" @click="deleteUser(data.item)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </template>
              <span>Kullanıcıyı Sil</span>
            </v-tooltip>
          </div>
        </template>
      </b-table>
      <EditUserDialog
        :userProp="userData"
        :processType="'edit'"
        :showDialog="showUserEditDialog"
        @dialogChange="(data) => (showUserEditDialog = data)"
      ></EditUserDialog>
      <ChangePasswordDialog
        :userProp="userData"
        :showDialog="showChangePasswordDialog"
        @dialogChange="(data) => (showChangePasswordDialog = data)"
      ></ChangePasswordDialog>
      
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import moment from "moment";

import EditUserDialog from "../dialogs/EditUserDialog.vue";
import ChangePasswordDialog from "../dialogs/ChangePasswordDialog.vue";

export default {
  props: {
    perPage: {
      type: Number,
    },
    currentPage: {
      type: Number,
    },
  },

  components: {
    EditUserDialog,
    ChangePasswordDialog
  },

  computed: {
    ...mapState("user", ["userList", "userListHeaders", "userListLoading"])
  },
  mounted() {
    
  },
  data() {
    return {
      selectRow: false,
      userData: null,
      showUserEditDialog: false,
      showChangePasswordDialog: false
    };
  },
  methods: {
    ...mapActions("user", ["deleteUser"]),
    openUserEditDialog(user) {
      this.userData = Object.assign({}, user);
      this.showUserEditDialog = !this.showUserEditDialog;
    },
    openChangePasswordDialog(user){
      this.userData = Object.assign({}, user);
      this.showChangePasswordDialog = !this.showChangePasswordDialog;
    },
    moment(date){
      return moment(date);
    }
  },
  watch: {


  },
};
</script>
