<template>
  <nav>
    <img src="@/assets/logo.svg" alt="" class="logo" />
    <span class="header-line"></span>
    <ul>
      <router-link to="/"><b>00</b> Home</router-link>
      <router-link to="/Destination"><b>01</b> Destination</router-link>
      <router-link to="/Crew"><b>02</b> Crew</router-link>
      <router-link to="/Technology"><b>03</b> Technology</router-link>
    </ul>
  </nav>
  <router-view />
</template>


<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  .logo {
    height: 30px;
    width: auto;
    padding: 0 50px;
  }
  .header-line{
    width: 100%;
    height: 0.5px;
    background: white;
  }

  ul {
    padding: 30px 100px 0 70px;
    max-width: 60%;
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  a{
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

