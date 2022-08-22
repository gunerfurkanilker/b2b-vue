<template>
  <v-card flat>
    <v-card-text>
      <div class="container-fluid">
        <h4 class="text-center pt-5">Netsis Ayarları</h4>
        <v-divider></v-divider>
        <div class="row">
          <div class="col-md-4">
            <label for="">Netsis Şirket Adı</label>
            <v-text-field filled dense shaped> </v-text-field>
          </div>
          <div class="col-md-4">
            <label for="">Netsis Şube Kodu</label>
            <v-autocomplete
              :items="['Star Rulmancılık Turz. San ve Tic. Ltd. Şti.']"
              filled
              dense
              shaped
            >
            </v-autocomplete>
          </div>
          <div class="col-md-4">
            <label for="">Netsis Kullanıcı Adı</label>
            <v-text-field shaped filled dense> </v-text-field>
          </div>
          <div class="col-md-4">
            <label for="">Netsis Kullanıcı Şifre</label>
            <v-text-field shaped filled dense> </v-text-field>
          </div>
          <div class="col-md-4">
            <label for="">Netsis Cari Seri</label>
            <v-text-field shaped filled dense> </v-text-field>
          </div>
          <div class="col-md-4">
            <label for="">Netsis Sipariş Seri</label>
            <v-text-field shaped filled dense> </v-text-field>
          </div>
          <div class="col-md-4">
            <label for="">Netsis Depo Kodu</label>
            <v-text-field shaped filled dense> </v-text-field>
          </div>
          <div class="col-md-4">
            <label for="">NetOpenX Rest Url Adresi</label>
            <v-text-field shaped filled dense> </v-text-field>
          </div>
        </div>
        <h4 class="text-center pt-5">E-Logo Ayarları</h4>
        <v-divider></v-divider>
        <div class="row">
          <div class="col-md-4">
            <label for="">E-Logo Kullanıcı Adı</label>
            <v-text-field shaped filled dense> </v-text-field>
          </div>
          <div class="col-md-4">
            <label for="">E-Logo Şifre</label>
            <v-text-field shaped filled dense> </v-text-field>
          </div>
          <div class="col-md-4">
            <label for="">Özel Kod 1</label>
            <v-text-field shaped filled dense> </v-text-field>
          </div>
          <div class="col-md-4">
            <label for="">Özel Kod 2</label>
            <v-text-field shaped filled dense> </v-text-field>
          </div>
        </div>
        <h4 class="text-center pt-5">Uygulama İçi Ayarlar</h4>
        <v-divider></v-divider>
        <div class="row">
          <div class="col-md-4">
            <v-switch dense inset label="Dövizli Satış Var Mı?"></v-switch>

            <v-autocomplete
              :items="['DOV_SATIS', 'EFF_SATIS', 'DOV_ALIS', 'EFF_ALIS']"
              shaped
              filled
              dense
            >
            </v-autocomplete>
          </div>
          <div class="col-md-4">
            <v-switch
              dense
              inset
              label="Stok Listesinde Bakiye Gösterilsin Mi?"
            ></v-switch>

            <v-autocomplete
              :items="['Var/Yok Gösterim', 'Rakamsal Gösterim']"
              shaped
              filled
              dense
            >
            </v-autocomplete>
          </div>
          <div class="col-md-4">
            <v-switch dense inset label="Sipariş Onay Çalışsın Mı?"></v-switch>
          </div>
          <div class="col-md-4">
            <v-switch dense inset label="Koşul Uygulaması Var Mı?"></v-switch>
          </div>
          <div class="col-md-4">
            <v-switch
              dense
              inset
              label="Kampanya Uygulaması Var Mı?"
            ></v-switch>
          </div>
          <div class="col-md-4">
            <v-switch dense inset label="Plasiyer Teknik Onay"></v-switch>
          </div>
          <div class="col-md-4">
            <v-switch dense inset label="ERP Tahsilat Kaydı"></v-switch>
          </div>
          <div class="col-md-4">
            <v-switch dense inset label="Ödeme Tipi İskontosu"></v-switch>
          </div>
          <div class="col-md-4">
            <v-switch dense inset label="Stok Bakiye Sepet Kontrolü"></v-switch>
          </div>
          <div class="col-md-4">
            <v-switch dense inset label="Minimum Stok Kısıtı"></v-switch>
          </div>
          <div class="col-md-4">
            <v-switch dense inset label="Maksimum Stok Kısıtı"></v-switch>
          </div>
          <div class="col-md-4">
            <label for="">Satış Fiyatı</label>
            <v-autocomplete
              :items="[
                'SATIŞ_FIAT1',
                'SATIŞ_FIAT2',
                'SATIŞ_FIAT3',
                'SATIŞ_FIAT4',
              ]"
              filled
              dense
              shaped
            >
            </v-autocomplete>
          </div>
          <div class="col-md-4">
            <label for="">Stok Araması Nasıl Yapılsın</label>
            <v-autocomplete :items="['İçeren', 'Başlayan']" filled dense shaped>
            </v-autocomplete>
          </div>
          <div class="col-md-4">
            <label for="">Cari Araması Nasıl Yapılsın</label>
            <v-autocomplete :items="['İçeren', 'Başlayan']" filled dense shaped>
            </v-autocomplete>
          </div>
          <div class="col-md-4">
            <label for="">Ekstra Fiyat Alanı</label>
            <v-autocomplete
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
              :items="['KDV Hariç', 'KDV Dahil']"
              filled
              dense
              shaped
            >
            </v-autocomplete>
          </div>
          <div class="col-md-4">
            <label for="">Stok Sıralaması</label>
            <v-autocomplete
              :items="['Stok Kodu', 'Bakiye (Azalan)', 'Stok Adı']"
              filled
              dense
              shaped
            >
            </v-autocomplete>
          </div>
          <div class="col-md-4">
            <label for="">Stok Bakiye Limiti</label>
            <v-text-field filled dense shaped> </v-text-field>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-end">
            <v-btn color="success darken-2" depressed
              ><v-icon left>mdi-content-save</v-icon>Kaydet</v-btn
            >
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>