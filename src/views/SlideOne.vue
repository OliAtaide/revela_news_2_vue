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
        <div class="col">
          <div class="item_dashed">Idade do paciente</div>
        </div>
        <div class="col">
          <div class="item_dashed">Frequência respiratória</div>
        </div>
        <div class="col">
          <div class="item_dashed">Nível de consciência</div>
        </div>
        <div class="col">
          <div class="item_dashed">Volume de urinia</div>
        </div>
        <div class="col">
          <div class="item_dashed">Temperatura</div>
        </div>
        <div class="col">
          <div class="item_dashed">Nível de glicose no sangue</div>
        </div>
        <div class="col">
          <div class="item_dashed">Saturação de oxigênio</div>
        </div>
        <div class="col">
          <div class="item_dashed">Pulso</div>
        </div>
        <div class="col">
          <div class="item_dashed">Pressão sanguínea sistólica</div>
        </div>
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
      <table class="table pf_declaracoes">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Verdadeiro</th>
            <th scope="col">Falso</th>
          </tr>
        </thead>
        <tbody v-for="(p, i) in perguntas" :key="i">
          <tr>
            <th scope="row">
              {{ p }}
            </th>
            <td>
              <label :for="'rb1' + i">
                <input
                  type="radio"
                  title="verdadeiro"
                  :name="'radio' + i"
                  :id="'rb1' + i"
                />
                <div class="btn-radio"></div>
              </label>
            </td>
            <td>
              <label :for="'rb0' + i">
                <input
                  type="radio"
                  title="falso"
                  :name="'radio' + i"
                  :id="'rb0' + i"
                />
                <div class="btn-radio"></div>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
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
  </div>
</template>

<script>
import ParametroFisiologico from "@/components/ParametroFisiologico.vue";
import ParametroFisiologicoModal from "@/components/ParametroFisiologicoModal.vue";
import SwiperNav from "@/components/SwiperNav.vue";
import axios from "axios";

export default {
  name: "SlideOne",

  data() {
    return {
      parametros_fisiologicos: [],
      perguntas: [],
      slider: null,
    };
  },

  components: {
    SwiperNav,
    ParametroFisiologico,
    ParametroFisiologicoModal,
  },

  methods: {
    getData() {
      axios
        .get("slide1.json")
        .then((res) => {
          var data = res.data;
          this.parametros_fisiologicos = data.parametros_fisiologicos;
          this.perguntas = data.table;
        })
        .catch((err) => console.log(err));
    },
    parametroSlide(index) {
      const swiperEl = document.querySelector("swiper-container");
      swiperEl.swiper.slideTo(index);
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style></style>
