<template>
  <v-dialog v-model="dialog" max-width="800">
    <v-card>
      <v-card-title><v-icon class="me-3">mdi-key</v-icon> Şifremi Unuttum</v-card-title>
      <v-card-text>
        <v-alert class="my-4" border="left" color="#2A3B4D" dark dense icon="mdi-alert">
          Aşağıya yazacağınız mail adresine şifre sıfırlama linki
          gönderilecektir
        </v-alert>
        <div class="py-5">
          <v-text-field
            v-model="email"
            :error-messages="validationMessages($v.email,'Email Adresi')"
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
            class="mt-4"
            label="Email Adresi"
            prepend-inner-icon="mdi-email"
            placeholder="E-Mail Adresinizi Giriniz"
            dense
          >
          </v-text-field>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="secondary" @click="dialog = false">İptal</v-btn>
        <v-btn color="success" @click="saveForm">Gönder</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

import {
  email,
  required
} from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";

import { validationMessages } from "@/validationMessages.js"

export default {

  mixins: [validationMixin],

  validations: {
    email:{required,email}
  },

  props: {
    showDialog: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialog: false,
      email: null
    };
  },
  methods:{
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
  },
};
</script>