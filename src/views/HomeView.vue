<template>
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>alert-circle</title>
              <path
                d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
              />
            </svg>
            <br />
            <span>
              Considere que os três elementos da resposta clínica considerados
              críticos são:
            </span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>check-circle</title>
              <path
                d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
              />
            </svg>
            Diagnóstico precoce
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>check-circle</title>
              <path
                d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
              />
            </svg>
            Oportunidade de resposta
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>check-circle</title>
              <path
                d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
              />
            </svg>
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
          <li>Conhecer os seis parâmetros fisiológios incluídos no NEWS 2;</li>
          <li>Descrever o sistema, os limites e os gatilhos do NEWS 2;</li>
          <li>Registrar e ponturar com precisão os parâmetros;</li>
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
            pacientes com deterioração grava não antecipada, em suas condições
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
        <button class="btn btn-primary p-4">
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
        <ul class="ul-dashed">
          <li>
            O NEWS 2 possui recursos para o reconhecimento da deterioração
            clínica do paciente.
          </li>
          <li>
            O NEWS 2 define a triagem apropriada e o nível de cuidados
            intensivos contínuos necessários.
          </li>
          <li>
            O NEWS 2 padroniza a avaliação de doenças graves em contexto
            pré-hospitalar.
          </li>
          <li>
            O NEWS 2 permite uma comunicação através de linguagem simples e uma
            avaliação padrão de doenças graves agudas.
          </li>
          <li>
            O NEWS 2 facilita uma triagem mais eficiente e com melhores
            indicadores de tratamento.
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <p>
          Caro aluno, é importante que você tenha em mente que o NEWS 2 foi
          desenhado para ser usado com adultos acima de 16 anos, Ele não é
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
          funcionais no sistema nervoso autônomo, Portanto, para esse quadro
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
    };
  },

  methods: {
    changeTitle() {
      console.log(window.$(".game .navbar-brand"));
      window.$(".game .navbar-brand").html("uwu");
    },
    ...mapMutations(["setTitulos"]),
    ...mapActions(["setSwiperSettings"]),
  },

  mounted() {
    this.$store.commit('setTitulos', this.titulos);
    this.setSwiperSettings();
  },
};
</script>

<style scoped>
svg {
  width: 24px;
}

.card {
  background-color: #aecbdc;
  text-align: center;
  border: 2px solid #262626;
  border-radius: 0;
}
</style>
