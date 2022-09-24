<template>
  <div class="card">
    <div class="card-body">
      <b-table
        :items="basketCategoryList"
        :fields="basketCategoryListHeaders"
        hover
        responsive
        sort-icon-left
        :per-page="perPage"
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
        <template #cell(isActive)="data">
          <v-chip small label :color="data.item.isActive ? 'success ligthen-2' : 'secondary ligthen-2'">
            {{ data.item.isActive ? 'Aktif' : 'Pasif' }}
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
                  @click="openBasketCategoryDialog(data.item)"
                >
                  <v-icon>mdi-pencil-outline</v-icon>
                </v-btn>
              </template>
              <span>Düzenle</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon color="danger darken-2" @click="basketCategoryDelete({
                  params:{
                    id: data.item.id
                  }
                })">
                  <v-icon>mdi-delete-outline</v-icon>
                </v-btn>
              </template>
              <span>Sil</span>
            </v-tooltip>
          </div>
        </template>
      </b-table>
      <EditBasketCategoryDialog
        :basketCategoryProp="basketCategoryProp"
        :processType="'edit'"
        :showDialog="editBasketCategoryDialog"
        @dialogChange="(data) => (editBasketCategoryDialog = data)"
      ></EditBasketCategoryDialog>
      
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import EditBasketCategoryDialog from '@/components/management/basket-categories/dialogs/EditBasketCategoryDialog.vue'



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
    EditBasketCategoryDialog
  },

  computed: {
    ...mapState("basket", ["basketCategoryList", "basketCategoryListHeaders", "basketCategoryListLoading"])
  },
  mounted() {
    
  },
  data() {
    return {
      selectRow: false,
      userData: null,
      editBasketCategoryDialog:false,
      basketCategoryProp:null
    };
  },
  methods: {
    ...mapActions("basket",["basketCategoryDelete"]),
    openBasketCategoryDialog(data){
      this.basketCategoryProp = data;
      this.editBasketCategoryDialog = true;
    }
  },
  watch: {
    "editBasketCategoryDialog": function(newVal){
      if(!newVal)
        this.basketCategoryProp = null;
    }
  },
};
</script>
