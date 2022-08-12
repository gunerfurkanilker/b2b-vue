<template>
  <div class="card">
    <div class="card-body">
      <div class="table-responsive">
        <table class="table align-middle mb-0 table-nowrap">
          <thead class="table-light">
            <tr>
              <th>Resim</th>
              <th>Stok Bilgileri</th>
              <th>Fiyat</th>
              <th>Miktar</th>
              <th colspan="2">Toplam</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartList" :key="item.stock_code">
              <td>
                <img
                  :src="item.images[0]"
                  :alt="title"
                  title="product-img"
                  class="avatar-md"
                  @click="expandImage(item.images)"
                />
              </td>
              <td>
                <h5 class="font-size-14 text-truncate">
                  <router-link
                    to="/ecommerce/product-detail"
                    class="text-dark"
                    >{{ item.stock_name }}</router-link
                  >
                </h5>
                <p class="mb-0">
                  Stok Kodu :
                  <span class="fw-medium">{{ item.stock_code }}</span>
                </p>
              </td>
              <td>{{ item.list_price }}</td>
              <td>
                <div class="d-flex">
                  <b-button
                    class="my-1 me-2"
                    variant="secondary"
                    pill
                    size="sm"
                    @click="
                      changeQuantityOfProduct({
                        product: item,
                        number: -1,
                      })
                    "
                    :disabled="item.quantity < 2"
                    ><i class="mdi mdi-minus"></i
                  ></b-button>
                  <input
                    type="number"
                    :value="item.quantity"
                    :min="1"
                    class="form-control"
                    style="width: 80px"
                    @change="
                      (e) =>
                        changeQuantityOfProduct({
                          product: item,
                          definiteVal: parseInt(e.target.value),
                        })
                    "
                  />
                  <b-button
                    class="my-1 ms-2"
                    variant="success"
                    pill
                    size="sm"
                    @click="
                      changeQuantityOfProduct({
                        product: item,
                        number: 1,
                      })
                    "
                    ><i class="mdi mdi-plus"></i
                  ></b-button>
                </div>
              </td>
              <td>$ 900</td>
              <td>
                <b-button
                  href="javascript:void(0);"
                  class="action-icon text-light"
                  size="sm"
                  variant="danger"
                  pill
                  @click="removeProductFromCartList(item)"
                >
                  <i class="mdi mdi-trash-can font-size-18"></i>
                </b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="row mt-4">
        <div class="col-sm-6">
          <router-link to="/product-search">
            <b-button variant="secondary"
              ><i class="mdi mdi-arrow-left me-1"></i> Ürün Aramaya
              Dön</b-button
            >
          </router-link>
        </div>
        <!-- end col -->
        <div class="col-sm-6">
          <div class="text-sm-end mt-2 mt-sm-0">
            <router-link to="/cart/checkout">
              <b-button variant="success"
                ><i class="mdi mdi-cart-arrow-right me-1"></i> Siparişi
                Tamamla</b-button
              >
            </router-link>
          </div>
        </div>

        <!-- end col -->
      </div>
      <!-- end row-->
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
/**
 * Product-cart component
 */
export default {
  page: {
    title: "Sepet",
    meta: [{ name: "description", content: "Sepet" }],
  },
  components: {},
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
    ...mapActions("cart", [
      "removeProductFromCartList",
      "changeQuantityOfProduct",
    ]),
    expandImage(images) {
      this.$viewerApi({
        images: images,
      });
    },
  },
};
</script>
