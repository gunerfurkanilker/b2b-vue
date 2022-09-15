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
                v-model="announcement.body"
                label="İçerik"
                :error-messages="
                  validationMessages($v.announcement.body, 'İçerik')
                "
                prepend-inner-icon="mdi-format-indent-increase"
                @input="$v.announcement.body.$touch()"
                @blur="$v.announcement.body.$touch()"
              ></v-textarea>
            </div>
            <div class="col-lg-6">
              <v-autocomplete
                v-model="announcement.roleGroupId"
                label="Role Grup"
                :item-text="(item) => item.name"
                :item-value="(item) => item.id"
                :error-messages="
                  validationMessages($v.announcement.roleGroup, 'Role Grup')
                "
                @input="$v.announcement.roleGroupId.$touch()"
                @blur="$v.announcement.roleGroupId.$touch()"
                prepend-inner-icon="mdi-account-star"
                :items="roleGroupList"
              ></v-autocomplete>
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
                    :value="
                      announcement.startDate
                        ? moment(announcement.startDate)
                            .locale('tr')
                            .format('DD MMMM YYYY hh:mm:ss')
                        : ''
                    "
                    label="Başlangıç Tarihi"
                    :error-messages="
                      validationMessages(
                        $v.announcement.content,
                        'Başlangıç Tarihi'
                      )
                    "
                    prepend-inner-icon="mdi-calendar"
                    @input="$v.announcement.startDate.$touch()"
                    @blur="$v.announcement.startDate.$touch()"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="announcement.startDate"
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
                    :value="
                      announcement.finishDate
                        ? moment(announcement.finishDate)
                            .locale('tr')
                            .format('DD MMMM YYYY hh:mm:ss')
                        : ''
                    "
                    label="Bitiş Tarihi"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="announcement.finishDate"
                  locale="tr"
                ></v-date-picker>
              </v-menu>
            </div>
            <div class="col-lg-4">
              <v-switch
                v-model="announcement.isActive"
                dense
                inset
                :label="announcement.isActive ? 'Aktif' : 'Pasif'"
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
import moment from "moment";
//import simplebar from "simplebar-vue";

export default {
  mixins: [validationMixin],

  validations() {
    //const self = this;
    return {
      announcement: {
        subject: { required },
        body: { required },
        startDate: { required },
        roleGroupId: { required },
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
      announcement: {
        subject: "",
        content: "",
        startDate: null,
        finishDate: null,
        isActive: true,
      },
    };
  },
  methods: {
    ...mapActions("announcement", [
      "fetchSingle",
      "announcementAdd",
      "announcementUpdate",
    ]),
    ...mapActions("user", ["fetchRoleGroupList"]),
    validationMessages,
    closeDialog() {
      this.dialog = false;
      this.$v.$reset();
      this.announcement = {
        subject: "",
        content: "",
        startDate: null,
        finishDate: null,
        isActive: true,
      };
    },
    async getRoleGroupList() {
      this.roleGroupList = await this.fetchRoleGroupList({
        params: {
          userId: this.user.UserId,
        },
      });
    
    },
    async saveForm() {
      this.$v.$touch();
    
      if (!this.$v.$invalid) {
        if (this.processType == "new") {
          await this.announcementAdd({
            params: {
              userId: this.user.UserId,
            },
            body: {
              subject: this.announcement.subject,
              body: this.announcement.subject,
              roleGroupId: this.announcement.roleGroupId,
              startDate: this.announcement.startDate,
              finishDate: this.announcement.finishDate,
              isActive: this.announcement.isActive,
            },
            urlSegments: [],
          });
      
        } else {
          await this.announcementUpdate({
            params: {
              userId: this.user.UserId,
            },
            body: {
              Id: this.announcement.id,
              subject: this.announcement.subject,
              body: this.announcement.subject,
              roleGroupId: this.announcement.roleGroupId,
              startDate: this.announcement.startDate,
              finishDate: this.announcement.finishDate,
              isActive: this.announcement.isActive,
            },
            urlSegments: [],
          });
        
        }
        this.closeDialog();
      }
    },
    moment(date) {
      return moment(date);
    },
    async setAnnouncement(announcementObject) {
      let result = await this.fetchSingle({
        params: {},
        body: {},
        urlSegments: [announcementObject.id],
      });
      this.announcement = result.data.data;
      this.announcement.startDate = this.moment(
        this.announcement.startDate
      ).format("YYYY-MM-DD");
      this.announcement.finishDate = this.moment(
        this.announcement.finishDate
      ).format("YYYY-MM-DD");
    },
  },
  watch: {
    dialog: function (newVal) {
      if (newVal) {
        this.getRoleGroupList();
      }
      this.$emit("dialogChange", newVal);
    },
    showDialog: function (newVal) {
      this.dialog = newVal;
    },
    announcementProp: function (newVal) {
      this.setAnnouncement(newVal);
    },
  },
};
</script>