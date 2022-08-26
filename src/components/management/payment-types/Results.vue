<template>
  <div class="card">
    <div class="card-body">
      <div class="row mb-3">
        <div class="col-lg-12 text-end">
          <v-btn color="success darken-2" text small @click="openNewPaymentTypeDialog()"
            ><v-icon small left>mdi-plus</v-icon> ÖDEME TİPİ EKLE</v-btn
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
              this.paymentTypeList.length % this.perPage == 0 &&
              this.paymentTypeList.length > this.perPage
                ? this.paymentTypeList.length / this.perPage
                : parseInt(this.paymentTypeList.length / this.perPage) + 1
            "
            :total-visible="5"
          ></v-pagination>
        </div>
      </div>
    </div>

    <EditPaymentTypeDialog
      :paymentTypeProp="paymentType"
      :processType="'new'"
      :showDialog="newPaymentTypeDialog"
      @dialogChange="(data) => (newPaymentTypeDialog = data)"
    ></EditPaymentTypeDialog>
  </div>
</template>

<script>
import ResultTableView from "@/components/management/payment-types/results/ResultsTableView.vue";

import EditPaymentTypeDialog from "@/components/management/payment-types/dialogs/EditPaymentTypeDialog.vue";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    ResultTableView,
    EditPaymentTypeDialog,
  },
  created() {
    this.fetchPaymentTypeList();
  },
  computed: {
    ...mapState("payment", ["paymentTypeList"]),
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      showNewUserDialog: false,
      paymentType:null,
      newPaymentTypeDialog: false
    };
  },
  methods: {
    ...mapActions("payment", ["fetchPaymentTypeList"]),
    clickLabel(item) {
      console.log("Click", item);
    },
    searchClicked() {
      console.log("Clicked");
    },
    openNewPaymentTypeDialog(){
      this.newPaymentTypeDialog = true;
    }
  },
};
</script>