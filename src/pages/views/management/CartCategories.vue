<template>
  <Layout>
    <PageHeader
      :title="'Sepet Kategorileri'"
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
import Results from "@/components/management/cart-categories/Results.vue";

export default {
  page: {
    title: "Sepet Kategorileri",
    meta: [{ name: "description", content: "Sepet Kategorileri" }],
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
          text: "Sepet Kategorileri",
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