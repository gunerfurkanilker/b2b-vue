<template>
  <Layout>
    <PageHeader :title="'Ürün Arama'" :items="breadcrumbArray"></PageHeader>
    <v-app>
      <div class="row">
        <div class="col-lg-3">
          <Filters></Filters>
        </div>
        <div class="col-lg-9">
          <Results></Results>
        </div>
      </div>
    </v-app>
  </Layout>
</template>

<script>
import Layout from "@/pages/layout/main.vue";
import PageHeader from "@/components/page-header";
import Filters from "@/components/product-search/Filters.vue";
import Results from "@/components/product-search/Results.vue";

export default {
  page: {
    title: "Ürün Arama",
    meta: [{ name: "description", content: "Sepet" }],
  },
  components: {
    Layout,
    PageHeader,
    Filters,
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
          text: "Ürün Arama",
          active: true,
        },
      ],
      sliderPrice: 700,
      itemsCategories: [
        {
          id: 1,
          name: "Tüm Kategoriler",
          children: [
            { id: 2, name: "Kategoriler 1" },
            { id: 3, name: "Kategoriler 2" },
            { id: 4, name: "Kategoriler 3" },
          ],
        },
      ],
      itemsBrands: [
        {
          id: 1,
          name: "Tüm Markalar :",
          children: [
            { id: 2, name: "Marka 1" },
            { id: 3, name: "Marka 2" },
            { id: 4, name: "Marka 3" },
            { id: 5, name: "Marka 4" },
            { id: 6, name: "Marka 5" },
            { id: 7, name: "Marka 6" },
            { id: 8, name: "Marka 7" },
            { id: 9, name: "Marka 8" },
          ],
        },
      ],
      clothsData: [
        {
          id: 1,
          product: require("@/assets/images/product/img-1.png"),
          discount: 10,
          name: "Half sleeve T-shirt",
          oldprice: 450,
          newprice: 405,
          feature: [
            "Fit Type: Regular Fit",
            "highest quality fabric",
            "Suitable for all weather condition",
            "Excellent Washing and Light Fastness",
          ],
          specification: [
            {
              key: "size",
              value: "M",
            },
            {
              key: "color",
              value: "Red",
            },
          ],
          images: [
            require("@/assets/images/product/img-1.png"),
            require("@/assets/images/product/img-5.png"),
            require("@/assets/images/product/img-3.png"),
            require("@/assets/images/product/img-6.png"),
          ],
          colorVariant: [
            {
              key: "Red",
              value: require("@/assets/images/product/img-1.png"),
            },
            {
              key: "Black",
              value: require("@/assets/images/product/img-1.png"),
            },
          ],
        },
        {
          id: 2,
          product: require("@/assets/images/product/img-2.png"),
          name: "Light blue T-shirt",
          discount: 20,
          oldprice: 225,
          newprice: 175,
          feature: [
            "Fit Type: Regular Fit",
            "highest quality fabric",
            "Suitable for all weather condition",
            "Excellent Washing and Light Fastness",
          ],
          specification: [
            {
              key: "size",
              value: "M",
            },
            {
              key: "Color",
              value: "Light Blue",
            },
          ],
          images: [
            require("@/assets/images/product/img-2.png"),
            require("@/assets/images/product/img-1.png"),
            require("@/assets/images/product/img-5.png"),
            require("@/assets/images/product/img-3.png"),
          ],
          colorVariant: [
            {
              key: "Red",
              value: require("@/assets/images/product/img-2.png"),
            },
            {
              key: "Yellow",
              value: require("@/assets/images/product/img-2.png"),
            },
            {
              key: "Green",
              value: require("@/assets/images/product/img-2.png"),
            },
          ],
        },
        {
          id: 3,
          product: require("@/assets/images/product/img-3.png"),
          discount: 14,
          name: "Black Color T-shirt",
          oldprice: 177,
          newprice: 152,
          feature: [
            "Fit Type: Regular Fit",
            "highest quality fabric",
            "Suitable for all weather condition",
            "Excellent Washing and Light Fastness",
          ],
          specification: [
            {
              key: "size",
              value: "M",
            },
            {
              key: "color",
              value: "Black",
            },
          ],
          images: [
            require("@/assets/images/product/img-3.png"),
            require("@/assets/images/product/img-1.png"),
            require("@/assets/images/product/img-5.png"),
            require("@/assets/images/product/img-2.png"),
          ],
          colorVariant: [
            {
              key: "Black",
              value: require("@/assets/images/product/img-3.png"),
            },
            {
              key: "Yellow",
              value: require("@/assets/images/product/img-3.png"),
            },
          ],
        },
        {
          id: 4,
          product: require("@/assets/images/product/img-4.png"),
          name: "Hoodie (Blue)",
          discount: 5,
          oldprice: 150,
          newprice: 145,
          feature: [
            "Fit Type: Regular Fit",
            "highest quality fabric",
            "Suitable for all weather condition",
            "Excellent Washing and Light Fastness",
          ],
          specification: [
            {
              key: "size",
              value: "M",
            },
            {
              key: "color",
              value: "Blue",
            },
          ],
          images: [
            require("@/assets/images/product/img-4.png"),
            require("@/assets/images/product/img-4.png"),
            require("@/assets/images/product/img-4.png"),
            require("@/assets/images/product/img-4.png"),
          ],
          colorVariant: [
            {
              key: "Blue",
              value: require("@/assets/images/product/img-4.png"),
            },
            {
              key: "Pink",
              value: require("@/assets/images/product/img-4.png"),
            },
          ],
        },
        {
          id: 5,
          product: require("@/assets/images/product/img-5.png"),
          discount: 14,
          name: "Half sleeve T-Shirt",
          oldprice: 177,
          newprice: 152,
          feature: [
            "Fit Type: Regular Fit",
            "highest quality fabric",
            "Suitable for all weather condition",
            "Excellent Washing and Light Fastness",
          ],
          specification: [
            {
              key: "size",
              value: "M",
            },
            {
              key: "color",
              value: "Pink",
            },
          ],
          images: [
            require("@/assets/images/product/img-5.png"),
            require("@/assets/images/product/img-1.png"),
            require("@/assets/images/product/img-2.png"),
            require("@/assets/images/product/img-3.png"),
          ],
          colorVariant: [
            {
              key: "Pink",
              value: require("@/assets/images/product/img-5.png"),
            },
            {
              key: "Yellow",
              value: require("@/assets/images/product/img-5.png"),
            },
          ],
        },
        {
          id: 6,
          product: require("@/assets/images/product/img-6.png"),
          discount: 22,
          name: "Green color T-shirt",
          oldprice: 240,
          newprice: 225,
          feature: [
            "Fit Type: Regular Fit",
            "highest quality fabric",
            "Suitable for all weather condition",
            "Excellent Washing and Light Fastness",
          ],
          specification: [
            {
              key: "size",
              value: "M",
            },
            {
              key: "color",
              value: "Green",
            },
          ],
          images: [
            require("@/assets/images/product/img-6.png"),
            require("@/assets/images/product/img-3.png"),
            require("@/assets/images/product/img-2.png"),
            require("@/assets/images/product/img-1.png"),
          ],
          colorVariant: [
            {
              key: "Black",
              value: require("@/assets/images/product/img-6.png"),
            },
            {
              key: "Yellow",
              value: require("@/assets/images/product/img-6.png"),
            },
          ],
        },
      ],
    };
  },
  methods: {
  },
};
</script>