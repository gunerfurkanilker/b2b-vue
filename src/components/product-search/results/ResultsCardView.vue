<template>
  <div class="row">
    <div v-for="data in listDatas" :key="data.id" class="col-xl-4 col-sm-6">
      <div class="card">
        <div class="card-title pt-2 text-end">
          <div class="d-flex justify-content-end">
            <div
            class="d-flex"
              v-if="cartList.filter((e) => e.stock_code === data.stock_code).length > 0"
            >
              <label for="" class="me-2 my-auto d-inline">Miktar</label>
              <input
                type="number"
                :value="
                  cartList.find((e) => e.stock_code == data.stock_code).quantity
                "
                :min="1"
                class="form-control"
                style="width: 60px"
                @change="
                  (e) =>
                    changeQuantityOfProduct({
                      product: data,
                      definiteVal: parseInt(e.target.value),
                    })
                "
              />
              <v-tooltip
                bottom
                
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    v-on="on"
                    icon
                    color="danger"
                    @click="removeProductFromCartList(data)"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </template>
                <span>Sepetten Çıkar</span>
              </v-tooltip>
            </div>

            <v-tooltip
              top
              v-if="
                cartList.filter((e) => e.stock_code === data.stock_code)
                  .length < 1
              "
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  x-small
                  color="success"
                  v-bind="attrs"
                  v-on="on"
                  @click="addToCart(data)"
                >
                  <v-icon dark> mdi-cart-arrow-down </v-icon>
                </v-btn>
              </template>
              <span>Sepete Ekle</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  x-small
                  color="info"
                  v-bind="attrs"
                  v-on="on"
                  @click="openMuadilKodDialog(data)"
                >
                  <v-icon dark> mdi-sticker-check </v-icon>
                </v-btn>
              </template>
              <span>Muadil Kod Düzenle</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  x-small
                  color="dark"
                  v-bind="attrs"
                  v-on="on"
                  @click="openStokOzellikDialog(data)"
                >
                  <v-icon dark> mdi-file-document-edit </v-icon>
                </v-btn>
              </template>
              <span>Stok Özellikleri Düzenle</span>
            </v-tooltip>
          </div>
        </div>
        <div class="card-body">
          <div class="position-relative">
            <div v-if="data.discount" class="avatar-sm product-ribbon">
              <span class="avatar-title rounded-circle bg-primary"
                >-{{ data.discount }}%</span
              >
            </div>
            <v-carousel
              style="height: 300px"
              cycle
              interval="5000"
              hide-delimiters
            >
              <v-carousel-item v-for="(item, i) in data.images" :key="i">
                <v-sheet height="300px" tile>
                  <v-row class="fill-height" align="center" justify="center">
                    <img :src="item" alt="" @click="expandImage(data.images)" />
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="mt-4 text-center">
            <h5 class="mb-3 text-truncate">
              <router-link
                class="text-dark"
                :to="`/ecommerce/product-detail/${data.id}`"
                >{{ data.stock_name }}</router-link
              >
            </h5>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item v-bind="attrs" v-on="on" dense two-line>
                  <v-list-item-content dense>
                    <v-list-item-title>Stok Kodu</v-list-item-title>
                    <v-list-item-subtitle v-bind="attrs" v-on="on">{{
                      data.stock_code
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
              <span>Stok Hareketlerini Görmek İçin Tıklayın</span>
            </v-tooltip>

            <v-list-item dense two-line>
              <v-list-item-content dense>
                <v-list-item-title>Ölçü</v-list-item-title>
                <v-list-item-subtitle>{{ data.measure }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item dense two-line>
              <v-list-item-content dense>
                <v-list-item-title>Liste Fiyatı</v-list-item-title>
                <v-list-item-subtitle>
                  <h5>
                    <span class="text-muted me-2">
                      <del>${{ data.list_price }}</del>
                    </span>
                    <b>${{ data.offer_price }}</b>
                  </h5>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-btn color="success" dark block>
              Detay
              <v-icon dark right> mdi-arrow-right-thin </v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
    <MuadilKodDialog
      :title="'Muadil Kod Düzenle'"
      :showDialog="muadilKodDialog"
      @dialogChange="(e) => (muadilKodDialog = e)"
      :product="muadilKodDialogData"
    ></MuadilKodDialog>
    <StokOzellikDialog
      :title="'Ürün Özellik'"
      :showDialog="stokOzellikDialog"
      @dialogChange="(e) => (stokOzellikDialog = e)"
      :product="stokOzellikDialogData"
    ></StokOzellikDialog>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapState, mapGetters, mapActions } from "vuex";
import MuadilKodDialog from "@/components/product-search/dialogs/MuadilKodDialog.vue";
import StokOzellikDialog from "@/components/product-search/dialogs/StokOzellikDialog.vue";

export default {
  components: {
    MuadilKodDialog,
    StokOzellikDialog,
  },
  computed: {
    ...mapState("productSearch", [
      "listDatas",
      "listHeaders",
      "listDataLoading",
    ]),
    ...mapGetters("productSearch", ["getCardViewPagination"]),
    ...mapState("current", ["current"]),
    ...mapState("cart", ["cartList"]),
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
          name: "İNÇ KONİK MAKARALI RULMAN",
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
          name: "SABİT BİLYALI RULMANLAR",
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
          name: "DİNGİL PİMİ RULMAN SİLİNDİRİK 32,00x56,00x16mm",
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
          name: "NSK RULMAN",
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
          name: "FORD FIESTA, ESCORT, PEUGEOT ALTERNATÖR RULMANI",
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
          name: "SEKMAN",
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
      muadilKodDialog: false,
      muadilKodDialogData: null,
      stokOzellikDialog: false,
      stokOzellikDialogData: null,
    };
  },
  methods: {
    ...mapActions("cart", [
      "addProductToCartList",
      "removeProductFromCartList",
      "changeQuantityOfProduct",
    ]),
    openMuadilKodDialog(data) {
      this.muadilKodDialogData = data;
      this.muadilKodDialog = true;
    },
    openStokOzellikDialog(data) {
      this.stokOzellikDialogData = data;
      this.stokOzellikDialog = true;
    },
    clickLabel(item) {
      console.log("Click", item);
    },
    expandImage(images) {
      this.$viewerApi({
        images: images,
      });
    },
    addToCart(product) {
      if (!this.current) {
        Swal.fire({
          title: "Ürün Ekleme Başarısız",
          text: "Cari listesinden cari seçimi yapmalısınız",
          icon: "error",
          confirmButtonText: "Tamam",
        });
      } else {
        this.addProductToCartList(product);
      }
    },
  },
};
</script>