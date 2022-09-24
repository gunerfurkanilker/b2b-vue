<template>
  <v-dialog
    v-model="dialog"
    max-width="900"
    persistent
    style="overflow: hidden !important"
  >
    <v-card>
      <v-card-title>
        {{ processType == "new" ? "Takvim Kategorisi Ekle" : "Takvim Kategorisi Düzenle" }}
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
                v-model="calendarCategory.name"
                label="Kategori Adı"
                :error-messages="
                  validationMessages($v.calendarCategory.name, 'Kategori Adı')
                "
                prepend-inner-icon="mdi-page-layout-header"
                @input="$v.calendarCategory.name.$touch()"
                @blur="$v.calendarCategory.name.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-autocomplete
                v-model="calendarCategory.badge"
                label="Renk"
                :item-text="(item) => item.text"
                :item-value="(item) => item.badge"
                prepend-inner-icon="mdi-account-star"
                :items="badgeList"
              ></v-autocomplete>
            </div>
            <div class="col-lg-4">
              <v-switch
                v-model="calendarCategory.isActive"
                dense
                inset
                :label="calendarCategory.isActive ? 'Aktif' : 'Pasif'"
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
import { mapActions, mapState } from "vuex";
//import simplebar from "simplebar-vue";

export default {
  mixins: [validationMixin],

  validations() {
    //const self = this;
    return {
      calendarCategory: {
        name: { required }
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
    calendarCategoryProp: {
      type: Object,
      default: () => ({
        id: null,
        subject: "",
        content: "",
        start_date: null,
        end_date: null,
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
      roleGroupList: [],
      calendarCategory: {
        id: null,
        name: null,
        badge: null,
        isActive: true,
      },
      badgeList:[
        {
          badge: 2,
          text: "Mavi"
        },
        {
          badge: 3,
          text: "Yeşil"
        },
        {
          badge: 4,
          text: "Mor"
        },
        {
          badge: 5,
          text: "Turuncu"
        },
        {
          badge: 6,
          text: "Kırmızı"
        },
        {
          badge: 7,
          text: "Siyah"
        },
      ]
    };
  },
  methods: {
    ...mapActions("calendar", [
      "fetchSingle",
      "calendarCategoryAdd",
      "calendarCategoryUpdate",
    ]),
    ...mapActions("user", ["fetchRoleGroupList"]),
    validationMessages,
    closeDialog() {
      this.dialog = false;
      this.$v.$reset();
      this.calendarCategory = {
        id: null,
        name: null,
        badge: null,
        isActive: true,
      };
    },
    async saveForm() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        if (this.processType == "new") {
          await this.calendarCategoryAdd({
            params: {
              userId: this.user.UserId,
            },
            body: {
              Name: this.calendarCategory.name,
              Badge: this.calendarCategory.badge,
              isActive: this.calendarCategory.isActive,
            },
            urlSegments: [],
          });
        } else {
          await this.calendarCategoryUpdate({
            params: {
              userId: this.user.UserId,
            },
            body: {
              Id: this.calendarCategory.id,
              Name: this.calendarCategory.name,
              Badge: this.calendarCategory.badge,
              isActive: this.calendarCategory.isActive,
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
    calendarCategoryProp: function (newVal) {
      newVal
        ? (this.calendarCategory = Object.assign({}, newVal))
        : (this.calendarCategory = {
            id: null,
            name: null,
            badge: null,
            isActive: true,
          });
    },
  },
};
</script>