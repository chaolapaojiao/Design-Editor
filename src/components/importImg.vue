<template>
  <div style="display: inline-block">
    <el-upload
      class="upload-demo"
      action="#"
      :before-upload="handleUpload"
      accept=".png"
      :on-error="insertImg"
    >
      <el-button size="small" type="primary">导入图片</el-button>
    </el-upload>
  </div>
</template>

<script>
import select from "@/mixins/select";
import { v4 as uuid } from "uuid";
import { getImgStr } from "@/utils/utils";
export default {
  mixins: [select],
  data() {
    return {
      imgFile: "",
    };
  },
  methods: {
    handleUpload(file) {
      getImgStr(file).then((res) => {
        this.imgFile = res;
      });
    },
    insertImg() {
      const imgEle = document.createElement("img");
      imgEle.src = this.imgFile;
      document.body.appendChild(imgEle);
      imgEle.onload = () => {
        // 创建图片对象
        const imgInstance = new this.fabric.Image(imgEle, {
          id: uuid(),
          name: "图片1",
          left: 100,
          top: 100,
        });
        imgInstance.scale(0.2);
        // 添加canvas
        this.canvas.c.add(imgInstance);
        // 设置图片可缩放
        this.canvas.c.setActiveObject(imgInstance);
        this.canvas.c.renderAll();
        // 删除创建的图片元素
        imgEle.remove();
      };
    },
  },
};
</script>

<style>
</style>