<template>
  <div
    class="modal fade modal-resposta"
    id="ul-dashed-modal"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id=""></h1>
        </div>
        <div class="modal-body">
          <p>Todas as frases estão corretas!</p>
        </div>
        <div class="modal-footer">
          <button
            class="nav-item btn btn-primary btn-proximo"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            CONTINUAR
            <span class="mdi mdi-chevron-right"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="main">
    <swiper-container @slideChange="changeTitle">
      <swiper-slide>
        <div class="d-flex flex-column h-100 pb-5">
          <div class="row">
            <div class="col">
              <h3>
                Você perceberá que é fácil compreender o passo a passo do curso,
                utilizando os botões indicados na parte superior esquerda da
                tela.
              </h3>
            </div>
            <div class="col">
              <div class="balao balao-1">
                O menu no topo da página mostrará em qual seção do curso você
                está. Você também poderá pular e retornar para as páginas que já
                completou, clicando no título da seção ou da página, a partir do
                botão que fica na parte superior direita da tela.
              </div>
            </div>
          </div>
          <div class="row mt-auto">
            <div class="col">
              <div class="d-flex justify-content-center">
                <div class="balao balao-2 w-75">
                  Você pode fazer o download de todos os recursos NEWS 2 que
                  estão associados a este curso a qualquer momento. Basta clicar
                  no botão ‘Recursos’ que está na parte inferior esquerda da
                  tela.
                </div>
              </div>
            </div>
            <div class="col">
              <div class="d-flex justify-content-center align-items-end h-100">
                <div class="balao balao-3 w-75">
                  E usar os botões na parte inferior direita da tela para
                  navegar através do curso.
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <p>
          Nesta aula, você estudará o que é o NEWS 2, como usá-lo e o que
          significa formular uma resposta clínica. Observe, que quando um
          paciente chega ao hospital e está em estado grave, ou quando ele fica
          em estado grave durante a internação, o tempo é uma questão essencial.
        </p>
        <p>
          Portanto, uma resposta rápida e eficiente por parte de quem atende
          este paciente é necessária para otimizar os resultados clínicos.”.
        </p>
        <ul class="ul-criticos">
          <li>
            <i class="bi bi-exclamation-circle-fill"></i>
            <span>
              Considere que os três elementos da resposta clínica considerados
              críticos são:
            </span>
          </li>
          <li>
            <i class="bi bi-check-circle-fill"></i>
            Diagnóstico precoce
          </li>
          <li>
            <i class="bi bi-check-circle-fill"></i>
            Oportunidade de resposta
          </li>
          <li>
            <i class="bi bi-check-circle-fill"></i>
            Competência
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <p>
          Caro aluno, ao final desta aula é esperado que você seja capaz de:
        </p>
        <ul class="ul-licoes">
          <li>Descrever os benefícios do NEWS 2;</li>
          <li>Listar as principais maneiras em que o NEWS 2 deve ser usado;</li>
          <li>Conhecer os seis parâmetros fisiológicos incluídos no NEWS 2;</li>
          <li>Descrever o sistema, os limites e os gatilhos do NEWS 2;</li>
          <li>Registrar e pontuar com precisão os parâmetros;</li>
          <li>Realizar o cálculo NEWS 2</li>
          <li>
            Demonstrar o uso correto do NEWS 2 e associá-lo às respostas
            clínicas.
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <p>
          Caro aluno, aqui você encontrará alguns dos benefícios da aplicação do
          NEWS 2:
        </p>
        <ul class="ul-licoes">
          <li>
            Ele fornece um sistema de alerta precoce padronizado único em todo
            Reino Unido para o diagnóstico precoce de pacientes em estado grave.
          </li>
          <li>
            Ele fornece uma pontuação padronizada para determinar a severidade
            da doença a fim de apoiar uma tomada de decisão clínica consistente
            e uma resposta clínica apropriada.
          </li>
          <li>
            Ele fornece um modelo que possibilita a adoção de um sistema padrão
            de pontuação para hospitais de cuidados intensivos, não apenas no
            contexto da deterioração clínica severa, mas também para monitorar,
            rastrear e acionar continuamente todos os pacientes.
          </li>
          <li>
            Ele garante meios padronizados de indentificar e responder aos
            pacientes com deterioração grave não antecipada, em suas condições
            clínicas, enquanto internados no hospital.
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <p>
          Caro aluno, você usará o NEWS 2, principalmente, para rastrear e
          acionar os pacientes
        </p>
        <div class="row">
          <div class="col">
            <div class="card">
              <h1 class="card-text">Rastrear</h1>
              <div class="card-title">
                Ao rastrear o paciente, o NEWS 2 fornece dados contínuos do
                status fisiológico ao longo de seu tratamento/internação.
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <h1 class="card-text">Acionar</h1>
              <div class="card-title">
                Ao acionar o paciente, o NEWS 2 fornece uma plataforma padrão
                para a avaliação inicial de doenças agudas severas onde quer que
                elas ocorram.
              </div>
            </div>
          </div>
        </div>
        <div class="dica d-flex mb-3">
          <span class="mdi mdi-cursor-default-click"></span>
          Cique no botão abaixo
        </div>
        <button class="btn btn-primary p-4" @click="swipeNext">
          Mais formas de como usar o news 2
        </button>
      </swiper-slide>
      <swiper-slide>
        <div class="aviso">
          <span class="mdi mdi-head-lightbulb"></span>
          <span>
            Caro aluno, leia cada uma das frases a seguir e clique naquelas que
            descrevem os usos adicionais do NEWS 2. Após encerrar, clique em
            ENVIAR.
          </span>
        </div>
        <div class="ul-dashed">
          <button
            class="btn"
            v-for="(b, i) in botoes"
            :key="i"
            role="button"
            data-bs-toggle="button"
          >
            {{ b }}
          </button>
        </div>
        <button
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#ul-dashed-modal"
        >
          ENVIAR
        </button>
      </swiper-slide>
      <swiper-slide>
        <p>
          Caro aluno, é importante que você tenha em mente que o NEWS 2 foi
          desenhado para ser usado com adultos acima de 16 anos. Ele não é
          recomendado para o uso em crianças ou durante gravidez.
        </p>
        <p>
          Isso ocorre porque os parâmetros fisiológicos básicos diferem em
          crianças e na gravidez, em que a magnitude e característica da
          resposta fisiológica das doenças agudas também diferem.
        </p>
        <p>
          Além disso, os resultados de NEWS 2 não são tão confiáveis em
          pacientes com a coluna vertebral danificada ou machuca, especialmente
          tetraplegia ou paraplegia de alto nível, devido a distúrbios
          funcionais no sistema nervoso autônomo. Portanto, para esse quadro
          clínico, use o NEWS 2 com cuidado.
        </p>
        <img src="@/assets/svg/slide-7.svg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <PassoAPasso></PassoAPasso>
      </swiper-slide>
    </swiper-container>
  </div>
  <div class="swiper-button-prev"></div>
  <swiper-nav></swiper-nav>
