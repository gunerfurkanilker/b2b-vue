<template>
  <div>
    <Layout>
    <PageHeader :title="'Sipariş Listesi'" :items="breadcrumbArray"></PageHeader>
    <v-app>
      <div class="row">
      <div class="col-lg-12">
        <Results :listType="'siparisList'"></Results>
      </div>
    </div>
    </v-app>
    
  </Layout>
    
  </div>  
</template>

<script>
import Layout from "@/pages/layout/main.vue";
import PageHeader from "@/components/page-header";
import Results from "@/components/orders/Results.vue"


export default {
  components:{
    Layout,
    PageHeader,
    Results
  },
  data(){
    return {
      breadcrumbArray: [
        {
          text: "Siparişler",
          active: false,
        },
        {
          text: "Sipariş Listesi",
          active: true,
        },
      ],
    }
  },

  computed:{
    
  },
  methods:{
    
  }
}

</script>