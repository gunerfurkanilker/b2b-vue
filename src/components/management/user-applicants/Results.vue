<template>
<div class="card">
  <div class="card-body">
    <div class="row mb-3">
      <div class="col-lg-12 text-end">
          <v-btn
            color="success darken-2"
            text
            small
            @click="showNewUserReferanceDialog = !showNewUserReferanceDialog"
            ><v-icon small left>mdi-account-plus</v-icon> Referans Ekle</v-btn
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
            <v-btn @click="perPage = 50"> 100 </v-btn>
          </v-btn-toggle>
        </div>
        <div class="ms-auto">
          <v-text-field
            class="mt-5 pt-3"
            outlined
            rounded
            dense
            placeholder="Arama Yapın..."
            clearable
            hide-details
            append-icon="mdi-magnify"
            @click:append="false"
            @keydown.enter="false"
          ></v-text-field>
        </div>
      </div>
    </div>
    <div class="row">
      <ResultTableView :perPage="perPage" :currentPage="currentPage"></ResultTableView>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-12 mb-5">
        <v-pagination
          v-model="currentPage"
          circle
          class="my-4"
          :length="this.userReferanceList.length % this.perPage == 0 && this.userReferanceList.length > this.perPage ? this.userReferanceList.length / this.perPage : parseInt(this.userReferanceList.length / this.perPage) + 1"
          :total-visible="5"
        ></v-pagination>
      </div>
    </div>
  </div>

  <EditUserReferanceDialog :processType="'new'" :showDialog="showNewUserReferanceDialog" @dialogChange="data => showNewUserReferanceDialog = data"></EditUserReferanceDialog>
  
</div>
  
</template>

<script>
import ResultTableView from "@/components/management/user-applicants/results/ResultsTableView.vue";

import EditUserReferanceDialog from "./dialogs/EditUserReferanceDialog.vue";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    ResultTableView,
    EditUserReferanceDialog
  },
  created() {
    this.fetchUserReferanceList({
      params: {

      },
      body: {
        
      }
    });
  },
  computed: {
    ...mapState("user",["userReferanceList"])
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      showNewUserReferanceDialog:false
    };
  },
  methods: {
    ...mapActions("user",["fetchUserReferanceList"]),
   
    searchClicked() {
     
    }
  },
  watch: {
    perPage: function (newVal) {
      this.currentPage = 1;
      this.fetchUserReferanceList({
        params: {
          userId: this.user.UserId,
          pageNumber: this.currentPage,
          pageSize: newVal,
        },
        body: {
         
        },
      });
    },
    currentPage: function (newVal) {
      this.fetchUserReferanceList({
        params: {
          userId: this.user.UserId,
          pageNumber: newVal,
          pageSize: this.perPage,
        },
        body: {
         
        },
      });
    },
  },
};
</script>