</template>

<script>
import PassoAPasso from "@/components/PassoAPasso.vue";
import SwiperNav from "@/components/SwiperNav.vue";
import { mapActions, mapMutations } from "vuex";

export default {
  name: "HomeView",

  components: {
    PassoAPasso,
    SwiperNav,
  },

  data() {
    return {
      titulos: [
        "Instruções do curso",
        "Introdução",
        "Objetivos de Aprendizagem",
        "Benefícios do NEWS 2",
        "Usos do NEWS 2",
        "Usos do NEWS 2",
        "Exceções do NEWS 2",
        "O processo do News 2",
      ],
      botoes: [
        "O NEWS 2 possui recursos para o reconhecimento da deterioração clínica do paciente.",
        "O NEWS 2 define a triagem apropriada e o nível de cuidados intensivos contínuos necessários.",
        "O NEWS 2 padroniza a avaliação de doenças graves em contexto pré-hospitalar.",
        "O NEWS 2 permite uma comunicação através de linguagem simples e uma avaliação padrão de doenças graves agudas.",
        "O NEWS 2 facilita uma triagem mais eficiente e com melhores indicadores de tratamento.",
      ],
    };
  },

  methods: {
    changeTitle() {
      window.$(".game .navbar-brand").html("uwu");
    },
    toggleButton() {},
    ...mapMutations(["setTitulos"]),
    ...mapActions(["setSwiperSettings"]),
    swipeNext() {
      const swiperEl = document.querySelector("swiper-container");
      swiperEl.swiper.slideNext();
    },
  },

  mounted() {
    this.$store.commit("setTitulos", this.titulos);
    this.setSwiperSettings();
  },
};
</script>

<style scoped>
.bi {
  color: #426d6f;
}

.bi-exclamation-circle-fill {
  font-size: 40px;
}

.bi-check-circle-fill {
  font-size: 24px;
}

.ul-criticos li {
  display: flex;
  align-items: center;

  &:first-child {
    flex-direction: column;
  }

  &:not(:first-child) {
    column-gap: 1em;
  }
}

.card {
  background-color: #aecbdc;
  text-align: center;
  border: 2px solid #262626;
  border-radius: 0;
}

.ul-dashed {
  .btn {
    cursor: pointer;
    font-weight: 700;
    border: 2px dashed black;
    margin-bottom: 1em;
    padding: 1em;
    width: 100%;
    text-align: start;
    border-radius: 0;

    &:hover {
      background-color: #dbe0e7;
    }

    &.active {
      background-color: #789f8c;
    }
  }
}
</style>
