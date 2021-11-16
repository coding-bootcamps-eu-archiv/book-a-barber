import { createRouter, createWebHistory } from "vue-router";
import PageForSearchLocations from "@/views/PageForSearchLocations.vue";
import PageForOurServices from "@/views/PageForOurServices.vue";
import PageForCalender from "@/views/PageForCalender.vue";
import PageForPayment from "@/views/PageForPayment.vue";
import PageForConfirm from "@/views/PageForConfirm.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: PageForSearchLocations,
  },
  {
    path: "/PageForOurServices",
    name: "PageForOurServices",
    component: PageForOurServices,
  },
  {
    path: "/PageForCalender",
    name: "PageForCalender",
    component: PageForCalender,
  },
  {
    path: "/PageForPayment",
    name: "PageForPayment",
    component: PageForPayment,
  },
  {
    path: "/PageForConfirm",
    name: "PageForConfirm",
    component: PageForConfirm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
