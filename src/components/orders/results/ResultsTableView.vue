<template>
  <div class="card">
    <div class="card-body">
      <b-table
        :items="orders"
        :fields="orderHeaders"
        hover
        responsive
        :per-page="perPage"
        :current-page="currentPage"
        :busy="ordersLoading"
      >
        <template #cell(detay)="data">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <router-link to="/order-detail" target="_blank">
                <v-btn
                  class="mx-1"
                  fab
                  dark
                  x-small
                  color="secondary"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon dark> mdi-text-box-search </v-icon>
                </v-btn>
              </router-link>
            </template>
            <span>Sipariş Detay Görüntüle</span>
          </v-tooltip>
        </template>
        <template #table-busy>
          <div class="text-center">
            <b-spinner
              variant="primary"
              size="lg"
              label="Text Centered"
            ></b-spinner>
          </div>
        </template>
      </b-table>
      <OrderDetailsDialog
        :orders="orders"
        :orderHeaders="orderHeaders"
        :showDialog="orderDetailDialog"
        :product="orderDetailDialogData"
        :title="'Sipariş Detay'"
        @dialogChange="(e) => (orderDetailDialog = e)"
      ></OrderDetailsDialog>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import OrderDetailsDialog from "../dialogs/OrderDetailsDialog.vue";

export default {
  components: {
    OrderDetailsDialog,
  },
  props: {
    perPage: {
      type: Number,
    },
    currentPage: {
      type: Number,
    },
  },

  computed: {
    ...mapState("order", ["orders", "orderHeaders", "ordersLoading"]),
  },
  data() {
    return {
      selectRow: false,
      orderDetailDialog: false,
      orderDetailDialogData: null,
    };
  },
  methods: {
    ...mapActions("order", ["getOrders"]),
    openSiparisDetailDialog() {
      this.orderDetailDialog = true;
    },
  },
  watch: {},
};
</script>
