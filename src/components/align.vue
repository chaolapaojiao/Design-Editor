<template>
  <div style="display: inline-block" class="align">
    <!-- 左对齐 -->
    <el-button size="mini" :disabled="isSelectMuti()" @click="alignLeft()"
      ><svg
        t="1650442284704"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2345"
        width="14"
        height="14"
      >
        <path
          d="M80 24h64v976H80zM198 227h448v190H198zM198 607h746v190H198z"
          p-id="2346"
        ></path></svg
    ></el-button>
    <!-- 又对齐 -->
    <el-button size="mini" :disabled="isSelectMuti()" @click="alignRight()"
      ><svg
        t="1650442299564"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2543"
        width="14"
        height="14"
      >
        <path
          d="M944 1000h-64V24h64zM826 417H378V227h448zM826 797H80V607h746z"
          p-id="2544"
        ></path></svg
    ></el-button>
    <!-- 水平居中对齐 -->
    <el-button
      size="mini"
      :disabled="isSelectMuti()"
      @click="centerHorizontally()"
      ><svg
        t="1650442754876"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1514"
        width="14"
        height="14"
      >
        <path
          d="M477.312 576V448H266.688a32 32 0 0 1-32-32v-192a32 32 0 0 1 32-32h210.624V34.688a34.688 34.688 0 0 1 69.376 0V192h210.624a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H546.688v128H896a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H546.688v157.312a34.688 34.688 0 1 1-69.376 0V832H128a32 32 0 0 1-32-32v-192A32 32 0 0 1 128 576h349.312z"
          fill="#666666"
          p-id="1515"
        ></path></svg
    ></el-button>
    <!-- 垂直居中对齐 -->
    <el-button size="mini" :disabled="isSelectMuti()" @click="verticalCenter()"
      ><svg
        t="1650442732396"
        class="icon"
        viewBox="0 0 1243 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1316"
        width="14"
        height="14"
      >
        <path
          d="M548.571429 472.356571h146.285714V231.643429a36.571429 36.571429 0 0 1 36.571428-36.571429h219.428572a36.571429 36.571429 0 0 1 36.571428 36.571429v240.713142h179.785143a39.643429 39.643429 0 0 1 0 79.286858H987.428571v240.713142a36.571429 36.571429 0 0 1-36.571428 36.571429h-219.428572a36.571429 36.571429 0 0 1-36.571428-36.571429V551.643429h-146.285714V950.857143a36.571429 36.571429 0 0 1-36.571429 36.571428H292.571429a36.571429 36.571429 0 0 1-36.571429-36.571428V551.643429H76.214857a39.643429 39.643429 0 1 1 0-79.286858H256V73.142857A36.571429 36.571429 0 0 1 292.571429 36.571429h219.428571a36.571429 36.571429 0 0 1 36.571429 36.571428v399.213714z"
          fill="#666666"
          p-id="1317"
        ></path></svg
    ></el-button>
    <el-button size="mini" :disabled="isSelectMuti()" @click="alignTop()">
      <svg
        t="1650442692910"
        class="icon"
        viewBox="0 0 1170 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1118"
        width="14"
        height="14"
      >
        <path
          d="M1170.285714 36.571429a36.571429 36.571429 0 0 1-36.571428 36.571428H36.571429a36.571429 36.571429 0 0 1 0-73.142857h1097.142857a36.571429 36.571429 0 0 1 36.571428 36.571429z m-219.428571 146.285714v512a36.571429 36.571429 0 0 1-36.571429 36.571428h-219.428571a36.571429 36.571429 0 0 1-36.571429-36.571428v-512a36.571429 36.571429 0 0 1 36.571429-36.571429h219.428571a36.571429 36.571429 0 0 1 36.571429 36.571429z m-438.857143 0v804.571428a36.571429 36.571429 0 0 1-36.571429 36.571429h-219.428571a36.571429 36.571429 0 0 1-36.571429-36.571429v-804.571428a36.571429 36.571429 0 0 1 36.571429-36.571429h219.428571a36.571429 36.571429 0 0 1 36.571429 36.571429z"
          fill="#666666"
          p-id="1119"
        ></path>
      </svg>
    </el-button>
    <!-- 底部对齐 -->
    <el-button size="mini" :disabled="isSelectMuti()" @click="alingBottom()"
      ><svg
        t="1650442674784"
        class="icon"
        viewBox="0 0 1170 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="920"
        width="14"
        height="14"
      >
        <path
          d="M1170.285714 987.428571a36.571429 36.571429 0 0 0-36.571428-36.571428H36.571429a36.571429 36.571429 0 0 0 0 73.142857h1097.142857a36.571429 36.571429 0 0 0 36.571428-36.571429z m-219.428571-146.285714v-512a36.571429 36.571429 0 0 0-36.571429-36.571428h-219.428571a36.571429 36.571429 0 0 0-36.571429 36.571428v512a36.571429 36.571429 0 0 0 36.571429 36.571429h219.428571a36.571429 36.571429 0 0 0 36.571429-36.571429z m-438.857143 0V36.571429a36.571429 36.571429 0 0 0-36.571429-36.571429h-219.428571a36.571429 36.571429 0 0 0-36.571429 36.571429v804.571428a36.571429 36.571429 0 0 0 36.571429 36.571429h219.428571a36.571429 36.571429 0 0 0 36.571429-36.571429z"
          fill="#666666"
          p-id="921"
        ></path></svg
    ></el-button>
  </div>
