<template>
  <div class="history">
    <myTitle title="历史"></myTitle>
    <el-button size="mini" @click="back()" :disabled="backList.length - 1 <= 0"
      ><i class="el-icon-back"></i
    ></el-button>
    <el-button size="mini" @click="go()" :disabled="goList.length <= 0"
      ><i class="el-icon-right"></i
    ></el-button>
  </div>
</template>

<script>
import myTitle from "@/components/myTitle";
import select from "@/mixins/select";
// 可以后退的最多次数
const maxNum = 10;
export default {
  components: { myTitle },
  mixins: [select],
  data() {
    return {
      goList: [],
      backList: [],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.backList = this.$backList;
      this.canvas.c.on({
        "object:modified": this.save,
        "selection:updated": this.save,
      });
    });
  },
  methods: {
    // 保存纪录
    save() {
      const item = this.canvas.c.toJSON("id");
      if (this.backList.length == maxNum) {
        this.backList.shift();
      }
      this.backList.push(item);
    },
    // 后退
    back() {
      if (this.backList.length) {
        // 拿到返回队列最新添加的元素
        const item = this.backList.splice(this.backList.length - 2, 1)[0];
        this.renderCanvas(item);
        // 将本次加入队列
        const item2 = this.backList.pop();
        this.goList.push(item2);
      }
    },
    // 前进
    go() {
      if (this.goList.length) {
        const item = this.goList.pop();
        this.renderCanvas(item);
        this.backList.push(item);
      }
    },
    // 渲染
    renderCanvas(json) {
      this.canvas.c.clear();
      this.canvas.c.loadFromJSON(
        json,
        this.canvas.c.renderAll.bind(this.canvas.c)
      );
      this.canvas.c.requestRenderAll();
    },
  },
};
</script>

<style lang='less' scoped>
.history {
  .el-button:hover {
    background-color: skyblue;
  }
}
</style>