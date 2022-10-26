<template>
  <div style="display: inline-block" class="copy">
    <el-button :disabled="isSelected()" @click="copySelected()">
      <i class="el-icon-copy-document"></i>
    </el-button>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";
import select from "@/mixins/select";
export default {
  mixins: [select],
  methods: {
    isSelected() {
      return this.mSelectMode !== "one";
    },
    copySelected() {
      const activeObject = this.canvas.c.getActiveObject();
      // 克隆选中的对象
      activeObject.clone((cloned) => {
        this.canvas.c.discardActiveObject();
        cloned.set({
          left: cloned.left + 10,
          top: cloned.top + 10,
          id: uuid(),
        });
        // 添加克隆的对象
        this.canvas.c.add(cloned);
        this.canvas.c.renderAll();
      });
    },
  },
};
</script>

<style lang="less" scoped>
.el-button {
  padding: 0;
  height: 28px;
  width: 30px;
  text-align: center;
  margin-left: 0;
}
</style>