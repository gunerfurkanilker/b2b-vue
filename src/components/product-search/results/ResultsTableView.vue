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
        <template #cell(images)="data">
          <img
            style="width: 50px; height: 50px"
            :src="data.item.images[0]"
            alt=""
            @click="expandImage(data.item.images)"
          />
        </template>
        <template #cell(cart_operations)="data">
          <v-tooltip bottom v-if="cartList.filter(e => e.stock_code === data.item.stock_code).length < 1">
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
          <div class="d-flex p-0 pe-2" v-if="cartList.filter(e => e.stock_code === data.item.stock_code).length > 0">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  icon
                  color="success"
                  @click="changeQuantityOfProduct({product: data.item, number: 1})"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </template>
              <span>Miktar Attır</span>
            </v-tooltip>
            <span class="mt-2">{{ cartList.find(e => e.stock_code == data.item.stock_code) ? cartList.find(e => e.stock_code == data.item.stock_code).quantity : 0 }}</span>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  icon
                  color="secondary"
                  :disabled="cartList.find(e => e.stock_code == data.item.stock_code).quantity <= 1"
                  @click="changeQuantityOfProduct({product: data.item, number: -1})"
                >
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
              </template>
              <span>Miktar Azalt</span>
            </v-tooltip>
            <v-tooltip bottom v-if="cartList.filter(e => e.stock_code === data.item.stock_code).length > 0">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  icon
                  color="danger"
                  @click="removeFromCard(data.item)"
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
            <b-spinner variant="primary" label="Text Centered"></b-spinner>
          </div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapState, mapActions } from "vuex";

export default {
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
    return {};
  },
  mounted(){
    
  },
  methods: {
    ...mapActions("cart", ["addProductToCartList","removeProductFromCartList","changeQuantityOfProduct"]),
    addToCart(product) {
      if(!this.current)
      {
        Swal.fire({
          title: "Ürün Ekleme Başarısız",
          text: "Cari listesinden cari seçimi yapmalısınız",
          icon: "error",
          confirmButtonText: "Tamam",
        });
      }
      else{
        this.addProductToCartList(product);
      }
    },
    removeFromCard(product) {
      this.removeProductFromCartList(product);
    },

    expandImage(images) {
      this.$viewerApi({
        images: images,
      });
    },
  },
};
</script>