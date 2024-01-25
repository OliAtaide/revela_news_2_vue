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
          <div class="form-control btn mb-3">
            NEWS2 TOTAL
            <input title="NEWS2 TOTAL" type="number" />
          </div>
          <br />
          <div class="btn btn-primary btn-enviar">ENVIAR</div>
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
            pontuação vermelha única, ou seja, uma pontuação de 3 em um único
            parâmetro, deve ser identificada.
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
  <SwiperNav></SwiperNav>
</template>

<script>
import axios from "axios";
import TrueFalseTable from "@/components/TrueFalseTable.vue";
import SwiperNav from "@/components/SwiperNav.vue";
import { mapActions, mapMutations } from "vuex";

export default {
  name: "SlideThree",

  data() {
    return {
      perguntas: [],
      titulos: ["Calculando uma pontuação", "Uma pontuação vermelha", "Quiz"],
    };
  },

  components: {
    SwiperNav,
    TrueFalseTable,
  },

  methods: {
    getData() {
      axios
        .get("slide3.json")
        .then((res) => {
          var data = res.data;
          this.perguntas = data.table;
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

<style>
.form-control {
  border: 1px solid #262626;
  background-color: #eec174;
  border-radius: 0;
  font-weight: 700;
  width: auto !important;
  font-size: 17px;

  input {
    width: 60px;
    padding: 8px 0;
    text-align: center;
    font-weight: 700;
  }
}
</style>
