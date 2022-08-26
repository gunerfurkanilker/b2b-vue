<template>
  <Layout>
    <PageHeader :title="'Ayarlar'" :items="breadcrumbArray"></PageHeader>
    <v-app>
      <div class="row">
        <div class="col-lg-12 pb-5 mb-5">
          <v-tabs icons-and-text mobile-breakpoint="lg" grow>
            <v-tab @click="breadcrumbArray[2].text = 'Banka Hesapları'">
            Banka Hesapları
            <v-icon> mdi-bank </v-icon> 
            </v-tab>
            <v-tab @click="breadcrumbArray[2].text = 'Banka Taksit Oranları'">
              Banka Taksit Oranları
              <v-icon> mdi-numeric </v-icon>
            </v-tab>
            <v-tab @click="breadcrumbArray[2].text = 'Banka Parametreleri'">
              Banka Parametreleri
              <v-icon left> mdi-lastpass </v-icon>
            </v-tab>

            <v-tab-item class="pt-5">
              <BankAccounts></BankAccounts>
            </v-tab-item>
            <v-tab-item class="pt-5">
              <BankInstallments></BankInstallments>
            </v-tab-item>
            <v-tab-item class="pt-5">
              <BankParamters></BankParamters>
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
import BankAccounts from "@/components/management/payment-settings/BankAccounts.vue"
import BankInstallments from "@/components/management/payment-settings/BankInstallments.vue"
import BankParamters from "@/components/management/payment-settings/BankParameters.vue"

export default {
  page: {
    title: "Pos Yönetimi",
    meta: [{ name: "description", content: "Pos Yönetimi" }],
  },
  components: {
    Layout,
    PageHeader,
    BankAccounts,
    BankInstallments,
    BankParamters
  },
  data() {
    return {
      breadcrumbArray: [
        {
          text: "Yönetim",
          active: false,
        },
        {
          text: "Pos Yönetimi",
          active: false,
        },
        {
          text: "Banka Hesapları",
          active: true,
        },
      ],
    };
  },
  methods: {
    clickLabel(item) {
      console.log("Click", item);
    },
  },
};
</script>