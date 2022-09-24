<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6">
        <span><v-icon small left>mdi-information-outline</v-icon>Banka taksit oranlarınızı buradan yönetebilirsiniz</span>
      </div>
      <div class="col-lg-6 text-end">
        <v-btn color="success darken-2" text small @click="openBankInstallmentDialog('new')"><v-icon small left>mdi-plus</v-icon> YENİ TAKSİT EKLE</v-btn>
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
          <template #cell(bank)="data">
            {{ data.item.bank ? data.item.bank.name : '' }}
          </template>
          <template #cell(number)="data">
            {{ data.item.number ? data.item.number + ' Taksit' : '' }}
          </template>
          <template #cell(isActive)="data">
            <v-chip small label :color="data.item.isActive ? 'success ligthen-2' : 'secondary ligthen-2'">{{ data.item.isActive ? 'Aktif' : 'Pasif' }}</v-chip>
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
                    <v-icon>mdi-pencil-outline</v-icon>
                  </v-btn>
                </template>
                <span>Düzenle</span>
              </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on" icon color="danger darken-2" @click="bankInstallmentDelete({
                    params:{
                      installmentId: data.item.id
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
    <EditBankInstallmentDialog
      :bankInstallmentProp="bankInstallmentProp"
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
    this.fetchBankInstallmentList({
      params:{

      },
      body:{

      }
    })
  },
  data() {
    return {
      editBankInstallmentDialog: false,
      bankInstallmentProp: {},
      processType: null,
      currentPage: 1,
      perPage: 10,
    };
  },
  methods: {
    ...mapActions("bank",["fetchBankInstallmentList","bankInstallmentDelete"]),
    openBankInstallmentDialog(processType,data = null) {
      this.bankInstallmentProp = data;
      this.processType = processType;
      this.editBankInstallmentDialog = true;
    },
  },
  watch: {},
};
</script>
