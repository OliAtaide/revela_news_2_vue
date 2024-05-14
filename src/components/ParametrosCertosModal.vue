<template>
  <div
    class="modal fade modal-resposta estudo-de-caso"
    id="ParametrosCertosModal"
    tabindex="-1"
    aria-labelledby="ParametrosCertosModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="ParametrosCertosModalLabel">
            RESPOSTAS CORRETAS
          </h1>
        </div>
        <div class="modal-body">
          <ul>
            <li>Frequência respiratória</li>
            <li>Nível de consciência</li>
            <li>Temperatura</li>
          </ul>
        </div>
        <div class="modal-footer">
          <button
            class="nav-item btn btn-primary btn-proximo"
            data-bs-dismiss="modal"
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
  name: "ParametrosCertosModal",
};
</script>
