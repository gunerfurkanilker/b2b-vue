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
          processType == "new"
            ? "Sepet Kategorisi Ekle"
            : "Sepet Kategorisi Düzenle"
        }}
        <v-spacer></v-spacer>
        <v-btn @click="closeDialog()" color="danger darken-2" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <v-text-field
                v-model="cartCategory.title"
                label="Başlık"
                :error-messages="
                  validationMessages($v.cartCategory.title, 'Başlık')
                "
                prepend-inner-icon="mdi-page-layout-header"
                @input="$v.cartCategory.title.$touch()"
                @blur="$v.cartCategory.title.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-switch
                v-model="cartCategory.status"
                inset
                :label="
                  cartCategory.status
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
import { mapActions } from "vuex";

export default {
  mixins: [validationMixin],

  validations() {
    //const self = this;
    return {
      cartCategory: {
        title: { required },
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
    cartCategoryProp: {
      type: Object,
      default: () => ({
        id: null,
        title: "",
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
      cartCategory: {
        title: "",
        status: true,
      },
    };
  },
  methods: {
    ...mapActions("user", ["saveUserToUserList"]),
    validationMessages,
    closeDialog() {
      this.dialog = false;
      this.$v.$reset();
    },
    saveForm() {
      this.$v.$touch();
      console.log(this.$v);
      if (!this.$v.$invalid) {
        this.saveUserToUserList(this.user);
        this.dialog = false;
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
    cartCategoryProp: function (newVal) {
      this.cartCategory = newVal;
    },
  },
};
</script>