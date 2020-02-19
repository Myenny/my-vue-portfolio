import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import MainLayout from "@/views/MainLayout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainLayout",
    component: MainLayout
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;