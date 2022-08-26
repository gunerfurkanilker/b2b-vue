//import Swal from "sweetalert2";
//import Vue from "vue";

export const state = {
    sliderList: [],
    sliderListHeaders: [],
    sliderListLoading: false,
  
  };
  
  export const mutations = {
    setSliderList(state, data) {
      state.sliderList = data;
    },
    setSliderListHeaders(state, data) {
      state.sliderListHeaders = data;
    },
    setSliderListLoading(state, data) {
      state.sliderListLoading = data;
    }
  }
  
  export const getters = {
    
  };
  
  export const actions = {
    fetchSliderList(context) {
      context.commit("setSliderListLoading", true)
      setTimeout(function () {
        context.commit('setSliderList', [
          {
            id: 1,
            image: require('@/assets/images/product/img-6.png'),
            title: "Triger Seti",
            content: "Triger Seti Açıklama",
            order: "1",
            start_date: "2022-07-14",
            status: true
          },
          {
            id: 2,
            image: require('@/assets/images/product/img-8.png'),
            title: "Baskı Balata",
            content: "Baskı Balata Açıklama",
            order: "2",
            start_date: "2022-07-20",
            status: true
          },
          {
            id: 3,
            image: require('@/assets/images/product/img-2.png'),
            title: "Volant Diski",
            content: "Volant diski açıklama",
            order: "3",
            start_date: "2022-07-25",
            status: false
          }
        ]);
        context.commit('setSliderListHeaders', [
          {
            key: 'image',
            label: 'Resim',
            sortable: false,
  
          },
          {
            key: 'title',
            label: 'Başlık',
            sortable: false,
  
          },
          {
            key: 'content',
            label: 'Yazı',
            sortable: true,
  
          },
          {
            key: 'order',
            label: 'Sıra',
            sortable: true,
  
          },
          {
            key: 'start_date',
            label: 'Başlangıç Tarihi',
            sortable: true,
  
          },
          {
            key: 'status',
            label: 'Durum',
            sortable: false,
            class: "text-center"
  
          },
          {
            key: 'process',
            label: 'İşlem',
            sortable: false,
            class: "text-center"
  
          }
        ]);
        context.commit("setSliderListLoading", false)
      }, 2000)
    }
  };
  