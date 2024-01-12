import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SlideOne from "../views/SlideOne.vue";
import SlideTwo from "../views/SlideTwo.vue";
import SlideThree from "../views/SlideThree.vue";
import SlideFour from "../views/SlideFour.vue";
import ResumoPage from "../views/ResumoPage.vue";
import EstudoDeCaso from "../views/EstudoDeCaso.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/1",
    name: "slideOne",
    component: SlideOne,
  },
  {
    path: "/2",
    name: "slideTwo",
    component: SlideTwo,
  },
  {
    path: "/3",
    name: "slideThree",
    component: SlideThree,
  },
  {
    path: "/4",
    name: "slideFour",
    component: SlideFour,
  },
  {
    path: "/estudo-de-caso",
    name: "Estudo de Caso",
    component: EstudoDeCaso,
  },
  {
    path: "/resumo",
    name: "Resumo",
    component: ResumoPage,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
