<template>
  <div class="card">
    <div class="card-body">
      <b-table
        :items="listDatas"
        :fields="listHeaders"
        hover
        responsive
        :per-page="perPage"
        :current-page="currentPage"
        :busy="listDataLoading"
      >
        <template #cell(images)="data">
          <img
            style="width: 50px; height: 50px"
            :src="data.item.images[0]"
            alt=""
            @click="expandImage(data.item.images)"
          />
        </template>
        <template #table-busy>
          <div class="text-center">
            <b-spinner variant="primary" label="Text Centered"></b-spinner>
          </div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

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
    ...mapState("productSearch", [
      "listDatas",
      "listHeaders",
      "listDataLoading",
    ]),
  },
  data() {
    return {};
  },
  methods: {
    expandImage(images) {
      this.$viewerApi({
        images: images,
      });
    },
  },
};
</script>