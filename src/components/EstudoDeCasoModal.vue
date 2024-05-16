<template>
  <div
    class="modal fade modal-resposta estudo-de-caso"
    :id="'estudoModal' + index"
    tabindex="-1"
    :aria-labelledby="'estudoModal' + index + 'Label'"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="estudoModal${i}Label">
            Pense em Sepse
          </h1>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-5">
              <table class="table estudo-tabela">
                <tr v-for="(r, i) in estudo.respostas" :key="i">
                  <th class="py-2 w-75">{{ labels[i] }}</th>
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
            <div class="col-sm-7">
              <p>
                Baseada na pontuação individual e total do NEWS 2, sepse deveria
                ser considerada?
              </p>
              <h6>Faça a escolha abaixo</h6>
              <div class="row row-escolhas my-3">
                <div class="col">
                  <button
                    class="btn btn-primary text-center w-100"
                    :data-target="'#sepse' + index"
                    @click="showSepse"
                  >
                    Sim
                  </button>
                </div>
                <div class="col">
                  <button
                    class="btn btn-primary text-center w-100"
                    :data-target="'#sepse' + index"
                    @click="showSepse"
                  >
                    Não
                  </button>
                </div>
              </div>
              <div
                v-if="estudo.sepse"
                class="sepse"
                :id="'sepse' + index"
                style="display: none"
              >
                <p>Sim, pense em sepse!</p>
                <p v-if="index == 4">
                  Com esse paciente a sepse deve ser considerada. Mesmo que o total seja menor de 5, um 3 (pontuação vermelha) para frequência respiratória foi documentado.
                </p>
                <p v-else>
                  Para uma pontuação total de 5 ou mais, sepse deve ser
                  considerada
                </p>
              </div>
              <div
                v-else
                class="sepse"
                :id="'sepse' + index"
                style="display: none"
              >
                <p>
                  Para esse paciente a sepse não precisa ser considerada, pois:
                </p>
                <ul>
                  <li>A pontuação total é menor que 5;</li>
                  <li>Nenhum parâmetro tem pontuação de 3.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            class="nav-item btn btn-primary modal-next"
            data-bs-dismiss="modal"
          >
            PRÓXIMO
            <span class="mdi mdi-chevron-right"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "EstuidoDeCasoModal",

  props: ["labels", "estudo", "index"],

  methods: {
    showSepse(event) {
      const index = $(event.target).data("target");
      $(index).show();
    },
    getTotal() {
      let total = 0;
      this.estudo.respostas.forEach((d) => {
        total += d;
      });
      return total;
    },
    swiperNext() {
      const swiperEl = document.querySelector("swiper-container");

      swiperEl.swiper.slideNext();
    },
  },
};
</script>

<style scoped>
.btn-primary h6 {
  background-color: transparent;
}
</style>
