import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Addcard from "../views/Addcard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Addcard",
    name: "Addcard",
    component: Addcard,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
