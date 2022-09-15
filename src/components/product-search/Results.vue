<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="row mb-3">
          <div class="col-lg-12 d-flex flex-wrap">
            <div class="mx-1">
              <p class="text-center">Görünüm</p>
              <v-btn-toggle mandatory rounded dense>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      @click="dataView = 'ResultTableView'"
                    >
                      <i class="bx bx-menu font-size-16"></i>
                    </v-btn>
                  </template>
                  <span>Tablo Görünüm</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      @click="dataView = 'ResultCardView'"
                    >
                      <i class="bx bx-card font-size-16"></i>
                    </v-btn>
                  </template>
                  <span>Kart Görünüm</span>
                </v-tooltip>
              </v-btn-toggle>
            </div>
            <div class="mx-1">
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
                color="secondary"
                hide-details
                append-icon="mdi-magnify"
                @click:append="false"
                @keydown.enter="false"
              ></v-text-field>
            </div>
          </div>
        </div>
        <div class="row">
          <KeepAlive>
            <component :is="dataView" v-bind="dynamicProps"></component>
          </KeepAlive>
        </div>
        <!-- end row -->

        <div class="row">
          <div class="col-lg-12 mb-5">
            <v-pagination
              v-model="currentPage"
              circle
              class="my-4"
              :length="parseInt(this.listDatas.length / this.perPage) + 1"
              :total-visible="5"
            ></v-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResultCardView from "@/components/product-search/results/ResultsCardView";
import ResultTableView from "@/components/product-search/results/ResultsTableView";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    ResultCardView,
    ResultTableView,
  },
  created() {
    this.getListDatas();
  },
  computed: {
    ...mapState("productSearch", ["listDatas"]),
    dynamicProps: function () {
      if (this.dataView == "ResultTableView") {
        return { perPage: this.perPage, currentPage: this.currentPage };
      } else return {};
    },
  },
  data() {
    return {
      dataView: "ResultTableView",
      perPage: 10,
      currentPage: 1,
      options: [
        {
          text: "Active",
          value: "radio1",
        },
        {
          text: "Radio",
          value: "radio2",
        },
        {
          text: "Radio",
          value: "radio3",
        },
      ],

      breadcrumbArray: [
        {
          text: "Products",
          active: true,
        },
      ],
    };
  },
  methods: {
    ...mapActions("productSearch", ["getListDatas"]),
  },
};
</script>