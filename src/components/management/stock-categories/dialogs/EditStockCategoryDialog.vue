<template>
  <v-dialog
    v-model="dialog"
    max-width="900"
    persistent
    style="overflow: hidden !important"
  >
    <v-card>
      <v-card-title>
        {{ processType == "new" ? "Duyuru Ekle" : "Duyuru Düzenle" }}
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
                v-model="stockCategory.category"
                label="Kategori Adı"
                :error-messages="
                  validationMessages($v.stockCategory.category, 'Kategori Adı')
                "
                prepend-inner-icon="mdi-page-layout-header"
                @input="$v.stockCategory.category.$touch()"
                @blur="$v.stockCategory.category.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-autocomplete
                v-model="stockCategory.group"
                label="Grup Kodu"
                :items="['GRUP KODU','KOD 1','KOD 2','KOD 3','KOD 4','KOD 5']"
                :error-messages="
                  validationMessages($v.stockCategory.group, 'Grup Kodu')
                "
                prepend-inner-icon="mdi-format-list-bulleted"
                @input="$v.stockCategory.group.$touch()"
                @blur="$v.stockCategory.group.$touch()"
              ></v-autocomplete>
            </div>
            <div class="col-lg-6">
              <v-autocomplete
                v-model="stockCategory.group_val"
                label="Grup Değeri"
                :items="['CSA Seri','CSK Seri','Direksiyon Rul','FAG','CONTI','ATLAS']"
                :error-messages="
                  validationMessages($v.stockCategory.group_val, 'Grup Değeri')
                "
                prepend-inner-icon="mdi-format-list-numbered"
                @input="$v.stockCategory.group_val.$touch()"
                @blur="$v.stockCategory.group_val.$touch()"
              ></v-autocomplete>
            </div>
            <div class="col-lg-6">
              <v-autocomplete
                v-model="stockCategory.top_category"
                label="Üst Kategori"
                :items="['FAG','CONTI','ATLAS','A']"    
                prepend-inner-icon="mdi-filter-variant"
              ></v-autocomplete>
            </div>
            <div class="col-lg-3">
              <v-switch
                v-model="stockCategory.status"
                inset
                :label="
                  stockCategory.status
                    ? 'Durum : ' + 'Aktif'
                    : 'Durum : ' + 'Pasif'
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


export default {
  mixins: [validationMixin],

  validations() {
    //const self = this;
    return {
      stockCategory: {
        category: { required },
        group: { required },
        group_val: { required },
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
    stockCategoryProp: {
      type: Object,
      default: () => ({
        id: null,
        category: "",
        group: "",
        group_val: "",
        top_category: "",
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
      roleGroupList: ["Yönetici", "Plasiyer", "Müşteri"],
      stockCategory: {
        category: "",
        group: "",
        group_val: "",
        top_category: "",
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
      console.log(this.$v);
    },
  },
  watch: {
    dialog: function (newVal) {
      this.$emit("dialogChange", newVal);
    },
    showDialog: function (newVal) {
      this.dialog = newVal;
    },
    stockCategoryProp: function (newVal) {
      this.stockCategory = newVal;
    },
  },
};
</script>