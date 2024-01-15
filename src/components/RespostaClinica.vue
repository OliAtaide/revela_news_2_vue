<template>
  <swiper-slide>
    <div class="aviso">
      <span class="mdi mdi-head-lightbulb"></span>
      Caro aluno, leia com atenção a resposta clínica a seguir, depois selecione
      o seu gatilho limiar, clicando nos botões na parte inferior da página,
      depois clique em ‘Enviar’.
    </div>

    <div class="obs">
      <div class="obs-title">Resposta clínica {{ index + 1 }} de 5</div>
      <ul>
        <li v-for="(l, i) in limites[questao].respostas" :key="i">
          {{ l }}
        </li>
      </ul>
    </div>

    <div class="dica d-flex mb-3">
      <span class="mdi mdi-cursor-default-click"></span>
      Selecione o gatilho limiar, clicando nos botões na parte inferior da
      página, depois clique em ‘Enviar’:
    </div>

    <ul
      :id="'respostas' + index"
      class="nav nav-tabs nav-resposta opcao-resposta nav-justified gap-3 border-0 mb-4"
      :data-index="index"
    >
      <li
        class="nav-item"
        role="presentation"
        v-for="(l, i) in limites"
        :key="i"
      >
        <button
          type="button"
          :data-btn="'#btnSend' + i"
          class="nav-link"
          :style="'background-color:' + l.color + '!important;'"
          :value="i"
          :data-index="index"
          @click="setData(i)"
        >
          {{ l.botao }}
        </button>
      </li>
    </ul>
    <div class="d-flex justify-content-end">
      <button
        class="btn btn-primary btn-submit"
        :data-index="index"
        :id="'btnSend' + index"
        :data-modal="'#modalResposta' + index"
        @click="sendData('#modalResposta' + index)"
      >
        ENVIAR
      </button>
    </div>
  </swiper-slide>
</template>

<script>
//import $ from "jquery";

export default {
  name: "RespostaClinica",

  props: ["questao", "index", "limites"],

  data() {
    return {
      valor: [],
    };
  },

  methods: {
    setData(v) {
      this.valor = v;
    },
    sendData(m) {
      if (this.questao == this.valor) {
        window.$(m + " .modal-title").html("Correto");
      } else {
        window.$(m + " .modal-title").html("Incorreto");
      }
      
      window.$(m).modal("show");
    },
  },
};
</script>
