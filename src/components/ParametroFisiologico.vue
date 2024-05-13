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
    <p class="dica2" v-if="parametro.modais != null">
      Para aprofundar seus estudos, clique nos seguintes botões para mais
      informações.
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
    <p class="dica2" v-if="parametro.ncp != null">
      Clique nos botões abaixo para mais informações
    </p>
    <div class="d-flex row_nc">
      <button
        v-for="(n, i) in parametro.ncp"
        :key="i"
        type="button"
        data-bs-toggle="modal"
        :data-bs-target="'#' + n.id"
      >
        <span class="letter"> {{ n.letra }} </span>
        <span class="text" v-html="n.placeholder"></span>
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

.row_nc {
  gap: 40px;
  justify-content: center;
  button {
    aspect-ratio: 1/1;
    width: 200px;
    height: 200px;

    .text {
      display: none;
    }

    .letter {
      font-size: 104px;
      color: #c56e53;
    }

    &:hover {
      .text {
        display: block;
      }

      .letter {
        display: none;
      }
    }
  }
}
</style>
