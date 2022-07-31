export const state = {
  listDatas: [],
  listHeaders: [],
  listDataLoading: false,
  current: {}
};

export const mutations = {
  setListDatas(state, data) {
    state.listDatas = data;
  },
  setListHeaders(state, data) {
    state.listHeaders = data;
  },
  setListDataLoading(state, data) {
    state.listDataLoading = data;
  },
  setCurrent(state, data) {
    state.current = data;
  }
};

export const getters = {
  getCurrent(state){
    return state.current;
  }
};

export const actions = {
  getListCurrents(context) {
    context.commit("setListDataLoading", true)
    setTimeout(function () {
      context.commit('setListDatas', [
        {
          current_code: "00650",
          title: "3A TRAKTÖR YEDEK PARÇA-FERHAT VARKAL",
          province: "ADANA / YÜREĞİR",
          salesman: "MEHMET KAVUŞ",
          debt: "0,00 TRY",
          claim: "0,00 TRY",
          balance: "0,00 TRY",
        },
        {
          current_code: "00328",
          title: "A&Z OTOMOTİV-AHMET ZEMBİLCİOĞLU",
          province: "KİLİS / MERKEZ",
          salesman: "MEHMET KAVUŞ",
          debt: "237,30 TRY",
          claim: "237,30 TRY",
          balance: "0,00 TRY",
        },
        {
          current_code: "00040",
          title: "ABDURRAHMAN KOCA",
          province: "İZMİR / BUCA",
          salesman: "MERKEZ",
          debt: "0,00 TRY",
          claim: "0,00 TRY",
          balance: "0,00 TRY",
        },
        {
          current_code: "00126",
          title: "ABDUSSAMET ALTUNOVA / NEW HOLLAND YET.SERVİS",
          province: "Ş.URFA / BİRECİK",
          salesman: "MEHMET KAVUŞ",
          debt: "5.796,00 TRY",
          claim: "3.600,00 TRY",
          balance: "2.196,00 TRY",
        },
        {
          current_code: "02369",
          title: "ABUŞLAR TAŞIMACILIK İNŞAAT OTOMOTİV SAN.TİC.LTD.ŞTİ.*",
          province: "KAYSERİ / MELİKGAZİ",
          salesman: "NUTULLAH SUBAŞI",
          debt: "6.585,58 TRY",
          claim: "6.585,58 TRY",
          balance: "0,00 TRY",
        },
        {
          current_code: "00166",
          title: "ACAR OTO/MUSTAFA ACAR",
          province: "SAMSUN / VEZİRKÖPRÜ",
          salesman: "HASAN KALBURCU",
          debt: "7.743,02 TRY",
          claim: "6.100,00 TRY",
          balance: "1.643,02 TRY",
        },
        {
          current_code: "02577",
          title: "ACAR RULMAN TİCARET V.KAYIŞ-KEÇE KASNAK ÇEŞİTLERİ -TORNA TESVİYE - ALİ PİRELİ",
          province: "BURDUR / MERKEZ",
          salesman: "MERKEZ",
          debt: "15.479,93 TRY",
          claim: "13.209,88 TRY",
          balance: "2.270,05 TRY",
        },
        {
          current_code: "03080",
          title: "ADA FONER MOTORLU ARAÇLAR SAN.TİC.VE LTD.ŞTİ.",
          province: "SAKARYA / ARİFİYE",
          salesman: "MERKEZ",
          debt: "0,00 TRY",
          claim: "0,00 TRY",
          balance: "0,00 TRY",
        },
        {
          current_code: "02935",
          title: "ADA YAPI MALZEMELERİ TİCARET - ALİ ERGİN",
          province: "İSTANBUL / KARAKÖY",
          salesman: "MERKEZ",
          debt: "0,00 TRY",
          claim: "0,00 TRY",
          balance: "0,00 TRY",
        },
        {
          current_code: "00048",
          title: "ADAL OTOMOTİV-GALİP KAYAÇETİN",
          province: "İZMİR / KONAK",
          salesman: "MERKEZ",
          debt: "0,00 TRY",
          claim: "0,00 TRY",
          balance: "0,00 TRY",
        },
        {
          current_code: "00374",
          title: "ADALI TİCARET/CELALETTİN ADALI",
          province: "K.MARAŞ / DULKADİROĞLU",
          salesman: "MEHMET KAVUŞ",
          debt: "2.180,71 TRY",
          claim: "2.180,71 TRY",
          balance: "0,00 TRY",
        },
        {
          current_code: "00545",
          title: "ADANA JEEP YEDEK PARÇA-TALİP ARSLAN",
          province: "ADANA / SEYHAN",
          salesman: "MEHMET KAVUŞ",
          debt: "9.723,41 TRY",
          claim: "5.198,12 TRY",
          balance: "4.525,29 TRY",
        },

      ]);
      context.commit('setListHeaders', [
        {
          key: 'select_row',
          label: ''
        },
        {
          key: 'current_code',
          label: 'Cari Kod',
          sortable: false,

        },
        {
          key: 'title',
          label: 'Ünvan',
          sortable: true,

        },
        {
          key: 'province',
          label: 'İl / İlçe',
          sortable: false,

        },
        {
          key: 'salesman',
          label: 'Plasiyer',
          sortable: false,

        },
        {
          key: 'debt',
          label: 'Borç',
          sortable: false,

        },
        {
          key: 'claim',
          label: 'Alacak',
          sortable: false,

        },
        {
          key: 'balance',
          label: 'Bakiye',
          sortable: false,

        }
      ]);
      context.commit("setListDataLoading", false)
    }, 4000)
  }
};
