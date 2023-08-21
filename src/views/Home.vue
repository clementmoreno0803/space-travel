<template>
  <main>
    <reusable-background :background="$route.meta.background">
      <div class="container">
        <div class="space-travel">
          <div class="space-travel-title">
            <h1>
              So you want to travel to <span class="big-title">space</span>
            </h1>
            <p>
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not-hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </div>
          <span class="discover-button">
            <router-link to="/Destination">Explore</router-link>
          </span>
        </div>
      </div>
    </reusable-background>
  </main>
</template>

<script lang="ts">
import ReusableBackground from "@/components/ReusableBackground.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    ReusableBackground,
  },
});
</script>

<style lang="scss" scoped>
.space-travel {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 80%;
  .space-travel-title{
    max-width: 400px;
    text-align: justify;
    .big-title{
      font-size: 8.5rem;
    }
    p{
      color: white;
    }
  }
  .discover-button{
    width: 200px;
    height: 200px;
    background: white;
    color: black;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    a{
      cursor: pointer;
      font-size: 1.5rem;
      text-decoration: none;
      text-transform: uppercase;
      color: black;
    }
  }
}
</style>