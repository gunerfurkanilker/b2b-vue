<template>
  <div class="card">
    <div class="card-body">
      <b-table
        :items="userReferanceList"
        :fields="userReferanceListHeaders"
        hover
        responsive
        sort-icon-left
        :per-page="perPage"
        :current-page="currentPage"
        :busy="userReferanceListLoading"
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
        <template #cell(status)="data">
          <v-chip
            small
            :color="data.item.status ? 'success lighten-1' : 'secondary'"
            label
          >
            {{ data.item.status ? "Onaylandı" : "Onay Bekliyor" }}
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
                  color="success darken-2"
                  @click="
                    userReferanceApprove({
                      params: {},
                      body: {
                        userReferenceId: 0,
                        roleGroupId: 0,
                        roleId: 0,
                        userId: 0,
                      },
                    })
                  "
                >
                  <v-icon>mdi-check</v-icon>
                </v-btn>
              </template>
              <span>Onayla</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  icon
                  color="danger darken-2"
                  @click="
                    userReferanceDeny({
                      params: {},
                      body: {
                        userReferenceId: 0,
                        roleGroupId: 0,
                        roleId: 0,
                        userId: 0,
                      },
                    })
                  "
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </template>
              <span>Reddet</span>
            </v-tooltip>
          </div>
        </template>
      </b-table>

      <EditUserReferanceDialog
        :userReferanceProp="userReferance"
        :processType="'edit'"
        :showDialog="showUserReferanceEditDialog"
        @dialogChange="(data) => (showUserReferanceEditDialog = data)"
      ></EditUserReferanceDialog>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import EditUserReferanceDialog from "../dialogs/EditUserReferanceDialog.vue";

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
    EditUserReferanceDialog,
  },

  computed: {
    ...mapState("user", [
      "userReferanceList",
      "userReferanceListHeaders",
      "userReferanceListLoading",
    ]),
  },
  mounted() {},
  data() {
    return {
      selectRow: false,
      userData: null,
      showUserReferanceEditDialog: false,
      userReferance: null,
    };
  },
  methods: {
    ...mapActions("user", ["userReferanceApprove", "userReferanceDeny"]),
  },
  watch: {},
};
</script>
