<template>
  <div class="flip" style="display: inline-block">
    <!-- X轴旋转 -->
    <el-button size="mini" :disabled="isSelectOne()" @click="flip('X')">
      <svg
        t="1650443094178"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1549"
        width="14"
        height="14"
      >
        <path
          d="M252.76928 299.904l146.2784 0 0 472.42752-146.2784 0 0-472.42752Z"
          p-id="1550"
        ></path>
        <path
          d="M477.48096 85.34528l70.87104 0 0 885.80608-70.87104 0 0-885.80608Z"
          p-id="1551"
        ></path>
        <path
          d="M629.80096 284.8l31.0016 0 0 502.88128-31.0016 0L629.80096 284.8zM776.42752 284.8l31.0016 0 0 502.88128-31.0016 0L776.42752 284.8zM657.09056 315.8016l0-31.0016 123.04896 0 0 31.0016L657.09056 315.8016zM657.27488 787.64544l0-31.0016 123.04896 0 0 31.0016L657.27488 787.64544z"
          p-id="1552"
        ></path>
      </svg>
    </el-button>
    <!-- Y轴旋转 -->
    <el-button size="mini" :disabled="isSelectOne()" @click="flip('Y')">
      <svg
        t="1650443104385"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1749"
        width="14"
        height="14"
      >
        <path
          d="M286.01856 250.91584l472.4224 0 0 146.2784-472.4224 0 0-146.2784Z"
          p-id="1750"
        ></path>
        <path
          d="M87.19872 475.62752l885.80096 0 0 70.87104-885.80096 0 0-70.87104Z"
          p-id="1751"
        ></path>
        <path
          d="M773.55008 627.94752l0 31.0016L270.6688 658.94912l0-31.0016L773.55008 627.94752zM773.55008 774.5792l0 31.0016L270.6688 805.5808l0-31.0016L773.55008 774.5792zM742.54848 655.24224l31.0016 0 0 123.04896-31.0016 0L742.54848 655.24224zM270.70464 655.42144l31.0016 0 0 123.04896-31.0016 0L270.70464 655.42144z"
          p-id="1752"
        ></path>
      </svg>
    </el-button>
  </div>
</template>

<script>
import select from "@/mixins/select";
export default {
  mixins: [select],
  methods: {
    // 是否只选中了一个
    isSelectOne() {
      return this.mSelectMode !== "one";
    },
    // 旋转
    flip(type) {
      const activeObject = this.canvas.c.getActiveObject();
      console.log(activeObject.type)
      activeObject.set("scale" + type, -1).setCoords();
      activeObject.scale(0.1);
      this.canvas.c.renderAll();
    },
  },
};
</script>

<style lang="less" scoped>
.flip {
  transform: translateY(2px);
}
.el-button {
  padding: 0;
  height: 28px;
  width: 30px;
  text-align: center;
  margin-left: 0;
  svg {
    opacity: 0.2;
    color: #ccc;
    &:hover {
      opacity: 1;
      fill: black;
    }
  }
}
</style>