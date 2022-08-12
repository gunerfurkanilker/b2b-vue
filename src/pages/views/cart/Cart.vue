<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <v-app>
      <div class="row">
        <div class="col-xl-8">
          <CartTable></CartTable>
        </div>
        <div class="col-xl-4">
          <CartSummary></CartSummary>
          <!-- end card -->
        </div>
      </div>
    </v-app>

    <!-- end row -->
  </Layout>
</template>

<script>
import Layout from "@/pages/layout/main.vue";
import PageHeader from "@/components/page-header";
import CartTable from "../../../components/cart/CartTable.vue";
import CartSummary from "../../../components/cart/CartSummary.vue";

/**
 * Product-cart component
 */
export default {
  page: {
    title: "Sepet",
    meta: [{ name: "description", content: "Sepet" }],
  },
  components: { Layout, PageHeader, CartTable, CartSummary },
  computed: {
    
  },
  data() {
    return {
      title: "Sepet",
      items: [
        {
          text: "Sepet",
          active: true,
        },
      ],
    };
  },
  methods: {
    
  },
};
</script>