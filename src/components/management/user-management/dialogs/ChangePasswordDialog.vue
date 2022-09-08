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
                v-model="password"
                label="Şifre"
                :error-messages="validationMessages($v.password,'Şifre')"
                prepend-inner-icon="mdi-key"
                @click:append="showPassword = !showPassword"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
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

import { mapActions } from "vuex";


export default {
  mixins: [validationMixin],

  validations: {
      password: { required }
    ,
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
      password: "",
      user:null
    };
  },
  methods: {
    ...mapActions("user",["userPasswordChange"]),
    validationMessages,
    closeDialog(){
      this.dialog = false;
      this.$v.$reset();
    },
    async saveForm(){
      this.$v.$touch();
      if(!this.$v.$invalid)
      {
        console.log("VETTEL",this.user);
        await this.userPasswordChange({
          params: {
            userId : this.user.id
          },
          body: {
            "Password" : this.password
          }
        })
        this.dialog = false;
      }
    }
  },
  watch: {
    dialog: function (newVal) {
      this.password = "";
      this.$emit("dialogChange", newVal);
    },
    showDialog: function (newVal) {
      this.dialog = newVal;
    },
    userProp: function (newVal) {
      this.user = newVal;
    }
  },
};
</script>