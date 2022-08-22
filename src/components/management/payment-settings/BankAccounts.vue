<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6">
        <span><v-icon small left>mdi-information-outline</v-icon>Banka hesaplarınızı buradan yönetebilirsiniz</span>
      </div>
      <div class="col-lg-6 text-end">
        <v-btn color="success darken-2" text small @click="openBankAccountDialog('new')"><v-icon small left>mdi-plus</v-icon> YENİ HESAP OLUŞTUR</v-btn>
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
          :items="bankList"
          :fields="bankListHeaders"
          hover
          responsive
          sort-icon-left
          :per-page="perPage"
          :current-page="currentPage"
          :busy="bankListLoading"
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
          <template #cell(process)="data">
            <div class="text-center">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    v-on="on"
                    icon
                    color="amber darken-2"
                    @click="openBankAccountDialog('edit',data.item)"
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
            this.bankList.length % this.perPage == 0 &&
            this.bankList.length > this.perPage
              ? this.bankList.length / this.perPage
              : parseInt(this.bankList.length / this.perPage) + 1
          "
          :total-visible="5"
        ></v-pagination>
      </div>
    </div>
    <EditBankAccountDialog
      :bankAccountProp="bankAccount"
      :processType="processType"
      :showDialog="editBankAccountDialog"
      @dialogChange="(data) => (editBankAccountDialog = data)"
    ></EditBankAccountDialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import EditBankAccountDialog from "@/components/management/payment-settings/dialogs/EditBankAccountDialog.vue";

export default {
  components: {
    EditBankAccountDialog,
  },

  computed: {
    ...mapState("bank", ["bankList", "bankListHeaders", "bankListLoading"]),
  },
  mounted() {
    this.fetchBankList()
  },
  data() {
    return {
      editBankAccountDialog: false,
      bankAccount: null,
      processType: null,
      currentPage: 1,
      perPage: 10,
    };
  },
  methods: {
    ...mapActions("bank",["fetchBankList"]),
    openBankAccountDialog(processType,data = null) {
      this.bankAccount = data;
      this.processType = processType;
      this.editBankAccountDialog = true;
    },
  },
  watch: {},
};
</script>
