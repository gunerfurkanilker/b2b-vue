<template>
  <Layout>
    <PageHeader
      :title="'Stok Kategorileri'"
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
import Results from "@/components/management/stock-categories/Results.vue";

export default {
  page: {
    title: "Stok Kategorileri",
    meta: [{ name: "description", content: "Stok Kategorileri" }],
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
          text: "Stok Kategorileri",
          active: true,
        },
      ],

    };
  },
  methods: {
  },
};
</script>