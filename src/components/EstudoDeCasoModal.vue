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
                    <input class="ms-auto" type="number" min="0" />
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
                  <button class="btn btn-primary text-center w-100">Sim</button>
                </div>
                <div class="col">
                  <button class="btn btn-primary text-center w-100">Não</button>
                </div>
              </div>
              <p>Sim, pense em sepse!</p>
              <p>
                Para uma pontuação total de 5 ou mais, sepse deve ser
                considerada
              </p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="nav-item btn btn-primary btn-proximo" data-bs-dismiss="modal" >
            PRÓXIMO
            <span class="mdi mdi-chevron-right"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EstuidoDeCasoModal",

  props: ["labels", "estudo", "index"],
};
</script>
