export const state = {
    orders: [],
    orderHeaders: [],
    ordersLoading: false
};

export const mutations = {
    setOrders(state, data) {
        state.orders = data;
    },
    setOrderHeaders(state, data) {
        state.orderHeaders = data
    },
    setOrdersLoading(state, data) {
        state.ordersLoading = data
    }
};

export const getters = {
    getOrders(state) {
        return state.orders;
    }
};

export const actions = {
    getOrders(context, type) {
        context.commit("setOrdersLoading", true)
        setTimeout(function () {
            if (type == "siparisList") {
                context.commit('setOrders', [
                    {
                        order_no: "Q00000000005715",
                        date: "10-08-2022",
                        expiry_date: "08-11-2022",
                        cari_kod: "00983",
                        cari_ad: "ÖZKAN RULMAN / ÖZKAN GÜNAY",
                        plasiyer_kod: "01",
                        plasiyer_ad: "BÜLENT CULUM",
                        total: "508,24 TRY"
                    },
                    {
                        order_no: "Q00000000005714",
                        date: "10-08-2022",
                        expiry_date: "08-11-2022",
                        cari_kod: "00140",
                        cari_ad: "PİRİMOĞLU RULMAN/MUHAMMED ŞERİF GEDİK",
                        plasiyer_kod: "00",
                        plasiyer_ad: "MERKEZ",
                        total: "1.884,11 TRY"
                    },
                    {
                        order_no: "Q00000000005713",
                        date: "10-08-2022",
                        expiry_date: "08-11-2022",
                        cari_kod: "00032",
                        cari_ad: "ONUR TİCARET-İHSAN NİŞANCI",
                        plasiyer_kod: "03",
                        plasiyer_ad: "NUTULLAH SUBAŞI",
                        total: "3.398,19 TRY"
                    },
                    {
                        order_no: "Q00000000005712",
                        date: "10-08-2022",
                        expiry_date: "08-11-2022",
                        cari_kod: "00595",
                        cari_ad: "RULSAN RULMAN TİCARET A.Ş",
                        plasiyer_kod: "03",
                        plasiyer_ad: "NUTULLAH SUBAŞI",
                        total: "3.936,59 TRY"
                    },
                    {
                        order_no: "Q00000000005712",
                        date: "10-08-2022",
                        expiry_date: "08-11-2022",
                        cari_kod: "00595",
                        cari_ad: "RULSAN RULMAN TİCARET A.Ş",
                        plasiyer_kod: "03",
                        plasiyer_ad: "NUTULLAH SUBAŞI",
                        total: "3.936,59 TRY"
                    },
                    {
                        order_no: "Q00000000005711",
                        date: "10-08-2022",
                        expiry_date: "08-11-2022",
                        cari_kod: "00014",
                        cari_ad: "TÜMOSAN TRAKTÖR SERVİS-TURHAN SURKUÇ",
                        plasiyer_kod: "04",
                        plasiyer_ad: "MEHMET KAVUŞ",
                        total: "1.648,12 TRY"
                    },
                    {
                        order_no: "Q00000000005710",
                        date: "10-08-2022",
                        expiry_date: "08-11-2022",
                        cari_kod: "02356",
                        cari_ad: "ÖZYAYLA RULMAN-MUSTAFA ÖZYAYLA",
                        plasiyer_kod: "01",
                        plasiyer_ad: "BÜLENT CULUM",
                        total: "213,99 TRY"
                    },
                    {
                        order_no: "Q00000000005709",
                        date: "10-08-2022",
                        expiry_date: "10-08-2022",
                        cari_kod: "00640",
                        cari_ad: "OTOMOTO RULMAN TİCARET-IŞILTAN SÖNMEZ",
                        plasiyer_kod: "00",
                        plasiyer_ad: "MERKEZ",
                        total: "155,68 TRY"
                    },
                    {
                        order_no: "Q00000000005699",
                        date: "10-08-2022",
                        expiry_date: "10-08-2022",
                        cari_kod: "00273",
                        cari_ad: "ÇELİK-İŞ TİCARET/İSKENDER KEKLİK",
                        plasiyer_kod: "04",
                        plasiyer_ad: "MEHMET KAVUŞ",
                        total: "148,53 TRY"
                    },

                ]);
                context.commit('setOrderHeaders', [
                    {
                        key: 'order_no',
                        label: 'Sipariş No',
                        sortable: true,

                    },
                    {
                        key: 'date',
                        label: 'Tarih',
                        sortable: true,

                    },
                    {
                        key: 'expiry_date',
                        label: 'Vade Tarihi',
                        sortable: true,

                    },
                    {
                        key: 'cari_kod',
                        label: 'Cari Kodu',
                        sortable: true,

                    },
                    {
                        key: 'cari_ad',
                        label: 'Cari Adı',
                        sortable: true,

                    },
                    {
                        key: 'plasiyer_kod',
                        label: 'Plasiyer Kodu',
                        sortable: true,

                    },
                    {
                        key: 'plasiyer_ad',
                        label: 'Plasiyer Adı',
                        sortable: true,

                    },
                    {
                        key: 'total',
                        label: 'Toplam Tutar',
                        sortable: true,

                    },
                    {
                        key: 'detay',
                        label: 'Detay',
                        sortable: false,
                    },
                    {
                        key: 'yazdir',
                        label: 'Yazdır',
                        sortable: false,
                    },
                ]);
            }
            else if (type == "b2bSiparisList") {
                context.commit('setOrders', [
                    {
                        order_no: "267076961",
                        erp_order_no: "Q00000000005722",
                        date: "10-08-2022 18:02",
                        plasiyer_ad: "MEHMET KAVUŞ",
                        cari_kod: "01909",
                        cari_ad: "ŞİMŞEK OTOMOTİV / TUGAY ŞİMŞEK",
                        billing_type: "Cari Hesap",
                        cargo: "SÜRAT KARGO (ANLAŞMALI)",
                        total: "2.899,03 TRY"
                    },
                    {
                        order_no: "987601809",
                        erp_order_no: "Q00000000005721",
                        date: "10-08-2022 17:17",
                        plasiyer_ad: "BÜLENT CULUM",
                        cari_kod: "02942",
                        cari_ad: "TEKPAR YEDEK PARÇA OTO SERVİS SAN.VE TİC.LTD.ŞTİ.",
                        billing_type: "Cari Hesap",
                        cargo: "ELDEN (MAĞAZA TESLİM)",
                        total: "515,48 TRY"
                    },
                    {
                        order_no: "703280608",
                        erp_order_no: "Q00000000005720",
                        date: "10-08-2022 17:01",
                        plasiyer_ad: "NUTULLAH SUBAŞI",
                        cari_kod: "01226",
                        cari_ad: "ÇALIK OTO / SERKAN ÇALIK",
                        billing_type: "Cari Hesap",
                        cargo: "SÜRAT KARGO (ANLAŞMALI)",
                        total: "1.505,07 TRY"
                    },

                ]);
                context.commit('setOrderHeaders', [
                    {
                        key: 'order_no',
                        label: 'Sipariş No',
                        sortable: true,

                    },
                    {
                        key: 'erp_order_no',
                        label: 'ERP Sipariş No',
                        sortable: true,

                    },
                    {
                        key: 'date',
                        label: 'Tarih',
                        sortable: true,

                    },
                    {
                        key: 'plasiyer_ad',
                        label: 'Plasiyer Adı',
                        sortable: true,

                    },
                    {
                        key: 'cari_kod',
                        label: 'Cari Kodu',
                        sortable: true,

                    },
                    {
                        key: 'cari_ad',
                        label: 'Cari Adı',
                        sortable: true,

                    },
                    {
                        key: 'billing_type',
                        label: 'Ödeme Tipi',
                        sortable: true,

                    },
                    {
                        key: 'cargo',
                        label: 'Kargo',
                        sortable: true,

                    },
                    {
                        key: 'total',
                        label: 'Toplam Tutar',
                        sortable: true,

                    }
                ]);
            }
            else if (type == "waitingList") {
                context.commit('setOrders', [
                    {
                        date: "10-08-2022 18:02",
                        stock_code: "MEHMET KAVUŞ",
                        stock_name: "01909",
                        order_no: "ŞİMŞEK OTOMOTİV / TUGAY ŞİMŞEK",
                        amount: "Cari Hesap",
                        deliver_amount: "SÜRAT KARGO (ANLAŞMALI)",
                        remaining_amount: "2.899,03 TRY",
                        current: "2.899,03 TRY",
                        plasiyer_ad :"Test"
                    },
                    {
                        date: "10-08-2022 18:02",
                        stock_code: "MEHMET KAVUŞ",
                        stock_name: "01909",
                        order_no: "ŞİMŞEK OTOMOTİV / TUGAY ŞİMŞEK",
                        amount: "Cari Hesap",
                        deliver_amount: "SÜRAT KARGO (ANLAŞMALI)",
                        remaining_amount: "2.899,03 TRY",
                        current: "2.899,03 TRY",
                        plasiyer_ad :"Test"
                    },
                    {
                        date: "10-08-2022 18:02",
                        stock_code: "MEHMET KAVUŞ",
                        stock_name: "01909",
                        order_no: "ŞİMŞEK OTOMOTİV / TUGAY ŞİMŞEK",
                        amount: "Cari Hesap",
                        deliver_amount: "SÜRAT KARGO (ANLAŞMALI)",
                        remaining_amount: "2.899,03 TRY",
                        current: "2.899,03 TRY",
                        plasiyer_ad :"Test"
                    },

                ]);
                context.commit('setOrderHeaders', [
                    {
                        key: 'date',
                        label: 'Tarih',
                        sortable: true,

                    },
                    {
                        key: 'stock_code',
                        label: 'Stok Kodu',
                        sortable: true,

                    },
                    {
                        key: 'stock_name',
                        label: 'Cari Kodu',
                        sortable: true,

                    },
                    {
                        key: 'order_no',
                        label: 'Sipariş No',
                        sortable: true,

                    },
                    {
                        key: 'amount',
                        label: 'Miktar',
                        sortable: true,

                    },
                    {
                        key: 'deliver_amount',
                        label: 'Teslim Miktarı',
                        sortable: true,

                    },
                    {
                        key: 'remaining_amount',
                        label: 'Kalan Bakiye',
                        sortable: true,

                    },
                    {
                        key: 'current',
                        label: 'Cari Adı',
                        sortable: true,
                    },
                    {
                        key: 'plasiyer_ad',
                        label: 'Plasiyer Adı',
                        sortable: true,
                    }
                    
                ]);
            }

            context.commit("setOrdersLoading", false)
        }, 4000)
    }
};
