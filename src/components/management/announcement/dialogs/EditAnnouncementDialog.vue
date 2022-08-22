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
            <div class="col-lg-12">
              <v-text-field
                v-model="announcement.subject"
                label="Konu"
                :error-messages="
                  validationMessages($v.announcement.subject, 'Konu')
                "
                prepend-inner-icon="mdi-page-layout-header"
                @input="$v.announcement.subject.$touch()"
                @blur="$v.announcement.subject.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-12">
              <v-textarea
                v-model="announcement.content"
                label="İçerik"
                :error-messages="
                  validationMessages($v.announcement.content, 'İçerik')
                "
                prepend-inner-icon="mdi-format-indent-increase"
                @input="$v.announcement.content.$touch()"
                @blur="$v.announcement.content.$touch()"
              ></v-textarea>
            </div>
            <div class="col-lg-6">
              <v-menu
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    :value="announcement.start_date"
                    label="Başlangıç Tarihi"
                    :error-messages="
                      validationMessages($v.announcement.content, 'Başlangıç Tarihi')
                    "
                    prepend-inner-icon="mdi-calendar"
                    @input="$v.announcement.start_date.$touch()"
                    @blur="$v.announcement.start_date.$touch()"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="announcement.start_date"
                  locale="tr"
                ></v-date-picker>
              </v-menu>
            </div>
            <div class="col-lg-6">
              <v-menu
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    :value="announcement.end_date"
                    label="Bitiş Tarihi"
                    :error-messages="
                      validationMessages($v.announcement.content, 'Bitiş Tarihi')
                    "
                    prepend-inner-icon="mdi-calendar"
                    @input="$v.announcement.end_date.$touch()"
                    @blur="$v.announcement.end_date.$touch()"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="announcement.end_date"
                  locale="tr"
                ></v-date-picker>
              </v-menu>
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
    announcementProp: {
      type: Object,
      default: () => ({
        id: null,
        subject: "",
        content: "",
        start_date: null,
        end_date: null,
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
      announcement: {
        subject: "",
        content: "",
        start_date: null,
        end_date: null,
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
    announcementProp: function (newVal) {
      this.announcement = newVal;
    },
  },
};
</script>