<template>
  <div class="card">
    <div class="card-body">
      <b-alert show variant="danger">
        <i class="mdi mdi-alert-outline me-2"></i>
        Cari listesinden bir cari seçtikten sonra ürün arama sayfasından cari
        ile alakalı ürün ekleyebilirsiniz
      </b-alert>
      <b-table
        :items="listDatas"
        :fields="listHeaders"
        hover
        responsive
        sort-icon-left
        :per-page="perPage"
        :current-page="currentPage"
        :busy="listDataLoading"
      >
        <template #cell(select_row)="data">
          <b-form-checkbox
            id="checkbox-1"
            name="checkbox-1"
            v-model="current"
            :value="data.item"
            :unchecked-value="false"
          >
          </b-form-checkbox>
        </template>
        <template #table-busy>
          <div class="text-center">
            <b-spinner
              variant="primary"
              size="lg"
              label="Text Centered"
            ></b-spinner>
          </div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  props: {
    perPage: {
      type: Number,
    },
    currentPage: {
      type: Number,
    },
  },

  computed: {
    ...mapState("current", [
      "listDatas",
      "listHeaders",
      "listDataLoading",
      "current",
    ]),
    ...mapGetters("current", ["getCurrent"]),
    current: {
      get() {
        return this.getCurrent;
      },
      set(value) {
        if (value) {
          Swal.fire({
            title: "",
            text: "Cari : " + value.title + " seçildi",
            icon: "success",
            confirmButtonText: "Tamam",
          });
        }
        this.setCurrent(value);
      },
    },
  },
  data() {
    return {
      selectRow: false,
    };
  },
  methods: {
    ...mapMutations("current", ["setCurrent"]),
  },
  watch: {
 
  },
};
</script>
