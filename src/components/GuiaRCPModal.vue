<template>
  <div
    class="modal fade modal-resposta estudo-de-caso"
    :id="'guiaRCPModal' + index"
    tabindex="-1"
    :aria-labelledby="'guiaRCPModal' + index + 'Label'"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="estudoModal${i}Label">
            Guia RCP, março de 2020
          </h1>
        </div>
        <div class="modal-body" v-html="modal"></div>
        <div class="modal-footer">
          <button
            class="nav-item btn btn-primary btn-proximo"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="swiperNext"
          >
            CONTINUAR
            <span class="mdi mdi-chevron-right"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuiaRCPModal",

  props: ["modal", "index"],

  methods: {
    swiperNext() {
      const swiperEl = document.querySelector("swiper-container");

      swiperEl.swiper.slideNext();
    },
  },
};
</script>
