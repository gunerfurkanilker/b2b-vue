<template>
  <div class="card">
          <div class="card-body" style="position:relative">
            <h4 class="card-title mb-4">Filtre</h4>
            <div>
              <h5 class="font-size-14 mb-3">Kategoriler</h5>
              <v-treeview
                v-model="treeCategories"
                :items="itemsCategories"
                selectable
                item-key="name"
              >
                <template v-slot:label="{ item }">
                  <a @click="openDialog(item)">{{ item.name }}</a>
                </template>
              </v-treeview>
            </div>
            <div class="mt-4 pt-3">
              <h5 class="font-size-14 mb-3">Markalar</h5>
              <v-treeview
                v-model="treeBrands"
                :items="itemsBrands"
                selectable
                item-key="name"
              >
                <template v-slot:label="{ item }">
                  <a @click="openDialog(item)">{{ item.name }}</a>
                </template>
              </v-treeview>
            </div>
            <div class="mt-4 pt-3">
              <h5 class="font-size-14 mb-3">Fiyat</h5>
              <vue-slide-bar
                v-model="sliderPrice"
                :min="0"
                :max="1000"
              >   
              </vue-slide-bar>
              <div class="d-flex mt-3 ">
                <div class="text-muted">
                  0 TL
                </div>
                <div class="text-muted ms-auto">
                  {{ sliderPrice + ' TL' }}
                </div>
                
              </div>
            </div>
            <div class="mt-4 pt-3 text-center">
              <v-btn block color="success"><v-icon left>mdi-filter</v-icon>Filtrele</v-btn>
            </div>
              
          </div>
        </div>
</template>

<script>
import VueSlideBar from "vue-slide-bar";

export default {
  components: {
    VueSlideBar,
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
          text: "Products",
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
    clickLabel(item) {
      console.log("Click", item);
    },
  },
};
</script>