<template>
  <v-card flat>
    <v-card-text>
      <div class="container-fluid">
        <h4 class="text-center pt-5">Netsis Ayarları</h4>
        <v-divider></v-divider>
        <div class="row">
          <div class="col-md-4">
            <label for="">Netsis Şirket Adı</label>
            <v-text-field v-model="erpSettingsObject.netsisCompanyName" filled dense shaped> </v-text-field>
          </div>
          <div class="col-md-4">
            <label for="">Netsis Şube Kodu</label>
            <v-text-field
              v-model="erpSettingsObject.netsisBranchCode"
              filled
              dense
              shaped
            >
            </v-text-field>
          </div>
          <div class="col-md-4">
            <label for="">Netsis Kullanıcı Adı</label>
            <v-text-field v-model="erpSettingsObject.netsisUserName" shaped filled dense> </v-text-field>
          </div>
          <div class="col-md-4">
            <label for="">Netsis Kullanıcı Şifre</label>
            <v-text-field v-model="erpSettingsObject.netsisUserPassword" shaped filled dense> </v-text-field>
          </div>
          <div class="col-md-4">
            <label for="">Netsis Cari Seri</label>
            <v-text-field v-model="erpSettingsObject.netsisCurrentSerie" shaped filled dense> </v-text-field>
          </div>
          <div class="col-md-4">
            <label for="">Netsis Sipariş Seri</label>
            <v-text-field v-model="erpSettingsObject.netsisOrderSerie" shaped filled dense> </v-text-field>
          </div>
          <div class="col-md-4">
            <label for="">Netsis Depo Kodu</label>
            <v-text-field v-model="erpSettingsObject.netsisWarehouseCode" shaped filled dense> </v-text-field>
          </div>
          <div class="col-md-4">
            <label for="">NetOpenX Rest Url Adresi</label>
            <v-text-field v-model="erpSettingsObject.netOpenXRestUrl" shaped filled dense> </v-text-field>
          </div>
        </div>
        <h4 class="text-center pt-5">E-Logo Ayarları</h4>
        <v-divider></v-divider>
        <div class="row">
          <div class="col-md-4">
            <label for="">E-Logo Kullanıcı Adı</label>
            <v-text-field v-model="erpSettingsObject.eLogoUserName" shaped filled dense> </v-text-field>
          </div>
          <div class="col-md-4">
            <label for="">E-Logo Şifre</label>
            <v-text-field v-model="erpSettingsObject.eLogoPassword" shaped filled dense> </v-text-field>
          </div>
          <div class="col-md-4">
            <label for="">Özel Kod 1</label>
            <v-text-field v-model="erpSettingsObject.specialCode1" shaped filled dense> </v-text-field>
          </div>
          <div class="col-md-4">
            <label for="">Özel Kod 2</label>
            <v-text-field v-model="erpSettingsObject.specialCode2" shaped filled dense> </v-text-field>
          </div>
        </div>
        <h4 class="text-center pt-5">Uygulama İçi Ayarlar</h4>
        <v-divider></v-divider>
        <div class="row">
          <div class="col-md-4">
            <v-switch v-model="erpSettingsObject.netsisCurrencySale" dense inset label="Dövizli Satış Var Mı?"></v-switch>

            <v-autocomplete
              v-model="erpSettingsObject.netsisCurrencySaleType"
              :items="['DOV_SATIS', 'EFF_SATIS', 'DOV_ALIS', 'EFF_ALIS']"
              shaped
              filled
              dense
            >
            </v-autocomplete>
          </div>
          <div class="col-md-4">
            <v-switch
              v-model="erpSettingsObject.stockListShowBalance"
              dense
              inset
              label="Stok Listesinde Bakiye Gösterilsin Mi?"
            ></v-switch>
            
            <v-autocomplete
              v-model="erpSettingsObject.cartShowBalance"
              :items="['Var/Yok Gösterim', 'Rakamsal Gösterim']"
              shaped
              filled
              dense
            >
            </v-autocomplete>
          </div>
          <div class="col-md-4">
            <v-switch v-model="erpSettingsObject.orderApprove" dense inset label="Sipariş Onay Çalışsın Mı?"></v-switch>
          </div>
          <div class="col-md-4">
            <v-switch v-model="erpSettingsObject.conditionOperation" dense inset label="Koşul Uygulaması Var Mı?"></v-switch>
          </div>
          <div class="col-md-4">
            <v-switch
              v-model="erpSettingsObject.campaignOperation"
              dense
              inset
              label="Kampanya Uygulaması Var Mı?"
            ></v-switch>
          </div>
          <div class="col-md-4">
            <v-switch v-model="erpSettingsObject.salesPersonOffersAdminApproveToCustomer" dense inset label="Plasiyer Teknik Onay"></v-switch>
          </div>
          <div class="col-md-4">
            <v-switch v-model="erpSettingsObject.paymentSaveErp" dense inset label="ERP Tahsilat Kaydı"></v-switch>
          </div>
          <div class="col-md-4">
            <v-switch v-model="erpSettingsObject.paymentMethodDiscount" dense inset label="Ödeme Tipi İskontosu"></v-switch>
          </div>
          <div class="col-md-4">
            <v-switch v-model="erpSettingsObject.hideBalanceType" dense inset label="Stok Bakiye Sepet Kontrolü"></v-switch>
          </div>
          <div class="col-md-4">
            <v-switch v-model="erpSettingsObject.minimumStockConstraint" dense inset label="Minimum Stok Kısıtı"></v-switch>
          </div>
          <div class="col-md-4">
            <v-switch v-model="erpSettingsObject.maximumStockConstraint" dense inset label="Maksimum Stok Kısıtı"></v-switch>
          </div>
          <div class="col-md-4">
            <label for="">Satış Fiyatı</label>
            <v-autocomplete
              v-model="erpSettings.netsisSalePrice"
              :items="[
                'SATIS_FIAT1',
                'SATIS_FIAT2',
                'SATIS_FIAT3',
                'SATIS_FIAT4',
              ]"
              filled
              dense
              shaped
            >
            </v-autocomplete>
          </div>
          <div class="col-md-4">
            <label for="">Stok Araması Nasıl Yapılsın</label>
            <v-autocomplete 
            v-model="erpSettingsObject.stockSearch" 
            :items="[{ value: true, text: 'İçeren' },{ value: false, text: 'Başlayan' }]"
            :item-text="item => item.text"
            :item-value="item => item.value" 
            filled 
            dense 
            shaped>
            </v-autocomplete>
          </div>
          <div class="col-md-4">
            <label for="">Cari Araması Nasıl Yapılsın {{ erpSettingsObject.currentSearch }}</label>
            
            <v-autocomplete 
            v-model="erpSettingsObject.currentSearch" 
            :items="[{ value: true, text: 'İçeren' },{ value: false, text: 'Başlayan' }]"
            :item-text="item => item.text"
            :item-value="item => item.value"  
            filled 
            dense 
            shaped>
            </v-autocomplete>
          </div>
          <div class="col-md-4">
            <label for="">Ekstra Fiyat Alanı</label>
            <v-autocomplete
              v-model="erpSettingsObject.extraPriceField"
              :items="[
                'Sayısal Alan 1',
                'Sayısal Alan 2',
                'Sayısal Alan 3',
                'Sayısal Alan 4',
                'Sayısal Alan 5',
                'Sayısal Alan 6',
                'Sayısal Alan 7',
                'Sayısal Alan 8',
              ]"
              filled
              dense
              shaped
            >
            </v-autocomplete>
          </div>
          <div class="col-md-4">
            <label for="">Stok KDV Durumu</label>
            <v-autocomplete
              v-model="erpSettingsObject.stockVatStatus"
              :items="[{value: true, text: 'KDV Dahil'},{value: false, text: 'KDV Hariç'}]"
              :item-text="item => item.text"
              :item-value="item => item.value"
              filled
              dense
              shaped
            >
            </v-autocomplete>
          </div>
          <div class="col-md-4">
            <label for="">Stok Sıralaması</label>
            <v-autocomplete
              v-model="erpSettingsObject.stockListOrderBy"
              :items="['Stok Kodu', 'Bakiye (Azalan)', 'Stok Adı']"
              filled
              dense
              shaped
            >
            </v-autocomplete>
          </div>
          <div class="col-md-4">
            <label for="">Stok Bakiye Limiti</label>
            <v-text-field v-model="erpSettingsObject.stockBalanceLimit" filled dense shaped> </v-text-field>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-end">
            <v-btn color="success darken-2" depressed @click="saveErpSettings()" 
              ><v-icon left>mdi-content-save</v-icon>Kaydet</v-btn
            >
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>


