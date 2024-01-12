<template>
  <table class="table pf_declaracoes">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Verdadeiro</th>
        <th scope="col">Falso</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(p, i) in perguntas" :key="i">
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
</template>

<script>
export default {
  name: "TrueFalseTable",

  props: ["perguntas"],

  
};
</script>
