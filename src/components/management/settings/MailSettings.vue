<template>
  <v-card flat>
    <v-card-text>
      <div class="container-fluid">
        <h4 class="text-center pt-5">Mail Ayarları</h4>
        <v-divider></v-divider>
        <div class="row">
          <div class="col-md-6">
            <label for="">E-Mail Gönderen Adı</label>
            <v-text-field
              v-model="mailSettingsObject.emailSenderName"
              filled
              dense
              shaped
            >
            </v-text-field>
          </div>
          <div class="col-md-6">
            <label for="">E-Mail Adresi</label>
            <v-text-field
              v-model="mailSettingsObject.email"
              filled
              dense
              shaped
            >
            </v-text-field>
          </div>
          <div class="col-md-6">
            <label for="">E-Mail Şifre</label>
            <v-text-field
              v-model="mailSettingsObject.emailPassword"
              shaped
              filled
              dense
            >
            </v-text-field>
          </div>
          <div class="col-md-6">
            <label for="">E-Mail Port</label>
            <v-text-field
              v-model="mailSettingsObject.emailPort"
              shaped
              filled
              dense
            >
            </v-text-field>
          </div>
          <div class="col-md-4">
            <label for="">E-Mail Host</label>
            <v-text-field
              v-model="mailSettingsObject.emailHost"
              shaped
              filled
              dense
            >
            </v-text-field>
          </div>
          <div class="col-md-4 mx-auto my-auto">
            <v-switch
              v-model="mailSettingsObject.emailSSL"
              dense
              inset
              label="E-Mail SSL"
            ></v-switch>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-end">
            <v-btn
              color="success darken-2"
              depressed
              @click="saveMailSettings()"
             
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
    ...mapState("settings", ["mailSettings"]),
    ...mapState("auth", ["user"]),
  },
  mounted() {
    this.mailSettingsObject = Object.assign({}, this.mailSettings);
  },
  data() {
    return {
      mailSettingsObject: {},
      
    };
  },
  methods: {
    ...mapActions("settings", ["mailSettingsUpdate"]),
    async saveMailSettings() {
     
      await this.mailSettingsUpdate({
        params: {
          userId: this.user.UserId,
        },
        body: {
          emailSenderName: this.mailSettingsObject.emailSenderName,
          email: this.mailSettingsObject.email,
          emailPassword: this.mailSettingsObject.emailPassword,
          emailPort: this.mailSettingsObject.emailPort,
          emailHost: this.mailSettingsObject.emailHost,
          emailSSL: this.mailSettingsObject.emailSSL,
        },
      });
      
    },
  },
  watch:{
    "settingsProp" : function(newVal) {
      this.mailSettingsObject = Object.assign({},newVal )
    }
  }
};
</script>