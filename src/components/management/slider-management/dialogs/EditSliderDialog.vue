<template>
  <v-dialog
    v-model="dialog"
    max-width="900"
    persistent
    style="overflow: hidden !important"
  >
    <v-card>
      <v-card-title>
        {{ processType == "new" ? "Slider Ekle" : "Slider Düzenle" }}
        <v-spacer></v-spacer>
        <v-btn @click="closeDialog()" color="danger darken-2" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <img :src="slider.image" alt="" style="width:300px;height:auto" @click="expandImage(slider.image)">
            </div>
            <div class="col-md-12 text-center">
            <label for="">Resim</label>
            <v-file-input
              accept="image/*"
              placeholder="Dosya Seçin"
            ></v-file-input>
          </div>
            <div class="col-lg-12">
              <v-text-field
                v-model="slider.title"
                label="Başlık"
                :error-messages="
                  validationMessages($v.slider.title, 'Başlık')
                "
                prepend-inner-icon="mdi-page-layout-header"
                @input="$v.slider.title.$touch()"
                @blur="$v.slider.title.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-12">
              <v-textarea
                v-model="slider.content"
                label="İçerik"
                :error-messages="
                  validationMessages($v.slider.content, 'İçerik')
                "
                prepend-inner-icon="mdi-format-indent-increase"
                @input="$v.slider.content.$touch()"
                @blur="$v.slider.content.$touch()"
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
                    :value="slider.start_date"
                    label="Başlangıç Tarihi"
                    :error-messages="
                      validationMessages($v.slider.content, 'Başlangıç Tarihi')
                    "
                    prepend-inner-icon="mdi-calendar"
                    @input="$v.slider.start_date.$touch()"
                    @blur="$v.slider.start_date.$touch()"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="slider.start_date"
                  locale="tr"
                ></v-date-picker>
              </v-menu>
            </div>
            <div class="col-lg-6">
              <label for="">Aktiflik Durumu</label>
              <v-switch
                v-model="slider.status"
                :label="slider.status ? 'Aktif' : 'Pasif'"
              >

              </v-switch>
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
      slider: {
        image: { required },
        title: { required },
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
    sliderProp: {
      type: Object,
      default: () => ({
        id: null,
        image: null,
        title: "",
        content: "",
        order: "",
        start_date: "",
        status: true
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
      slider: {
        image: null,
        title: "",
        content: "",
        order: "",
        start_date: "",
        status: true
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
    expandImage(images) {
      this.$viewerApi({
        images: [images],
      });
    },
  },
  watch: {
    dialog: function (newVal) {
      this.$emit("dialogChange", newVal);
    },
    showDialog: function (newVal) {
      this.dialog = newVal;
    },
    sliderProp: function (newVal) {
      this.slider = newVal;
    },
  },
};
</script>