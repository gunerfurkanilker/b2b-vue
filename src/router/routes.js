//import store from "@/state/store";

export default [
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/views/login/Login.vue"),
  },
  {
    path: "/",
    name: "default",
    meta: {
      authRequired: false,
    },
    component: () => import("../pages/views/dashboard/Dashboard.vue"),
  },
  {
    path: "/product-search",
    name: "productSearch",
    component: () => import("../pages/views/product-search/ProductSearch.vue"),
  },
  {
    path: "/current-list",
    name: "currentList",
    component: () => import("../pages/views/current/CurrentList.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../pages/views/cart/Cart.vue"),
  },
  {
    path: "/cart/checkout",
    name: "cartCheckout",
    component: () => import("../pages/views/cart/Checkout.vue"),
  },
  {
    path: "/order-list",
    name: "orderList",
    component: () => import("../pages/views/order/OrderList.vue"),
  },
  {
    path: "/b2b-order-list",
    name: "b2bOrderList",
    component: () => import("../pages/views/order/B2BOrderList.vue"),
  },
  {
    path: "/pending-order-list",
    name: "waitingOrderList",
    component: () => import("../pages/views/order/WaitingOrderList.vue"),
  },
  {
    path: "/order-detail",
    name: "orderDetail",
    component: () => import("../pages/views/order/OrderDetail.vue"),
  },
  {
    path: "/management/user-management",
    name: "userManagement",
    component: () => import("../pages/views/management/UserManagement.vue"),
  },
  {
    path: "/management/user-applicants",
    name: "userApplicants",
    component: () => import("../pages/views/management/UserApplicants.vue"),
  },
  {
    path: "/management/settings",
    name: "settings",
    component: () => import("../pages/views/management/Settings.vue"),
  },
  {
    path: "/management/announcement",
    name: "announcements",
    component: () => import("../pages/views/management/Announcements.vue"),
  },
  {
    path: "/management/payment-settings",
    name: "paymentSettings",
    component: () => import("../pages/views/management/PaymentSettings.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: require("./views/utility/404").default,
  },
  // Redirect any unmatched routes to the 404 page. This may
  // require some server configuration to work in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  {
    path: "*",
    redirect: "404",
  },
  {
    path: "/pages/starter",
    name: "Starter",
    meta: { authRequired: true },
    component: () => import("./views/utility/starter"),
  },
  {
    path: "/pages/maintenance",
    name: "Maintenance",
    meta: { authRequired: true },
    component: () => import("./views/utility/maintenance"),
  },
  {
    path: "/pages/coming-soon",
    name: "coming-soon",
    meta: { authRequired: true },
    component: () => import("./views/utility/coming-soon"),
  },
  {
    path: "/pages/timeline",
    name: "Timeline",
    meta: { authRequired: true },
    component: () => import("./views/utility/timeline"),
  },
  {
    path: "/pages/faqs",
    name: "FAQs",
    meta: { authRequired: true },
    component: () => import("./views/utility/faqs"),
  },
  {
    path: "/pages/pricing",
    name: "Pricing",
    meta: { authRequired: true },
    component: () => import("./views/utility/pricing"),
  },
  {
    path: "/pages/404",
    name: "Error-404",
    meta: { authRequired: true },
    component: () => import("./views/utility/404"),
  },
  {
    path: "/pages/500",
    name: "Error-500",
    meta: { authRequired: true },
    component: () => import("./views/utility/500"),
  }
];