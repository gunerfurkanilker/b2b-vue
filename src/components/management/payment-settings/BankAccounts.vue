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
      <div class="col-md-12">
        <b-table
          :items="bankAccountList"
          :fields="bankAccountListHeaders"
          hover
          responsive
          sort-icon-left
          :per-page="perPage"
          :current-page="currentPage"
          :busy="bankAccountListLoading"
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
                    @click="openBankAccountDialog('edit',data.item)"
                  >
                    <v-icon>mdi-pencil-outline</v-icon>
                  </v-btn>
                </template>
                <span>Düzenle</span>
              </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on" icon color="danger darken-2" @click="bankAccountDelete({
                    params:{
                      bankAccountId: data.item.id
                    },
                    body:{}
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
    <div class="row">
      <div class="col-lg-12 mb-5">
        <v-pagination
          v-model="currentPage"
          circle
          class="my-4"
          :length="
            this.bankAccountList.length % this.perPage == 0 &&
            this.bankAccountList.length > this.perPage
              ? this.bankAccountList.length / this.perPage
              : parseInt(this.bankAccountList.length / this.perPage) + 1
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
    ...mapState("bank", ["bankAccountList", "bankAccountListHeaders", "bankAccountListLoading"]),
    ...mapState("auth", ["user"]),
  },
  mounted() {
    this.fetchBankAccountList({
      params:{
        userId: this.user.UserId
      },
      body:{

      },
    })
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
    ...mapActions("bank",["fetchBankAccountList","bankAccountDelete"]),
    openBankAccountDialog(processType,data = null) {
      this.bankAccount = data;
      this.processType = processType;
      this.editBankAccountDialog = true;
    },
  },
  watch: {},
};
</script>
