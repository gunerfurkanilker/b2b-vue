<template>
  <Layout>
    <PageHeader :title="'Ayarlar'" :items="breadcrumbArray"></PageHeader>
    <v-app>
      <div class="row">
        <div class="col-lg-12 pb-5 mb-5">
          <v-tabs grow>
            <v-tab>
              <v-icon left> mdi-database </v-icon>
              Banka Hesapları
            </v-tab>
            <v-tab>
              <v-icon left> mdi-wrench </v-icon>
              Banka Taksit Oranları
            </v-tab>
            <v-tab>
              <v-icon left> mdi-email </v-icon>
              Banka Parametreleri
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
    title: "Ayarlar",
    meta: [{ name: "description", content: "Ayarlar" }],
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
          text: "Ayarlar",
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