import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/create-idea",
    name: "create-idea",
    component: () =>
      import("../views/CreateIdea.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
