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
                Bilgi! Buraya gireceğiniz iskonto ve veriler ayarlardaki ödeme seçeneği aktif durumdayken çalışır.
              </v-alert>
            </div>
            <div class="col-lg-12">
              <v-text-field
                v-model="paymentType.title"
                label="Başlık"
                :error-messages="
                  validationMessages($v.paymentType.title, 'Başlık')
                "
                prepend-inner-icon="mdi-page-layout-header"
                @input="$v.paymentType.title.$touch()"
                @blur="$v.paymentType.title.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-12">
              <v-textarea
                v-model="paymentType.description"
                label="Açıklama"
                :error-messages="
                  validationMessages($v.paymentType.description, 'Açıklama')
                "
                prepend-inner-icon="mdi-format-indent-increase"
                @input="$v.paymentType.description.$touch()"
                @blur="$v.paymentType.description.$touch()"
              ></v-textarea>
            </div>
            <div class="col-lg-6">
              <v-autocomplete
                v-model="paymentType.type"
                label="Uygulanacak Fiyat Tipi"
                :items="['Fiyat 1','Fiyat 2','Fiyat 3','Fiyat 4']"
                :error-messages="
                  validationMessages($v.paymentType.type, 'Uygulanacak Fiyat Tipi')
                "
                prepend-inner-icon="mdi-format-list-bulleted-type"
                @input="$v.paymentType.type.$touch()"
                @blur="$v.paymentType.type.$touch()"
              ></v-autocomplete>
            </div>
            <div class="col-lg-6">
              <v-text-field
                v-model="paymentType.iskonto"
                label="İskonto Oranı"
                type="number"
                min="0"
                :error-messages="
                  validationMessages($v.paymentType.iskonto, 'İskonto Oranı')
                "
                prepend-inner-icon="mdi-percent"
                @input="$v.paymentType.iskonto.$touch()"
                @blur="$v.paymentType.iskonto.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-switch
                v-model="paymentType.status"
                inset
                :label="paymentType.status ? 'Durum : ' +  'Aktif' : 'Durum : ' +  'Pasif'"
              ></v-switch>
            </div>
            <div class="col-lg-6">
              <v-switch
                v-model="paymentType.toERP"
                inset
                :label="paymentType.toERP ? 'ERP\' ye aktarılsın mı : ' +  'Evet' : 'ERP\' ye aktarılsın mı : ' +  'Hayır'"
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

export default {
  mixins: [validationMixin],

  validations() {
    //const self = this;
    return {
      paymentType: {
        title: { required },
        description: { required },
        iskonto: { required },
        type: { required },
        toERP: { required }
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
    paymentTypeProp: {
      type: Object,
      default: () => ({
        id: null,
        title: "",
        description: "",
        iskonto: "",
        type: "",
        create_date: "",
        update_date: "",
        toERP: false,
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
      paymentType: {
        id: null,
        title: "",
        description: "",
        iskonto: "",
        type: "",
        create_date: "",
        update_date: "",
        toERP: false,
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
    paymentTypeProp: function (newVal) {
      this.paymentType = newVal;
    },
  },
};
</script>