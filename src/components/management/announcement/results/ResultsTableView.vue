<template>
  <div>
    <b-table
        :items="announcementList"
        :fields="announcementListHeaders"
        hover
        responsive
        sort-icon-left
        :busy="announcementListLoading"
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
        <template #cell(process)="data">
          <div class="text-center" v-if="!data.item.status">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  icon
                  color="amber darken-2"
                  @click="openAnnouncementDialog(data.item)"
                >
                  <v-icon>mdi-pencil-outline</v-icon>
                </v-btn>
              </template>
              <span>Düzenle</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon color="danger darken-2" @click="announcementDelete({
                  params:{
                    announcementId : data.item.id
                  }
                })">
                  <v-icon>mdi-delete-outline</v-icon>
                </v-btn>
              </template>
              <span>Sil</span>
            </v-tooltip>
          </div>
        </template>
      </b-table>
      <EditAnnouncementDialog
        :announcementProp="announcement"
        :processType="'edit'"
        :showDialog="editAnnouncementDialog"
        @dialogChange="(data) => (editAnnouncementDialog = data)"
      ></EditAnnouncementDialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import EditAnnouncementDialog from '@/components/management/announcement/dialogs/EditAnnouncementDialog.vue'



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
    EditAnnouncementDialog
  },

  computed: {
    ...mapState("announcement", ["announcementList", "announcementListHeaders", "announcementListLoading"])
  },
  mounted() {
    
  },
  data() {
    return {
      selectRow: false,
      userData: null,
      editAnnouncementDialog:false,
      announcement:null
    };
  },
  methods: {
    ...mapActions("announcement",["announcementDelete"]),
    async openAnnouncementDialog(data){
      this.announcement = data;
      this.editAnnouncementDialog = true;
    }
  },
  watch: {
    "editAnnouncementDialog": function(newVal){
      if(!newVal)
        this.announcement = null;
    }

  },
};
</script>
