<template>
  <nav>
    <img src="@/assets/logo.svg" alt="" class="logo" />
    <span class="header-line"></span>
    <span class="menu-burger" @click="isOpen = !isOpen"></span>
    <ul :class="{'active': isOpen}">
      <router-link @click="isOpen = false" to="/"><b>00</b> Home</router-link>
      <router-link @click="isOpen = false" to="/Destination"><b>01</b> Destination</router-link>
      <router-link @click="isOpen = false" to="/Crew"><b>02</b> Crew</router-link>
      <router-link @click="isOpen = false" to="/Technology"><b>03</b> Technology</router-link>
    </ul>
  </nav>
  <router-view />
</template>
<script lang="ts">
import { defineComponent,ref } from "vue";

export default defineComponent({
  setup() {
    const isOpen = ref<boolean>(false)
    return {isOpen};
  },
});
</script>


<style lang="scss" scoped>
@import "@/scss/index.scss";
nav {
    @include flexbox(row, space-between, center);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  @media (max-width: 768px){
    z-index: 2;
  }

  .logo {
    height: 30px;
    width: auto;
    padding: 0 50px;
    @media (max-width: 768px) {
      padding: 30px 35px;
    }
  }
  .header-line {
    width: 100%;
    height: 0.5px;
    background: white;
    @media (max-width: 992px) {
      display: none;
    }
  }
  .menu-burger {
    display: none;
    @media (max-width: 768px) {
      position: relative;
      margin-right: 30px;
      display: block;
      width: 20px;
      height: 3px;
      background: $white;
      cursor: $pointer;
      z-index: 100;
    }
    &::before {
      content: "";
      width: 20px;
      height: 3px;
      background: $white;
      top: -5px;
      left: 0;
      position: absolute;
      cursor: $pointer;
    }
    &::after {
      content: "";
      width: 20px;
      height: 3px;
      background: $white;
      top: 5px;
      left: 0;
      position: absolute;
      cursor: $pointer;
    }
  }

  ul {
        @include flexbox(row, space-around, center);

    padding: 30px 8% 0 3%;
    max-width: 60%;
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    width: 100%;
    top: 0;
    @media (max-width: 768px) {
      transform: translateX(100vw);
      @include flexbox(column, space-evenly, center);
        position: absolute;
        height: 100vh;
        top: 0;
        padding: 0;
        right: 0;
        margin: 0;
        z-index: 99;
        max-width: 100%;
      transition: all 0.8s ease-in;
      &.active {
        transform: translate(0);
        backdrop-filter: blur(20px);
        transition: all 0.8s ease-out;

      }
    }
  }
  a {
    color: rgba(255, 255, 255, 0.65);
    text-decoration: none;
    padding-bottom: 30px;
    &.router-link-exact-active {
      color: #ffffff;
      border-bottom: 1px solid #ffffff;
    }
  }
}
</style>

