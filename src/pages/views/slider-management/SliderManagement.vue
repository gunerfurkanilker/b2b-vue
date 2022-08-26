<template>
  <Layout>
    <PageHeader
      :title="'Slider Yönetimi'"
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
import Results from "@/components/management/slider-management/Results.vue";

export default {
  page: {
    title: "Slider Yönetimi",
    meta: [{ name: "description", content: "Slider Yönetimi" }],
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
          text: "Slider Yönetimi",
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