import { mapState, mapActions } from 'vuex';

export default {
  props: {
    settingsProp: {
      type: Object,
      default: () => ({
        
      })
    }
  },
  computed:{
    ...mapState("settings",["erpSettings"]),
    ...mapState("auth",["user"])
  },
  mounted(){
    
  },
  data(){
    return {
      erpSettingsObject:{},

    }
  },
  methods:{
    ...mapActions("settings",["erpSettingUpdate"]),
    async saveErpSettings(){
  
     
      await this.erpSettingUpdate({
        params: {
          userId: this.user.UserId
        },
        body: {
          "NetsisCompanyName": this.erpSettingsObject.netsisCompanyName,
          "NetsisBranchCode": this.erpSettingsObject.netsisBranchCode,
          "OrderApprove": this.erpSettingsObject.orderApprove,
          "SalesPersonOffersAdminApproveToCustomer": this.erpSettingsObject.salesPersonOffersAdminApproveToCustomer,
          "NetsisUserName": this.erpSettingsObject.netsisUserName,
          "NetsisUserPassword": this.erpSettingsObject.netsisUserPassword,
          "NetsisOrderSerie": this.erpSettingsObject.netsisOrderSerie,
          "NetsisCurrentSerie": this.erpSettingsObject.netsisCurrentSerie,
          "NetOpenXRestUrl": this.erpSettingsObject.netOpenXRestUrl,
          "NetsisWarehouseCode": this.erpSettingsObject.netsisWarehouseCode,
          "NetsisCurrencySale": this.erpSettingsObject.netsisCurrencySale,
          "NetsisCurrencySaleType": this.erpSettingsObject.netsisCurrencySaleType,
          "eLogoUserName": this.erpSettingsObject.eLogoUserName,
          "eLogoPassword": this.erpSettingsObject.eLogoPassword,
          "StockListShowBalance": this.erpSettingsObject.stockListShowBalance,
          "HideBalanceType": this.erpSettingsObject.hideBalanceType,// Stok Bakiye Sepet Kontrolü
          "StockBalanceLimit": this.erpSettingsObject.stockBalanceLimit,
          "CartShowBalance": this.erpSettingsObject.cartShowBalance, // Stok Listesinde BAkiye Gösterilsin mi
          "ConditionOperation": this.erpSettingsObject.conditionOperation,
          "CampaignOperation": this.erpSettingsObject.campaignOperation,
          "PaymentMethodDiscount": this.erpSettingsObject.paymentMethodDiscount,
          "NetsisSalePrice": this.erpSettingsObject.netsisSalePrice,
          "SpecialCode1": this.erpSettingsObject.specialCode1,
          "SpecialCode2": this.erpSettingsObject.specialCode2,
          "PaymentSaveErp": this.erpSettingsObject.paymentSaveErp,
          "CurrentSearch": this.erpSettingsObject.currentSearch,// Cari Araması Nasıl Yapılsın
          "StockSearch": this.erpSettingsObject.stockSearch,// Stok Araması Nasıl Yapılsın
          "StockBalanceAddCart": this.erpSettingsObject.stockBalanceAddCart,//
          "ExtraPriceField": this.erpSettingsObject.extraPriceField,
          "MinimumStockConstraint": this.erpSettingsObject.minimumStockConstraint,
          "MaximumStockConstraint": this.erpSettingsObject.maximumStockConstraint,
          "StockVatStatus": this.erpSettingsObject.stockVatStatus,//Stok KDV Durumu
          "StockListOrderBy": this.erpSettingsObject.stockListOrderBy
        }
      })
    }
  },
  watch:{
    "settingsProp" : function(newVal) {
      this.erpSettingsObject = Object.assign({},newVal )
    }
  }
}

</script>