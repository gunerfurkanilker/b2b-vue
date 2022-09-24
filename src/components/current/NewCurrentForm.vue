<template>
  <div class="container-xxl-fluid">
    <div class="row">
      <div class="col-lg-4">
        <v-text-field 
          v-model="current.currentName" 
          label="Cari Adı" 
          filled 
          dense 
          shaped
          :error-messages="validationMessages($v.current.currentName, 'Cari Kod')"
          prepend-inner-icon="mdi-format-letter-case"
          @input="$v.current.currentName.$touch()"
          @blur="$v.current.currentName.$touch()"
        > 
      </v-text-field>
      </div>
      <div class="col-lg-4">
        <v-text-field 
          v-model="current.address" 
          label="Adres" 
          filled 
          dense 
          shaped
          :error-messages="validationMessages($v.current.address, 'Adres')"
          prepend-inner-icon="mdi-map-marker"
          @input="$v.current.address.$touch()"
          @blur="$v.current.address.$touch()"
        > 
        </v-text-field>
      </div>
      <div class="col-lg-4">
        <v-text-field 
          v-model="current.city" 
          label="İl" 
          filled 
          dense 
          shaped
          :error-messages="validationMessages($v.current.city, 'İl')"
          prepend-inner-icon="mdi-city"
          @input="$v.current.city.$touch()"
          @blur="$v.current.city.$touch()"
          > 
        </v-text-field>
      </div>
      <div class="col-lg-4">
        <v-text-field 
          v-model="current.town" 
          label="İlçe" 
          filled 
          dense 
          shaped
          :error-messages="validationMessages($v.current.town, 'İlçe')"
          prepend-inner-icon="mdi-home-city"
          @input="$v.current.town.$touch()"
          @blur="$v.current.town.$touch()"
          > 
        </v-text-field>
      </div>
      <div class="col-lg-4">
        <v-text-field 
          v-model="current.phoneNumber" 
          label="Telefon" 
          filled 
          dense 
          shaped
          :error-messages="validationMessages($v.current.phoneNumber, 'Telefon')"
          prepend-inner-icon="mdi-phone"
          @input="$v.current.phoneNumber.$touch()"
          @blur="$v.current.phoneNumber.$touch()"
          > 
        </v-text-field>
      </div>
      <div class="col-lg-4">
        <v-text-field 
          v-model="current.email" 
          label="E-Posta" 
          filled 
          dense 
          shaped
          :error-messages="validationMessages($v.current.email, 'E-Posta')"
          prepend-inner-icon="mdi-email"
          @input="$v.current.email.$touch()"
          @blur="$v.current.email.$touch()"
          > 
        </v-text-field>
      </div>
      <div class="col-lg-4">
        <v-text-field 
          v-model="current.web" 
          label="Website" 
          filled 
          dense 
          shaped
          prepend-inner-icon="mdi-web-box"
          > 
        </v-text-field>
      </div>
      <div class="col-lg-4">
        <v-text-field
          v-model="current.taxOffice" 
          label="Vergi Dairesi" 
          filled 
          dense 
          shaped
          :error-messages="validationMessages($v.current.taxOffice, 'Vergi Dairesi')"
          prepend-inner-icon="mdi-office-building-cog-outline"
          @input="$v.current.taxOffice.$touch()"
          @blur="$v.current.taxOffice.$touch()"
          > 
        </v-text-field>
      </div>
      <div class="col-lg-4">
        <v-text-field 
          v-model="current.taxNumber" 
          label="Vergi No" 
          filled 
          dense 
          shaped
          :error-messages="validationMessages($v.current.taxNumber, 'Vergi No')"
          prepend-inner-icon="mdi-numeric"
          @input="$v.current.taxNumber.$touch()"
          @blur="$v.current.taxNumber.$touch()"
          > 
        </v-text-field>
      </div>
      <div class="col-lg-4">
        <v-text-field 
          v-model="current.trin" 
          label="T.C Kimlik No" 
          filled 
          dense 
          shaped
          :error-messages="validationMessages($v.current.trin, 'T.C Kimlik No')"
          prepend-inner-icon="mdi-numeric"
          @input="$v.current.trin.$touch()"
          @blur="$v.current.trin.$touch()"
          >
         </v-text-field>
      </div>
      <div class="col-lg-4">
        <v-text-field 
          v-model="current.deliveryAddress" 
          label="Teslimat Adresi" 
          filled 
          dense 
          shaped
          :error-messages="validationMessages($v.current.deliveryAddress, 'Teslimat Adresi')"
          prepend-inner-icon="mdi-location-enter"
          @input="$v.current.deliveryAddress.$touch()"
          @blur="$v.current.deliveryAddress.$touch()"
          >
        </v-text-field>
      </div>
      <div class="col-lg-2">
        <v-text-field 
          v-model="current.authorizeFirstName" 
          label="Yetkili Ad" 
          filled 
          dense 
          shaped
          :error-messages="validationMessages($v.current.authorizeFirstName, 'Yetkili Ad')"
          prepend-inner-icon="mdi-account-lock-open-outline"
          @input="$v.current.authorizeFirstName.$touch()"
          @blur="$v.current.authorizeFirstName.$touch()"
          > 
        </v-text-field>
      </div>
      <div class="col-lg-2">
        <v-text-field 
          v-model="current.authorizeLastName" 
          label="Yetkili Soyad" 
          filled 
          dense 
          shaped
          :error-messages="validationMessages($v.current.authorizeLastName, 'Yetkili Soyad')"
          prepend-inner-icon="mdi-account-lock-open-outline"
          @input="$v.current.authorizeLastName.$touch()"
          @blur="$v.current.authorizeLastName.$touch()"
          >
         </v-text-field>
      </div>
      <div class="col-lg-4">
        <v-text-field 
          v-model="current.authorizePhoneNumber" 
          label="Yetkili Telefon" 
          filled 
          dense 
          shaped
          :error-messages="validationMessages($v.current.authorizePhoneNumber, 'Yetkili Telefon')"
          prepend-inner-icon="mdi-phone"
          @input="$v.current.authorizePhoneNumber.$touch()"
          @blur="$v.current.authorizePhoneNumber.$touch()"
          >
        </v-text-field>
      </div>
      <div class="col-lg-4">
        <v-text-field 
          v-model="current.authorizeEmail" 
          label="Yetkili E-Posta" 
          filled 
          dense 
          shaped
          :error-messages="validationMessages($v.current.authorizeEmail, 'Yetkili E-Posta')"
          prepend-inner-icon="mdi-email"
          @input="$v.current.authorizeEmail.$touch()"
          @blur="$v.current.authorizeEmail.$touch()"
          >
        </v-text-field>
      </div>
      <div class="col-lg-4">
        <v-text-field 
          v-model="current.expiry" 
          label="Vade Gün" 
          filled 
          dense 
          shaped
          :error-messages="validationMessages($v.current.expiry, 'Vade Gün')"
          prepend-inner-icon="mdi-clock-end"
          @input="$v.current.expiry.$touch()"
          @blur="$v.current.expiry.$touch()"
          >
         </v-text-field>
      </div>
      <div class="col-lg-4">
        <v-text-field 
          v-model="current.riskLimit" 
          label="Risk Limit" 
          filled 
          dense 
          shaped
          :error-messages="validationMessages($v.current.riskLimit, 'Vade Gün')"
          prepend-inner-icon="mdi-arrow-top-right"
          @input="$v.current.riskLimit.$touch()"
          @blur="$v.current.riskLimit.$touch()"
          >
         </v-text-field>
      </div>
      <div class="col-lg-4">
        <v-autocomplete 
          v-model="current.paymentType" 
          label="Ödeme Tipi" 
          filled 
          dense 
          shaped
          :error-messages="validationMessages($v.current.paymentType, 'Vade Gün')"
          prepend-inner-icon="mdi-credit-card-outline"
          @input="$v.current.paymentType.$touch()"
          @blur="$v.current.paymentType.$touch()"
          >
        </v-autocomplete>
      </div>
      <div class="col-lg-4">
        <v-autocomplete 
          v-model="current.salesPersonCode"  
          label="Plasiyer Kodu" 
          filled 
          dense 
          shaped
          :error-messages="validationMessages($v.current.salesPersonCode, 'Vade Gün')"
          prepend-inner-icon="mdi-account-star-outline"
          @input="$v.current.salesPersonCode.$touch()"
          @blur="$v.current.salesPersonCode.$touch()"
          >
        </v-autocomplete>
      </div>
      <div class="col-lg-12 text-end">
        <v-btn flat depressed ripple color="primary darken-2">OLUŞTUR</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { required,email,maxLength,minLength } from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";
