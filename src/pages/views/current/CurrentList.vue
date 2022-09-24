<template>
  <Layout>
    <PageHeader :title="'Cari Listesi'" :items="breadcrumbArray"></PageHeader>
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
import Results from "@/components/current/Results.vue"

export default {
  page: {
    title: "Cari Listesi",
    meta: [{ name: "description", content: "Cari Listesi" }],
  },
  components: {
    Layout,
    PageHeader,
    Results
  },
  data() {
    
    return {
      currentPage: 1,
      breadcrumbArray: [
        {
          text: "Cari",
          active: false,
        },
        {
          text: "Cari Listesi",
          active: true,
        },
      ],
      
    };
  },
  methods: {

  },
};
</script>