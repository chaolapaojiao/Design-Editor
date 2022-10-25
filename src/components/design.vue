<template>
  <div class="nav">
    <el-container>
      <el-aside width="70px">
        <el-menu>
          <el-menu-item v-model="index" @click="changeBar(1)"
            ><i class="el-icon-reading"></i>模板</el-menu-item
          >
          <el-menu-item v-model="index" @click="changeBar(2)"
            ><i class="el-icon-edit"></i>元素</el-menu-item
          >
          <el-menu-item v-model="index" @click="changeBar(3)"
            ><i class="el-icon-brush"></i>背景</el-menu-item
          >
        </el-menu>
      </el-aside>
      <div class="el-main">
        <!-- 生成模板 -->
        <div class="item templ" v-show="index === 1">
          <importTemp></importTemp>
        </div>
        <!-- 常用元素 -->
        <div class="item element" v-show="index === 2">
          <importEle></importEle>
        </div>
        <!-- 背景 -->
        <div class="item background" v-show="index === 3">
          <importBg></importBg>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
import importTemp from "@/components/importTemp";
import importEle from "@/components/importEle";
import importBg from "@/components/importBg";
export default {
  components: { importTemp, importEle, importBg },
  data() {
    return {
      index: 2,
    };
  },
  methods: {
    changeBar(index) {
      this.index = index;
    },
  },
};
</script>

<style lang="less" scoped>
.nav {
  width: 100%;
}
.el-aside {
  .el-menu {
    height: 745px;
    .el-menu-item {
      height: 45px;
      line-height: 45px;
      padding: 0 !important;
      i {
        font-size: 12px;
        margin-right: 0;
      }
    }
  }
}
.el-main {
  width: 211px;
  height: 745px;
  padding: 8px;
}
</style>