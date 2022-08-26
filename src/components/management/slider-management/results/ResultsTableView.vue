<template>
  <div >
      <b-table
        :items="sliderList"
        :fields="sliderListHeaders"
        hover
        responsive
        sort-icon-left
        :per-page="perPage"
        :current-page="currentPage"
        :busy="sliderListLoading"
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
        <template #cell(image)="data">
          <img
            style="width: 50px; height: 50px"
            :src="data.item.image"
            alt=""
            @click="expandImage(data.item.image)"
          />
        </template>
        <template #cell(status)="data">
          <v-chip label small :color="data.item.status ? 'success ligthen-2' : 'secondary ligthen-2'">{{ data.item.status ? 'Aktif' : 'Pasif' }}</v-chip>
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
                  @click="openSliderDialog(data.item)"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <span>Düzenle</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon color="danger darken-2" >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </template>
              <span>Sil</span>
            </v-tooltip>
          </div>
        </template>
      </b-table>
      <EditSliderDialog
        :sliderProp="slider"
        :processType="'edit'"
        :showDialog="editSliderDialog"
        @dialogChange="(data) => (editSliderDialog = data)"
      ></EditSliderDialog> 
  </div>
</template>

<script>
import { mapState } from "vuex";

import EditSliderDialog from '@/components/management/slider-management/dialogs/EditSliderDialog.vue'



export default {
  props: {
    perPage: {
      type: Number,
    },
    currentPage: {
      type: Number,
    },
  },

  components: {
    EditSliderDialog
  },

  computed: {
    ...mapState("slider", ["sliderList", "sliderListHeaders", "sliderListLoading"])
  },
  mounted() {
    
  },
  data() {
    return {
      selectRow: false,
      userData: null,
      editSliderDialog:false,
      slider:null
    };
  },
  methods: {
    openSliderDialog(data){
      this.slider = data;
      this.editSliderDialog = true;
    },
    expandImage(images) {
      this.$viewerApi({
        images: [images],
      });
    },
  },
  watch: {},
};
</script>
