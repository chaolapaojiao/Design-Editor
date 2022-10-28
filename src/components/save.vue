<template>
  <div class="save">
    <el-dropdown
      :split-button="true"
      type="primary"
      @click="saveToImg()"
      @command="handleCommand"
    >
      保存
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="copyToClipboard"
          >复制到剪贴板</el-dropdown-item
        >
        <el-dropdown-item command="saveToImg">保存为图片</el-dropdown-item>
        <el-dropdown-item command="saveToSvg">保存为SVG</el-dropdown-item>
        <el-dropdown-item command="saveToJSON">保存为JSON文件</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";
import select from "@/mixins/select";
export default {
  mixins: [select],
  methods: {
    handleCommand(command) {
      console.log(command);
      if (command == "copyToClipboard") {
        this.copyToClipboard();
      } else if (command == "saveToImg") {
        this.saveToImg();
      } else if (command == "saveToSvg") {
        this.saveToSvg();
      } else {
        this.saveTpJSON();
      }
    },
    // 复制到剪贴板
    copyToClipboard() {
      const jsonStr = this.canvas.c.toJSON(["id"]);
      this._mixinClipboard(JSON.stringify(jsonStr, null, "\t"));
    },
    // 保存为图片
    saveToImg() {
      const option = {
        name: "New Image",
        format: "png",
        quality: 1,
        multiplier: 2,
      };
      const dataUrl = this.canvas.c.toDataURL(option);
      this.downFile(dataUrl, "png");
    },
    // 保存为svg
    saveToSvg() {
      const svgUrl = this.canvas.c.toSVG();
      // encodeURIComponent() 函数
      // 作用：可把字符串作为URI 组件进行编码。其返回值URIstring 的副本，其中的某些字符将被十六进制的转义序列进行替换。
      const fileStr = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
        svgUrl
      )}`;
      this.downFile(fileStr, "svg");
    },
    // 保存为JSON文件
    saveToJSON() {
      const jsonUrl = this.canvas.c.toJSON();
      const fileStr = `data:text/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify(jsonUrl, null, "\t")
      )}`;
      this.downFile(fileStr, "json");
    },
    // 下载图片
    downFile(fileUrl, fileType) {
      const a = document.createElement("a");
      a.href = fileUrl;
      a.download = uuid() + "." + fileType;
      a.click();
      a.remove();
    },
  },
};
</script>

<style scoped lang="less">
.save {
  display: inline-block;
}
</style>