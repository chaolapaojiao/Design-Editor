<template>
  <div style="display: inline-block" class="delete">
    <el-button :disabled="isSelected()" @click="deleteSelected()">
      <i class="el-icon-delete"></i>
    </el-button>
  </div>
</template>

<script>
import select from "@/mixins/select";
export default {
  mixins: [select],
  methods: {
    isSelected() {
      return this.mSelectMode === "";
    },
    // 删除选中的对象
    deleteSelected() {
      // 获的选中对象的数组
      const activeObject = this.canvas.c.getActiveObjects();
      activeObject.map((item) => {
        this.canvas.c.remove(item);
      });
      this.canvas.c.requestRenderAll();
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