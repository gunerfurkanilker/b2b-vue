<template>
  <div>
    <Layout>
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="invoice-title">
                <h4 class="float-end font-size-16">Sipariş No # 267076961</h4>
                <div class="mb-4">
                  <img
                    src="@/assets/images/logo-dark.png"
                    alt="logo"
                    height="20"
                  />
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-12">
                  <div>
                    <strong>Müşteri Adı: </strong>
                    <span>ŞİMŞEK OTOMOTİV / TUGAY ŞİMŞEK</span>
                  </div>
                  <div>
                    <strong>Müşteri Adresi: </strong>
                    <span>TEKKE MAH. TÜRKİSTAN CAD. NO:3/G - TARSUS - MERSİN</span>
                  </div>
                  <div>
                    <strong>Plasiyer Adı: </strong>
                    <span>TEKKE MAH. TÜRKİSTAN CAD. NO:3/G - TARSUS - MERSİN</span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6 mt-3">
                  <address>
                    <strong>Ödeme Tipi: </strong>
                    <span>Cari Hesap</span>
                  </address>
                </div>
                <div class="col-6 mt-3 text-sm-end">
                  <address>
                    <strong>Sipariş Tarihi</strong>
                    <div>9 Haziran 2023</div>
                  </address>
                </div>
              </div>
              <div class="p-2 mt-3">
                <h3 class="font-size-16">Sipariş özeti</h3>
              </div>
              <div class="table-responsive">
                <table class="table table-sm">
                  <thead>
                    <tr>
                      <th>Stok Kodu</th>
                      <th>Stok Adı</th>
                      <th>Not</th>
                      <th>Miktar</th>
                      <th>Birim Fiyat</th>
                      <th>İskonto</th>
                      <th>İskonto 2</th>
                      <th class="text-sm-end">Tutar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>GMW GU500</td>
                      <td>23,82X61,30mm KARDAN MİLİ MAFSAL İSTAVROZU</td>
                      <td></td>
                      <td>10</td>
                      <td>69,2661</td>
                      <td>% 20,00</td>
                      <td>% 0,00</td>                      
                      <td class="text-sm-end">692,66</td>
                    </tr>

                    <tr>
                      <td>GMW GU500SD</td>
                      <td>23,82X61,30mm KARDAN MİLİ M.İSTAVROZU-SOĞUK DÖVME</td>
                      <td></td>
                      <td>2</td>
                      <td>148,4274</td>
                      <td>% 20,00</td>
                      <td>% 0,00</td>  
                      <td class="text-sm-end">296,85</td>
                    </tr>

                    <tr>
                      <td>GNR WB 400L</td>
                      <td>KIT 203 DOĞAN ŞAHİN KARTAL ÖN AKS KİTİ SOL 639297+11949/910</td>
                      <td></td>
                      <td>5</td>
                      <td>84,5586</td>
                      <td>% 10,00</td>
                      <td>% 0,00</td>
                      <td class="text-sm-end">422,79</td>
                    </tr>
                    <tr>
                      <td colspan="7" class="text-sm-end">Ara Tutar</td>
                      <td class="text-sm-end">1910,00</td>
                    </tr>
                    <tr>
                      <td colspan="7" class="border-0 text-sm-end">
                        <strong>Kargo</strong>
                      </td>
                      <td class="border-0 text-sm-end">35,00</td>
                    </tr>
                    <tr>
                      <td colspan="7" class="border-0 text-sm-end">
                        <strong>Toplam Tutar</strong>
                      </td>
                      <td class="border-0 text-sm-end">
                        <h4 class="m-0">1945,00</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="d-print-none">
                <div class="float-end">
                  <a
                    href="javascript:window.print()"
                    class="btn btn-success waves-effect waves-light me-1"
                    ><i class="fa fa-print"></i
                  > Yazdır</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script>

import Layout from "@/pages/layout/main.vue";

export default {
  components:{
    Layout
  },
  data(){
    return {
      breadcrumbArray: [
        {
          text: "Siparişler",
          active: false,
        },
        {
          text: "B2B Sipariş Listesi",
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