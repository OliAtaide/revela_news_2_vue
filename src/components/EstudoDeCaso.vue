<template>
  <swiper-slide>
    <div class="estudo-de-caso">
      <div class="row">
        <div class="col">
          <div class="d-flex flex-column h-100">
            <h3 class="estudo-titulo">Estudo de Caso {{ index + 1 }}</h3>
            <div class="estudo-descricao">
              <p>{{ estudo.texto }}</p>
              <p>As observações mostradas à direita são relatadas:</p>
            </div>
            <div class="dica d-flex mb-3">
              <span class="mdi mdi-cursor-default-click"></span>
              Usando o gráfico de pontuação do NEWS 2, preencha cada um dos
              parâmetros individuais no quadro do lado oposto e clique em
              enviar.
            </div>
            <div class="balao balao-2 w-75 mt-auto">
              Você pode acessar o gráfico NEWS2 clicando no botão recursos
              abaixo.
            </div>
          </div>
        </div>
        <div class="col">
          <table class="table estudo-tabela">
            <tr v-for="(d, i) in estudo.dados" :key="i">
              <th>{{ labels[i] }}</th>
              <th>{{ d }}</th>
              <td>
                <input
                  class="input-resposta ms-auto"
                  type="number"
                  min="0"
                  @change="getData"
                  :data-resposta="estudo.respostas[i]"
                  :data-icone="'#iconeResposta' + index + '_' + i"
                />
              </td>
              <th class="bg-white px-0 ps-3">
                <i
                  class="bi icone-resposta"
                  :id="'iconeResposta' + index + '_' + i"
                ></i>
              </th>
            </tr>
            <tr>
              <th class="bg-white"></th>
              <th class="bg-white"></th>
              <td class="btn-primary">
                <h6 class="my-auto text-white">Cálculo</h6>
                <input
                  class="ms-auto"
                  type="number"
                  min="0"
                  :data-icone="'#iconeResposta' + index + '_Total'"
                  @change="getTotalData"
                />
              </td>
              <th class="bg-white px-0 ps-3">
                <i
                  class="bi icone-resposta"
                  :id="'iconeResposta' + index + '_Total'"
                ></i>
              </th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </swiper-slide>

  <swiper-slide>
    <div class="estudo-de-caso">
      <div class="row">
        <div class="col">
          <p>
            A pontuação gravada de NEWS 2 para parâmetros individuais e a
            pontuação total de NEWS 2 estão à direita. Agora, selecione o
            gatilho inicial clicando no botão correto abaixo:
          </p>

          <ul
            class="nav nav-tabs nav-resposta nav-justified gap-3 border-0 mb-4"
            id="myTab"
            role="tablist"
          ></ul>
          <div class="tab-content nav-content-resposta" id="myTabContent"></div>
        </div>
        <div class="col">
          <table class="table estudo-tabela">
            <tr v-for="(r, i) in estudo.respostas" :key="i">
              <th class="py-2">{{ labels[i] }}</th>
              <th class="text-end">{{ r }}</th>
            </tr>
            <tr>
              <th class="bg-white"></th>
              <td class="btn-primary">
                <h6 class="my-auto text-white">NEWS 2 Total</h6>
                <input
                  disabled
                  class="ms-auto"
                  type="number"
                  min="0"
                  :value="getTotal()"
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      :data-bs-target="'#estudoModal' + index"
    >
      Launch demo modal
    </button>
  </swiper-slide>
</template>

<script>
import $ from "jquery";

export default {
  name: "EstudoDeCaso",

  props: ["labels", "estudo", "index"],

  methods: {
    getData(data) {
      const icone = $($(data.target).data("icone"));
      const resposta = $(data.target).data("resposta");
      const val = $(data.target).val();
      
      if (resposta == val) {
        icone.removeClass("bi-x-circle");
        icone.addClass("bi-check-circle");
      } else {
        icone.removeClass("bi-check-circle");
        icone.addClass("bi-x-circle");
      }
    },
    getTotal() {
      let total = 0;
      this.estudo.respostas.forEach((d) => {
        total += d;
      });
      return total;
    },
    getTotalData(data) {
      const icone = $($(data.target).data("icone"));
      const val = $(data.target).val();

      if (val == this.getTotal()) {
        icone.removeClass("bi-x-circle");
        icone.addClass("bi-check-circle");
      } else {
        icone.removeClass("bi-check-circle");
        icone.addClass("bi-x-circle");
      }
    },
  },
};
</script>

<style scoped>
table h6 {
  background-color: transparent !important;
}

th,
td {
  padding-top: 8px;
  padding-bottom: 8px;
}
</style>
