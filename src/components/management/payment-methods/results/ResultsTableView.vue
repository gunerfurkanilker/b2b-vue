<template>
  <div class="card">
    <div class="card-body">
      <b-table
        :items="paymentMethodList"
        :fields="paymentMethodListHeaders"
        hover
        responsive
        sort-icon-left
        :per-page="perPage"
        :busy="paymentMethodListLoading"
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
        <template #cell(erpExport)="data">
          <v-chip small label :color="data.item.erpExport ? 'success ligthen-2' : 'secondary ligthen-2'">
            {{ data.item.erpExport ? 'Aktarılsın' : 'Aktaılmasın' }}
          </v-chip>
        </template>
        <template #cell(description)="data">
          {{ data.item.descriptionShow ? data.item.description : '' }}
        </template>
        <template #cell(createDate)="data">
          {{ formattedDateTime(data.item.createDate) }}
        </template>
        <template #cell(editDate)="data">
          {{ formattedDateTime(data.item.editDate) }}
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
                  @click="openPaymentTypeDialog(data.item)"
                >
                  <v-icon>mdi-pencil-outline</v-icon>
                </v-btn>
              </template>
              <span>Düzenle</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon color="danger darken-2" >
                  <v-icon>mdi-delete-outline</v-icon>
                </v-btn>
              </template>
              <span>Sil</span>
            </v-tooltip>
          </div>
        </template>
      </b-table>
      <EditPaymentTypeDialog
        :paymentMethodProp="paymentTypeProp"
        :processType="'edit'"
        :showDialog="editPaymentTypeDialog"
        @dialogChange="(data) => (editPaymentTypeDialog = data)"
      ></EditPaymentTypeDialog>
      
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { formattedDateTime } from "../../../../momentHelper";

import EditPaymentTypeDialog from '@/components/management/payment-methods/dialogs/EditPaymentTypeDialog.vue'



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
    EditPaymentTypeDialog
  },

  computed: {
    ...mapState("payment", ["paymentMethodList", "paymentMethodListHeaders", "paymentMethodListLoading"])
  },
  mounted() {
    
  },
  data() {
    return {
      selectRow: false,
      userData: null,
      editPaymentTypeDialog:false,
      paymentTypeProp:null
    };
  },
  methods: {
    formattedDateTime,
    openPaymentTypeDialog(data){
      this.paymentTypeProp = data;
      this.editPaymentTypeDialog = true;
    }
  },
  watch: {},
};
</script>
