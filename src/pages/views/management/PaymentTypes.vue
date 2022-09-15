<template>
  <Layout>
    <PageHeader
      :title="'Ödeme Tipleri'"
      :items="breadcrumbArray"
    ></PageHeader>
    <v-app>
      <div class="row">
        <div class="col-lg-12">
          <Results></Results>
        </div>
      </div>
    </v-app>
  </Layout>
</template>

<script>
import Layout from "@/pages/layout/main.vue";
import PageHeader from "@/components/page-header";
import Results from "@/components/management/payment-types/Results.vue";

export default {
  page: {
    title: "Ödeme Tipleri",
    meta: [{ name: "description", content: "Ödeme Tipleri" }],
  },
  components: {
    Layout,
    PageHeader,
    Results,
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
          text: "Ödeme Tipleri",
          active: true,
        },
      ],

    };
  },
  methods: {
  },
};
</script>