<template>
  <div>
    <input type="text" v-model="category" />
    <button @click="addCategory">Add new category</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "AddCategoryForm",
  data() {
    return {
      category: "",
    };
  },
  methods: {
    ...mapMutations(["addNewCategory"]),
    addCategory() {
      this.addNewCategory(this.category);
      this.category = "";
    },
  },
};
</script>