<template>
  <Layout>
    <PageHeader
      :title="'Kullanıcı Başvuruları'"
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
import Results from "@/components/management/user-applicants/Results.vue";

export default {
  page: {
    title: "Kullanıcı Başvuruları",
    meta: [{ name: "description", content: "Kullanıcı Başvuruları" }],
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
      carouselItems: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
      breadcrumbArray: [
        {
          text: "Yönetim",
          active: false,
        },
        {
          text: "Kullanıcı Başvuruları",
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