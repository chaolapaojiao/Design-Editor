<template>
  <div style="display: inline-block">
    <el-upload
      class="upload-demo"
      action="#"
      :before-upload="handleUpload"
      :on-success="insertJSON"
      :on-error="insertJSON"
      accept=".json"
    >
      <el-button size="small" type="primary">导入JSON元素</el-button>
    </el-upload>
  </div>
</template>

<script>
import select from "@/mixins/select";
import { downFontByJSON } from "@/utils/utils";
export default {
  mixins: [select],
  data() {
    return {
      jsonFile: "",
    };
  },
  methods: {
    // 上传前拿到文件进行处理
    handleUpload(file) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        this.jsonFile = reader.result;
      };
    },
    // 插入文件
    insertJSON() {
      downFontByJSON(this.jsonFile).then(() => {
        this.canvas.c.loadFromJSON(
          this.jsonFile,
          this.canvas.c.renderAll.bind(this.canvas.c)
        );
      });
    },
  },
};
</script>

<style>
</style>