<template>
  <div style="display: inline-block" class="lock">
    <el-switch
      v-model="isLocked"
      active-color="blue"
      :disabled="isSelected()"
      @change="changeLock()"
    ></el-switch>
    <i class="el-icon-lock"></i>
  </div>
</template>

<script>
import select from "@/mixins/select";
// canvas对象移动属性
const lockAttrs = [
  "lockMovementX",
  "lockMovementY",
  "lockRotation",
  "lockScalingX",
  "lockScalingY",
];
export default {
  mixins: [select],
  data() {
    return {
      isLocked: false,
    };
  },
  created() {
    this.event.on("selectOne", (item) => {
      if (this.isLocked !== "undefined") {
        this.isLocked = !item[0].hasControls;
      }
    });
  },
  methods: {
    isSelected() {
      return this.mSelectMode !== "one";
    },
    changeLock() {
      const activeObject = this.canvas.c.getActiveObject();
      // 改变选中对象的大小是否可设置属性
      activeObject.hasControls = !activeObject.hasControls;
      // 取消选中
      this.canvas.c.discardActiveObject().renderAll();
      // 修改选中对象的是否可以移动属性
      lockAttrs.forEach((item) => {
        activeObject[item] = this.isLocked;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.lock {
  position: relative;
  .el-icon-lock {
    font-size: 12px;
    position: absolute;
    left: 4px;
    top: 28px;
    color: #ccc;
    font-weight: 700;
  }
}
</style>