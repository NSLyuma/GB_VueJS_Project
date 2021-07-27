<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="calc">
      <div class="window">
        <div class="num-area">
          <input
            type="text"
            placeholder="operand 1"
            v-model.number="operand1"
          />
          <input
            type="text"
            placeholder="operand 2"
            v-model.number="operand2"
          />
        </div>
        <p class="result">{{ result }}</p>
      </div>

      <div class="buttons">
        <div class="btn-fl">
          <button @click="sum">+</button>
          <button @click="sub">-</button>
          <button @click="mul">*</button>
          <button @click="div">/</button>
          <button @click="pow">^</button>
          <button @click="int">i</button>
        </div>
        <button class="clear" @click="clear">Clear</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  props: {
    title: String,
  },
  data() {
    return {
      result: 0,
      operand1: "",
      operand2: "",
    };
  },
  methods: {
    sum() {
      this.result = this.operand1 + this.operand2;
    },
    sub() {
      this.result = this.operand1 - this.operand2;
    },
    mul() {
      this.result = this.operand1 * this.operand2;
    },
    div() {
      this.result =
        this.operand2 === 0
          ? "На ноль делить нельзя!"
          : this.operand1 / this.operand2;
    },
    pow() {
      this.result = Math.pow(this.operand1, this.operand2);
    },
    int() {
      this.result =
        this.operand2 === 0
          ? "На ноль делить нельзя!"
          : parseInt(this.operand1 / this.operand2);
    },
    clear() {
      this.operand1 = "";
      this.operand2 = "";
      this.result = 0;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

.calc {
  border: 3px solid #7a44ff;
  border-radius: 10px;
  width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.window {
  border: 1px solid #7a44ff;
  border-radius: 10px;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.window:first-child {
  margin-bottom: 20px;
}

.num-area {
  display: flex;
  flex-direction: column;
}

input {
  border: 1px solid #cbb5ff;
  border-radius: 5px;
  padding: 10px;
  outline-color: #7a44ff;
}

input:first-child {
  margin-bottom: 20px;
}

.result {
  border: 1px solid #cbb5ff;
  border-radius: 5px;
  padding: 40px 20px;
  width: 400px;
  margin-left: 30px;
}

.buttons {
  border: 1px solid #7a44ff;
  border-radius: 10px;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn-fl {
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin: 0 auto;
}

button {
  border: 1px solid #7a44ff;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: #cbb5ff;
  color: #331a6e;
  font-weight: bold;
  font-size: 24px;
}

button:hover {
  background-color: #ad8cff;
  border: 1px solid #7a44ff;
}

button:active {
  background-color: #956aff;
  border: 1px solid #331a6e;
}

.clear {
  margin-top: 20px;
}
</style>
