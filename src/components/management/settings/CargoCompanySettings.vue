<template>
  <v-card flat>
    <v-card-text>
      <div class="col-lg-12 text-end">
          <v-btn color="success darken-2" text small @click="openCargoCompanyDialog('new')"
            ><v-icon small left>mdi-plus</v-icon> FİRMA EKLE</v-btn
          >
        </div>
      <b-table
        :items="shippingCompanyList"
        :fields="shippingCompanyHeaders"
        hover
        responsive
        sort-icon-left
        :busy="shippingCompanyListLoading"
      >
        <template #table-busy>
          <div class="text-center">
            <b-spinner
              variant="primary"
              size="lg"
              label="Lütfen Bekleyin..."
            ></b-spinner>
          </div>
        </template>
        <template #cell(isActive)="data">
          <v-chip small label :color="data.item.isActive ? 'success ligthen-2' : 'secondary ligthen-2'">
            {{ data.item.isActive ? 'Aktif' : 'Pasif' }}
          </v-chip>
        </template>
        <template #cell(process)="data">
          <div class="text-center">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  icon
                  color="amber darken-2"
                  @click="openCargoCompanyDialog('edit',data.item)"
                >
                  <v-icon>mdi-pencil-outline</v-icon>
                </v-btn>
              </template>
              <span>Düzenle</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon color="danger darken-2" @click="shippingCompanyDelete({
                  urlSegments: [data.item.id]
                })">
                  <v-icon>mdi-delete-outline</v-icon>
                </v-btn>
              </template>
              <span>Sil</span>
            </v-tooltip>
          </div>
        </template>
      </b-table>
      <EditCargoCompanyDialog
        :shippingCompanyProp="cargoCompanyProp"
        :processType="processType"
        :showDialog="editCargoCompanyDialog"
        @dialogChange="(data) => (editCargoCompanyDialog = data)"
      ></EditCargoCompanyDialog>
    </v-card-text>
  </v-card>
</template>


<script>

import EditCargoCompanyDialog from "./dialogs/EditCargoCompanyDialog.vue";

import { mapState, mapActions } from "vuex";

export default {
  props: {
    settingsProp: {
      type: Object,
      default: () => ({}),
    },
  },
  components:{
    EditCargoCompanyDialog
  },
  computed: {
    ...mapState("shipping", ["shippingCompanyList","shippingCompanyHeaders","shippingCompanyListLoading"]),
    ...mapState("auth", ["user"]),
  },
  mounted() {
    this.fetchShippingCompanyList({
      params:{

      },
      body: {

      }
    })
  },
  data() {
    return {
      cargoCompanyProp:{},
      editCargoCompanyDialog: false,
      mailSettingsObject: {},
      requestPending: false,
      processType:null
    };
  },
  methods: {
    ...mapActions("shipping", ["fetchShippingCompanyList","shippingCompanyDelete"]),
    openCargoCompanyDialog(processType,item = null){
      this.processType = processType;
      this.editCargoCompanyDialog = true;
      this.cargoCompanyProp = Object.assign({},item);
    }
  },
};
</script>