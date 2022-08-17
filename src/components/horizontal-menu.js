export const menuItems = [
    {
        id: 1,
        label: 'Anasayfa',
        icon: 'bx-bar-chart',
        link: '/',
    },
    {
        id: 2,
        label: 'Ürün Arama',
        icon: 'bx-search',
        link: '/product-search',
    },
    {
        id: 3,
        label: 'Cari',
        icon: 'bx-user',
        subItems: [
            {
                id: 4,
                label: 'Cari Listesi',
                link: '/current-list',
                parentId: 3
            },
            {
                id: 5,
                label: 'Yeni Cari',
                link: '/pages/coming-soon',
                parentId: 3
            },
            {
                id: 6,
                label: "Onaydaki Cariler",
                link: "/pages/coming-soon",
                parentId: 3
            },
            {
                id: 7,
                label: "B2B Carileri",
                link: "/pages/coming-soon",
                parentId: 3
            }
        ]
    },
    {
        id: 8,
        label: 'Sipariş İşlemleri',
        icon: 'bx-cart',
        subItems: [
            {
                id: 9,
                label: 'Siparişler',
                link: '/order-list',
                parentId: 8
            },
            {
                id: 10,
                label: 'B2B Siparişleri',
                link: '/b2b-order-list',
                parentId: 8
            },
            {
                id: 11,
                label: "Bekleyen Siparişler",
                link: "/pending-order-list",
                parentId: 8
            }
        ]
    },
    {
        id: 12,
        label: 'Online Tahsilat',
        icon: 'bx-credit-card',
        subItems: [
            {
                id: 13,
                label: 'Tahsilat Yap',
                link: '/pages/coming-soon',
                parentId: 12
            },
            {
                id: 14,
                label: 'Tahsilatlar',
                link: '/pages/coming-soon',
                parentId: 12
            },
        ]
    },
    {
        id: 15,
        label: 'Teklif',
        icon: 'bx-transfer',
        link: '/pages/coming-soon',
    },
    {
        id: 16,
        label: 'Takvim',
        icon: 'bx-calendar',
        link: '/pages/coming-soon',
    },
    {
        id: 17,
        label: 'Yönetim',
        icon: 'bx-cog',
        subItems: [
            {
                id: 18,
                label: 'Kullanıcı Yönetimi',
                link: '/management/user-management',
                parentId: 17
            },
            {
                id: 19,
                label: 'Kullanıcı Başvuruları',
                link: '/management/user-applicants',
                parentId: 17
            },
            {
                id: 19,
                label: 'Ayarlar',
                link: '/pages/coming-soon',
                parentId: 17
            },
            {
                id: 20,
                label: 'Duyurular',
                link: '/pages/coming-soon',
                parentId: 17
            },
            {
                id: 21,
                label: 'Pos Yönetimi',
                link: '/pages/coming-soon',
                parentId: 17
            },
            {
                id: 22,
                label: 'Slider Yönetimi',
                link: '/pages/coming-soon',
                parentId: 17
            },
            {
                id: 23,
                label: 'Ödeme Tipleri',
                link: '/pages/coming-soon',
                parentId: 17
            },
            {
                id: 24,
                label: 'Sepet Kategorileri',
                link: '/pages/coming-soon',
                parentId: 17
            },
            {
                id: 25,
                label: 'Stok Kategorileri',
                link: '/pages/coming-soon',
                parentId: 17
            },
            {
                id: 26,
                label: 'Detaylı Raporlama',
                link: '/pages/coming-soon',
                parentId: 17
            },
            {
                id: 27,
                label: 'Hedefler',
                link: '/pages/coming-soon',
                parentId: 17
            },
            {
                id: 28,
                label: 'Potansiyeller',
                link: '/pages/coming-soon',
                parentId: 17
            },
            {
                id: 29,
                label: 'Takcim Kategorileri',
                link: '/pages/coming-soon',
                parentId: 17
            },
        ]
    },
];

