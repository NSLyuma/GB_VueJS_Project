<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="calc">
      <div class="window">
        <div class="box">
          <div class="num-area">
            <input
              class="mb20"
              type="text"
              placeholder="operand 1"
              v-model.number="operand1"
              ref="op1"
            />
            <input
              type="text"
              placeholder="operand 2"
              v-model.number="operand2"
              ref="op2"
            />
          </div>

          <div class="result">{{ result }}</div>
        </div>

        <div class="error" v-if="error">{{ error }}</div>
        <!-- v-if рендерит элемент, а v-show просто изменяет видимость через display: none -->
      </div>

      <div class="buttons">
        <div class="btn-fl">
          <button
            v-for="(operation, id) in operations"
            :key="id"
            @click="calculate(operation)"
          >
            {{ operation }}
          </button>
        </div>
        <button class="clear" @click="clear">Clear fields</button>
      </div>

      <div class="buttons">
        <div>
          <label>
            <input class="mb20" type="checkbox" v-model="checked" />
            Display keyboard
          </label>
        </div>

        <div class="numbers" v-if="checked">
          <button
            class="button number"
            v-for="(number, index) in numbers"
            :key="index"
            @click="inputNumber(number)"
          >
            {{ number }}
          </button>
          <button class="button number" @click="deleteNumber()">&larr;</button>
        </div>

        <div class="radio" v-if="checked">
          <label>
            <input
              class="inp-radio"
              type="radio"
              name="operand"
              value="1"
              v-model="change"
              @change="onFocus1()"
            />
            Operand 1
          </label>
          <label>
            <input
              class="inp-radio"
              type="radio"
              name="operand"
              value="2"
              v-model="change"
              @change="onFocus2()"
            />
            Operand 2
          </label>
        </div>
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
      error: "",
      operations: ["+", "-", "*", "/", "^", "i"],
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      checked: false,
      change: "1",
    };
  },

  methods: {
    calculate(operation) {
      this.error = "";
      switch (operation) {
        case "+":
          this.sum();
          break;
        case "-":
          this.sub();
          break;
        case "*":
          this.mul();
          break;
        case "/":
          this.div();
          break;
        case "^":
          this.pow();
          break;
        case "i":
          this.int();
          break;
      }
    },

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
      const { operand1, operand2 } = this;
      if (operand2 === 0 || !operand2) {
        this.error = "На ноль делить нельзя!";
        this.result = "Ошибка";
      } else {
        this.result = operand1 / operand2;
      }
    },
    pow() {
      this.result = Math.pow(this.operand1, this.operand2);
    },
    int() {
      const { operand1, operand2 } = this;
      if (operand2 === 0 || !operand2) {
        this.error = "На ноль делить нельзя!";
        this.result = "Ошибка";
      } else {
        this.result = parseInt(operand1 / operand2);
      }
    },
    clear() {
      this.operand1 = "";
      this.operand2 = "";
      this.result = 0;
    },
    onFocus1() {
      //криво, но пока по-другому не поняла, как можно
      this.$refs.op1.focus();
    },
    onFocus2() {
      this.$refs.op2.focus();
    },
    inputNumber(num) {
      let input = "";
      if (this.change === "1") {
        input = "operand1";
      } else {
        input = "operand2";
      }
      this[input] += String(num);
      this[input] = parseInt(this[input]);
    },
    deleteNumber() {
      let input = "";
      if (this.change === "1") {
        input = "operand1";
      } else {
        input = "operand2";
      }

      let str = String(this[input]);
      if (str.length > 1) {
        this[input] = parseInt(str.slice(0, -1));
      } else {
        if (input == "operand1") {
          this.operand1 = "";
        } else {
          this.operand2 = "";
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1 {
  margin: 0;
  margin-bottom: 20px;
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
  flex-direction: column;
}

.box {
  display: flex;
  justify-content: space-between;
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

.mb20 {
  margin-bottom: 20px;
}

.result {
  border: 1px solid #cbb5ff;
  border-radius: 5px;
  padding: 40px 20px;
  width: 400px;
  margin-left: 30px;
}

.error {
  border: 1px solid red;
  color: red;
  border-radius: 5px;
  margin-top: 20px;
  padding: 10px;
}

.buttons {
  border: 1px solid #7a44ff;
  border-radius: 10px;
  padding: 20px 30px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn-fl {
  display: flex;
  justify-content: space-between;
  width: 100%;
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

.numbers {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.number {
  padding: 10px 15px;
  font-size: 16px;
}

.radio {
  width: 45%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
