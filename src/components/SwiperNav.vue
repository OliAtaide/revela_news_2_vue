<template>
  <nav class="footer d-flex p-3 mt-auto">
    <div class="navbar-nav d-flex flex-row">
      <button class="nav-item btn btn-secondary">
        <span class="mdi mdi-notebook"></span>
        RECURSOS
      </button>
      <button class="nav-item btn btn-secondary">
        <span class="mdi mdi-close-circle"></span>
        SAIR
      </button>
    </div>
    <div class="ms-auto navbar-nav d-flex flex-row">
      <button class="nav-item btn btn-primary btn-anterior" id="swiperPrev">
        <span class="mdi mdi-chevron-left"></span>
        ANTERIOR
      </button>
      <button class="nav-item btn btn-primary btn-proximo" id="swiperNext">
        <span class="mdi mdi-chevron-right"></span>
        PRÓXIMO
      </button>
    </div>
  </nav>
</template>

<style></style>

<script>
export default {
  name: "SwiperNav",

  data() {
    return {
      prevSlide: "",
      nextSlide: "",
    };
  },
  methods: {
    setData(prev, next) {
      this.prevSlide = prev;
      this.nextSlide = next;
    },
  },
  mounted() {
    const swiperEl = document.querySelector("swiper-container");
    const prevBtn = document.querySelector("#swiperPrev");
    const nextBtn = document.querySelector("#swiperNext");

    const routes = this.$router.options.routes;
    const route = this.$route.path;

    for (let i = 0; i < routes.length; i++) {
      if (route == routes[i].path) {
        const prev = routes[i - 1];
        const next = routes[i + 1];
        this.setData(prev, next);
      }
    }

    prevBtn.addEventListener("click", () => {
      const SwiperSlidePrev = document.querySelector(".swiper-slide-prev");

      if (SwiperSlidePrev != null) {
        swiperEl.swiper.slideNext();
      } else if (this.prevSlide != undefined) {
        this.$router.push(this.prevSlide);
      }
    });

    nextBtn.addEventListener("click", () => {
      const SwiperSlideNext = document.querySelector(".swiper-slide-next");

      if (SwiperSlideNext != null) {
        swiperEl.swiper.slideNext();
      } else if (this.nextSlide != undefined) {
        this.$router.push(this.nextSlide);
      }
    });
  },
};
</script>

<style scoped>
button {
  display: flex;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
}
.mdi {
  font-size: 24px;
}
</style>
