<template>
  <div class="card">
    <div class="card-body">
      <div class="row mb-3">
        <div class="col-lg-12 text-end">
          <v-btn
            color="success darken-2"
            text
            small
            @click="showNewUserDialog = !showNewUserDialog"
            ><v-icon small left>mdi-account-plus</v-icon> Kullanıcı Ekle</v-btn
          >
        </div>
        <div class="col-lg-12 d-flex flex-wrap">
          <div>
            <p class="text-center">Gösterilen Kayıt Sayısı</p>
            <v-btn-toggle mandatory rounded dense>
              <v-btn @click="perPage = 10"> 10 </v-btn>
              <v-btn @click="perPage = 20"> 20 </v-btn>
              <v-btn @click="perPage = 30"> 30 </v-btn>
              <v-btn @click="perPage = 40"> 50 </v-btn>
            </v-btn-toggle>
          </div>
          <div class="ms-auto">
            <v-text-field
              v-model="listTextSearch"
              class="mt-5 pt-3"
              outlined
              rounded
              dense
              placeholder="Arama Yapın..."
              clearable
              hide-details
              append-icon="mdi-magnify"
              @click:append="searchClicked"
              @keydown.enter="searchClicked"
            ></v-text-field>
          </div>
        </div>
      </div>
      <div class="row">
        <ResultTableView
          :perPage="perPage"
          :currentPage="currentPage"
        ></ResultTableView>
      </div>
      <!-- end row -->
      <div class="row">
        <div class="col-lg-12 mb-5">
          <v-pagination
            v-model="currentPage"
            circle
            class="my-4"
            :length="
              this.userList.totalCount
                ? Math.ceil(this.userList.totalCount / this.perPage)
                : 1
            "
            :total-visible="8"
          ></v-pagination>
        </div>
      </div>
    </div>
    <EditUserDialog
      :processType="'new'"
      :showDialog="showNewUserDialog"
      @dialogChange="(data) => (showNewUserDialog = data)"
    ></EditUserDialog>
  </div>
</template>

<script>
import ResultTableView from "@/components/management/user-management/results/ResultsTableView.vue";

import EditUserDialog from "./dialogs/EditUserDialog.vue";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    ResultTableView,
    EditUserDialog,
  },
  created() {
    this.fetchUserList({
      params: {
        userId: this.user.UserId,
        pageNumber: this.currentPage,
        pageSize: this.perPage,
      },
      body: {
        RoleGroupId: null,
        RoleId: null,
        SalesPersonCode: null,
        LastLoginDate: null,
        isActive: null,
        SearchText: this.listTextSearch,
      },
    });
  },
  computed: {
    ...mapState("user", ["userList"]),
    ...mapState("auth", ["user"]),
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      showNewUserDialog: false,
      listTextSearch:""
    };
  },
  methods: {
    ...mapActions("user", ["fetchUserList"]),
    clickLabel(item) {
      console.log("Click", item);
    },
    searchClicked() {
      this.fetchUserList({
        params: {
          userId: this.user.UserId,
          pageNumber: this.currentPage,
          pageSize: this.perPage,
        },
        body: {
          RoleGroupId: null,
          RoleId: null,
          SalesPersonCode: null,
          LastLoginDate: null,
          isActive: null,
          SearchText: this.listTextSearch ? this.listTextSearch : null,
        },
      });
    },
  },
  watch: {
    perPage: function (newVal) {
      this.currentPage = 1;
      this.fetchUserList({
        params: {
          userId: this.user.UserId,
          pageNumber: this.currentPage,
          pageSize: newVal,
        },
        body: {
          RoleGroupId: null,
          RoleId: null,
          SalesPersonCode: null,
          LastLoginDate: null,
          isActive: null,
          SearchText: this.listTextSearch,
        },
      });
    },
    currentPage: function (newVal) {
      this.fetchUserList({
        params: {
          userId: this.user.UserId,
          pageNumber: newVal,
          pageSize: this.perPage,
        },
        body: {
          RoleGroupId: null,
          RoleId: null,
          SalesPersonCode: null,
          LastLoginDate: null,
          isActive: null,
          SearchText: this.listTextSearch,
        },
      });
    },
  },
};
</script>