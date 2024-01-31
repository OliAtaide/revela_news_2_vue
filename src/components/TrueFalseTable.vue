<template>
  <table class="table pf_declaracoes">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Verdadeiro</th>
        <th scope="col">Falso</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(p, i) in perguntas" :key="i">
        <th scope="row">
          {{ p.texto }}
        </th>
        <td>
          <label :for="'rb1' + i">
            <input
              type="radio"
              title="verdadeiro"
              :name="'radio' + i"
              :id="'rb1' + i"
              @change="getData(true, i)"
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
              @change="getData(false, i)"
            />
            <div class="btn-radio"></div>
          </label>
        </td>
        <td>
          <i
            class="bi icone-resposta"
            :id="'iconeResposta' + i"
          ></i>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "TrueFalseTable",

  props: ["perguntas"],

  methods: {
    getData(v, i) {
      const icone = window.$("#iconeResposta" + i);
      if (v == this.perguntas[i].verdadeiro) {
        icone.removeClass("bi-x-circle");
        icone.addClass("bi-check-circle");
      } else {
        icone.removeClass("bi-check-circle");
        icone.addClass("bi-x-circle");
      }
    },
  },
};
</script>