</template>

<script>
import select from "@/mixins/select";
export default {
  mixins: [select],
  methods: {
    // 是否多选
    isSelectMuti() {
      return !(this.mSelectMode === "multiple");
    },
    // 左对齐
    alignLeft() {
      // 获取选中的元素
      const activeObject = this.canvas.c.getActiveObject();
      if (activeObject && activeObject.type === "activeSelection") {
        const activeSelection = activeObject;
        const activeObjectLeft = -(activeObject.width / 2);
        activeSelection.forEachObject((item) => {
          item.set({
            left: activeObjectLeft,
          });
          // 调用setCoords()才能重新计算控制位置
          item.setCoords();
          this.canvas.c.renderAll();
        });
      }
    },
    // 右对齐
    alignRight() {
      const activeObject = this.canvas.c.getActiveObject();
      if (activeObject && activeObject.type === "activeSelection") {
        const activeSelection = activeObject;
        const activeObjectLeft = activeObject.width / 2;
        activeSelection.forEachObject((item) => {
          item.set({
            left: activeObjectLeft - item.width * item.scaleX,
          });
          item.setCoords();
          this.canvas.c.renderAll();
        });
      }
    },
    // 水平居中对齐
    centerHorizontally() {
      const activeObject = this.canvas.c.getActiveObject();
      if (activeObject && activeObject.type === "activeSelection") {
        activeObject.forEachObject((item) => {
          item.set({
            left: 0 - (item.width * item.scaleX) / 2,
          });
          item.setCoords();
          this.canvas.c.renderAll();
        });
      }
    },
    // 垂直居中对齐
    verticalCenter() {
      const activeObject = this.canvas.c.getActiveObject();
      if (activeObject && activeObject.type === "activeSelection") {
        activeObject.forEachObject((item) => {
          console.log(item.scaleX, (item.width * item.scaleX) / 2);
          item.set({
            top: 0 - (item.width * item.scaleY) / 2,
          });
          item.setCoords();
          this.canvas.c.renderAll();
        });
      }
    },
    // 顶部对齐
    alignTop() {
      const activeObject = this.canvas.c.getActiveObject();
      if (activeObject && activeObject.type === "activeSelection") {
        const activeObjectTop = -(activeObject.height / 2);
        activeObject.forEachObject((item) => {
          console.log(item.scaleX, (item.width * item.scaleX) / 2);
          item.set({
            top: activeObjectTop,
          });
          item.setCoords();
          this.canvas.c.renderAll();
        });
      }
    },
    // 底部对齐
    alingBottom() {
      const activeObject = this.canvas.c.getActiveObject();
      if (activeObject && activeObject.type === "activeSelection") {
        const activeObjectTop = activeObject.height / 2;
        activeObject.forEachObject((item) => {
          console.log(item.scaleX, (item.width * item.scaleX) / 2);
          item.set({
            top: activeObjectTop - item.height * item.scaleY,
          });
          item.setCoords();
          this.canvas.c.renderAll();
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.align {
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