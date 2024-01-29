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
    name: "Visão\n Geral",
    component: HomeView,
  },
  {
    path: "/1",
    name: "1\nMedir",
    component: SlideOne,
  },
  {
    path: "/2",
    name: "2\nGravar",
    component: SlideTwo,
  },
  {
    path: "/3",
    name: "3\nCalcular",
    component: SlideThree,
  },
  {
    path: "/4",
    name: "4\nIdentificar",
    component: SlideFour,
  },
  {
    path: "/estudo-de-caso",
    name: "Estudo\n de Caso",
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
