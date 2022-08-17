<template>
 <v-dialog v-model="dialog" max-width="900" persistent style="overflow:hidden !important">
  
    <v-card >
      <v-card-title>
        {{ processType == 'new' ? 'Kullanıcı Ekle' : 'Kullanıcı Düzenle' }}
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
                v-model="user.name"
                label="Ad"
                :error-messages="validationMessages($v.user.name,'Ad')"
                prepend-inner-icon="mdi-account"
                @input="$v.user.name.$touch()"
                @blur="$v.user.name.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-text-field
                v-model="user.surname"
                label="Soyad"
                :error-messages="validationMessages($v.user.surname,'Soyad')"
                prepend-inner-icon="mdi-account"
                @input="$v.user.surname.$touch()"
                @blur="$v.user.surname.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-text-field
                v-model="user.email"
                label="E-Posta"
                :error-messages="validationMessages($v.user.email,'E-Posta')"
                prepend-inner-icon="mdi-email"
                @input="$v.user.email.$touch()"
                @blur="$v.user.email.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-text-field
                v-model="user.username"
                label="Kullanıcı Adı"
                :error-messages="validationMessages($v.user.username,'Kullanıcı Adı')"
                prepend-inner-icon="mdi-account-arrow-right"
                @input="$v.user.email.$touch()"
                @blur="$v.user.email.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6" v-if="processType == 'new'">
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
            <div class="col-lg-6">
              <v-text-field
                v-model="user.tckn"
                label="T.C Kimlik No"
                :error-messages="validationMessages($v.user.tckn,'T.C Kimlik No')"
                prepend-inner-icon="mdi-card-account-details"
                @input="$v.user.tckn.$touch()"
                @blur="$v.user.tckn.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-text-field
                v-model="user.phone"
                label="Telefon"
                :error-messages="validationMessages($v.user.phone,'Telefon')"
                prepend-inner-icon="mdi-phone"
                placeholder="5xxxxxxxxx"
                @input="$v.user.phone.$touch()"
                @blur="$v.user.phone.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-text-field
                v-model="user.current_code"
                label="Cari Kod"
                prepend-inner-icon="mdi-cog"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-text-field
                v-model="user.salesman_code"
                label="Plasiyer Kod"
                prepend-inner-icon="mdi-cog"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-autocomplete
                v-model="user.rolegrup"
                label="Role Grup"
                :error-messages="validationMessages($v.user.rolegrup,'Role Grup')"
                @input="$v.user.rolegrup.$touch()"
                @blur="$v.user.rolegrup.$touch()"
                prepend-inner-icon="mdi-account-star"
                :items="roleGroupList"
              ></v-autocomplete>
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
  required,
  maxLength,
  minLength,
  email,
} from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";
import { validationMessages } from "@/validationMessages.js"
//import simplebar from "simplebar-vue";
import { mapActions } from "vuex";


export default {
  mixins: [validationMixin],

  validations() {
    const self = this;
    return {
      user: {
      name: { required},
      surname: { required },
      email: { required, email },
      username: { required },
      password: self.processType == 'new' ? { required } : {},
      tckn: { required, maxLength: maxLength(11), minLength: minLength(11) },
      phone: { required, maxLength: maxLength(10), minLength: minLength(10) },
      rolegrup: { required },
    },
    }
    
  },

  components: {
  //  simplebar
  },

  props: {
    showDialog: {
      type: Boolean,
      default: false,
    },
    userProp: {
      type: Object,
      default: () => ({
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
      roleGroupList: ["Yönetici", "Plasiyer", "Müşteri"],
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
        status: true,
      },
    };
  },
  methods: {
    ...mapActions("user",["saveUserToUserList"]),
    validationMessages,
    closeDialog(){
      this.dialog = false;
      this.$v.$reset();
    },
    saveForm(){
      this.$v.$touch();
      console.log(this.$v);
      if(!this.$v.$invalid){
        this.saveUserToUserList(this.user);
        this.dialog = false;
      }
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