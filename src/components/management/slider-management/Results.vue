<template>
  <div class="card">
    <div class="card-body">
      <div class="row mb-3">
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
          <v-btn class="ms-auto" color="success darken-2" text small @click="openNewSliderDialog()"
            ><v-icon small left>mdi-plus</v-icon> Slider Ekle</v-btn
          >
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
              this.sliderList.totalCount
                ? Math.ceil(this.sliderList.totalCount / this.perPage)
                : 1
            "
            :total-visible="8"
          ></v-pagination>
        </div>
      </div>
    </div>
    
    <EditSliderDialog
      :sliderProp="slider"
      :processType="'new'"
      :showDialog="newSliderDialog"
      @dialogChange="(data) => (newSliderDialog = data)"
    ></EditSliderDialog>
  </div>
</template>

<script>
import ResultTableView from "@/components/management/slider-management/results/ResultsTableView.vue";

import EditSliderDialog from "@/components/management/slider-management/dialogs/EditSliderDialog.vue";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    ResultTableView,
    EditSliderDialog,
  },
  created() {
    this.fetchSliderList({
      params: {
        userId: this.user.UserId
      }
    });
  },
  computed: {
    ...mapState("slider", ["sliderList"]),
    ...mapState("auth", ["user"]),
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      showNewUserDialog: false,
      slider:null,
      newSliderDialog: false
    };
  },
  methods: {
    ...mapActions("slider", ["fetchSliderList"]),
 
    openNewSliderDialog(){
      this.newSliderDialog = true;
    }
  },
  watch: {
    perPage: function (newVal) {
      this.currentPage = 1;
      this.fetchSliderList({
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
      this.fetchSliderList({
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