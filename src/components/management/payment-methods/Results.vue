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
          <v-btn class="ms-auto" color="success darken-2" text small @click="openNewPaymentTypeDialog()"
            ><v-icon small left>mdi-plus</v-icon> ÖDEME TİPİ EKLE</v-btn
          >
        </div>
      </div>
      <div class="row">
        <ResultTableView
          :perPage="perPage"
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
              this.paymentMethodList.length % this.perPage == 0 &&
              this.paymentMethodList.length > this.perPage
                ? this.paymentMethodList.length / this.perPage
                : parseInt(this.paymentMethodList.length / this.perPage) + 1
            "
            :total-visible="5"
          ></v-pagination>
        </div>
      </div>
    </div>

    <EditPaymentTypeDialog
      :paymentMethodProp="paymentMethod"
      :processType="'new'"
      :showDialog="newPaymentTypeDialog"
      @dialogChange="(data) => (newPaymentTypeDialog = data)"
    ></EditPaymentTypeDialog>
  </div>
</template>

<script>
import ResultTableView from "@/components/management/payment-methods/results/ResultsTableView.vue";

import EditPaymentTypeDialog from "@/components/management/payment-methods/dialogs/EditPaymentTypeDialog.vue";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    ResultTableView,
    EditPaymentTypeDialog,
  },
  created() {
    this.fetchPaymentMethodList({
      params:{
        userId: this.user.UserId
      }
    });
  },
  computed: {
    ...mapState("payment", ["paymentMethodList"]),
    ...mapState("auth",["user"])
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      showNewUserDialog: false,
      paymentMethod:null,
      newPaymentTypeDialog: false
    };
  },
  methods: {
    ...mapActions("payment", ["fetchPaymentMethodList"]),
    searchClicked() {

    },
    openNewPaymentTypeDialog(){
      this.newPaymentTypeDialog = true;
    }
  },
  watch:{

    perPage: function (newVal) {
      this.currentPage = 1;
      this.fetchPaymentMethodList({
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
      this.fetchPaymentMethodList({
        params: {
          userId: this.user.UserId,
          pageNumber: newVal,
          pageSize: this.perPage,
        },
        body: {
         
        },
      });
    },
  }
};
</script>