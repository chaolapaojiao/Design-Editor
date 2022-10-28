<template>
  <div style="display: inline-block">
    <el-upload
      class="upload-demo"
      action="#"
      :before-upload="handleUpload"
      accept=".svg"
      :on-error="insertSVG"
    >
      <el-button size="small" type="primary">导入SVG文件</el-button>
    </el-upload>
  </div>
</template>

<script>
import { getImgStr } from "@/utils/utils";
import select from "@/mixins/select";
import { v4 as uuid } from "uuid";
export default {
  mixins: [select],
  data() {
    return {
      svgFile: "",
    };
  },
  methods: {
    // 在上传文件前处理文件
    handleUpload(file) {
      getImgStr(file).then((res) => {
        this.svgFile = res;
      });
    },
    // 插入svg文件
    insertSVG() {
      this.fabric.loadSVGFromURL(this.svgFile, (objects, options) => {
        const item = this.fabric.util.groupSVGElements(objects, {
          ...options,
          name: "svg",
          id: uuid(),
        });
        item.scale(0.1);
        this.canvas.c.add(item).centerObject(item).renderAll();
      });
    },
  },
};
</script>

<style>
</style>