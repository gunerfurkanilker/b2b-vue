<template>
  <v-card flat>
    <v-card-text>
      <div class="container-fluid">
        <h4 class="text-center pt-5">Genel Ayarlar</h4>
        <v-divider></v-divider>
        <div class="row">
          <div class="col-md-6">
            <label for="">Firma Logo</label>
            <v-file-input
              dense
              shaped
              filled
              accept="image/*"
              placeholder="Firma logosu için dosya seçin"
            ></v-file-input>
          </div>
          <div class="col-md-6">
            <label for="">Firma Adı</label>
            <v-text-field
              v-model="generalSettingsObject.companyName"
              filled
              dense
              shaped
            >
            </v-text-field>
          </div>
          <div class="col-md-6">
            <label for="">Firma Şehir</label>
            <v-text-field
              v-model="generalSettingsObject.companyCity"
              shaped
              filled
              dense
            >
            </v-text-field>
          </div>
          <div class="col-md-6">
            <label for="">Firma İlçe</label>
            <v-text-field
              v-model="generalSettingsObject.companyTown"
              shaped
              filled
              dense
            >
            </v-text-field>
          </div>
          <div class="col-md-12">
            <label for="">Firma Adres</label>
            <v-textarea
              v-model="generalSettingsObject.companyAddress"
              rows="2"
              shaped
              filled
              dense
            >
            </v-textarea>
          </div>
          <div class="col-md-4">
            <label for="">Firma Telefon Numarası</label>
            <v-text-field
              v-model="generalSettingsObject.companyPhoneNumber"
              shaped
              filled
              dense
            >
            </v-text-field>
          </div>
          <div class="col-md-4">
            <label for="">Firma E-Posta Adresi</label>
            <v-text-field
              v-model="generalSettingsObject.companyEmail"
              shaped
              filled
              dense
            >
            </v-text-field>
          </div>
          <div class="col-md-4">
            <label for="">Firma Web Sitesi</label>
            <v-text-field
              v-model="generalSettingsObject.companyWeb"
              shaped
              filled
              dense
            >
            </v-text-field>
          </div>
          <div class="col-md-6">
            <label for="">Siparişin Gideceği Mail</label>
            <v-text-field
              v-model="generalSettingsObject.orderEmailTo"
              shaped
              filled
              dense
            >
            </v-text-field>
          </div>
          <div class="col-md-6">
            <label for="">Siparişin Gideceği Mail (CC)</label>
            <v-text-field
              v-model="generalSettingsObject.orderEmailCc"
              shaped
              filled
              dense
            >
            </v-text-field>
          </div>
          <div class="col-md-4">
            <v-switch
              v-model="generalSettingsObject.customerOrderInfoEmail"
              dense
              inset
              label="Sipariş Bilgi Maili"
            ></v-switch>
          </div>
          <div class="col-md-4">
            <v-switch
              v-model="generalSettingsObject.customerOfferInfoEmail"
              dense
              inset
              label="Teklif Bilgi Maili"
            ></v-switch>
          </div>
          <div class="col-md-4">
            <v-switch
              v-model="generalSettingsObject.customerLockOrderProcess"
              dense
              inset
              label="ERP Kilitli Cari Sipariş"
            ></v-switch>
          </div>
          <div class="col-md-4">
            <v-switch
              v-model="generalSettingsObject.customerTicketInfoEmailToSalesPerson"
              dense
              inset
              label="Plasiyere Ticket Bilgi Maili"
            ></v-switch>
          </div>
          <div class="col-md-4">
            <label for="">Onaysız Tekliflere Filigran Yazısı</label>
            <v-autocomplete
              v-model="generalSettingsObject.unApproveOfferWaterMark"
              :items="['Onaysız', 'Onaylanmadı']"
              filled
              dense
              shaped
            >
            </v-autocomplete>
          </div>
          <div class="col-md-4">
            <label for="">Mail Arkaplan Rengi</label>
            <v-autocomplete
              v-model="generalSettingsObject.mailBgColor"
              :items="['Onaysız', 'Onaylanmadı']"
              filled
              dense
              shaped
            >
            </v-autocomplete>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-end">
            <v-btn
              color="success darken-2"
              depressed
              @click="saveGeneralSettings()"
              
              ><v-icon left>mdi-content-save</v-icon>Kaydet</v-btn
            >
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>


<script>
import { mapState, mapActions } from "vuex";

export default {
  props: {
    settingsProp: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapState("settings", ["generalSettings"]),
    ...mapState("auth", ["user"]),
  },
  mounted() {
    this.generalSettingsObject = Object.assign({}, this.generalSettings);
  },
  data() {
    return {
      generalSettingsObject: {},
     
    };
  },
  methods: {
    ...mapActions("settings", ["generalSettingsUpdate"]),
    async saveGeneralSettings() {
      
      let result = await this.generalSettingsUpdate({
        params: {
          userId: this.user.UserId,
        },
        body: {
          OrderEmailTo: this.generalSettingsObject.orderEmailTo,
          OrderEmailCc: this.generalSettingsObject.orderEmailCc,
          CompanyName: this.generalSettingsObject.companyName,
          CompanyLogo: this.generalSettingsObject.companyLogo,            
          CustomerOrderInfoEmail: this.generalSettingsObject.customerOrderInfoEmail,
          CustomerLockOrderProcess: this.generalSettingsObject.customerLockOrderProcess,
          CompanyCity: this.generalSettingsObject.companyCity,
          CompanyTown: this.generalSettingsObject.companyTown,
          CompanyAddress: this.generalSettingsObject.companyAddress,
          CompanyPhoneNumber: this.generalSettingsObject.companyPhoneNumber,
          CompanyEmail: this.generalSettingsObject.companyEmail,
          CompanyWeb: this.generalSettingsObject.companyWeb,
          CustomerTicketInfoEmailToSalesPerson: this.generalSettingsObject.customerTicketInfoEmailToSalesPerson,
          UnApproveOfferWaterMark: this.generalSettingsObject.unApproveOfferWaterMark,
        },
      });
      result;
    },
  },
  watch:{
    "settingsProp" : function(newVal) {
      this.generalSettingsObject = Object.assign({},newVal )
    }
  }
};
</script>