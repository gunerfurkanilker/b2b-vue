<template>
  <div class="card">
    <div class="card-body">
      <div class="row mb-3">
        <div class="col-lg-12 text-end">
          <v-btn color="success darken-2" text small @click="openNewSliderDialog()"
            ><v-icon small left>mdi-play-network</v-icon> Slider Ekle</v-btn
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
              this.sliderList.length % this.perPage == 0 &&
              this.sliderList.length > this.perPage
                ? this.sliderList.length / this.perPage
                : parseInt(this.sliderList.length / this.perPage) + 1
            "
            :total-visible="5"
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
    this.fetchSliderList();
  },
  computed: {
    ...mapState("slider", ["sliderList"]),
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
    clickLabel(item) {
      console.log("Click", item);
    },
    searchClicked() {
      console.log("Clicked");
    },
    openNewSliderDialog(){
      this.newSliderDialog = true;
    }
  },
};
</script>