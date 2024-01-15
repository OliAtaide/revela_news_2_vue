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
</style>
