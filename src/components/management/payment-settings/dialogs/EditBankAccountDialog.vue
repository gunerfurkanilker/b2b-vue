<template>
  <v-dialog
    v-model="dialog"
    max-width="900"
    persistent
    style="overflow: hidden !important"
  >
    <v-card>
      <v-card-title>
        {{
          processType == "new" ? "Yeni Banka Hesabı Oluştur" : "Banka Hesap Düzenle"
        }}
        <v-spacer></v-spacer>
        <v-btn @click="closeDialog()" color="danger darken-2" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <v-text-field
                v-model="bankAccount.branch"
                label="Şube"
                :error-messages="
                  validationMessages($v.bankAccount.branch, 'Şube')
                "
                prepend-inner-icon="mdi-office-building"
                @input="$v.bankAccount.branch.$touch()"
                @blur="$v.bankAccount.branch.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-text-field
                v-model="bankAccount.branchCode"
                label="Şube Kodu"
                :error-messages="
                  validationMessages($v.bankAccount.branchCode, 'Şube Kodu')
                "
                prepend-inner-icon="mdi-bank-transfer-in"
                @input="$v.bankAccount.branchCode.$touch()"
                @blur="$v.bankAccount.branchCode.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-text-field
                v-model="bankAccount.accountNumber"
                label="Hesap No"
                :error-messages="
                  validationMessages($v.bankAccount.accountNumber, 'Hesap No')
                "
                prepend-inner-icon="mdi-numeric"
                @input="$v.bankAccount.accountNumber.$touch()"
                @blur="$v.bankAccount.accountNumber.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-text-field
                v-model="bankAccount.iban"
                label="IBAN"
                :error-messages="
                  validationMessages($v.bankAccount.iban, 'IBAN')
                "
                prepend-inner-icon="mdi-credit-card"
                @input="$v.bankAccount.iban.$touch()"
                @blur="$v.bankAccount.iban.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-autocomplete
                v-model="bankAccount.bankId"
                :item-text="(item) => item.name"
                :item-value="(item) => item.id"
                label="Banka"
                :error-messages="
                  validationMessages($v.bankAccount.bankId, 'Banka')
                "
                @input="$v.bankAccount.bankId.$touch()"
                @blur="$v.bankAccount.bankId.$touch()"
                prepend-inner-icon="mdi-bank"
                :items="bankList"
              ></v-autocomplete>
            </div>
            <div class="col-lg-6">
              <v-switch
                v-model="bankAccount.isActive"
                :label="bankAccount.isActive ? 'Aktif' : 'Pasif'"
                dense
                inset
              ></v-switch>
            </div>
          </div>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="secondary" @click="closeDialog()">İptal</v-btn>
        <v-btn text color="success" @click="saveForm">Kaydet</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";
import { validationMessages } from "@/validationMessages.js";
//import simplebar from "simplebar-vue";

import { mapState, mapActions } from "vuex";

export default {
  mixins: [validationMixin],

  validations() {
    return {
      bankAccount: {
        branch: { required },
        branchCode: { required },
        accountNumber: { required },
        iban: { required },
        bankId: { required },
      },
    };
  },

  components: {
    //  simplebar
  },

  props: {
    showDialog: {
      type: Boolean,
      default: false,
    },
    bankAccountProp: {
      type: Object,
      default: () => ({
        id: null,
        sube: "",
        sube_kodu: "",
        hesap_no: "",
        IBAN: "",
        banka: "",
        status: true,
      }),
    },
    processType: {
      type: String,
      default: "new",
    },
  },
  computed: {
    ...mapState("bank", ["bankList"]),
    ...mapState("auth", ["user"]),
  },
  data() {
    return {
      dialog: false,
      showPassword: false,
      bankAccount: {
        id: null,
        branch: "",
        branchCode: "",
        accountNumber: "",
        iban: "",
        bankId: "",
        isActive: true,
      },
    };
  },
  methods: {
    ...mapActions("bank", [
      "fetchBankList",
      "bankAccountAdd",
      "bankAccountUpdate",
      "fetchSingleBankAccount"
    ]),
    validationMessages,
    closeDialog() {
      this.dialog = false;
      this.$v.$reset();
    },
    async saveForm() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        if (this.processType == "new") {
          await this.bankAccountAdd({
            params: {
              userId: this.user.UserId,
            },
            body: {
              bankId: this.bankAccount.bankId,
              branch: this.bankAccount.branch,
              branchCode: this.bankAccount.branchCode,
              accountNumber: this.bankAccount.accountNumber,
              iban: this.bankAccount.iban,
              isActive: this.bankAccount.isActive,
            },
            urlSegments: [],
          });
      
        } else {
          await this.bankAccountUpdate({
            params: {
              userId: this.user.UserId,
            },
            body: {
              id: this.bankAccount.id,
              bankId: this.bankAccount.bankId,
              branch: this.bankAccount.branch,
              branchCode: this.bankAccount.branchCode,
              accountNumber: this.bankAccount.accountNumber,
              iban: this.bankAccount.iban,
              isActive: this.bankAccount.isActive,
            },
            urlSegments: [],
          });
        
        }
        this.closeDialog();
      }
    },
    async setBankList() {
      await this.fetchBankList({
        params: {
          userId: this.user.UserId,
        },
        body: {},
      });
    },
    async getSingleBankAccount(bankAccountObject) {
      this.bankAccount = await this.fetchSingleBankAccount({
        params: {
          bankAccountId: bankAccountObject.id
        },
        body: {

        }
      })  
    }
  },
  watch: {
    dialog: function (newVal) {
      if (newVal) {
        this.setBankList();
      }
      this.$emit("dialogChange", newVal);
    },
    showDialog: function (newVal) {
      this.dialog = newVal;
    },
    bankAccountProp: function (newVal) {
    
      newVal
        ? (this.bankAccount = Object.assign({},newVal))
        : (this.bankAccount = {
            id: null,
            branch: "",
            branchCode: "",
            accountNumber: "",
            iban: "",
            bankId: "",
            isActive: true,
          });
    },
  },
};
</script>