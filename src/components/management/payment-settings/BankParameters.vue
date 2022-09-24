<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6">
        <span><v-icon small left>mdi-information-outline</v-icon>Banka hesap parametrelerinizi buradan yönetebilirsiniz</span>
      </div>
      <div class="col-lg-6 text-end">
        <v-btn color="success darken-2" text small @click="openBankParametersDialog('new')"><v-icon small left>mdi-plus</v-icon> YENİ PARAMETRE EKLE</v-btn>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <b-table
          :items="bankParametersList"
          :fields="bankParametersListHeaders"
          hover
          responsive
          sort-icon-left
          :busy="bankParametersListLoading"
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
          <template #cell(bank)="data">
            {{ data.item.bank ? data.item.bank.name : '' }}
          </template>
          <template #cell(isActive)="data">
            <v-chip small :color="data.item.isActive ? 'success darken-2' : 'danger darken-2'">{{ data.item.isActive ? 'Aktif' : 'Pasif' }}</v-chip>
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
                    @click="openBankParametersDialog('edit',data.item)"
                  >
                    <v-icon>mdi-pencil-outline</v-icon>
                  </v-btn>
                </template>
                <span>Düzenle</span>
              </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on" icon color="danger darken-2" @click="bankParameterDelete({
                    params:{
                      bankParameterId: data.item.id
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
      </div>
    </div>
    <EditBankParametersDialog
      :bankParameterProp="bankParameterProp"
      :processType="processType"
      :showDialog="editBankParametersDialog"
      @dialogChange="(data) => (editBankParametersDialog = data)"
    ></EditBankParametersDialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import EditBankParametersDialog from "@/components/management/payment-settings/dialogs/EditBankParametersDialog.vue";

export default {
  components: {
    EditBankParametersDialog,
  },

  computed: {
    ...mapState("bank", ["bankParametersList", "bankParametersListHeaders", "bankParametersListLoading"]),
  },
  mounted() {
    this.fetchBankParametersList({
      params:{},
      body:{}
    })
  },
  data() {
    return {
      editBankParametersDialog: false,
      bankParameterProp: null,
      processType: null,
      currentPage: 1,
      perPage: 10,
    };
  },
  methods: {
    ...mapActions("bank",["fetchBankParametersList","bankParameterDelete"]),
    openBankParametersDialog(processType,data = null) {
      this.bankParameterProp = data;
      this.processType = processType;
      this.editBankParametersDialog = true;
    },
  },
  watch: {},
};
</script>
