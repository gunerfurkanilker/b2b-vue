<template>
  <div class="card">
    <div class="card-body">
      <div class="row mb-3">
        <div class="col-lg-12 text-end">
          <v-btn color="success darken-2" text small @click="openNewBasketCategoryDialog()"
            ><v-icon small left>mdi-plus</v-icon> Kategori Ekle</v-btn
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
    </div>

    <EditBasketCategoryDialog
      :basketCategoryProp="basketCategoryProp"
      :processType="'new'"
      :showDialog="newBasketCategoryDialog"
      @dialogChange="(data) => (newBasketCategoryDialog = data)"
    ></EditBasketCategoryDialog>
  </div>
</template>

<script>
import ResultTableView from "@/components/management/basket-categories/results/ResultsTableView.vue";

import EditBasketCategoryDialog from "@/components/management/basket-categories/dialogs/EditBasketCategoryDialog.vue";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    ResultTableView,
    EditBasketCategoryDialog,
  },
  created() {
    this.fetchBasketCategoryList({
      params:{},
      body:{}
    });
  },
  computed: {
    ...mapState("basket", ["basketCategoryList"]),
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      basketCategoryProp:null,
      newBasketCategoryDialog: false
    };
  },
  methods: {
    ...mapActions("basket", ["fetchBasketCategoryList"]),
    openNewBasketCategoryDialog(){
      this.newBasketCategoryDialog = true;
    }
  },
};
</script>