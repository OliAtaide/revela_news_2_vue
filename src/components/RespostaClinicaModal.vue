<template>
  <div
    class="modal fade modal-resposta"
    :id="'modalResposta' + index"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
        </div>
        <div class="modal-body">
          <p>A resposta clínica corresponde ao limiar de ${limites[q].botao}</p>
          <table class="table-urgencia">
            <tbody>
              <th
                :style="
                  'background-color:' + limites[questao].color + '!important;'
                "
              >
                {{ limites[questao].titulo }}
              </th>
              <td>
                {{ limites[questao].tempo }}
              </td>
              <td>
                <ul>
                  <li v-for="(l, i) in limites[questao].respostas" :key="i">
                    {{ l }}
                  </li>
                </ul>
              </td>
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary btn-proximo">
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
  name: "RespostaClinica",

  props: ["questao", "index", "limites"],
};
</script>
