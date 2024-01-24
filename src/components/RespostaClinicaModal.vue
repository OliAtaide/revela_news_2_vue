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
          <button
            type="button"
            class="btn btn-primary btn-proximo"
            :id="'modalResposta' + index + 'Next'"
            @click="continuar"
          >
            CONTINUAR
            <span class="mdi mdi-chevron-right"> </span>
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

  methods: {
    continuar() {
      const swiperEl = document.querySelector("swiper-container");
      swiperEl.swiper.slideNext();
      window.$(".modal").modal("hide");
    },
  },
};
</script>
