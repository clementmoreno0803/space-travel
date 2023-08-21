<template>
  <Header />
  
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Header from './layout/TheHeader.vue'
export default defineComponent({
  components: {
    Header
  },
})
</script>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap');
body{
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
h2,h3, p{
  margin: 0;
  font-family: 'Crimson Text';
}
h1{
  text-transform: uppercase;
  color: white;
  font-size: 1.3rem;
  font-weight: lighter;
  text-align: left;
  padding-bottom: 40px;
}
.container{
  width: calc(100vw - 260px);
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // background: green;
}
</style>
