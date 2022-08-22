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
          processType == "new" ? "Yeni Hesap Oluştur" : "Banka Hesap Düzenle"
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
              <v-autocomplete
                v-model="bankParameter.banka"
                label="Banka"
                :error-messages="
                  validationMessages($v.bankParameter.banka, 'Banka')
                "
                @input="$v.bankParameter.banka.$touch()"
                @blur="$v.bankParameter.banka.$touch()"
                prepend-inner-icon="mdi-bank"
                :items="bankList"
              ></v-autocomplete>
            </div>
            <div class="col-lg-6">
              <v-text-field
                v-model="bankParameter.merchant_number"
                label="Merchant Number"
                :error-messages="validationMessages($v.bankParameter.merchant_number, 'Merchant Number')"
                prepend-inner-icon="mdi-numeric"
                @input="$v.bankParameter.merchant_number.$touch()"
                @blur="$v.bankParameter.merchant_number.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-text-field
                v-model="bankParameter.terminal_no"
                label="Terminal No"
                :error-messages="validationMessages($v.bankParameter.terminal_no, 'Terminal No')"
                prepend-inner-icon="mdi-numeric"
                @input="$v.bankParameter.terminal_no.$touch()"
                @blur="$v.bankParameter.terminal_no.$touch()"
              ></v-text-field>
            </div>

            <div class="col-lg-6">
              <v-text-field
                v-model="bankParameter.security_code"
                label="Security Code"
                :error-messages="validationMessages($v.bankParameter.security_code, 'Security Code')"
                prepend-inner-icon="mdi-lock"
                @input="$v.bankParameter.security_code.$touch()"
                @blur="$v.bankParameter.security_code.$touch()"
              ></v-text-field>
            </div>

            <div class="col-lg-6">
              <v-text-field
                v-model="bankParameter.url"
                label="URL"
                :error-messages="validationMessages($v.bankParameter.url, 'URL')"
                prepend-inner-icon="mdi-web"
                @input="$v.bankParameter.url.$touch()"
                @blur="$v.bankParameter.url.$touch()"
              ></v-text-field>
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

export default {
  mixins: [validationMixin],

  validations() {
    return {
      bankParameter: {
        banka: { required },
        merchant_number: { required },
        terminal_no: { required },
        security_code: { required },
        url: { required },
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
    bankParameterProp: {
      type: Object,
      default: () => ({
        id: null,
        banka: "Yapı ve Kredi Bankası",
        merchant_number: "846543123",
        terminal_no: "549843",
        security_code: "furkanilker123123",
        url: "yahoo.com",
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
      bankList: [
        "Akbank",
        "Ziraat Bankası",
        "Finans Bank",
        "Yapı ve Kredi Bankası",
        "Şekerbank",
        "Odea Bank",
        "HSBC Bank",
      ],
      bankParameter: {
        id: null,
        banka: "",
        merchant_number: "",
        terminal_no: "",
        security_code: "",
        url: "",
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
    bankParameterProp: function (newVal) {
      console.log(newVal);
      newVal
        ? (this.bankParameter = newVal)
        : (this.bankParameter = {
            id: null,
            banka: "",
            merchant_number: "",
            terminal_no: "",
            security_code: "",
            url: "",
          });
    },
  },
};
</script>