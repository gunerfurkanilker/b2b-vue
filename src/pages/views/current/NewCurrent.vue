<template>
  <Layout>
    <PageHeader :title="'CARİ OLUŞTUR'" :items="breadcrumbArray"></PageHeader>
    <v-app>
      <div class="row">
      <div class="col-lg-12">
        <v-card>
          <v-card-text>
            <NewCurrentForm></NewCurrentForm>
          </v-card-text>  
        </v-card>
        
      </div>
    </div>
    </v-app>
    
  </Layout>
</template>

<script>
import Layout from "@/pages/layout/main.vue";
import PageHeader from "@/components/page-header";
import NewCurrentForm from "@/components/current/NewCurrentForm.vue"

export default {
  page: {
    title: "Cari Oluştur",
    meta: [{ name: "description", content: "Yeni Cari Oluştur" }],
  },
  components: {
    Layout,
    PageHeader,
    NewCurrentForm
  },
  data() {
    
    return {
      breadcrumbArray: [
        {
          text: "Cari",
          active: false,
        },
        {
          text: "Yeni Cari Ekle",
          active: true,
        },
      ],
      
    };
  },
  methods: {

  },
};
</script>