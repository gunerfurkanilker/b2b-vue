

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="checkout-tabs py-4">
      <b-tabs
        pills
        vertical
        nav-class="p-0"
        nav-wrapper-class="col-xl-2 col-sm-3"
      >
        <b-tab :active="tabController == 1">
          <template v-slot:title>
            <i class="bx bxs-truck d-block check-nav-icon mt-4 mb-2"></i>
            <p class="fw-bold mb-4">Teslimat Bilgileri</p>
          </template>
          <b-card-text>
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Kargo Bilgileri</h4>
                <p class="card-title-desc">
                  Gerekli bilgileri eksiksiz şekilde doldurun
                </p>
                <form>
                  <b-row class="mb-4">
                    <b-col md="2">
                      <label for="input-name">Kargo Firması</label>
                    </b-col>
                    <b-col md="10">
                      <multiselect
                        v-model="cargoCompany"
                        :options="cargoCompanies"
                      ></multiselect>
                    </b-col>
                  </b-row>

                  <b-row class="mb-4">
                    <b-col md="2">
                      <label>Adres</label>
                    </b-col>
                    <b-col md="10">
                      <b-form-textarea
                        rows="3"
                        placeholder="Adres bilgisi giriniz..."
                      ></b-form-textarea>
                    </b-col>
                  </b-row>

                  <b-row class="mb-4">
                    <b-col md="2">
                      <label>Sipariş Notu</label>
                    </b-col>
                    <b-col md="10">
                      <b-form-textarea
                        rows="3"
                        placeholder="Sipariş notu ekleyin..."
                      ></b-form-textarea>
                    </b-col>
                  </b-row>
                </form>
                <div class="d-flex">
                  <b-button
                    variant="success"
                    class="ms-auto"
                    @click="tabController = 2"
                  >
                    <i class="mdi mdi-arrow-right ms-1"></i> Ödeme Bilgileri
                  </b-button>
                </div>
              </div>
            </div>
          </b-card-text>
        </b-tab>
        <b-tab :active="tabController == 2">
          <template v-slot:title>
            <i class="bx bx-money d-block check-nav-icon mt-4 mb-2"></i>
            <p class="fw-bold mb-4">Ödeme Bilgileri</p>
          </template>
          <b-card-text>
            <div class="card">
              <div class="card-body">
                <div>
                  <h4 class="card-title">Ödeme Bilgileri</h4>
                  <p class="card-title-desc">
                    Sipariş tamamlamak için ödeme bilgilerini doldurun
                  </p>
                  <form>
                    <b-row class="mb-4">
                      <b-col md="2">
                        <label for="input-name">Ödeme Yöntemi</label>
                      </b-col>
                      <b-col md="10">
                        <multiselect
                          v-model="paymentMethod"
                          :options="paymentMethods"
                          placeholder=" "
                        ></multiselect>
                      </b-col>
                      <b-col md="2" v-if="paymentMethod != 'Cari Hesap'">
                        <label for="input-name">Kredi Kartı</label>
                      </b-col>
                      <b-col md="10" v-if="paymentMethod != 'Cari Hesap'">
                        <multiselect
                          v-model="creditCard"
                          :options="creditCards"
                          placeholder=" "
                        ></multiselect>
                      </b-col>
                      <b-col md="2" v-if="paymentMethod != 'Cari Hesap'">
                        <label for="input-name">Taksit</label>
                      </b-col>
                      <b-col md="10" v-if="paymentMethod != 'Cari Hesap'">
                        <multiselect
                          v-model="installment"
                          :options="installmentList"
                          placeholder=" "
                        ></multiselect>
                      </b-col>
                    </b-row>
                  </form>
                </div>
                <div class="d-flex">
                  <b-button
                    variant="secondary"
                    class="me-auto"
                    @click="tabController = 1"
                  >
                    <i class="mdi mdi-arrow-left ms-1"></i> Teslimat Bilgileri
                  </b-button>
                  <b-button
                    variant="success"
                    class="ms-auto"
                    @click="tabController = 3"
                  >
                    <i class="mdi mdi-arrow-right ms-1"></i> Sipariş Özeti
                  </b-button>
                </div>
              </div>
            </div>
          </b-card-text>
        </b-tab>
        <b-tab :active="tabController == 3">
          <template v-slot:title>
            <i class="bx bx-badge-check d-block check-nav-icon mt-4 mb-2"></i>
            <p class="fw-bold mb-4">Siparişi Tamamla</p>
          </template>
          <b-card-text>
            <div class="card">
              <div class="card-body">
                <div class="card shadow-none border mb-0">
                  <div class="card-body">
                    <h4 class="card-title mb-4">Sipariş Özeti</h4>

                    <div class="table-responsive">
                      <table class="table align-middle mb-0 table-nowrap">
                        <thead class="table-light">
                          <tr>
                            <th>Resim</th>
                            <th>Ürün Bilgisi</th>
                            <th>Tutar</th>
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
                              <p class="text-muted mb-0">{{ "$10 x " + item.quantity }}</p>
                            </td>  
                            <td>{{ item.quantity * 10 + " $" }}</td>
                          </tr>
                        </tbody>
                        <tfoot class="table-light">
                          <tr>
                            <td>Toplam Tutar : </td>
                            <td></td>
                            <td>
                              <b>
                                300 $
                              </b> 
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                    <div class="d-flex">
                      <b-button
                        variant="secondary"
                        class="me-auto"
                        @click="tabController = 2"
                      >
                        <i class="mdi mdi-arrow-left ms-1"></i> Ödeme Bilgileri
                      </b-button>
                      <b-button variant="success" class="ms-auto">
                        <i class="mdi mdi-truck-fast me-1"></i> Siparişi Tamamla
                      </b-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-card-text>
        </b-tab>
        <div class="row mt-4">
          <div class="col-sm-6">
            <router-link
              to="/cart"
              class="btn text-muted d-none d-sm-inline-block btn-link"
            >
              <i class="mdi mdi-arrow-left me-1"></i> Sepete Git
            </router-link>
          </div>
          <!-- end col -->
          <!-- end col -->
        </div>
      </b-tabs>
    </div>
  </Layout>
</template>
<script>
import Layout from "@/pages/layout/main.vue";
import PageHeader from "@/components/page-header";

import Multiselect from "vue-multiselect";

import { mapState, mapActions } from "vuex";

export default {
  page: {
    title: "ÖDEME İŞLEMLERİ",
    meta: [{ name: "description", content: "Ödeme İşlemleri" }],
  },
  components: { Multiselect, Layout, PageHeader },
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
      title: "Ödeme İşlemleri",
      items: [
        {
          text: "Sepet",
          href: "/cart",
        },
        {
          text: "Ödeme İşlemleri",
          active: true,
        },
      ],
      tabController: 1,
      cargoCompany: null,
      cargoCompanies: [
        "MNG Kargo",
        "ARAS Kargo",
        "Yurtiçi Kargo",
        "Sürat Kargo",
      ],
      paymentMethod: null,
      paymentMethods: [
        "Cari Hesap",
        "K.K 5 Taksit",
        "K.K Tek Çekim",
        "Havale / EFT",
      ],
      creditCard: null,
      creditCards: ["İş Bankası", "Ziraat Bankası"],
      installment: null,
      installmentList: [3, 5, 6, 12],
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