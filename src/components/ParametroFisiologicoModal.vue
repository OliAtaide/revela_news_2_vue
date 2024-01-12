<template>
  <div
    class="modal fade modal-resposta estudo-de-caso"
    :id="modal.id"
    tabindex="-1"
    :aria-labelledby="modal.id + 'Label'"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="estudoModal${i}Label">
            {{ modal.titulo }}
          </h1>
        </div>
        <div class="modal-body">
          <p v-for="(t, i) in modal.texto" :key="i">
            {{ t }}
          </p>
        </div>
        <div class="modal-footer">
          <button class="nav-item btn btn-primary btn-proximo"  data-bs-dismiss="modal" aria-label="Close">
            CONTINUAR
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>chevron-right</title>
              <path
                d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ParametroFisiologicoModal",

  props: ["modal", "parametro", "index"],
};
</script>
