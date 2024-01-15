<template>
  <swiper-container>
    <!-- Additional required wrapper -->

    <!-- Slides -->
    <swiper-slide>
      <div class="row">
        <div class="col-sm">
          <p>
            Caro aluno; quando um paciente apresenta, inicialmente, uma doen;a
            aguda ou sofre uma deteriora;áo aguda de sua condição clínica, o
            NEWS 2 ajuda a determinar a urgência e a escala de respostas clínica
            necessária.
          </p>
          <p>
            Portanto, assim que a pontuação total do NEWS 2 for calculada, a
            pontuação vai se encaixar em um dos quatro gatilhos classificados
            pelas cores mostradas nesta tabela.
          </p>
          <p>
            Lembre-se: Esses gatilhos determinam a resposta clínica apropriada.
          </p>
        </div>
        <div class="col-sm">
          <table class="table table-gatilhos">
            <thead>
              <tr>
                <th scope="col">Gatilhos iniciais de NEWS 2</th>
                <th scope="col">Risco clínico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pontuação total 0-4</td>
                <td>Baixo clínico</td>
              </tr>
              <tr>
                <td>
                  Pontuação de 13 em qualuqer parâmetro individual (pontuação
                  vermelha)
                </td>
                <td>Médio-baixo</td>
              </tr>
              <tr>
                <td>Pontuação total 5-6</td>
                <td>Medio</td>
              </tr>
              <tr>
                <td>Pontuação total 7 ou mais</td>
                <td>Alto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="aviso">
        <span class="mdi mdi-head-lightbulb"></span>
        Uma pontuação vermelha refere-se a uma variação extrema em um arâmetro
        fisiológico (ou seja, uma pontuação de 3 no gráfico NEWS 2).
      </div>
    </swiper-slide>
    <swiper-slide>
      <p>
        Caro aluno, faça a leitura atenta sobre como a resposta clínica ao NEWS
        2 se estutura.
      </p>
      <p>Ela possui quatro componentes principais, sendo eles:</p>
      <ol>
        <li>Urgência de resposta</li>
        <li>A frequência do monitoramento clínico contínuo</li>
        <li>
          A Experiência e competências clínicas do corpo clínico, que são
          necessárias para atender o paciente
        </li>
        <li>O Ambiente em que o atendimento clínico deve ser oferecido</li>
      </ol>
      <table class="table-urgencia">
        <tbody>
          <th>
            Total de 5 ou mais
            <br />
            limite de resposta urgente
            <br />
            (Urgência da resposta)
          </th>
          <td>
            Mínimo a cada 1 hora
            <br />
            (Frequência de monitoramento)
          </td>
          <td>
            <ul>
              <li>
                O enfermeito deve informar imediatamente a equipe médica
                (experiencia da equipe para atender o paciente) que está
                cuidando do paciente
              </li>
              <li>
                O enfermeiro deve solicitar avaliação urgente de um médico ou de
                uma equipe com competências essenciais no cuidado de pacientes
                com uma doença aguda
              </li>
              <li>
                Providenciar cuidado clínico em um ambiente (ambiente clínico)
                com instalações de monitoramento
              </li>
            </ul>
          </td>
        </tbody>
      </table>
    </swiper-slide>
    <swiper-slide>
      <div class="dica d-flex mb-3">
        <span class="mdi mdi-cursor-default-click"></span>
        Clique em cada limite de gatilho do NEWS 2 abaixo para revelar a
        resposta clínica correspondente:
      </div>
      <ul
        class="nav nav-tabs nav-resposta nav-justified gap-3 border-0 mb-4"
        id="myTab"
        role="tablist"
      >
        <li
          class="nav-item"
          role="presentation"
          v-for="(l, i) in limites"
          :key="i"
        >
          <button
            class="nav-link"
            :id="'tab' + i"
            data-bs-toggle="tab"
            :data-bs-target="'#tabPane' + i"
            type="button"
            role="tab"
            :aria-controls="'tabPane' + i"
            aria-selected="true"
            :style="'background-color:' + l.color + '!important;'"
          >
            {{ l.botao }}
          </button>
        </li>
      </ul>
      <div class="tab-content nav-content-resposta" id="myTabContent">
        <div
          :id="'tabPane' + i"
          role="tabpanel"
          aria-labelledby="home-tab"
          :tabindex="i"
          v-for="(l, i) in limites"
          :key="i"
          class="tab-pane fade"
        >
          <table class="table-urgencia w-100">
            <tbody>
              <th :style="'background-color:' + l.color + '!important;'">
                {{ l.titulo }}
              </th>
              <td>{{ l.tempo }}</td>
              <td>
                <ul>
                  <li v-for="(r, j) in l.respostas" :key="j">
                    {{ r }}
                  </li>
                </ul>
              </td>
            </tbody>
          </table>
        </div>
      </div>
    </swiper-slide>
    <RespostaClinica
      v-for="(q, i) in questoes"
      :key="i"
      :questao="q"
      :index="i"
      :limites="limites"
    ></RespostaClinica>
    <swiper-slide>
      <p>
        Caro aluno, a sepse deve ser levada em consideração quando o paciente
        tem uma infecção conhecida, quando há sinais ou sintomas de infecção em
        pessoas com alto risco de infecção (ou seja, em quimioterapia);
        portanto, com uma pontuação de 5 ou mais no NEWS 2: Pense em sepse!
      </p>
      <p>
        Pacientes com suspeita de infecção e uma pontuação NEWS 2 de 5 ou mais
        requerem avaliação urgente e intervenção de uma equipe clínica
        competente no manejo da sepse. A transferência urgente para o hospital
        ou caso ele esteja internado, a transferência para área clínica com
        melhores dependências para atendimento clínico contínuo deve ser
        considerada.
      </p>
      <p>
        Considere sepse também, se houver evidência de infecção e uma pontuação
        de 3 em um parâmetro de avaliação.
      </p>
      <img class="img-fluid" src="@/assets/diagram1.svg" alt="" />
    </swiper-slide>
    <swiper-slide>
      <div class="dica d-flex mb-3">
        <span class="mdi mdi-cursor-default-click"></span>
        Caro aluno, para ver as orientações adicionais do RCP (março de 2020)
        sobre escalonamento e resposta, clique nos botões abaixo:
      </div>
      <ul class="nav nav-add nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            Pontuação NEWS 2
            <br />
            de 5 ou 6
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            Pontuação NEWS 2
            <br />
            de 7 ou mais
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0"
        >
          <div class="oradd">
            <p>
              Uma pontuação NEWS 2 de 5/6
              <strong>
                que é nova para o paciente a menos que um limite de
                escalonamento alternativo tenha sido anteriormente determinado
              </strong>
              indica que:
            </p>
            <ul>
              <li>
                O paciente deve ser monitorado de hora em hora inicialmente;
              </li>
              <li>
                O médico responsável deve informar urgentemente a um clínico
                competente na avaliação de pacientes com doença aguda - isso
                será decidido localmente e pode ser a equipe de resposta de
                emergência (dependendo da combinação de habilidades), médico da
                enfermaria, etc;
              </li>
              <li>Avaliação é esperada dentro de 60 minutos;</li>
              <li>
                Mover o paciente para um ambiente com instalação de
                monitoramento deve ser considerado.
              </li>
            </ul>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabindex="0"
        >
          <div class="row">
            <div class="col">
              <div class="oradd">
                <p>
                  Uma pontuação NEWS 2 de 7 ou mais
                  <strong>
                    que é nova para o paciente a menos que o limite de
                    escalonamento alternativo tenha sido determinado previamente
                  </strong>
                  indica que:
                </p>
                <ul>
                  <li>
                    O paciente deve ser monitorado a cada 30 minutos
                    inicialmente;
                  </li>
                  <li>
                    Um médico responsável deve informar imediatamente ao clínico
                    competente na avaliação de pacientes com doença aguda. Isso
                    pode ser decidido localmente, pode ser a equipe de resposta
                    de emergência (dependendo da combinação de habilidades),
                    médico da enfermaria, etc;
                  </li>
                  <li>Avaliação esperada dentro de 30 minutos;</li>
                  <li>
                    Se não houver melhora, uma revisão deve ser feita por um
                    médico com mais experiência (como definida localmente), e
                    deve ocorrer em 60 minutos;
                  </li>
                  <li>
                    Mover o paciente para um ambiente com monitoramento e
                    melhores equipamentos deve ser considerado.
                  </li>
                </ul>
              </div>
            </div>
            <div class="col">
              <div class="oradd">
                <p>
                  Uma avaliação clínica estruturada deve ser documentada
                  incluindo:
                </p>
                <ul>
                  <li>O tempo de escalada;</li>
                  <li>Tempo e grau de resposta clínica;</li>
                  <li>
                    Avaliação clínica e plano, incluindo o plano de tratamento,
                    o gatilho individualizado e o limite de pontuação para
                    resposta posterior.
                  </li>
                </ul>
                <p>
                  Exemplos de documentos estruturado de resposta clínica à
                  deterioração podem ser encontrados nas páginas do NEWS 2 no
                  website do RCP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="aviso">
        <span class="mdi mdi-head-lightbulb"></span>
        Caro aluno, após fazer a leitura das declarações a seguir relacionadas
        ao parâmetros fisiológicos, considere as informações como Verdadeiras ou
        Falsas
      </div>

      <TrueFalseTable :perguntas="perguntas"></TrueFalseTable>
    </swiper-slide>
  </swiper-container>
  <SwiperNav></SwiperNav>
  <RespostaClinicaModal
    v-for="(q, i) in questoes"
    :key="i"
    :questao="q"
    :index="i"
    :limites="limites"
  ></RespostaClinicaModal>
</template>

<script>
import RespostaClinica from "@/components/RespostaClinica.vue";
import RespostaClinicaModal from "@/components/RespostaClinicaModal.vue";
import SwiperNav from "@/components/SwiperNav.vue";
import TrueFalseTable from "@/components/TrueFalseTable.vue";
import axios from "axios";

export default {
  name: "SlideFour",

  data() {
    return {
      limites: [],
      questoes: [],
      perguntas: [],
    };
  },

  components: {
    RespostaClinica,
    RespostaClinicaModal,
    TrueFalseTable,
    SwiperNav,
  },

  methods: {
    getData() {
      axios
        .get("slide4.json")
        .then((res) => {
          var data = res.data;
          this.perguntas = data.table;
          this.limites = data.limites;
          this.questoes = data.questoes;
        })
        .catch((err) => console.log(err));
    },
  },

  created() {
    this.getData();
  },
};
</script>
