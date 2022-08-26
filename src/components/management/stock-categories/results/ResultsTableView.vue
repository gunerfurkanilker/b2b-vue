<template>
  <div class="card">
    <div class="card-body">
      <b-table
        :items="stockCategoryList"
        :fields="stockCategoryListHeaders"
        hover
        responsive
        sort-icon-left
        :per-page="perPage"
        :current-page="currentPage"
        :busy="stockCategoryListLoading"
      >
        <template #table-busy>
          <div class="text-center">
            <b-spinner
              variant="primary"
              size="lg"
              label="Lütfen Bekleyin..."
            ></b-spinner>
          </div>
        </template>
        <template #cell(status)="data">
          <v-chip small label :color="data.item.status ? 'success ligthen-2' : 'secondary ligthen-2'">
            {{ data.item.status ? 'Aktif' : 'Pasif' }}
          </v-chip>
        </template>
        <template #cell(process)="data">
          <div class="text-center">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  icon
                  color="amber darken-2"
                  @click="openStockCategoryDialog(data.item)"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <span>Düzenle</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon color="danger darken-2" >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </template>
              <span>Sil</span>
            </v-tooltip>
          </div>
        </template>
      </b-table>
      <EditStockCategoryDialog
        :stockCategoryProp="stockCategory"
        :processType="'edit'"
        :showDialog="editStockCategoryDialog"
        @dialogChange="(data) => (editStockCategoryDialog = data)"
      ></EditStockCategoryDialog>
      
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import EditStockCategoryDialog from '@/components/management/stock-categories/dialogs/EditStockCategoryDialog.vue'



export default {
  props: {
    perPage: {
      type: Number,
    },
    currentPage: {
      type: Number,
    },
  },

  components: {
    EditStockCategoryDialog
  },

  computed: {
    ...mapState("stock", ["stockCategoryList", "stockCategoryListHeaders", "stockCategoryListLoading"])
  },
  mounted() {
    
  },
  data() {
    return {
      selectRow: false,
      userData: null,
      editStockCategoryDialog:false,
      stockCategory:null
    };
  },
  methods: {
    openStockCategoryDialog(data){
      this.stockCategory = data;
      this.editStockCategoryDialog = true;
    }
  },
  watch: {},
};
</script>
