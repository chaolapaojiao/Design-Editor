<template>
  <div class="save">
    <el-dropdown split-button type="primary">
      保存
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>复制到剪贴板</el-dropdown-item>
        <el-dropdown-item>保存为图片</el-dropdown-item>
        <el-dropdown-item>保存为SVG</el-dropdown-item>
        <el-dropdown-item>保存为JSON文件</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.save {
  display: inline-block;
}
</style>