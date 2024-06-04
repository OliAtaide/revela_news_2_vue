<template>
  <swiper-container>
    <swiper-slide>
      <div class="row">
        <div class="col-sm-7">
          <p>
            Agora que todos os parametros foram gravados, as pontuações devem
            ser somadas para calcular a pontuação total de NEWS 2.
          </p>
          <p>
            Rola para baixo o gráfico já preenchido e calcule a pontuação total
            de NEWS 2 na quarta coluna.
          </p>
          <div class="dica dica2 d-flex mb-3">
            <span class="mdi mdi-cursor-default-click"></span>
            Digite sua resposta na caixa abaixo e clique em enviar.
          </div>
          <div class="form-control btn mb-3 news2total">
            NEWS2 TOTAL
            <input
              title="NEWS2 TOTAL"
              type="number"
              @input="(event) => iconeNews2Total(event.target.value)"
            />
          </div>
          <i class="bi icone-resposta ms-3" id="iconeNews2Total"></i>
          <br />
          <div class="btn btn-primary btn-enviar" @click="News2Total()">
            ENVIAR
          </div>
        </div>
        <div class="col-sm-5">
          <img src="@/assets/table3.png" alt="" class="img-fluid" />
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="row">
        <div class="col-sm-7">
          <p>
            Caro aluno, além de calcular a pontuação total de NEWS 2, qualquer
            <strong style="color: red">pontuação vermelha</strong> única, ou
            seja, uma pontuação de 3 em um único parâmetro, deve ser
            identificada.
          </p>
          <p>
            Pontuações vermelhas podem determinar a resposta clínica, como será
            estudado na próxima aula.
          </p>
        </div>
        <div class="col-sm-5">
          <img src="@/assets/table2.png" alt="" class="img-fluid" />
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="aviso">
        <span class="mdi mdi-head-lightbulb"></span>
        Caro aluno, leia as declarações relacionadas aos parâmetros fisiológicos
        e selecione verdadeiro ou falso conforme os estudos realizados.
      </div>

      <TrueFalseTable :perguntas="perguntas"></TrueFalseTable>
    </swiper-slide>
  </swiper-container>
  <News2TotalModal></News2TotalModal>
  <SwiperNav></SwiperNav>
</template>

<script>
import axios from "axios";
import TrueFalseTable from "@/components/TrueFalseTable.vue";
import News2TotalModal from "@/components/News2TotalModal.vue";
import SwiperNav from "@/components/SwiperNav.vue";
import { mapActions, mapMutations } from "vuex";
import $ from "jquery";

export default {
  name: "SlideThree",

  data() {
    return {
      perguntas: [],
      titulos: ["Calculando uma pontuação", "Uma pontuação vermelha", "Quiz"],
      news2total: 0,
    };
  },

  components: {
    SwiperNav,
    TrueFalseTable,
    News2TotalModal,
  },

  methods: {
    getData() {
      axios
        .get("slide3.json")
        .then((res) => {
          var data = res.data;
          this.perguntas = data.true_or_false;
        })
        .catch((err) => console.log(err));
    },
    iconeNews2Total(v) {
      const icone = window.$("#iconeNews2Total");
      if (v == 9) {
        icone.removeClass("bi-x-circle");
        icone.addClass("bi-check-circle");
      } else {
        icone.removeClass("bi-check-circle");
        icone.addClass("bi-x-circle");
      }
    },
    News2Total() {
      $("#News2TotalModal0").modal("show");
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

<style>
.form-control {
  border: 1px solid #262626 !important;
  background-color: #eec174 !important;
  border-radius: 0 !important;
  font-weight: 700 !important;
  width: auto !important;
  font-size: 17px !important;

  input {
    width: 60px !important;
    padding: 8px 0 !important;
    text-align: center !important;
    font-weight: 700 !important;
  }
}
</style>
