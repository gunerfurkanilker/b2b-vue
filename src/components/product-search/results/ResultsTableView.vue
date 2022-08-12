<template>
  <div class="card">
    <div class="card-body">
      <b-table
        :items="listDatas"
        :fields="listHeaders"
        hover
        responsive
        :per-page="perPage"
        :current-page="currentPage"
        :busy="listDataLoading"
      >
        <template> </template>
        <template #cell(images)="data">
          <img
            style="width: 50px; height: 50px"
            :src="data.item.images[0]"
            alt=""
            @click="expandImage(data.item.images)"
          />
        </template>
        <template #cell(other_operations)="data">
          <div class="d-flex">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mx-1"
                  fab
                  dark
                  x-small
                  color="info"
                  v-bind="attrs"
                  v-on="on"
                  @click="openMuadilKodDialog(data.item)"
                >
                  <v-icon dark> mdi-sticker-check </v-icon>
                </v-btn>
              </template>
              <span>Muadil Kod Düzenle</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mx-1"
                  fab
                  dark
                  x-small
                  color="dark"
                  v-bind="attrs"
                  v-on="on"
                  @click="openStokOzellikDialog(data.item)"
                >
                  <v-icon dark> mdi-file-document-edit </v-icon>
                </v-btn>
              </template>
              <span>Stok Özellikleri Düzenle</span>
            </v-tooltip>
          </div>
        </template>
        <template #cell(cart_operations)="data">
          <v-tooltip
            bottom
            v-if="
              cartList.filter((e) => e.stock_code === data.item.stock_code)
                .length < 1
            "
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                icon
                color="success"
                @click="addToCart(data.item)"
              >
                <v-icon>mdi-basket</v-icon>
              </v-btn>
            </template>
            <span>Sepete Ekle</span>
          </v-tooltip>
          <div
            class="d-flex"
            v-if="
              cartList.filter((e) => e.stock_code === data.item.stock_code)
                .length > 0
            "
          >
            <input
              type="number"
              :value="
                cartList.find((e) => e.stock_code == data.item.stock_code)
                  .quantity
              "
              :min="1"
              class="form-control"
              style="width: 60px"
              @change="
                (e) =>
                  changeQuantityOfProduct({
                    product: data.item,
                    definiteVal: parseInt(e.target.value),
                  })
              "
            />

            <v-tooltip
              bottom
              v-if="
                cartList.filter((e) => e.stock_code === data.item.stock_code)
                  .length > 0
              "
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  icon
                  color="danger"
                  @click="removeProductFromCartList(data.item)"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </template>
              <span>Sepetten Çıkar</span>
            </v-tooltip>
          </div>
        </template>
        <template #table-busy>
          <div class="text-center">
            <b-spinner
              variant="primary"
              size="lg"
              label="Text Centered"
            ></b-spinner>
          </div>
        </template>
      </b-table>
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
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapState, mapActions } from "vuex";
import MuadilKodDialog from "@/components/product-search/dialogs/MuadilKodDialog.vue";
import StokOzellikDialog from "@/components/product-search/dialogs/StokOzellikDialog.vue";

export default {
  components: {
    MuadilKodDialog,
    StokOzellikDialog,
  },
  props: {
    perPage: {
      type: Number,
    },
    currentPage: {
      type: Number,
    },
  },

  computed: {
    ...mapState("productSearch", [
      "listDatas",
      "listHeaders",
      "listDataLoading",
    ]),
    ...mapState("current", ["current"]),
    ...mapState("cart", ["cartList"]),
  },
  data() {
    return {
      muadilKodDialog: false,
      muadilKodDialogData: null,
      stokOzellikDialog: false,
      stokOzellikDialogData: null,
    };
  },
  mounted() {},
  methods: {
    ...mapActions("cart", [
      "addProductToCartList",
      "removeProductFromCartList",
      "changeQuantityOfProduct",
    ]),
    addToCart(product) {
      console.log("Test",this.current);
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
    expandImage(images) {
      this.$viewerApi({
        images: images,
      });
    },
    openMuadilKodDialog(data) {
      this.muadilKodDialogData = data;
      this.muadilKodDialog = true;
    },
    openStokOzellikDialog(data) {
      this.stokOzellikDialogData = data;
      this.stokOzellikDialog = true;
    },
  },
};
</script>