import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Services from "@/views/Services.vue";
import Appoinments from "@/views/Appoinments.vue";
import Payment from "@/views/Payment.vue";
import Confirm from "@/views/Confirm.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Services",
    name: "Services",
    component: Services,
  },
  {
    path: "/Appoinments",
    name: "Appoinments",
    component: Appoinments,
  },
  {
    path: "/Payment",
    name: "Payment",
    component: Payment,
  },
  {
    path: "/Confirm",
    name: "Confirm",
    component: Confirm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
