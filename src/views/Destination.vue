<template>
  <reusable-background :background="$route.meta.background">
    <div class="container">
      <h1><b>01</b> pick your destination</h1>
      <SpaceDetail :category="'destinations'"> </SpaceDetail>
    </div>
  </reusable-background>
</template>

<script lang="ts">
import ReusableBackground from "@/components/ReusableBackground.vue";
import { defineComponent } from "vue";
import SpaceDetail from "../components/SpaceDetail.vue";

export default defineComponent({
  components: {
    ReusableBackground,
    SpaceDetail,
  },
});
</script>

<style scoped>
</style>