<template>
  <tr>
    <th>${labels[j]}</th>
    <th >{{ row }}</th>
    <td>
      <input
        class="input-resposta ms-auto"
        type="number"
        min="0"
        data-resposta="${v.respostas[j]}"
        :data-icone="'#iconeResposta' + index  + i"
      />
    </td>
    <th class="bg-white px-0 ps-3">
      <i class="bi icone-resposta" id="iconeResposta${i}_${j}"></i>
    </th>
  </tr>
</template>

<script>
export default {
  nome: "EstudoDeCasoRow",

  props: ["row"],
};
</script>
