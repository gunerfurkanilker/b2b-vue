//import Swal from "sweetalert2";
//import Vue from "vue";
export const state = {
  reportList: [],
  reportFilterList: [],

};

export const mutations = {

  setReportList(state, data) {
    state.reportList = data;
  },
  setReportFilterList(state, data) {
    state.reportFilterList = data;
  },
  
}

export const getters = {

};

export const actions = {
  async initReportList(context) {
    let reportListArray = [
      {
        title: 'Fatura Karlılık Raporu',
        description: 'Fatura karlılık raporunuzu buradan görüntüleyebilirsiniz',
        filterList:[],
        icon: 'mdi-chart-line-variant',
        url:'invoice-profitability'
      },
      {
        title: 'Stok Analiz Raporu',
        description: 'Stok analiz raporunu buradan görüntüleyebilirsiniz',
        filterList:[],
        icon: 'mdi-chart-bell-curve',
        url:'stock-analysis'
      },
      {
        title: 'Hedef & Potansiyel Cari Raporu',
        description: 'Hedefler ve potansiyellerle ilgili cari raporunu buradan görüntüleyebilirsiniz',
        filterList:[],
        icon: 'mdi-finance',
        url:'current-giro-list'
      },
      {
        title: 'Hedef & Potansiyel Plasiyer Raporu',
        description: 'Hedefler ve potansiyellerle ilgili plasiyer raporunu buradan görüntüleyebilirsiniz',
        filterList:[],
        icon: 'mdi-finance',
        url:'salesperson-giro-list'
      },
      {
        title: 'Plasiyer Ürün Satış Raporu',
        description: 'Plasiyerlerinizin ürün satış raporunu buradan görüntüleyebilirsiniz',
        filterList:[],
        icon: 'mdi-chart-pie',
        url:'salesperson-stock-sale'
      },
      {
        title: 'En İyi Satış Raporu',
        description: 'Müşterilerinizin grup bazında en iyi satışlarını buradan görüntüleyebilirsiniz',
        filterList:[],
        icon: 'mdi-podium-gold',
        url:'best-sales'
      },
      {
        title: 'Cari Performans Raporu',
        description: 'Müşterilerinizin hareket performanslarını buradan görüntüleyebilirsiniz',
        filterList:[],
        icon: 'mdi-chart-line-stacked',
        url:'current-performance'
      },
      {
        title: 'Genel Borç/Alacak',
        description: 'Genel borç/alacak raporunu buradan görüntüleyebilirsiniz',
        filterList:[],
        icon: 'mdi-bank-transfer',
        url:'general-debit-credit'
      },
      {
        title: 'Çek Raporu',
        description: 'Çek raporunu buradan görüntüleyebilirsiniz',
        filterList:[],
        icon: 'mdi-checkbook',
        url:'report-cheque'
      },
      {
        title: 'Senet Raporu',
        description: 'Senet raporunu buradan görüntüleyebilirsiniz',
        filterList:[],
        icon: 'mdi-text-box-outline',
        url:'report-bill'
      },
      {
        title: 'Kasa Raporu',
        description: 'Kasa raporunu buradan görüntüleyebilirsiniz',
        filterList:[],
        icon: 'mdi-wallet',
        url:'report-safe'
      },
    ];
    context.commit("setReportList",reportListArray);
  },

  

};
