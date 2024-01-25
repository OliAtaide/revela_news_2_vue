import { createStore } from "vuex";

export default createStore({
  state: {
    titulos: [],
  },
  getters: {},
  mutations: {
    setTitulos: (state, titulos) => (state.titulos = titulos),
  },
  actions: {
    setSwiperSettings() {
      window.$(".game .navbar-brand h1").html(this.state.titulos[0]);
      const swiperEl = document.querySelector("swiper-container");

      swiperEl.addEventListener("swiperslidechange", (event) => {
        const index = event.detail[0].activeIndex;
        window.$(".game .navbar-brand h1").html(this.state.titulos[index]);
      });

      const swiperNext = document.getElementById("swiperNext");
      const swiperPrev = document.getElementById("swiperPrev");
      return {
        swiperPrev,
        swiperNext,
      };
    },
  },
  modules: {},
});
