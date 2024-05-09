<template>
  <div class="modal fade" id="modalOne">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="estudoModal${i}Label">
            Códigos de fornecimento de oxigênio
          </h1>
        </div>
        <div class="modal-body">
          <table>
            <tbody>
              <tr>
                <td>A (Respirar ar)</td>
                <td>RM máscara de reservatório</td>
              </tr>
              <tr>
                <td>N (cânula nasal)</td>
                <td>TM máscara de traqueostomia</td>
              </tr>
              <tr>
                <td>SM (máscara simples)</td>
                <td>CP máscara CPAP</td>
              </tr>
              <tr>
                <td>
                  Máscara (de Venturi porcentagem, por exemplo B24 V28 V35 140
                  180)
                </td>
                <td>
                  H oxigênio umidificado e porcentagem por exemplo H 28 H35 H40
                  H60
                </td>
              </tr>
              <tr>
                <td>NIV paciente em sistema NIV</td>
                <td>OTH (outro, especifique...)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <button class="nav-item btn btn-primary btn-proximo">
            CONTINUAR
            <span class="mdi mdi-chevron-right"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <swiper-container>
    <swiper-slide>
      <div class="d-flex texto_e_imagem">
        <div>
          <p>
            Caro aluno, inicialmente você deve ter em mente que para cada
            parâmetro, um “intervalo normal saudável” é definido (consulte a
            coluna zero na imagem à direita). Os valores medidos nesse intrvalho
            são atribuidos à pontuação (1-3), o que é ponderado e codificado por
            cores no gráfico de observação, de acordo com a magnitude do
            distúrbio fisiol´gico e desvio do intervalo normal.
          </p>
          <p>
            Valores de 3 em um parâmetro são conhecidos como
            <strong style="color: #b82e2d">pontuação vermelha</strong>.
          </p>
          <p>
            As pontuações de cada parâmetro são, então, somadas para gerar a
            pontuação NEWS 2. Isso então é usado para determinar a resposta
            clínica apropriada.
          </p>
        </div>
        <img src="@/assets/table1.png" alt="" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="aviso">
        <span class="mdi mdi-head-lightbulb"></span>
        Caro aluno, vamos partir da imagem abaixo onde temos a temperatura média
        de quatro pacientes representada Baseado no que você leu anteriormente
        sobre a pontuação NEWS 2, selecione na base do termômetro o valor
        apropriado. Para lhe ajudar, é possível abrir uma cópia do quadro de
        pontuação NEWS 2 em uma nova aba, clicando no botão ‘Recursos’ à
        esquerda desta tela.
      </div>
      <div class="d-flex">
        <img class="img-fluid mx-auto" src="@/assets/tubes.png" alt="" />
      </div>
      <div class="d-flex">
        <div class="row temperatura mx-auto">
          <div class="col">
            <p>34.0</p>
            <select name="cars" id="cars">
              <option value="volvo">1</option>
              <option value="saab">2</option>
              <option value="mercedes">3</option>
              <option value="audi">4</option>
            </select>
          </div>
          <div class="col">
            <p>35.6</p>
            <select name="cars" id="cars">
              <option value="volvo">1</option>
              <option value="saab">2</option>
              <option value="mercedes">3</option>
              <option value="audi">4</option>
            </select>
          </div>
          <div class="col">
            <p>36.1</p>
            <select name="cars" id="cars">
              <option value="volvo">1</option>
              <option value="saab">2</option>
              <option value="mercedes">3</option>
              <option value="audi">4</option>
            </select>
          </div>
          <div class="col">
            <p>39.0</p>
            <select name="cars" id="cars">
              <option value="volvo">1</option>
              <option value="saab">2</option>
              <option value="mercedes">3</option>
              <option value="audi">4</option>
            </select>
          </div>
          <div class="col">
            <p>39.5</p>
            <select name="cars" id="cars">
              <option value="volvo">1</option>
              <option value="saab">2</option>
              <option value="mercedes">3</option>
              <option value="audi">4</option>
            </select>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="d-flex texto_e_imagem">
        <div>
          <p>
            As pontuações para cada parâmetro individual são registradas no
            gráfico de observação NEWS 2. Os registros são feitos com um ponto,
            conforme ilustrado. Os pontos são conhectados por linhas para
            destacar melhoria ou deterioração.
          </p>
          <p>
            O gráfico mostra a gravação das observações de frequência
            respiratória para um único dia.
          </p>
          <table class="freq_respira w-100">
            <thead>
              <tr>
                <th>TEMPO</th>
                <th>BPM</th>
                <th>PONTO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>09:00</td>
                <td>18</td>
                <td>0</td>
              </tr>
              <tr>
                <td>13:00</td>
                <td>20</td>
                <td>0</td>
              </tr>
              <tr>
                <td>17:00</td>
                <td>21</td>
                <td>2</td>
              </tr>
              <tr>
                <td>21:00</td>
                <td>24</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </div>
        <img class="img-fluid" src="@/assets/table2_2.png" alt="" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="d-flex texto_e_imagem">
        <div>
          <p>
            Caro aluno, veja que neste gráfico de observações, as pontuações de
            frequência respiratória foram registradas. Assim, usando os dados a
            seguir, registre as pontuações de SpO2 escala 1 no gráfico, clicando
            nas caixas corretas.
          </p>
          <p>
            Você deve fazer o registro das observações no gráfico a partir da
            ordem dos termos mostrados abaixo.
          </p>
          <table class="freq_respira w-100">
            <thead>
              <tr>
                <th>TEMPO</th>
                <th>BPM</th>
                <th>PONTO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>09:00</td>
                <td>97</td>
                <td>0</td>
              </tr>
              <tr>
                <td>13:00</td>
                <td>96</td>
                <td>0</td>
              </tr>
              <tr>
                <td>17:00</td>
                <td>95</td>
                <td>1</td>
              </tr>
              <tr>
                <td>21:00</td>
                <td>94</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <img class="img-fluid" src="@/assets/table2_3.png" alt="" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="d-flex texto_e_imagem">
        <div>
          <p>
            Caro aluno, uma
            <strong style="color: #b82e2d">pontuação vermelha</strong> se refere
            a uma variação extrema de um parâmetro fisiológico.
          </p>
          <p>
            É recomendado que você escreva no gráfico as leituras reais de
            quaisquer observação, como por exemplo, a
            <strong style="color: #b82e2d">pontuação vermelha</strong>, conforme
            ilustrado neste gráfico.
          </p>
        </div>
        <img class="img-fluid" src="@/assets/table2_4.png" alt="" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="d-flex texto_e_imagem mb-5">
        <div>
          <p>
            Caro aluno, a fim de relembrar a aula anterior no que se refere às
            duas escalas SpO2, considere que:
          </p>
          <ul>
            <li>
              A escala 1 é a escala usual para pacientes em que uma saturação de
              oxigênio normal é esperada.
            </li>
            <li>
              A escala 2 é a escala a ser usada para pacientes com insuficiência
              respiratória hipercápnica e uma faixa de saturação de oxigênio
              recomendada de 88-92%
            </li>
          </ul>
          <p>
            Sob nenhuma circustância, as duas escalas devem ser usadas para um
            único paciente.
          </p>
        </div>
        <img class="img-fluid" src="@/assets/spo2.png" alt="" />
      </div>
      <div class="aviso">
        <span class="mdi mdi-head-lightbulb"></span>

        Para evitar dúvidas, a seção do gráfico correspondente à escala que não
        está sendo usada, deve ser riscada conforme ilustrado acima.
      </div>
    </swiper-slide>
    <swiper-slide>
      <p>
        Caro aluno, observe que quando o oxigênio suplementar está sendo usado
        para manter a saturação do oxigênio desejado, a taxa de fornecimento de
        oxigênio (L/min.) e o sistema dispositivo de fornecimento, devem ser
        documentados no gráfico NEWS 2, usando os dois códigos do sistema
        dispositivo de fornecimento de oxigênio BTS.
      </p>
      <div class="d-flex flex-column align-items-center">
        <img src="@/assets/o2.png" alt="" />
        <p>
          <i>
            O exemplo acima mostra três litros de oxigênio por minuto usando um
            tubo nasal canular.
          </i>
        </p>
      </div>
      <button
        class="btn btn-primary w-25 mb-3"
        data-bs-toggle="modal"
        data-bs-target="#modalOne"
      >
        sistema de fornecimento de oxigênio BTS/código do dispositivo
      </button>
      <div class="aviso">
        <span class="mdi mdi-head-lightbulb"></span>
        Uso de qualquer oxigênio suplementar, adicionar um valor de 2 à
        pontuação total do NEWS 2.
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="aviso">
        <span class="mdi mdi-head-lightbulb"></span>
        Caro aluno, leia com muita atenção as declarações abaixo, que são
        relacionadas ao registro das pontuações individuais do NEWS 2 e marque
        verdadeiro ou falso, conforme o que você estudou até aqui.
      </div>
      <TrueFalseTable :perguntas="perguntas"></TrueFalseTable>
    </swiper-slide>
  </swiper-container>
  <swiper-nav></swiper-nav>
</template>

<script>
import axios from "axios";
import TrueFalseTable from "@/components/TrueFalseTable.vue";
import SwiperNav from "@/components/SwiperNav.vue";
import { mapActions, mapMutations } from "vuex";

export default {
  name: "SlideTwo",

  data() {
    return {
      perguntas: [],
      titulos: [
        "O sistema de pontuação NEWS 2",
        "Marcando uma pontuação individual",
        "Registro de observações",
        "Exercício sobre registro de observações",
        "Uma pontuação vermelha",
        "Escalas SpO2",
        "Oxigênio suplementar",
        "Quiz",
      ],
    };
  },

  components: {
    SwiperNav,
    TrueFalseTable,
  },

  methods: {
    getData() {
      axios
        .get("slide2.json")
        .then((res) => {
          var data = res.data;
          this.perguntas = data.true_or_false;
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

<style scoped>
.modal {
  table,
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
    text-align: center;
  }
  th,
  td {
    padding: 10px;
  }

  table {
    border-width: 2px !important;
  }
}
</style>
