<template>
  <nav-bar />

  <main>
    <div class="game py-3">
      <div class="container">
        <div class="game-card d-flex flex-column">
          <nav class="navbar game-menu p-3">
            <div class="navbar-brand">
              <h1>Instruções do curso</h1>
            </div>
            <div class="ms-auto navbar-nav nav-pagination d-flex flex-row">
              <router-link class="nav-link" to="/">Home</router-link>
              <router-link class="nav-link" to="/1">1</router-link>
              <router-link class="nav-link" to="/2">2</router-link>
              <router-link class="nav-link" to="/3">3</router-link>
              <router-link class="nav-link" to="/4">4</router-link>
              <router-link class="nav-link" to="/estudo-de-caso">
                Estudo de Caso
              </router-link>
              <router-link class="nav-link" to="/resumo"> Resumo </router-link>
            </div>
          </nav>
          <router-view />
        </div>
      </div>
    </div>
  </main>

  <nav-footer></nav-footer>
</template>

<script>
import NavBar from "@/components/NavBar";
import { register } from "swiper/element/bundle";
import NavFooter from "./components/NavFooter.vue";

register();

export default {
  components: {
    NavBar,
    NavFooter
  },
};
</script>

<style lang="scss">
@import "./assets/style.scss";
@import "./assets/health-icons/style.scss"; //Here i add extra "./"(current directory)



.balao {
  border-radius: 8px;
  border: 1px solid black;
  padding: 0.5em;
  position: relative;
}

.balao:before {
  content: " ";
  position: absolute;
  width: 0;
  height: 0;
  border: 10px solid;
  border-color: black transparent transparent;
}

.balao:after {
  content: " ";
  position: absolute;
  width: 0;
  height: 0;
  border: 9px solid;
  border-color: transparent transparent white;
}

.balao-1::before {
  left: calc(50% - 10px);
  right: auto;
  bottom: auto;
  top: -20px;
  border: 10px solid;
  border-color: transparent transparent black;
}

.balao-1::after {
  left: calc(50% - 9.5px);
  right: auto;
  bottom: auto;
  top: -18px;
}

.balao-3::before {
  left: auto;
  right: 10%;
  bottom: -20px;
  top: auto;
}

.balao-3::after {
  left: auto;
  right: calc(10% + 0.5px);
  bottom: -17px;
  top: auto;
  border: 9px solid;
  border-color: white transparent transparent;
}

.balao-2::before {
  right: auto;
  left: 10%;
  bottom: -20px;
  top: auto;
  border: 10px solid;
  border-color: black transparent transparent;
}

.balao-2::after {
  right: auto;
  left: calc(10% + 0.5px);
  bottom: -17px;
  top: auto;
  border: 9px solid;
  border-color: white transparent transparent;
}
</style>
