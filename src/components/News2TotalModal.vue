<template>
  <div
    class="modal fade modal-resposta estudo-de-caso"
    id="News2TotalModal0"
    tabindex="-1"
    aria-labelledby="News2TotalModal0Label"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="News2TotalModal0Label">Corrigir</h1>
        </div>
        <div class="modal-body">
          <div class="aviso">
            <span class="mdi mdi-head-lightbulb"></span>
            Caro aluno, clique em continuar para ver as opções de RCP
            adicionadas (março 2020) para relatar parâmetros incompletos.
          </div>
        </div>
        <div class="modal-footer">
          <button
            class="nav-item btn btn-primary btn-proximo"
            data-bs-dismiss="modal"
            @click="nextModal()"
          >
            CONTINUAR
            <span class="mdi mdi-chevron-right"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade modal-resposta estudo-de-caso"
    id="News2TotalModal1"
    tabindex="-1"
    aria-labelledby="News2TotalModal1Label"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="News2TotalModal1Label">
            Relatórios de parâmetros incompletos
          </h1>
        </div>
        <div class="modal-body">
          <p>
            Caro aluno, se uma das medidas fisiológicas não puder ser obtida
            porque não há equipamentos, a pontuação ainda deve ser calculada,
            mas será documentada como
            <strong> incompleta </strong>.  Isto deve ser feito, porque um
            paciente pode desencadear um sintoma em uma única medida ou em uma
            única pontuação agregada, mesmo que incompleta. O julgamento
            clínico, neste caso, é particularmente importante aqui e pode
            desencadear uma respostas e um limite inferior, já que a pontuação
            está incompleta.
          </p>
          <p>
            Se uma das medidas fisiológicas não forem obtidas, apesar do
            equipamento em uso, isso deve desencadear uma resposta imediata.
          </p>
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
import $ from 'jquery';

export default {
  name: "News2TotalModal",

  methods: {
    nextModal(){
      $('#News2TotalModal1').modal('show')
    }
  }

};
</script>
