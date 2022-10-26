<template>
  <div class="clear">
    <el-button @click="clear">清除</el-button>
  </div>
</template>

<script>
import select from "@/mixins/select";
export default {
  mixins: [select],
  methods: {
    // 清空画板
    clear() {
      this.canvas.c.clear();
    },
  },
};
</script>

<style>
.clear {
  display: inline-block;
}
</style>