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
          processType == "new" ? "Kargo Firması Ekle" : "Kargo Firması Düzenle"
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
              <v-text-field v-model="shippingCompany.name" label="Kargo Firma Adı"></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-switch v-model="shippingCompany.isActive" :label="shippingCompany.isActive ? 'Durum: ' +  'Aktif' : 'Durum: ' +  'Pasif'"></v-switch>
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

import { mapActions } from "vuex";

export default {
  mixins: [validationMixin],

  validations() {
    //const self = this;
    return {
      announcement: {
        subject: { required },
        content: { required },
        start_date: { required },
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
    shippingCompanyProp: {
      type: Object,
      default: () => ({
        name: "",
        isActive: false,
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
      shippingCompany: {
        name: "",
        isActive: false,
      },
    };
  },
  methods: {
    ...mapActions("shipping", [
      "shippingCompanyAdd",
      "shippingCompanyUpdate",
      "fetchSingleShippingCompany",
    ]),
    validationMessages,
    closeDialog() {
      this.dialog = false;
      this.$v.$reset();
    },
    async saveForm() {
      //this.$v.$touch();
      if (this.processType == "new") {
        await this.shippingCompanyAdd({
          params: {},
          body: {
            Name: this.shippingCompany.name,
            IsActive: this.shippingCompany.isActive,
          },
        });
        
      } else {
        await this.shippingCompanyUpdate({
          params: {},
          body: {
            Id: this.shippingCompany.id,
            Name: this.shippingCompany.name,
            isActive: this.shippingCompany.isActive
          },
        });
       
      }
      this.dialog = false;
    },

    async getShippingCompany(companyObject) {

      let result = await this.fetchSingleShippingCompany({
        params: {},
        body: {},
        urlSegments: [companyObject.id],
      });
      this.shippingCompany = Object.assign({},result.data.data);
    },
  },
  watch: {
    dialog: function (newVal) {
      this.$emit("dialogChange", newVal);
    },
    showDialog: function (newVal) {
      this.dialog = newVal;
    },
    shippingCompanyProp: function (newVal) {
      if (newVal && this.processType == 'edit') this.getShippingCompany(newVal);
      else
        this.shippingCompany = {
          name: "",
          isActive: true,
        };
    },
  },
};
</script>