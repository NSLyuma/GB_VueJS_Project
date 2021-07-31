<template>
  <div id="app">
    <img alt="Calculator logo" src="./assets/calc.png" />
    <Calculator title="Calculator" />
  </div>
</template>

<script>
import Calculator from "./components/Calculator.vue";

export default {
  name: "App",
  components: {
    Calculator,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #331a6e;
}

img {
  width: 150px;
  height: 150px;
}
</style>
