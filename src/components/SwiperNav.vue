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

  mounted() {
    const swiperEl = document.querySelector("swiper-container");
    const prevBtn = document.querySelector("#swiperPrev");
    const nextBtn = document.querySelector("#swiperNext");

    prevBtn.addEventListener("click", () => {
      swiperEl.swiper.slidePrev();
    });

    nextBtn.addEventListener("click", () => {
      swiperEl.swiper.slideNext();
    });
  },
};
</script>

<style scoped>
button{
  display: flex;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
}
.mdi{
  font-size: 24px;
}
</style>