<template>
  <v-dialog v-model="dialog" max-width="600" persistent style="z-index:9999 !important">
    <v-card>
      <v-card-title>
        Şifre Güncelle
        <v-spacer></v-spacer>
        <v-btn @click="closeDialog()" color="danger darken-2" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <v-text-field
                v-model="user.password"
                label="Şifre"
                :error-messages="validationMessages($v.user.password,'Şifre')"
                prepend-inner-icon="mdi-key"
                @click:append="showPassword = !showPassword"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @input="$v.user.password.$touch()"
                @blur="$v.user.password.$touch()"
              ></v-text-field>
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
import {
  required
} from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";

import { validationMessages } from "@/validationMessages.js"


export default {
  mixins: [validationMixin],

  validations: {
    user: {
      password: { required }
    },
  },

  components: {},

  props: {
    showDialog: {
      type: Boolean,
      default: false,
    },
    userProp: {
      type: Object,
      default: () => ({
        password: "",
      }),
    },
    processType:{
      type: String,
      default: "new"
    }
  },
  computed: {},
  data() {
    return {
      dialog: false,
      showPassword: false,
      user: {
        tckn: "",
        full_name: "",
        name: "",
        surname: "",
        username: "",
        email: "",
        phone: "",
        current_code: "",
        salesman_code: "",
        last_login: "",
        rolegrup: "",
        password: "",
        status: true,
      },
    };
  },
  methods: {
    validationMessages,
    closeDialog(){
      this.dialog = false;
      this.$v.$reset();
    },
    saveForm(){
      this.$v.$touch();
      console.log(this.$v.$invalid);
    }
  },
  watch: {
    dialog: function (newVal) {
      this.$emit("dialogChange", newVal);
    },
    showDialog: function (newVal) {
      this.dialog = newVal;
    },
    userProp: function (newVal) {
      console.log(newVal)
      this.user = newVal;
    }
  },
};
</script>