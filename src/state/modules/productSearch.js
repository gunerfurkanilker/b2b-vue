export const state = {
    listDatas:[],
    listHeaders:[],
    listDataLoading:false
};

export const mutations = {
    setListDatas(state,data)
    {
        state.listDatas = data;
    },
    setListHeaders(state,data){
        state.listHeaders = data;
    },
    setListDataLoading(state,data)
    {
        state.listDataLoading = data;
    }
};

export const getters = {
    getCardViewPagination(state){
        //let start = (currentPage-1)*perPage;//20
        //let end = start + perPage;//60;
        return state.listDatas;
    }
};

export const actions = {
    
    getListDatas(context){
        context.commit("setListDataLoading",true)
        setTimeout(function (){
            context.commit('setListDatas',[
                {
                  status: "12672",
                  stock_code: "STR 11749/710",
                  stock_name: "İNÇ KONİK MAKARALI RULMAN",
                  measure: "",
                  list_price: "1,4408$",
                  offer_price: "2018/07/29",
                  net_price_with_kdv: "20,6581 TL (KDV Hariç)",
                  net_price_without_kdv: "24,3766 TL (KDV Dahil)",
                  images: [require('@/assets/images/product/img-6.png'), require('@/assets/images/product/img-3.png'), require('@/assets/images/product/img-2.png'), require('@/assets/images/product/img-1.png')],
                },
                {
                  status: "10266",
                  stock_code: "SKM 472/10",
                  stock_name: "YUVA SEKMANI",
                  measure: "KALINLIK-1 , DIŞ ÇAP-10,8",
                  list_price: "0,0000 ₺",
                  offer_price: "0,0000 ₺",
                  net_price_with_kdv: "0,0000 TL (KDV Hariç)",
                  net_price_without_kdv: "0,0000 TL (KDV Dahil)",
                  images: [require('@/assets/images/product/img-6.png'), require('@/assets/images/product/img-3.png'), require('@/assets/images/product/img-2.png'), require('@/assets/images/product/img-1.png')],
                },
                {
                  status: "8580",
                  stock_code: "NMB 608 ZZ",
                  stock_name: "SABİT BİLYALI RULMANLAR",
                  measure: "8X22X7",
                  list_price: "0,0000 $",
                  offer_price: "0,0000 $",
                  net_price_with_kdv: "13,8320 TL (KDV Hariç)",
                  net_price_without_kdv: "16,3217 TL (KDV Dahil)",
                  images: [require('@/assets/images/product/img-6.png'), require('@/assets/images/product/img-3.png'), require('@/assets/images/product/img-2.png'), require('@/assets/images/product/img-1.png')],
                },
                {
                  status: "8258",
                  stock_code: "SKM 6799/1,5",
                  stock_name: "	SEKMAN",
                  measure: "",
                  list_price: "0,0000 ₺",
                  offer_price: "0,0000 ₺",
                  net_price_with_kdv: "0,0000 TL (KDV Hariç)",
                  net_price_without_kdv: "0,0000 TL (KDV Dahil)",
                  images: [require('@/assets/images/product/img-2.png'), require('@/assets/images/product/img-6.png'), require('@/assets/images/product/img-3.png'), require('@/assets/images/product/img-1.png')],
                },
                {
                  status: "7823",
                  stock_code: "SKM 6799/1,9",
                  stock_name: "SEKMAN",
                  measure: "",
                  list_price: "0,0000 ₺",
                  offer_price: "0,0000 ₺",
                  net_price_with_kdv: "0,0000 TL (KDV Hariç)",
                  net_price_without_kdv: "0,0000 TL (KDV Dahil)",
                  images: [require('@/assets/images/product/img-6.png'), require('@/assets/images/product/img-3.png'), require('@/assets/images/product/img-2.png'), require('@/assets/images/product/img-1.png')],
                },
                {
                  status: "7400",
                  stock_code: "NMB 608 2RS",
                  stock_name: "NMB RULMAN",
                  measure: "",
                  list_price: "0,0000 $",
                  offer_price: "0,8800 $",
                  net_price_with_kdv: "15,8080 TL (KDV Hariç)",
                  net_price_without_kdv: "18,6534 TL (KDV Dahil)",
                  images: [require('@/assets/images/product/img-1.png'),require('@/assets/images/product/img-6.png'), require('@/assets/images/product/img-3.png'), require('@/assets/images/product/img-2.png')],
                },
                {
                  status: "6341",
                  stock_code: "NSK 6203 DDU C3",
                  stock_name: "NMB RULMAN",
                  measure: "17X40X12",
                  list_price: "13,0700 €",
                  offer_price: "2,1000 €",
                  net_price_with_kdv: "38,3834 TL (KDV Hariç)",
                  net_price_without_kdv: "45,2924 TL (KDV Dahil)",
                  images: [require('@/assets/images/product/img-3.png'), require('@/assets/images/product/img-6.png'), require('@/assets/images/product/img-2.png'), require('@/assets/images/product/img-1.png')],
                },
                {
                  status: "5760",
                  stock_code: "NMB 626 2RS",
                  stock_name: "SABİT BİLYALI RULMANLAR",
                  measure: "",
                  list_price: "0,0000 $",
                  offer_price: "0,8300 $",
                  net_price_with_kdv: "14,9098 TL (KDV Hariç)",
                  net_price_without_kdv: "17,5935 TL (KDV Dahil)",
                  images: [require('@/assets/images/product/img-6.png'), require('@/assets/images/product/img-3.png'), require('@/assets/images/product/img-2.png'), require('@/assets/images/product/img-1.png')],
                },
                {
                  status: "5108",
                  stock_code: "GMW T126",
                  stock_name: "DİNGİL PİMİ RULMAN SİLİNDİRİK 32,00x56,00x16mm",
                  measure: "",
                  list_price: "2,7500 $",
                  offer_price: "0,0000 $",
                  net_price_with_kdv: "49,3999 TL (KDV Hariç)",
                  net_price_without_kdv: "58,2919 TL (KDV Dahil)",
                  images: [require('@/assets/images/product/img-6.png'), require('@/assets/images/product/img-3.png'), require('@/assets/images/product/img-2.png'), require('@/assets/images/product/img-1.png')],
                },
                {
                  status: "4088",
                  stock_code: "NSK B 17-99 T1XDDG8CG16E",
                  stock_name: "NSK RULMAN Fırsat Ürünü!!",
                  measure: "17X52X17",
                  list_price: "29,1100 €",
                  offer_price: "4,3500 €",
                  net_price_with_kdv: "79,5084 TL (KDV Hariç)",
                  net_price_without_kdv: "93,8199 TL (KDV Dahil)",
                  images: [require('@/assets/images/product/img-6.png'), 
                    require('@/assets/images/product/img-3.png'), 
                    require('@/assets/images/product/img-2.png'), 
                    require('@/assets/images/product/img-1.png')
                  ],
                },
                {
                  status: "3734",
                  stock_code: "NMB 629 ZZ",
                  stock_name: "SABİT BİLYALI RULMANLAR",
                  measure: "9X26X8",
                  list_price: "0,0000 $",
                  offer_price: "0,7700 $",
                  net_price_with_kdv: "13,8320 TL (KDV Hariç)",
                  net_price_without_kdv: "16,3217 TL (KDV Dahil)",
                  images: [require('@/assets/images/product/img-6.png'), require('@/assets/images/product/img-3.png'), require('@/assets/images/product/img-2.png'), require('@/assets/images/product/img-1.png')],
                },

              ]);
            context.commit('setListHeaders',[
              {
                key: 'images',
                label: 'Resim',
                sortable: false,
                
              },
              {
                key: 'status',
                label: 'Durum',
                sortable: true,
                
              },
              {
                key: 'stock_code',
                label: 'Stok Kodu',
                sortable: false,
                
              },
              {
                key: 'stock_name',
                label: 'Stok Adı',
                sortable: false,
               
              },
              {
                key: 'measure',
                label: 'Ölçü',
                sortable: false,
                
              },
              {
                key: 'list_price',
                label: 'Liste Fiyatı',
                sortable: false,
                
              },
              {
                key: 'offer_price',
                label: 'Kampanya',
                sortable: false,
                
              },
              {
                key: 'net_price_with_kdv',
                label: 'Net Fiyat',
                sortable: false,
                
              },
              {
                key: 'net_price_without_kdv',
                label: 'Net Fiyat',
                sortable: false,
                
              }
            ]);  
            context.commit("setListDataLoading",false)
        },4000)
        
    }
};
