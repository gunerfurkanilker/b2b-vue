<template>
  <v-card flat>
    <v-card-text>
      <div class="container-fluid">
        <h4 class="text-center pt-5">Mail Ayarları</h4>
            <v-divider></v-divider>
        <div class="row">
          
          <div class="col-md-6">
            <label for="">E-Mail Gönderen Adı</label>
            <v-text-field filled dense shaped> </v-text-field>
          </div>
          <div class="col-md-6">
            <label for="">E-Mail Gönderen Adresi</label>
            <v-text-field filled dense shaped> </v-text-field>
          </div>
          <div class="col-md-6">
            <label for="">Firma Şehir</label>
            <v-text-field shaped filled dense> </v-text-field>
          </div>
          <div class="col-md-6">
            <label for="">Firma İlçe</label>
            <v-text-field shaped filled dense> </v-text-field>
          </div>
          <div class="col-md-12">
            <label for="">Firma Adres</label>
            <v-textarea rows="2" shaped filled dense> </v-textarea>
          </div>
          <div class="col-md-4">
            <label for="">Firma Telefon Numarası</label>
            <v-text-field shaped filled dense> </v-text-field>
          </div>
          <div class="col-md-4">
            <label for="">Firma E-Posta Adresi</label>
            <v-text-field shaped filled dense> </v-text-field>
          </div>
          <div class="col-md-4">
            <label for="">Firma Web Sitesi</label>
            <v-text-field shaped filled dense> </v-text-field>
          </div>
          <div class="col-md-6">
            <label for="">Siparişin Gideceği Mail</label>
            <v-text-field shaped filled dense> </v-text-field>
          </div>
          <div class="col-md-6">
            <label for="">Siparişin Gideceği Mail (CC)</label>
            <v-text-field shaped filled dense> </v-text-field>
          </div>
          <div class="col-md-4">
            <v-switch dense inset label="Sipariş Bilgi Maili"></v-switch>
          </div>
          <div class="col-md-4">
            <v-switch dense inset label="Teklif Bilgi Maili"></v-switch>
          </div>
          <div class="col-md-4">
            <v-switch dense inset label="ERP Kilitli Cari Sipariş"></v-switch>
          </div>
          <div class="col-md-4">
            <v-switch
              dense
              inset
              label="Plasiyere Ticket Bilgi Maili"
            ></v-switch>
          </div>
          <div class="col-md-4">
            <label for="">Onaysız Tekliflere Filigran Yazısı</label>
            <v-autocomplete
              :items="['Onaysız', 'Onaylanmadı']"
              filled
              dense
              shaped
            >
            </v-autocomplete>
          </div>
          <div class="col-md-4">
            <label for="">Mail Arkaplan Rengi</label>
            <v-autocomplete
              :items="['Onaysız', 'Onaylanmadı']"
              filled
              dense
              shaped
            >
            </v-autocomplete>
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