<template>
  <v-dialog
    v-model="dialog"
    max-width="900"
    persistent
    style="overflow: hidden !important"
  >
    <v-card>
      <v-card-title>
        {{ processType == "new" ? "Ödeme Tipi Ekle" : "Ödeme Tipi Düzenle" }}
        <v-spacer></v-spacer>
        <v-btn @click="closeDialog()" color="danger darken-2" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <v-alert border="left" color="amber darken-2" icon="mdi-alert">
                Bilgi! Buraya gireceğiniz iskonto ve veriler ayarlardaki ödeme
                seçeneği aktif durumdayken çalışır.
              </v-alert>
            </div>
            <div class="col-lg-12">
              <v-text-field
                v-model="paymentMethod.name"
                label="Başlık"
                :error-messages="
                  validationMessages($v.paymentMethod.name, 'Başlık')
                "
                prepend-inner-icon="mdi-page-layout-header"
                @input="$v.paymentMethod.name.$touch()"
                @blur="$v.paymentMethod.name.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-12">
              <v-textarea
                v-model="paymentMethod.description"
                label="Açıklama"
                prepend-inner-icon="mdi-format-indent-increase"
              ></v-textarea>
            </div>
            <div class="col-lg-6">
              <v-autocomplete
                v-model="paymentMethod.priceType"
                label="Uygulanacak Fiyat Tipi"
                :items="[
                  { value: 1, text: 'Fiyat 1' },
                  { value: 2, text: 'Fiyat 2' },
                  { value: 3, text: 'Fiyat 3' },
                  { value: 4, text: 'Fiyat 4' },
                ]"
                item-text="text"
                item-value="value"
                prepend-inner-icon="mdi-format-list-bulleted-type"
              ></v-autocomplete>
            </div>
            <div class="col-lg-6">
              <v-text-field
                v-model="paymentMethod.discount"
                label="İskonto Oranı"
                type="number"
                min="0"
                prepend-inner-icon="mdi-percent"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-switch
                v-model="paymentMethod.isActive"
                inset
                :label="
                  paymentMethod.isActive
                    ? 'Durum : ' + 'Aktif'
                    : 'Durum : ' + 'Pasif'
                "
              ></v-switch>
            </div>
            <div class="col-lg-6">
              <v-switch
                v-model="paymentMethod.erpExport"
                inset
                :label="
                  paymentMethod.erpExport
                    ? 'ERP\' ye aktarılsın mı : ' + 'Evet'
                    : 'ERP\' ye aktarılsın mı : ' + 'Hayır'
                "
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

import { mapActions, mapState } from "vuex";

export default {
  mixins: [validationMixin],

  validations() {
    //const self = this;
    return {
      paymentMethod: {
        name: { required },
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
    paymentMethodProp: {
      type: Object,
      default: () => ({
        id: null,
        title: "",
        description: "",
        discount: "",
        priceType: "",
        create_date: "",
        update_date: "",
        erpExport: false,
        isActive: true,
      }),
    },
    processType: {
      type: String,
      default: "new",
    },
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
  data() {
    return {
      dialog: false,
      showPassword: false,
      paymentMethod: {
        id: null,
        title: "",
        description: "",
        discount: "",
        priceType: "",
        create_date: "",
        update_date: "",
        erpExport: false,
        isActive: true,
      },
    };
  },
  methods: {
    ...mapActions("payment", ["paymentMethodAdd", "paymentMethodUpdate"]),
    validationMessages,
    closeDialog() {
      this.dialog = false;
      this.$v.$reset();
    },
    async saveForm() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        if (this.processType == "new") {
          await this.paymentMethodAdd({
            params: {
              userId: this.user.UserId,
            },
            body: {
              Name: this.paymentMethod.name,
              Description: this.paymentMethod.description,
              Discount: this.paymentMethod.discount,
              PriceType: this.paymentMethod.priceType,
              isActive: this.paymentMethod.isActive,
              type: 1,
              erpExport: this.paymentMethod.erpExport,
            },
            urlSegments: [],
          });
        } else {
          await this.paymentMethodUpdate({
            params: {
              userId: this.user.UserId,
            },
            body: {
              Id: this.paymentMethod.id,
              Name: this.paymentMethod.name,
              Description: this.paymentMethod.description,
              Discount: this.paymentMethod.discount,
              PriceType: this.paymentMethod.priceType,
              isActive: this.paymentMethod.isActive,
              type: 1,
              erpExport: this.paymentMethod.erpExport,
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
      this.$emit("dialogChange", newVal);
    },
    showDialog: function (newVal) {
      this.dialog = newVal;
    },
    paymentMethodProp: function (newVal) {
      this.paymentMethod = Object.assign({}, newVal);
    },
  },
};
</script>