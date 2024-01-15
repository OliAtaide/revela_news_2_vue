<template>
  <swiper-container>
    <!-- Slides -->
    <swiper-slide>
      <h3>Preocupação clínica</h3>
      <p>
        Caro aluno, há circunstâncias em que um profissional de saúde pode
        julgar que a pontuação NEWS 2 de um paciente subestima sua preocupação
        com a condição clínica dele.
      </p>
      <p>
        Em tais circunstâncias, o cuidado deve ser escalonado e essa decisão
        deve ser tomada por um médico experiente.
      </p>
      <h3>Razões para não usar o NEWS 2</h3>
      <p>
        Recomenda-se que as razões para você não agir de acordo com a pontuação
        NEWS 2 sejam registradas nas notas clínicas.
      </p>
      <p>
        Quando as equipes clínicas decidem que o registro da rotina de uma
        pontuação NEWS 2 não é apropriada, por exemplo, em pacientes com
        histórico de cuidados no final da vida, tais decisões devem ser
        discutidas com o paciente e registradas nas notas.
      </p>
    </swiper-slide>
    <swiper-slide>
      <ul class="resumo-lista">
        <li>
          <p class="my-auto">Os principais usos do NEWS 2 são:</p>
          <ul>
            <li>
              <strong>Rastreamento</strong> para fornecer um registro contínuo
              do estado fisiológico de um paciente durante toda a jornada dele;
            </li>
            <li>
              <strong>Gatilho</strong> para fornecer uma plataforma padronizada
              para avaliação inicial de doenças agudas severas sempre que
              avaliação ocorrer.
            </li>
          </ul>
        </li>
        <li>
          NEWS 2 é desenhado para o uso de adultos com idade de 16 anos ou mais.
        </li>
        <li>
          Existem seis parâmetros fisiológicos que formam a base do NEWS 2.
        </li>
        <li>
          O gráfico NEWS 2 é usado para determinar as pontuações individuais
          para cada parâmetro.
        </li>
        <li>
          Pontuações individuais são marcadas no cartão de observação NEWS 2.
        </li>
        <li>
          Os parâmetros de gatilho de NEWS 2 determinam a resposta clínica
          apropriada para o paciente.
        </li>
        <li>
          Considere sepse com uma pontuação individual de três e/ou em uma
          pontuação total de NEWS 2 de cinco ou mais.
        </li>
      </ul>
    </swiper-slide>
  </swiper-container>
  <swiper-nav></swiper-nav>
</template>

<script>
import SwiperNav from '@/components/SwiperNav.vue';

export default {
  name: "ResumoPage",
  
  components: {
    SwiperNav
  }
};
</script>

<style>
.resumo-lista {
  list-style: none;
  gap: 1.5em;
  padding: 2em;
  border: 2px solid #262626;
  display: flex;
  flex-direction: column;
  font-size: 22px;

  li:not(li li) {
    position: relative;
    margin-left: 2em;
    padding-left: 1em;

    &::before {
      content: "";
      background-image: url("@/assets/check-circle-outline.svg");
      width: 32px;
      height: 32px;
      position: absolute;
      font-size: 1.2rem;
      top: -4px;
      left: -32px;
    }
  }
  li li {
    list-style-type: disc;
  }
}
</style>
