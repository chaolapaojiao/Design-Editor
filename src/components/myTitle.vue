<template>
  <div class="title">
    <span></span>
    <span>{{ title }}</span>
    <span></span>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="less" scoped>
.title {
  display: flex;
  font-size: 14px;
  color: rgb(40, 38, 38);
  height: 20px;
  line-height: 20px;
  margin: 10px 5px;
  span {
    margin-left: 6px;
  }
  :last-child,
  :first-child {
    width: 10px;
    height: 1px;
    margin-top: 9px;
    background-color: #ccc;
  }
  :last-child {
    flex: 1;
  }
}
</style>