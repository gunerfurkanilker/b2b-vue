<template>
  <div>
    <div class="container-xxl-fluid mb-4">
      <div class="row">
        <div class="col-lg-12">
          <v-expansion-panels v-model="panel" accordion focusable flat>
            <ReportTypes @reportTypeChange="data => reportTypeChange(data)"></ReportTypes>
            <v-expansion-panel key="1">
              <v-expansion-panel-header>
                Detaylı Filtreleme
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="container-xxl-fluid py-4">
                  <div class="row">
                    <div class="col-lg-3 col-sm-4">
                      <v-card color="success lighten-2" ripple outlined shaped hover>
                        <v-card-title>
                          <v-icon class="mx-auto" x-large
                            >mdi-chart-line-variant</v-icon
                          >
                        </v-card-title>
                        <v-card-text>
                          <div class="text-center w-100 font-weight">
                            Fatura Karlılık Raporu
                          </div>
                        </v-card-text>
                        <v-card-actions class="py-3">
                          <div class="text-center w-100">
                            <v-chip class="ma-2" color="primary darken-3" outlined @click="searchClicked()">
                              <v-icon left> mdi-information-outline </v-icon>
                              Bilgi
                            </v-chip>
                          </div>
                        </v-card-actions>
                      </v-card>
                    </div>
                    <div class="col-lg-3 col-sm-4">
                      <v-card ripple outlined shaped hover>
                        <v-card-title>
                          <v-icon class="mx-auto" x-large
                            >mdi-chart-areaspline</v-icon
                          >
                        </v-card-title>
                        <v-card-text>
                          <div class="text-center w-100 font-weight">
                            Stok Analiz Raporu
                          </div>
                        </v-card-text>
                        <v-card-actions class="py-3">
                          <div class="text-center w-100">
                            <v-chip class="ma-2" color="primary darken-3" outlined>
                              <v-icon left> mdi-information-outline </v-icon>
                              Bilgi
                            </v-chip>
                          </div>
                        </v-card-actions>
                      </v-card>
                    </div>
                    <div class="col-lg-3 col-sm-4">
                      <v-card ripple outlined shaped hover>
                        <v-card-title>
                          <v-icon class="mx-auto" x-large>mdi-chart-box</v-icon>
                        </v-card-title>
                        <v-card-text>
                          <div class="text-center w-100 font-weight">
                            Hedef & Potansiyel Cari Raporu
                          </div>
                        </v-card-text>
                        <v-card-actions class="py-3">
                          <div class="text-center w-100">
                            <v-chip class="ma-2" color="primary darken-3" outlined>
                              <v-icon left> mdi-information-outline </v-icon>
                              Bilgi
                            </v-chip>
                          </div>
                        </v-card-actions>
                      </v-card>
                    </div>
                    <div class="col-lg-3 col-sm-4">
                      <v-card ripple outlined shaped hover>
                        <v-card-title>
                          <v-icon class="mx-auto" x-large>mdi-chart-box</v-icon>
                        </v-card-title>
                        <v-card-text>
                          <div class="text-center w-100 font-weight">
                            Hedef & Potansiyel Plasiyer Raporu
                          </div>
                        </v-card-text>
                        <v-card-actions class="py-3">
                          <div class="text-center w-100">
                            <v-chip class="ma-2" color="primary darken-3" outlined>
                              <v-icon left> mdi-information-outline </v-icon>
                              Bilgi
                            </v-chip>
                          </div>
                        </v-card-actions>
                      </v-card>
                    </div>
                    <div class="col-lg-3 col-sm-4">
                      <v-card ripple outlined shaped hover>
                        <v-card-title>
                          <v-icon class="mx-auto" x-large>mdi-chart-box</v-icon>
                        </v-card-title>
                        <v-card-text>
                          <div class="text-center w-100 font-weight">
                            Plasiyer Ürün Satış Raporu
                          </div>
                        </v-card-text>
                        <v-card-actions class="py-3">
                          <div class="text-center w-100">
                            <v-chip class="ma-2" color="primary darken-3" outlined>
                              <v-icon left> mdi-information-outline </v-icon>
                              Bilgi
                            </v-chip>
                          </div>
                        </v-card-actions>
                      </v-card>
                    </div>
                    <div class="col-lg-3 col-sm-4">
                      <v-card outlined shaped hover>
                        <v-card-title>
                          <v-icon class="mx-auto" x-large>mdi-chart-box</v-icon>
                        </v-card-title>
                        <v-card-text>
                          <div class="text-center w-100 font-weight">
                            En İyi Satış Raporu
                          </div>
                        </v-card-text>
                        <v-card-actions class="py-3">
                          <div class="text-center w-100">
                            <v-chip class="ma-2" color="primary darken-3" outlined>
                              <v-icon left> mdi-information-outline </v-icon>
                              Bilgi
                            </v-chip>
                          </div>
                        </v-card-actions>
                      </v-card>
                    </div>
                  </div>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <div class="row mb-3">
          <div class="col-lg-12 text-center">
            <h5>{{ reportType ? reportType.title : '' }}</h5>
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
            <v-btn
              class="ms-auto"
              color="success darken-2"
              text
              small
              @click="openNewPaymentTypeDialog()"
              ><v-icon small left>mdi-plus</v-icon> ÖDEME TİPİ EKLE</v-btn
            >
          </div>
        </div>
        <div class="row">
          
          <ReportTableView :perPage="perPage"></ReportTableView>
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
    </div>
  </div>
</template>

<script>
import ReportTableView from "@/components/management/detailed-reports/views/ReportTableView.vue";
import ReportTypes from "./types/ReportTypes.vue";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    ReportTableView,
    ReportTypes
  },
  created() {
  },
  computed: {
    ...mapState("payment", ["paymentMethodList"]),
    ...mapState("auth", ["user"]),
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      showNewUserDialog: false,
      paymentMethod: null,
      newPaymentTypeDialog: false,
      panel:0,
      reportType: null
    };
  },
  methods: {
    ...mapActions("payment", ["fetchPaymentMethodList"]),
    searchClicked() {},
    openNewPaymentTypeDialog() {
      this.newPaymentTypeDialog = true;
    },
    reportTypeChange(reportType){
      console.log("VETTEL",reportType);
      this.reportType = reportType
      this.panel= 1;
    }
  },
  watch: {
    perPage: function (newVal) {
      this.currentPage = 1;
      newVal;
      /*this.fetchPaymentMethodList({
        params: {
          userId: this.user.UserId,
          pageNumber: this.currentPage,
          pageSize: newVal,
        },
        body: {},
      });*/
    },
    currentPage: function (newVal) {
      newVal;
      /*this.fetchPaymentMethodList({
        params: {
          userId: this.user.UserId,
          pageNumber: newVal,
          pageSize: this.perPage,
        },
        body: {},
      });*/
    },
  },
};
</script>