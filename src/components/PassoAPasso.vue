<template>
  <p>
    Caro aluno, o NEWS 2 possui seis parâmetros fisiológicos. É primordial que
    você documente todos eles ao fazer a avaliação clínica do paciente, pois
    cada um é alocado com uma pontuação que reflete a magnitude do seu
    distúrbio.
  </p>
  <p>
    A pontuação individual de cada um dos parâmetros é então adicionada para
    gerar o NEWS 2 total do paciente.
  </p>
  <div class="nav nav-tabs" id="myTab" role="tablist">
    <button
      v-for="(p, i) in passos.slice().reverse()"
      :key="i"
      class="nav-link"
      data-bs-toggle="tab"
      :data-bs-target="'#passo' + (passos.length - i) + 'Tab'"
      type="button"
      role="tab"
      :aria-controls="'#passo' + (passos.length - i) + 'Tab'"
      :aria-selected="i == passos.length - 1"
    >
      PASSO {{ passos.length - i }}
    </button>
  </div>
  <div class="tab-content" id="myTabContent">
    <div
      v-for="(p, i) in passos"
      :key="i"
      class="tab-pane fade"
      :id="'passo' + (i + 1) + 'Tab'"
      role="tabpanel"
      aria-labelledby="home-tab"
      tabindex="0"
    >
      <div class="passo">
        <div class="titulo">
          <i :class="'mdi mdi-' + p.icone"></i>
          <h3>
            {{ p.titulo }}
          </h3>
        </div>
        <div class="texto">
          <p v-for="(t, j) in p.texto" :key="j">
            {{ t }}
          </p>
          <ul>
            <li v-for="(l, k) in p.lista" :key="k">
              {{ l }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PassoAPasso",

  data() {
    return {
      passos: [],
    };
  },

  methods: {
    getData() {
      axios
        .get("passos.json")
        .then((res) => {
          var data = res.data;
          this.passos = data;
        })
        .catch((err) => console.log(err));
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style scoped>
.nav-tabs {
  justify-content: space-between;
  border: 0;
  gap: 45px;
  flex-direction: row-reverse;
}

.nav-link {
  flex: 1;
  position: relative;
  border-radius: 0 !important;
  background-color: #aecbdc;
  font-weight: 700;
  border: none !important;
  border-top: 2px solid #262626 !important;
  border-bottom: 2px solid #262626 !important;
  width: 100%;
  height: 90px;
  color: #262626;
  &.active {
    background-color: #265b88;
    color: white;
  }
}

.nav-link.active ~ .nav-link {
  background-color: #265b88;
}

/* test */
.nav-link:not(:first-child):after {
  content: "";
  position: absolute;
  width: 63px;
  height: 63px;
  right: 0px;
  top: 50%;
  transform: translate(50%, -50%) rotate(45deg);
  border-top: 2px solid #262626;
  border-right: 2px solid #262626;
  background-color: #aecbdc;
  z-index: 0;
}
.nav-link.active:after,
.nav-link.active ~ .nav-link:after {
  background-color: #265b88;
}

.nav-link:not(:last-child):before {
  content: "";
  position: absolute;
  width: 63px;
  height: 63px;
  left: 0;
  top: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  border-top: 2px solid #262626;
  border-right: 2px solid #262626;
  background-color: white;
  z-index: 0;
}

.nav-link:last-child {
  border-left: 2px solid #262626 !important;
}
.nav-link:first-child {
  border-right: 2px solid #262626 !important;
}

.tab-content {
  padding-top: 24px;
}

.passo {
  display: flex !important;
  align-items: center;
  gap: 24px;
  padding: 16px;
  border: 2px dashed #262626;
}
.titulo {
  width: 160px;
  height: 160px;
  background-color: #789f8c;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  border: 2px solid #262626;
  gap: 8px;

  h3 {
    margin: 0;
    font-weight: 400;
  }
}

.titulo,
.texto {
  color: #262626 !important;
}

.texto {
  font-size: 17px;
  font-weight: 700;
}
.mdi {
  font-size: 64px;
  line-height: 64px;
}
</style>
