<template>
  <swiper-slide>
    <div class="d-flex gap-3 align-items-center mb-3">
      <span :class="'hi-' + parametro.icone"></span>
      <h3 class="mb-0">
        {{ parametro.titulo }}
      </h3>
    </div>
    <p v-for="(t, i) in parametro.texto" :key="i">
      {{ t }}
    </p>
    <div class="d-flex flex-column gap-3">
      <button
        class="btn btn-primary w-25 py-3"
        v-for="(b, i) in parametro.modais"
        :key="i"
        data-bs-toggle="modal"
        :data-bs-target="'#' + b.id"
      >
        {{ b.titulo }}
      </button>
    </div>
  </swiper-slide>
</template>

<script>

export default {
  name: "ParametroFisiologico",

  props: ["parametro", "index"],

};
</script>

<style scoped>
[class^="hi-"],
[class*=" hi-"] {
  font-size: 54px;
  color: #426d6f;
}

h3 {
  font-weight: 400;
}
</style>
