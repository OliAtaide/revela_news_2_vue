<template>
  <swiper-container>
    <swiper-slide>
      <p>
        Caro aluno, a seguir você verá cinco estudos de caso para verificar sua
        compreensão das informações que tratamos aqui.
      </p>
      <p>
        Para cada estudo de caso você deverá registrar as pontuações de NEWS 2
        para parâmetros individuais e calcular a pontuação total de NEWS 2. Em
        seguida, será solicitado que você identifique o gatilho correto e a
        resposta clínica.
      </p>
      <p>
        Você pode consultar os gráficos de pontuação do NEWS 2 e os gatilhos de
        resposta clínica úteis ao trabalhar com os estudos de caso. Eles podem
        ser acessados na seção de recursos na parte inferior esquerda desta
        tela.
      </p>
      <div class="dica d-flex mb-3">
        <span class="mdi mdi-cursor-default-click"></span>
        Quando você estiver pronto clique no botão ‘Próximo’ para ver o primeiro
        estudo de caso.
      </div>
    </swiper-slide>
    <EstudoDeCaso
      v-for="(e, i) in estudos"
      :key="i"
      :estudo="e"
      :labels="labels"
      :index="i"
    ></EstudoDeCaso>
    <swiper-slide>
      <p>
        Querido aluno, parabéns, você completou com sucesso os estudos de caso
        do NEWS 2.
      </p>
      <p>
        Se você deseja rever qualquer material de estudo em qualquer ponto, você
        pode fazê-lo usando as abas do menu no topo da página.”.
      </p>
      <button
        class="btn btn-primary text-center py-3 px-5 text-uppercase"
        style="background-color: #426d6f"
      >
        sair do curso
      </button>
    </swiper-slide>
  </swiper-container>
  <SwiperNav></SwiperNav>
  <EstudoDeCasoModal
    v-for="(e, i) in estudos"
    :key="i"
    :estudo="e"
    :labels="labels"
    :index="i"
  ></EstudoDeCasoModal>
</template>

<script>
import EstudoDeCaso from "@/components/EstudoDeCaso.vue";
import EstudoDeCasoModal from "@/components/EstudoDeCasoModal.vue";
import SwiperNav from "@/components/SwiperNav.vue";
import axios from "axios";
import { mapActions, mapMutations } from "vuex";

export default {
  name: "SlideOne",

  components: {
    EstudoDeCaso,
    EstudoDeCasoModal,
    SwiperNav,
  },

  data() {
    return {
      estudos: [],
      labels: [
        "Frequência respiratória",
        "Saturação de oxigênio",
        "Oxigênio suplementar",
        "Pressão arterial sistólica",
        "Pulso",
        "Consciência",
        "Temperatura",
      ],
      titulos: [
        "Estudo de Caso - Introdução",
        "Estudo de Caso 1",
        "Estudo de Caso 1",
        "Estudo de Caso 2",
        "Estudo de Caso 2",
        "Estudo de Caso 3",
        "Estudo de Caso 3",
        "Estudo de Caso 4",
        "Estudo de Caso 4",
        "Estudo de Caso 5",
        "Estudo de Caso 5",
        "Estudos de Caso",
      ],
    };
  },

  methods: {
    getData() {
      axios
        .get("estudos.json")
        .then((res) => {
          this.estudos = res.data;
        })
        .catch((err) => console.log(err));
    },
    ...mapMutations(["setTitulos"]),
    ...mapActions(["setSwiperSettings"]),
  },

  created() {
    this.getData();
  },

  mounted() {
    this.$store.commit("setTitulos", this.titulos);
    this.setSwiperSettings();
  },
};
</script>
