<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6">
        <span><v-icon small left>mdi-wallet</v-icon>Banka taksit oranlarınızı buradan yönetebilirsiniz</span>
      </div>
      <div class="col-lg-6 text-end">
        <v-btn color="success darken-2" text small @click="openBankInstallmentDialog('new')"><v-icon small left>mdi-plus</v-icon> YENİ TAKSİT EKLE</v-btn>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 d-flex flex-wrap justify-content-between">
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
          ></v-text-field>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <b-table
          :items="bankInstallmentList"
          :fields="bankInstallmentListHeaders"
          hover
          responsive
          sort-icon-left
          :per-page="perPage"
          :current-page="currentPage"
          :busy="bankInstallmentListLoading"
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
            <v-chip small :color="data.item.status ? 'success darken-2' : 'danger darken-2'">{{ data.item.status ? 'Aktif' : 'Pasif' }}</v-chip>
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
                    @click="openBankInstallmentDialog('edit',data.item)"
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                </template>
                <span>Düzenle</span>
              </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on" icon color="danger darken-2">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </template>
                <span>Sil</span>
              </v-tooltip>
            </div>
          </template>
        </b-table>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 mb-5">
        <v-pagination
          v-model="currentPage"
          circle
          class="my-4"
          :length="
            this.bankInstallmentList.length % this.perPage == 0 &&
            this.bankInstallmentList.length > this.perPage
              ? this.bankInstallmentList.length / this.perPage
              : parseInt(this.bankInstallmentList.length / this.perPage) + 1
          "
          :total-visible="5"
        ></v-pagination>
      </div>
    </div>
    <EditBankInstallmentDialog
      :bankAccountProp="bankInstallment"
      :processType="processType"
      :showDialog="editBankInstallmentDialog"
      @dialogChange="(data) => (editBankInstallmentDialog = data)"
    ></EditBankInstallmentDialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import EditBankInstallmentDialog from "@/components/management/payment-settings/dialogs/EditBankInstallmentDialog.vue";

export default {
  components: {
    EditBankInstallmentDialog,
  },

  computed: {
    ...mapState("bank", ["bankInstallmentList", "bankInstallmentListHeaders", "bankInstallmentListLoading"]),
  },
  mounted() {
    this.fetchBankInstallmentList()
  },
  data() {
    return {
      editBankInstallmentDialog: false,
      bankInstallment: null,
      processType: null,
      currentPage: 1,
      perPage: 10,
    };
  },
  methods: {
    ...mapActions("bank",["fetchBankInstallmentList"]),
    openBankInstallmentDialog(processType,data = null) {
      this.bankAccount = data;
      this.processType = processType;
      this.editBankInstallmentDialog = true;
    },
  },
  watch: {},
};
</script>
