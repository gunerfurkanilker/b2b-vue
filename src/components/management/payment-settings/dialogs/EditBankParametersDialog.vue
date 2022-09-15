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
                v-model="bankParameter.bankId"
                label="Banka"
                :item-text="(item) => item.name"
                :item-value="(item) => item.id"
                :error-messages="
                  validationMessages($v.bankParameter.banka, 'Banka')
                "
                @input="$v.bankParameter.bankId.$touch()"
                @blur="$v.bankParameter.bankId.$touch()"
                prepend-inner-icon="mdi-bank"
                :items="bankList"
              ></v-autocomplete>
            </div>
            <div class="col-lg-6">
              <v-text-field
                v-model="bankParameter.merchantNumber"
                label="Merchant Number"
                :error-messages="
                  validationMessages(
                    $v.bankParameter.merchantNumber,
                    'Merchant Number'
                  )
                "
                prepend-inner-icon="mdi-numeric"
                @input="$v.bankParameter.merchantNumber.$touch()"
                @blur="$v.bankParameter.merchantNumber.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-text-field
                v-model="bankParameter.terminalNumber"
                label="Terminal No"
                :error-messages="
                  validationMessages(
                    $v.bankParameter.terminalNumber,
                    'Terminal No'
                  )
                "
                prepend-inner-icon="mdi-numeric"
                @input="$v.bankParameter.terminalNumber.$touch()"
                @blur="$v.bankParameter.terminalNumber.$touch()"
              ></v-text-field>
            </div>

            <div class="col-lg-6">
              <v-text-field
                v-model="bankParameter.securityCode"
                label="Security Code"
                :error-messages="
                  validationMessages(
                    $v.bankParameter.securityCode,
                    'Security Code'
                  )
                "
                prepend-inner-icon="mdi-lock"
                @input="$v.bankParameter.securityCode.$touch()"
                @blur="$v.bankParameter.securityCode.$touch()"
              ></v-text-field>
            </div>

            <div class="col-lg-6">
              <v-text-field
                v-model="bankParameter.bankUrl"
                label="URL"
                :error-messages="
                  validationMessages($v.bankParameter.bankUrl, 'URL')
                "
                prepend-inner-icon="mdi-web"
                @input="$v.bankParameter.bankUrl.$touch()"
                @blur="$v.bankParameter.bankUrl.$touch()"
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

import { mapActions, mapState } from "vuex";
//import simplebar from "simplebar-vue";

export default {
  mixins: [validationMixin],

  validations() {
    return {
      bankParameter: {
        bankId: { required },
        merchantNumber: { required },
        terminalNumber: { required },
        securityCode: { required },
        bankUrl: { required },
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
        bankId: null,
        merchantNumber: "",
        terminalNumber: "",
        securityCode: "",
        bankUrl: "",
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
      bankParameter: {
        id: null,
        bankId: null,
        merchantNumber: "",
        terminalNumber: "",
        securityCode: "",
        bankUrl: "",
      },
    };
  },
  methods: {
    ...mapActions("bank", ["fetchBankList","bankParameterUpdate","bankParameterAdd"]),
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
          await this.bankParameterAdd({
            params: {
              userId: this.user.UserId,
            },
            body: {
              bankId: this.bankParameter.bankId,
              merchantNumber: this.bankParameter.merchantNumber,
              terminalNumber: this.bankParameter.terminalNumber,
              securityCode: this.bankParameter.securityCode,
              bankUrl: this.bankParameter.bankUrl,
            },
            urlSegments: [],
          });
        } else {
          await this.bankParameterUpdate({
            params: {
              userId: this.user.UserId,
            },
            body: {
              id: this.bankParameter.id,
              bankId: this.bankParameter.bankId,
              merchantNumber: this.bankParameter.merchantNumber,
              terminalNumber: this.bankParameter.terminalNumber,
              securityCode: this.bankParameter.securityCode,
              bankUrl: this.bankParameter.bankUrl,
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
    bankParameterProp: function (newVal) {
      newVal
        ? (this.bankParameter = Object.assign({}, newVal))
        : (this.bankParameter = {
            id: null,
            bankId: null,
            merchantNumber: "",
            terminalNumber: "",
            securityCode: "",
            bankUrl: "",
          });
    },
  },
};
</script>