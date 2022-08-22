<template>
  <div class="card">
    <div class="card-body">
      <div class="row mb-3">
        <div class="col-lg-12 text-end">
          <v-btn color="success darken-2" text small @click="openNewAnnouncementDialog()"
            ><v-icon small left>mdi-bullhorn</v-icon> Duyuru Ekle</v-btn
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
              this.announcementList.length % this.perPage == 0 &&
              this.announcementList.length > this.perPage
                ? this.announcementList.length / this.perPage
                : parseInt(this.announcementList.length / this.perPage) + 1
            "
            :total-visible="5"
          ></v-pagination>
        </div>
      </div>
    </div>

    <EditAnnouncementDialog
      :announcementProp="announcement"
      :processType="'new'"
      :showDialog="newAnnouncementDialog"
      @dialogChange="(data) => (newAnnouncementDialog = data)"
    ></EditAnnouncementDialog>
  </div>
</template>

<script>
import ResultTableView from "@/components/management/announcement/results/ResultsTableView.vue";

import EditAnnouncementDialog from "@/components/management/announcement/dialogs/EditAnnouncementDialog.vue";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    ResultTableView,
    EditAnnouncementDialog,
  },
  created() {
    this.fetchAnnouncementList();
  },
  computed: {
    ...mapState("announcement", ["announcementList"]),
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      showNewUserDialog: false,
      announcement:null,
      newAnnouncementDialog: false
    };
  },
  methods: {
    ...mapActions("announcement", ["fetchAnnouncementList"]),
    clickLabel(item) {
      console.log("Click", item);
    },
    searchClicked() {
      console.log("Clicked");
    },
    openNewAnnouncementDialog(){
      this.newAnnouncementDialog = true;
    }
  },
};
</script>