<template>
  <div style="display: inline-block" class="lock">
    <el-switch v-model="isTrue" active-color="blue"> </el-switch>
    <i class="el-icon-lock"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTrue: true,
    };
  },
};
</script>

<style lang="less" scoped>
.lock {
  position: relative;
  .el-icon-lock {
    font-size: 12px;
    position: absolute;
    left: 4px;
    top: 28px;
    color: #ccc;
    font-weight: 700;
  }
}
</style>