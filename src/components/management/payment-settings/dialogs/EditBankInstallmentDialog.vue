<template>
  <v-dialog
    v-model="dialog"
    max-width="900"
    persistent
    style="overflow: hidden !important"
  >
    <v-card>
      <v-card-title>
        {{ processType == "new" ? "Yeni Hesap Oluştur" : "Banka Hesap Düzenle" }}
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
                v-model="bankAccount.taksit"
                label="Taksit"
                type="number"
                :error-messages="validationMessages($v.bankAccount.taksit, 'Taksit')"
                prepend-inner-icon="mdi-numeric"
                @input="$v.bankAccount.taksit.$touch()"
                @blur="$v.bankAccount.taksit.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-autocomplete
                v-model="bankAccount.banka"
                label="Banka"
                :error-messages="validationMessages($v.bankAccount.banka, 'Banka')"
                @input="$v.bankAccount.banka.$touch()"
                @blur="$v.bankAccount.banka.$touch()"
                prepend-inner-icon="mdi-bank"
                :items="bankList"
              ></v-autocomplete>
            </div>
            <div class="col-lg-6">
              <v-switch
                v-model="bankAccount.status"
                :label="bankAccount.status ? 'Aktif' : 'Pasif'"
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
import {
  required
} from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";
import { validationMessages } from "@/validationMessages.js";
//import simplebar from "simplebar-vue";

export default {
  mixins: [validationMixin],

  validations() {
    return {
      bankAccount: {
        sube: { required },
        sube_kodu: { required },
        hesap_no: { required },
        IBAN: { required },
        banka: { required },
        status: { required },
        taksit: { required }
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
        taksit: 1,
        status: true,
      }),
    },
    processType: {
      type: String,
      default: "new",
    },
  },
  computed: {},
  data() {
    return {
      dialog: false,
      showPassword: false,
      bankList: ["Akbank", "Ziraat Bankası", "Finans Bank", "Yapı ve Kredi Bankası", "Şekerbank", "Odea Bank", "HSBC Bank"],
      bankAccount: {
        id: null,
        sube: "",
        sube_kodu: "",
        hesap_no: "",
        IBAN: "",
        banka: "",
        taksit: 1,
        status: true,
      },
    };
  },
  methods: {
    validationMessages,
    closeDialog() {
      this.dialog = false;
      this.$v.$reset();
    },
    saveForm() {
      this.$v.$touch();
    },
  },
  watch: {
    dialog: function (newVal) {
      this.$emit("dialogChange", newVal);
    },
    showDialog: function (newVal) {
      this.dialog = newVal;
    },
    bankAccountProp: function (newVal) {
      console.log(newVal);
      newVal ? this.bankAccount = newVal : this.bankAccount = {
        id: null,
        sube: "",
        sube_kodu: "",
        hesap_no: "",
        IBAN: "",
        banka: "",
        taksit: 1,
        status: true,
      };
    },
  },
};
</script>