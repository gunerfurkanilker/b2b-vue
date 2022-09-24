<template>
    <v-expansion-panel key="0">
      <v-expansion-panel-header>
        Rapor Seçimi - Seçili Rapor : Plasiyer Ürün Satış Rapor
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <div class="container-xxl-fluid py-4">
          <div class="row">
            <div class="col-lg-3 col-sm-4" v-for="report in reportList" :key="report.title">
              <v-card ripple outlined shaped hover min-height="220" @click="changeReportType(report)">
                <v-card-title>
                  <v-icon class="mx-auto" x-large
                    >{{ report.icon }}</v-icon
                  >
                </v-card-title>
                <v-card-text>
                  <div class="text-center w-100 font-weight">
                    {{ report.title }}
                  </div>
                </v-card-text>
                <v-card-actions>
                  <div class="text-center w-100">
                    {{ report.description }}
                  </div>
                </v-card-actions>
              </v-card>
            </div>
          </div>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>

import { mapState,mapActions } from 'vuex';

export default {

mounted(){
  this.initReportList();
},

computed:{
  ...mapState("report",["reportList"])
},
methods:{
  ...mapActions("report",["initReportList"]),
  changeReportType(reportType){
    this.$emit("reportTypeChange",reportType);
  }
}

}

</script>