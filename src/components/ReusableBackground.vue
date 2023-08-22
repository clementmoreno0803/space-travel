<template>
  <div
    class="background"
    :style="{ backgroundImage: 'url(' + background + ')' }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    background: {
      required: true,
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";

.background {
  @include flexbox(row, center, center);
  height: 100vh;
  width: 100vw;
  background-size: cover;
  @media (max-width: 768px) {
    z-index: 0;
    position: relative;
  }
}
</style>