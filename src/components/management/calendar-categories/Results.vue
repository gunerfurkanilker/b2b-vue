<template>
  <div class="card">
    <div class="card-body">
      <div class="row mb-3">
        <div class="col-lg-12 text-end">
          <v-btn color="success darken-2" text small @click="openNewCalendarCategoryDialog()"
            ><v-icon small left>mdi-plus</v-icon> Takvim Kategorisi Ekle</v-btn
          >
        </div>
      </div>
      <div class="row">
        <ResultTableView
          :perPage="perPage"
          :currentPage="currentPage"
        ></ResultTableView>
      </div>
      <!-- end row -->
    </div>

    <EditCalendarCategoryDialog
      :calendarCategoryProp="calendarCategory"
      :processType="'new'"
      :showDialog="newCalendarCategoryDialog"
      @dialogChange="(data) => (newCalendarCategoryDialog = data)"
    ></EditCalendarCategoryDialog>
  </div>
</template>

<script>
import ResultTableView from "@/components/management/calendar-categories/results/ResultsTableView.vue";

import EditCalendarCategoryDialog from "@/components/management/calendar-categories/dialogs/EditCalendarCategoryDialog.vue";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    ResultTableView,
    EditCalendarCategoryDialog,
  },
  created() {
    this.fetchCalendarCategoryList({
      params:{
        
      },
      body:{},
      
    });
  },
  computed: {
    ...mapState("calendar", ["calendarCategoryList"]),
    ...mapState("auth", ["user"]),
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      showNewUserDialog: false,
      calendarCategory:null,
      newCalendarCategoryDialog: false
    };
  },
  methods: {
    ...mapActions("calendar", ["fetchCalendarCategoryList"]),
    openNewCalendarCategoryDialog(){
      this.newCalendarCategoryDialog = true;
    }
  },
};
</script>