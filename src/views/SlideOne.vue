<template>
  <div v-for="(p, i) in parametros_fisiologicos" :key="i">
    <div class="pf_menu" :id="'pfMenu' + i">
      <div class="d-flex mb-3 pf_titulo">
        <i class="hi-${pf.icone}"></i>
        <h3>{{ p.titulo }}</h3>
      </div>
      <div class="dica d-flex mb-3">
        <span class="mdi mdi-cursor-default-click"> </span>
      </div>
      <div class="row row_nc">${ncp}</div>
    </div>
  </div>
  <swiper-container>
    <swiper-slide>
      <div class="aviso">
        <span class="mdi mdi-head-lightbulb"></span>
        Nesta unidade, você estudará os seis parâmetros fisiológicos que formam
        a base do NEWS 2. Agora, leia com atenção os 9 parâmetros mostrados
        abaixo, selecione aqueles que são associados como NEWS 2 e depois clique
        em enviar.
      </div>
      <div class="row row-cols-3">
        <div class="col" v-for="b in botoes_parametros" :key="b">
          <div class="item_dashed" @click="parametroClick">{{ b }}</div>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <button
          class="btn btn-primary p-3"
          data-bs-toggle="modal"
          data-bs-target="#ParametrosCertosModal"
        >
          ENVIAR
        </button>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="dica d-flex mb-3">
        <span class="mdi mdi-cursor-default-click"></span>
        Caro aluno, clique em cada um dos ícones abaixo para aprender mais sobre
        os Parâmetros Fisiológicos que estruturam o NEWS 2.
      </div>
      <div class="row parametros_fisiologicos" id="parametrosFisiologicos">
        <div
          class="col-sm-4"
          v-for="(p, i) in parametros_fisiologicos"
          :key="i"
        >
          <button
            type="button"
            class="pf_button"
            :data-target="'#pfMenu' + i"
            @click="parametroSlide(i + 2)"
          >
            <i :class="'hi-' + p.icone"></i>
            <h6 class="text-center">{{ p.titulo }}</h6>
          </button>
        </div>
      </div>
      <div class="dica d-flex mb-3">
        <span class="mdi mdi-cursor-default-click"></span>
        Clique no botão <strong>Próximo</strong> para continuar
      </div>
    </swiper-slide>
    <ParametroFisiologico
      v-for="(p, i) in parametros_fisiologicos"
      :key="i"
      :parametro="p"
      :index="i"
    ></ParametroFisiologico>
    <swiper-slide>
      <div class="aviso">
        <span class="mdi mdi-head-lightbulb"></span>

        Caro aluno, leia as declarações relacionadas aos parâmetros fisiológicos
        e selecione verdadeiro ou falso conforme os estudos realizados.
      </div>
      <TrueFalseTable :perguntas="perguntas"></TrueFalseTable>
    </swiper-slide>
  </swiper-container>
  <SwiperNav></SwiperNav>
  <div
    :class="'parametrosFisiologicosModais' + i"
    v-for="(p, i) in parametros_fisiologicos"
    :key="i"
  >
    <ParametroFisiologicoModal
      v-for="(m, j) in p.modais"
      :key="j"
      :modal="m"
      :parametro="i"
      :index="j"
    ></ParametroFisiologicoModal>
    <ParametroFisiologicoModal
      v-for="(n, j) in p.ncp"
      :key="j"
      :modal="n"
      :parametro="i"
      :index="j"
    ></ParametroFisiologicoModal>
    <ParametrosCertosModal> </ParametrosCertosModal>
  </div>
  <GuiaRCPModal v-for="(g, i) in guias_rcp" :key="i" :modal="g" :index="i">
  </GuiaRCPModal>
</template>

<script>
import ParametroFisiologico from "@/components/ParametroFisiologico.vue";
import ParametroFisiologicoModal from "@/components/ParametroFisiologicoModal.vue";
import TrueFalseTable from "@/components/TrueFalseTable.vue";
import SwiperNav from "@/components/SwiperNav.vue";
import axios from "axios";
import { mapActions, mapMutations } from "vuex";
import $ from "jquery";
import ParametrosCertosModal from "@/components/ParametrosCertosModal.vue";
import GuiaRCPModal from "@/components/GuiaRCPModal.vue";

export default {
  name: "SlideOne",

  data() {
    return {
      botoes_parametros: [
        "Idade do paciente",
        "Frequência respiratória",
        "Nível de consciência",
        "Volume de urina",
        "Temperatura",
        "Nível de glicose no sangue",
        "Saturação de oxigênio",
        "Pulso",
        "Pressão sanguínea sistólica",
      ],
      parametros_fisiologicos: [],
      perguntas: [],
      guias_rcp: [],
      slider: null,
      titulos: [
        "Parâmetros Fisiológicos",
        "Observações",
        "Observações",
        "Observações",
        "Observações",
        "Observações",
        "Observações",
        "Observações",
        "Quiz - Medir",
      ],
    };
  },

  components: {
    SwiperNav,
    ParametroFisiologico,
    ParametroFisiologicoModal,
    TrueFalseTable,
    ParametrosCertosModal,
    GuiaRCPModal,
  },

  methods: {
    getData() {
      axios
        .get("slide1.json")
        .then((res) => {
          var data = res.data;
          this.parametros_fisiologicos = data.parametros_fisiologicos;
          this.perguntas = data.true_or_false;
          this.guias_rcp = data.guias_rcp;
        })
        .catch((err) => console.log(err));
    },
    parametroSlide(index) {
      const swiperEl = document.querySelector("swiper-container");
      swiperEl.swiper.slideTo(index);
    },
    parametroClick(event) {
      $(event.target).toggleClass("item_dashed_active");
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

    $(document).on("click", "#escala2Modal .btn-proximo", function () {
      $("#guiaRCPModal0").modal("show");
    });
    $(document).on("click", "#ncpUModal .btn-proximo", function () {
      $("#guiaRCPModal1").modal("show");
    });
  },
};
</script>

<style></style>
