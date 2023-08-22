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
@import '@/scss/index.scss';
.space-travel {
  @include flexbox(row,space-between, flex-end);
  height: 80%;
  @media (max-width:992px){
    @include flexbox(column,space-between,center);
  }
  .space-travel-title{
    max-width: 400px;
    text-align: justify;
    .big-title{
      font-size: 8.5rem;
      font-family: $primary-font;
      @media (max-width: 768px){
        font-size: 5.5rem;
      }
    }
    p{
      color: $white;
    }
  }
  .discover-button{
      @include flexbox(row,center,center);
    width: 200px;
    height: 200px;
    background: $white;
    color: black;
    border-radius: 50%;
     @media (max-width: 992px){
       width: 140px;
       height: 140px;
      }
    @media (max-width: 768px){
       width: 140px;
       height: 140px;
      }

    a{
      cursor: $pointer;
      font-size: 1.5rem;
      text-decoration: none;
      text-transform: uppercase;
      color: black;
      font-family: $primary-font;
      @media (max-width: 992px){
        font-size: 1.2rem;
      }
      @media (max-width: 768px){
        font-size: 1rem;
      }
    }
  }
}
</style>