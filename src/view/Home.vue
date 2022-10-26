<template>
  <div class="home">
    <!-- 头部区域 -->
    <header>
      <span>
        <!-- 导入 -->
        <importJSON></importJSON>
        &nbsp;
        <importSvg></importSvg>
        &nbsp;
        <importImg></importImg>
        &nbsp;
        <!-- 对齐方式 -->
        <align></align>
        &nbsp;
        <flip></flip>
        &nbsp;
        <group></group>
        &nbsp;
        <zoom></zoom>
        &nbsp;
        <lock></lock>
        &nbsp;
        <delet></delet>
        &nbsp;
        <copy></copy>
      </span>

      <span>
        <!-- 清除和保存 -->
        <clear></clear>
        &nbsp;
        <save></save>
      </span>
    </header>

    <!-- 主体区域 -->
    <main>
      <el-row>
        <!-- 设计区域 -->
        <el-col :span="4.5" class="block1">
          <design></design>
        </el-col>
        <!-- 画板区域 -->
        <el-col :span="15" class="canvas">
          <canvas id="canvas" width="450" height="600"></canvas>
        </el-col>
        <!-- 属性区域 -->
        <el-col :span="4.5">3</el-col>
      </el-row>
    </main>
  </div>
</template>

<script>
// 导入元素
import importImg from "@/components/importImg";
import importJSON from "@/components/importJSON";
import importSvg from "@/components/importSvg";

// 对齐方式组件
import align from "@/components/align";
import flip from "@/components/flip";
import group from "@/components/group";
import zoom from "@/components/zoom";
import centerAlign from "@/components/center-align";
import lock from "@/components/lock";
import delet from "@/components/delete";
import copy from "@/components/copy";
import clear from "@/components/clear";
import save from "@/components/save";

import design from "@/components/design";

import EventHandle from "../utils/eventHandle";

import { fabric } from "fabric";
const event = new EventHandle();
const canvas = {};
export default {
  name: "Home",
  components: {
    importImg,
    importJSON,
    importSvg,
    align,
    flip,
    group,
    zoom,
    centerAlign,
    delet,
    copy,
    lock,
    clear,
    save,
    design,
  },
  provide: { canvas, event, fabric },
  mounted() {
    this.canvas = canvas.c = new fabric.Canvas("canvas");
    this.canvas.set("backgroundColor", "#fff");
    event.init(canvas.c);
  },
};
</script>

<style lang="less" scoped>
.home {
  height: 100%;
}
header {
  display: flex;
  justify-content: space-between;
  height: 64px;
  background-color: #515a6e;
  line-height: 64px;
  padding: 0 20px;
}
main {
  height: 745px;
  .el-row {
    height: 100%;
  }
  .block1 {
    background-color: #fff;
    height: 100%;
  }
  .canvas {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: rgb(241, 241, 241);
    #canvas {
      background-color: #fff;
    }
  }
}
</style>