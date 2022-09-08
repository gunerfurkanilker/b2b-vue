<template>
  <Layout>
    <PageHeader :title="'Ayarlar'" :items="breadcrumbArray"></PageHeader>
    <v-app>
      <div class="row">
        <div class="col-lg-12 pb-5 mb-5">
          <v-alert
            outlined
            type="warning"
            dense
            border="left"
            color="danger darken-3"
            dark
          >
            Uyarı! Burada yapacağınız değişiklikler sistemde ciddi bozulmalara
            sebep olabilir. Bilmediğiniz durumlar için mutlaka sistem
            yöneticisine danışınız. Bilgi kutucuklarının üzerine mouse ile
            geldiğinizde, size ilgili alanla ilgili bilgiyi gösterecektir.
          </v-alert>
          <v-tabs icons-and-text mobile-breakpoint="lg" grow>
            <v-tab>
              ERP Ayarları
              <v-icon> mdi-database </v-icon>
            </v-tab>
            <v-tab>
              Genel Ayarlar
              <v-icon> mdi-wrench </v-icon>
            </v-tab>
            <v-tab>
              Mail Ayarları
              <v-icon> mdi-email </v-icon>
            </v-tab>

            <v-tab-item>
              <ErpSettings v-if="!settingsLoading" :settingsProp="erpSettingsProp"></ErpSettings>
              <div v-else class="text-center">
                <b-spinner
                  variant="indigo"
                  size="lg"
                  label="Lütfen Bekleyin..."
                ></b-spinner>
              </div>
            </v-tab-item>
            <v-tab-item>
              <GeneralSettings v-if="!settingsLoading"
                :settingsProp="generalSettingsProp"
              ></GeneralSettings>
              <div v-else class="text-center">
                <b-spinner
                  variant="indigo"
                  size="lg"
                  label="Lütfen Bekleyin..."
                ></b-spinner>
              </div>
            </v-tab-item>
            <v-tab-item>
              <MailSettings v-if="!settingsLoading" :settingsProp="mailSettingsProp"></MailSettings>
              <div v-else class="text-center">
                <b-spinner
                  variant="indigo"
                  size="lg"
                  label="Lütfen Bekleyin..."
                ></b-spinner>
              </div>
            </v-tab-item>
          </v-tabs>
        </div>
      </div>
    </v-app>
  </Layout>
</template>

<script>
import Layout from "@/pages/layout/main.vue";
import PageHeader from "@/components/page-header";
import ErpSettings from "@/components/management/settings/ErpSettings.vue";
import GeneralSettings from "@/components/management/settings/GeneralSettings.vue";
import MailSettings from "@/components/management/settings/MailSettings.vue";

import { mapActions, mapState } from "vuex";

export default {
  page: {
    title: "Ayarlar",
    meta: [{ name: "description", content: "Ayarlar" }],
  },
  components: {
    Layout,
    PageHeader,
    ErpSettings,
    GeneralSettings,
    MailSettings,
  },
  computed: {
    ...mapState("settings", [
      "erpSettings",
      "generalSettings",
      "mailSettings",
      "settingsLoading",
    ]),
  },
  mounted() {
    this.fetchSettings({
      params: {},
      body: {},
    });
  },
  data() {
    return {
      erpSettingsProp: {},
      generalSettingsProp: {},
      mailSettingsProp: {},
      breadcrumbArray: [
        {
          text: "Yönetim",
          active: false,
        },
        {
          text: "Ayarlar",
          active: true,
        },
      ],
    };
  },
  methods: {
    async setSettings() {
      let result = await this.fetchSettings({ params: {}, body: {} });
      console.log(result);
      this.erpSettingsProp = Object.assign({}, this.erpSettings);
      this.generalSettingsProp = Object.assign({}, this.generalSettings);
      this.mailSettingsProp = Object.assign({}, this.mailSettings);
    },
    clickLabel(item) {
      console.log("Click", item);
    },
    ...mapActions("settings", ["fetchSettings"]),
  },
};
</script>