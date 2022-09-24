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
                v-model="basketCategory.name"
                label="Başlık"
                :error-messages="
                  validationMessages($v.basketCategory.name, 'Başlık')
                "
                prepend-inner-icon="mdi-page-layout-header"
                @input="$v.basketCategory.name.$touch()"
                @blur="$v.basketCategory.name.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-switch
                v-model="basketCategory.isActive"
                inset
                :label="
                  basketCategory.isActive
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
import { mapActions, mapState } from "vuex";

export default {
  mixins: [validationMixin],

  validations() {
    //const self = this;
    return {
      basketCategory: {
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
    basketCategoryProp: {
      type: Object,
      default: () => ({
        id: null,
        name: "",
        isActive: true,
      }),
    },
    processType: {
      type: String,
      default: "new",
    },
  },
  computed: {
    ...mapState("auth",["user"])
  },
  data() {
    return {
      dialog: false,
      showPassword: false,
      basketCategory: {
        name: "",
        isActive: true,
      },
    };
  },
  methods: {
    ...mapActions("basket", ["basketCategoryAdd", "basketCategoryUpdate"]),
    validationMessages,
    closeDialog() {
      this.dialog = false;
      this.basketCategory = {
        name: "",
        isActive: true,
      };
      this.$v.$reset();
    },
    async saveForm() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        if (this.processType == "new") {
          await this.basketCategoryAdd({
            params: {
              userId: this.user.UserId,
            },
            body: {
              Name: this.basketCategory.name,
              isActive: this.basketCategory.isActive,
            },
            urlSegments: [],
          });
        } else {
          await this.basketCategoryUpdate({
            params: {
              userId: this.user.UserId,
            },
            body: {
              Id: this.basketCategory.id,
              Name: this.basketCategory.name,
              isActive: this.basketCategory.isActive,
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
    basketCategoryProp: function (newVal) {
      this.basketCategory = Object.assign({},newVal);
    },
  },
};
</script>