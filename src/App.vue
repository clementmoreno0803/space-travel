<template>
  <Header />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "./layout/TheHeader.vue";
export default defineComponent({
  components: {
    Header,
  },
});
</script>

<style lang="scss">
@import "@/scss/index.scss";

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  h1 {
    text-transform: uppercase;
    color: $white;
    font-size: 1.3rem;
    font-weight: lighter;
    text-align: left;
    padding-bottom: 40px;
    @media (max-width: 992px) {
      padding: 10px 0;
      margin: 0;
    }
    @media (max-width: 768px) {
      padding: 25px 0;
      margin: 0;
      text-align: center;
    }
  }
h2,
h3 {
  margin: 0;
  font-family: $primary-font;
}
.container {
  width: calc(100vw - 260px);
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    width: calc(100vw - 80px);
    display: block;
    height: auto;
  }
}
</style>
