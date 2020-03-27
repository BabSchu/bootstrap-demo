<template>
  <div id="app">
    <div id="nav">
      <top-header></top-header>
    </div>
    <div class="d-flex justify-content-center">
      <div class="page" v-if="getSpinner">
        <b-spinner class="spinner"></b-spinner>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    TopHeader
  },
  computed: {
    ...mapGetters(["getSpinner"])
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}

.page {
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  z-index: 25;
  width: 95vw;
  height: 100%;
}

.spinner {
  position: relative;
  top: 50%;
}
</style>