import { validationMessages } from "@/validationMessages.js";

export default {
  mixins: [validationMixin],

  validations() {
    //const self = this;
    return {
      current: {
        currentName: { required },
        address: { required },
        taxOffice: { required },
        taxNumber: { required },
        city: { required },
        town: { required },
        phoneNumber: { required },
        email: { required,email },
        trin: { 
          required,
          maxLength: maxLength(10),
          minLength: minLength(10), 
        },
        deliveryAddress: { required,email },
        authorizeFirstName: { required },
        authorizeLastName: { required },
        authorizePhoneNumber: { required },
        authorizeEmail: { required,email },
        expiry: { required },
        riskLimit: { required },
        paymentType: { required },
        salesPersonCode: { required },
      },
    };
  },
  data() {
    return {
      current: {
        currentName: "EMRE ÖZKAN",
        address: "TEST ADRES",
        taxOffice: "MESİR",
        taxNumber: "3100577473",
        trin: "54607010542",
        deliveryAddress: "YOK",
        authorizeFirstName: "EMRE",
        authorizeLastName: "ÖZKAN",
        authorizePhoneNumber: "05326324333",
        authorizeEmail: "emre.ozkan@ofiscom.net",
        phoneNumber: "05326324333",
        faxNumber: null,
        email: "emre.ozkan@ofiscom.net",
        conditionCode: "M2265",
        expiry: 90,
        riskLimit: 150000,
        paymentType: 1,
        city: "MANİSA",
        town: "ŞEHZADELER",
        salesPersonCode: "1",
        web: "https://www.ofiscom.net",
      },
    };
  },
  methods: {
    validationMessages,
  },
};
</script>