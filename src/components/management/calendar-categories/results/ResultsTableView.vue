<template>
  <div>
    <b-table
      :items="calendarCategoryList"
      :fields="calendarCategoryListHeaders"
      hover
      responsive
      sort-icon-left
      :busy="calendarCategoryListLoading"
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
      <template #cell(badge)="data">
        <v-chip small label outlined :color="badgeColor(data.item.badge)">{{
          badgeText(data.item.badge)
        }}</v-chip>
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
                @click="openCalendarCategoryDialog(data.item)"
              >
                <v-icon>mdi-pencil-outline</v-icon>
              </v-btn>
            </template>
            <span>Düzenle</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                icon
                color="danger darken-2"
                @click="
                  calendarCategoryDelete({
                    params: {
                      id: data.item.id,
                    },
                  })
                "
              >
                <v-icon>mdi-delete-outline</v-icon>
              </v-btn>
            </template>
            <span>Sil</span>
          </v-tooltip>
        </div>
      </template>
    </b-table>
    <EditCalendarCategoryDialog
      :calendarCategoryProp="calendarCategoryProp"
      :processType="'edit'"
      :showDialog="editCalendarCategoryDialog"
      @dialogChange="(data) => (editCalendarCategoryDialog = data)"
    ></EditCalendarCategoryDialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import EditCalendarCategoryDialog from "@/components/management/calendar-categories/dialogs/EditCalendarCategoryDialog.vue";

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
    EditCalendarCategoryDialog,
  },

  computed: {
    ...mapState("calendar", [
      "calendarCategoryList",
      "calendarCategoryListHeaders",
      "calendarCategoryListLoading",
    ]),
  },
  mounted() {},
  data() {
    return {
      selectRow: false,
      userData: null,
      editCalendarCategoryDialog: false,
      calendarCategoryProp: null,
    };
  },
  methods: {
    ...mapActions("calendar", ["calendarCategoryDelete"]),
    async openCalendarCategoryDialog(data) {
      this.calendarCategoryProp = data;
      this.editCalendarCategoryDialog = true;
    },
    badgeColor(badge) {
      switch (badge) {
        case 2:
          return "primary darken-1";
        case 3:
          return "success darken-1";
        case 4:
          return "indigo darken-1";
        case 5:
          return "orange darken-1";
        case 6:
          return "danger darken-1";
        case 7:
          return "dark darken-1";
        default:
          return "secondary darken-1";
      }
    },
    badgeText(badge) {
      switch (badge) {
        case 2:
          return "Mavi";
        case 3:
          return "Yeşil";
        case 4:
          return "Mor";
        case 5:
          return "Turuncu";
        case 6:
          return "Kırmızı";
        case 7:
          return "Siyah";
        default:
          return "Renk Belirtilmemiş";
      }
    },
  },
  watch: {
    "editCalendarCategoryDialog": function(newVal){
      if(!newVal)
        this.calendarCategoryProp = null;
    }
  },
};
</script>
