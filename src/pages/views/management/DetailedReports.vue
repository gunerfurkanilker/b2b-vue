<template>
  <Layout>
    <PageHeader
      :title="'Detaylı Raporlama'"
      :items="breadcrumbArray"
    ></PageHeader>
    <v-app>
      <div class="row">
        <div class="col-lg-12">
          <ReportContainer></ReportContainer>
        </div>
      </div>
    </v-app>
  </Layout>
</template>

<script>
import Layout from "@/pages/layout/main.vue";
import PageHeader from "@/components/page-header";
import ReportContainer from "@/components/management/detailed-reports/ReportContainer.vue";

export default {
  page: {
    title: "Detaylı Raporlama",
    meta: [{ name: "description", content: "Detaylı Raporlama" }],
  },
  components: {
    Layout,
    PageHeader,
    ReportContainer,
  },
  data() {
    return {
      currentPage: 1,
      treeCategories: [],
      treeBrands: [],
      breadcrumbArray: [
        {
          text: "Yönetim",
          active: false,
        },
        {
          text: "Detaylı Raporlama",
          active: true,
        },
      ],

    };
  },
  methods: {
  },
};
</script>