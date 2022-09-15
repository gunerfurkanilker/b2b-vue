<template>
<div class="card">
  <div class="card-body">
    <div class="row">
    <div class="row mb-3">
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
          :length="parseInt(this.orders.length / this.perPage) + 1"
          :total-visible="5"
        ></v-pagination>
      </div>
    </div>
  </div>
  </div>
  
</div>
  
</template>

<script>
import ResultTableView from "@/components/orders/results/ResultsTableView";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    ResultTableView
  },
  props:{
    listType:{
      type: String,
      default: "SiparisList"
    }
  },
  created() {
    this.getOrders(this.listType); 
  },
  computed: {
    ...mapState("order", ["orders"]),
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1
    };
  },
  methods: {
    ...mapActions("order", ["getOrders"]),
  },
};
</script>