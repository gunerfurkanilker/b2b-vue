<template>
  <v-dialog
    v-model="dialog"
    max-width="900"
    persistent
    style="overflow: hidden !important"
  >
    <v-card>
      <v-card-title>
        {{ processType == "new" ? "Referans Ekle" : "Referans Düzenle" }}
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
                v-model="editReferance.firstName"
                label="Ad"
                :error-messages="
                  validationMessages($v.editReferance.firstName, 'Ad')
                "
                prepend-inner-icon="mdi-account"
                @input="$v.editReferance.firstName.$touch()"
                @blur="$v.editReferance.firstName.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-text-field
                v-model="editReferance.lastName"
                label="Soyad"
                :error-messages="
                  validationMessages($v.editReferance.lastName, 'Soyad')
                "
                prepend-inner-icon="mdi-account"
                @input="$v.editReferance.lastName.$touch()"
                @blur="$v.editReferance.lastName.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-text-field
                v-model="editReferance.email"
                label="E-Posta"
                :error-messages="
                  validationMessages($v.editReferance.email, 'E-Posta')
                "
                prepend-inner-icon="mdi-email"
                @input="$v.editReferance.email.$touch()"
                @blur="$v.editReferance.email.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-text-field
                v-model="editReferance.phoneNumber"
                label="Telefon"
                :error-messages="
                  validationMessages($v.editReferance.phoneNumber, 'Telefon')
                "
                prepend-inner-icon="mdi-phone"
                placeholder="5xxxxxxxxx"
                @input="$v.editReferance.phoneNumber.$touch()"
                @blur="$v.editReferance.phoneNumber.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-text-field
                v-model="editReferance.erpCode"
                label="Cari Kod"
                :error-messages="
                  validationMessages($v.editReferance.erpCode, 'Cari Kod')
                "
                prepend-inner-icon="mdi-cog"
                @input="$v.editReferance.erpCode.$touch()"
                @blur="$v.editReferance.erpCode.$touch()"
              ></v-text-field>
            </div>
            <div class="col-lg-6">
              <v-text-field
                v-model="editReferance.referanceIpAddress"
                label="IP Adres"
                :error-messages="
                  validationMessages($v.editReferance.referanceIpAddress, 'IP Adres')
                "
                prepend-inner-icon="mdi-ip"
                @input="$v.editReferance.referanceIpAddress.$touch()"
                @blur="$v.editReferance.referanceIpAddress.$touch()"
              ></v-text-field>
            </div>
            
          </div>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="secondary" @click="closeDialog()" >İptal</v-btn>
        <v-btn text color="success" @click="saveForm" >Kaydet</v-btn>
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
import { validationMessages } from "@/validationMessages.js";
//import simplebar from "simplebar-vue";
import { mapActions, mapState } from "vuex";

export default {
  mixins: [validationMixin],

  validations() {
    return {
      editReferance: {
        firstName: { required },
        lastName: { required },
        email: { required, email },
        erpCode: { required },
        referanceIpAddress: { required },
        phoneNumber: {
          required,
          maxLength: maxLength(10),
          minLength: minLength(10),
        },
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
    userReferanceProp: {
      type: Object,
      default: () => ({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        erpCode: "",
        referenceIpAddress: ""
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
  mounted() {
    
  },
  data() {
    return {
      dialog: false,
      editReferance: {
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          erpCode: "",
          referenceIpAddress: ""
      }
    };
  },
  methods: {
    ...mapActions("user", [
      "userReferanceAdd",
      "userReferanceUpdate",
      "fetchSingleUserReferance"
    ]),
    validationMessages,
    closeDialog() {
      this.dialog = false;
      this.$v.$reset();
    },
    async saveForm() {
      this.$v.$touch();
      console.log("VETTEL",this.$v.$invalid)
      if (!this.$v.$invalid) {
        let requestBody = {
          
          firstName: this.editReferance.firstName,
          lastName: this.editReferance.lastName,
          email: this.editReferance.email,
          phoneNumber: this.editReferance.phoneNumber,
          erpCode: this.editReferance.erpCode,
          referenceIpAddress: this.editReferance.referenceIpAddress
        };
        if(this.processType == 'new')
        {
          let result = await this.userReferanceAdd({
            body:requestBody
          })
          if(result.data.success)
          {
            this.dialog = false;
          }
          
        }
        else
        {
          requestBody.Id = this.editReferance.id
          let result = await this.userReferanceUpdate({
            body:requestBody
          });
          if(result.data.success)
          {
            this.dialog = false;
          }
          
            
        }
  
      }
    }
  },
  watch: {
    dialog: async function (newVal) {
      if (!newVal) {
        this.editReferance = {
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          erpCode: "",
          referenceIpAddress: ""
        };
      }

      this.$emit("dialogChange", newVal);
    },
    showDialog: function (newVal) {
      this.dialog = newVal;
    },
    userReferanceProp: async function (newVal) {
      if (this.processType == "edit"){
        await this.getUserReferance(newVal.id)
      } 
    },
  },
};
</script>