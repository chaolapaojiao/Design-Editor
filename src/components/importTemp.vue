<template>
  <div>
    <myTitle title="常用模板"></myTitle>
    <div class="tmp">
      <el-tooltip
        class="item"
        effect="dark"
        :content="item.label"
        placement="top-start"
        v-for="(item, index) in bgList"
        :key="index"
      >
        <img :src="item.src" @click="getTempData(item.tempUrl)" />
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import myTitle from "@/components/myTitle";
import select from "@/mixins/select";
import { downFontByJSON } from "../utils/utils";
export default {
  components: { myTitle },
  mixins: [select],
  data() {
    return {
      jsonFile: "",
      bgList: [
        {
          label: "笔记模板",
          tempUrl: "./template/073606d4-22de-491b-8b51-b90d72101d89.json",
          src: "./template/073606d4-22de-491b-8b51-b90d72101d89.png",
        },
        {
          label: "醒目封面",
          tempUrl: "./template/dcebee41-59b5-408b-a65a-c51bc390be3d.json",
          src: "./template/dcebee41-59b5-408b-a65a-c51bc390be3d.png",
        },
        {
          label: "教师节",
          tempUrl: "./template/3a7471f2-b8cf-4939-ad1a-a7d586768640.json",
          src: "./template/3a7471f2-b8cf-4939-ad1a-a7d586768640.png",
        },
        {
          label: "升职锦囊",
          tempUrl: "./template/ef5eb884-28e0-4d79-9e98-a73d759541f8.json",
          src: "./template/ef5eb884-28e0-4d79-9e98-a73d759541f8.png",
        },
        {
          label: "古风模板",
          tempUrl: "./template/ecc3fca2-f66e-465e-b2c7-80b7522fdb3b.json",
          src: "./template/ecc3fca2-f66e-465e-b2c7-80b7522fdb3b.png",
        },
      ],
    };
  },
  methods: {
    // 插入SVG文件
    insertSvgFile() {
      var loadingInstance = this.$Loading.service({
        fullscreen: true,
        text: "拼命加载中...",
      });
      downFontByJSON(this.jsonFile)
        .then(() => {
          this.canvas.c.loadFromJSON(
            this.jsonFile,
            this.canvas.c.renderAll.bind(this.canvas.c)
          );
          loadingInstance.close();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 获取模板内容
    getTempData(tempUrl) {
      const getTemp = this.$http.get(tempUrl);
      getTemp.then((res) => {
        this.jsonFile = JSON.stringify(res.data);
        // 将svg文件插入
        this.insertSvgFile();
      });
    },
  },
};
</script>

<style lang="less" scoped>
.tmp {
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &::after {
    flex: auto;
    content: "";
  }
  .el-tooltip {
    width: 47%;
    margin-bottom: 6px;
  }
}
</style>