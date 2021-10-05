<template>
  <div class="context" v-if="shown" :style="styles">
    <div v-for="(item, i) in items" :key="i" @click="onClick(item)">
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ContextMenu",
  data() {
    return {
      shown: false,
      items: [],
      xPos: 0,
      yPos: 0,
    };
  },
  methods: {
    onClick(item) {
      item.action();
      this.$context.hideContext();
    },
    onShow({ items, caller }) {
      this.items = items;
      this.shown = true;
      this.setPosition(caller);
    },
    onHide() {
      this.items = [];
      this.shown = false;
    },
    setPosition(caller) {
      const computedPosition = caller.getBoundingClientRect();
      this.xPos = computedPosition.left;
      this.yPos = computedPosition.top;
    },
  },
  computed: {
    styles() {
      return {
        top: `${this.yPos}px`,
        left: `${this.xPos + 20}px`,
      };
    },
  },
  mounted() {
    this.$context.EventBus.$on("showContext", this.onShow);
    this.$context.EventBus.$on("hideContext", this.onHide);
  },
  beforeDestroy() {
    this.$context.EventBus.$off("showContext", this.onShow);
    this.$context.EventBus.$off("hideContext", this.onHide);
  },
};
</script>

<style scoped>
.context {
  position: absolute;
  top: 100px;
  left: 200px;
  background-color: #efefef;
}
</style>