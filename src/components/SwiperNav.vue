<template>
  <nav class="footer d-flex p-3 mt-auto">
    <div class="navbar-nav d-flex flex-row">
      <button class="nav-item btn btn-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>notebook</title>
          <path
            d="M3,7V5H5V4C5,2.89 5.9,2 7,2H13V9L15.5,7.5L18,9V2H19C20.05,2 21,2.95 21,4V20C21,21.05 20.05,22 19,22H7C5.95,22 5,21.05 5,20V19H3V17H5V13H3V11H5V7H3M7,11H5V13H7V11M7,7V5H5V7H7M7,19V17H5V19H7Z"
          />
        </svg>
        RECURSOS
      </button>
      <button class="nav-item btn btn-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>close-circle</title>
          <path
            d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"
          />
        </svg>
        SAIR
      </button>
    </div>
    <div class="ms-auto navbar-nav d-flex flex-row">
      <a href="" class="nav-item btn btn-primary link-anterior d-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>chevron-left</title>
          <path
            d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
          />
        </svg>
        ANTERIOR
      </a>
      <button class="nav-item btn btn-primary btn-anterior" id="swiperPrev">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>chevron-left</title>
          <path
            d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
          />
        </svg>
        ANTERIOR
      </button>
      <button class="nav-item btn btn-primary btn-proximo" id="swiperNext">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>chevron-right</title>
          <path
            d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
          />
        </svg>
        PRÓXIMO
      </button>
      <button class="nav-item btn btn-primary btn-modal" style="display: none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>chevron-right</title>
          <path
            d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
          />
        </svg>
        PRÓXIMO
      </button>
      <a href="" class="nav-item btn btn-primary link-proximo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>chevron-right</title>
          <path
            d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
          />
        </svg>
        PRÓXIMO
      </a>
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
