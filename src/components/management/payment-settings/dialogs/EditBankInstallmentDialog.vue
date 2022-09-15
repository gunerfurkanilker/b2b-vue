<template>
  <v-dialog
    v-model="dialog"
    max-width="900"
    persistent
    style="overflow: hidden !important"
  >
    <v-card>
      <v-card-title>
        {{ processType == "new" ? "Yeni Taksit Oluştur" : "Taksit Düzenle" }}
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
                v-model="bankInstallment.number"
                label="Taksit"
                type="number"
                min="1"
                max="48"
                :error-messages="
                  validationMessages($v.bankInstallment.number, 'Taksit')
                "
                prepend-inner-icon="mdi-numeric"
                @input="$v.bankInstallment.number.$touch()"
                @blur="$v.bankInstallment.number.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-autocomplete
                v-model="bankInstallment.bankId"
                :item-text="(item) => item.name"
                :item-value="(item) => item.id"
                label="Banka"
                :error-messages="
                  validationMessages($v.bankInstallment.bankId, 'Banka')
                "
                @input="$v.bankInstallment.bankId.$touch()"
                @blur="$v.bankInstallment.bankId.$touch()"
                prepend-inner-icon="mdi-bank"
                :items="bankList"
              ></v-autocomplete>
            </div>
            <div class="col-lg-6">
              <v-switch
                v-model="bankInstallment.isActive"
                :label="bankInstallment.isActive ? 'Aktif' : 'Pasif'"
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

import { mapState, mapActions } from "vuex";
//import simplebar from "simplebar-vue";

export default {
  mixins: [validationMixin],

  validations() {
    return {
      bankInstallment: {
        number: { required },
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
    bankInstallmentProp: {
      type: Object,
      default: () => ({
        id: null,
        number: 1,
        isActive: true,
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
      bankInstallment: {
        id: null,
        number: 1,
        isActive: true,
      },
    };
  },
  methods: {
    ...mapActions("bank", ["fetchBankList","bankInstallmentAdd","bankInstallmentUpdate"]),
    validationMessages,
    closeDialog() {
      this.dialog = false;
      this.$v.$reset();
    },
    async setBankList() {
      await this.fetchBankList({
        params: {
          userId: this.user.UserId,
        },
      });
    },
    async saveForm() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        if (this.processType == "new") {
          await this.bankInstallmentAdd({
            params: {
              userId: this.user.UserId,
            },
            body: {
              number: this.bankInstallment.number,
              info: this.bankInstallment.number + " Taksit",
              bankId: this.bankInstallment.bankId,
              isActive: this.bankInstallment.isActive,
            },
            urlSegments: [],
          });
         
        } else {
          await this.bankInstallmentUpdate({
            params: {
              userId: this.user.UserId,
            },
            body: {
              id: this.bankInstallment.id,
              number: this.bankInstallment.number,
              info: this.bankInstallment.number + " Taksit",
              bankId: this.bankInstallment.bankId,
              isActive: this.bankInstallment.isActive,
            },
            urlSegments: [],
          });
       
        }
        this.closeDialog();
      }
    },
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
    bankInstallmentProp: function (newVal) {
      newVal
        ? (this.bankInstallment = Object.assign({},newVal))
        : (this.bankInstallment = {
            id: null,
            number: 1,
            isActive: true,
          });
    },
  },
};
</script>