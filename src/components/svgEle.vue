<template>
  <div>
    <myTitle title="卡通"></myTitle>
    <div class="box">
      <img
        :src="`./svg/${item}.svg`"
        alt=""
        v-for="(item, index) in getIndex(460, 489)"
        :key="index"
        @click="addItem"
      />
    </div>
    <myTitle title="卡通水果"></myTitle>
    <div class="box">
      <img
        :src="`./svg/${item}.svg`"
        alt=""
        :key="item"
        v-for="item in getIndex(386, 409)"
        @click="addItem"
      />
    </div>

    <myTitle title="体育"></myTitle>
    <div class="box">
      <img
        :src="`./svg/${item}.svg`"
        alt=""
        :key="item"
        v-for="item in getIndex(410, 459)"
        @click="addItem"
      />
    </div>

    <myTitle title="季节"></myTitle>
    <div class="box">
      <img
        :src="`./svg/${item}.svg`"
        alt=""
        :key="item"
        v-for="item in getIndex(40, 49)"
        @click="addItem"
      />
    </div>

    <myTitle title="计算机"></myTitle>
    <div class="box">
      <img
        :src="`./svg/${item}.svg`"
        alt=""
        :key="item"
        v-for="item in getIndex(50, 75)"
        @click="addItem"
      />
    </div>

    <myTitle title="水果"></myTitle>
    <div class="box">
      <img
        :src="`./svg/${item}.svg`"
        alt=""
        :key="item"
        v-for="item in getIndex(76, 89)"
        @click="addItem"
      />
    </div>

    <myTitle title="服饰"></myTitle>
    <div class="box">
      <img
        :src="`./svg/${item}.svg`"
        alt=""
        :key="item"
        v-for="item in getIndex(89, 136)"
        @click="addItem"
      />
    </div>

    <myTitle title="旗子"></myTitle>
    <div class="box">
      <img
        :src="`./svg/${item}.svg`"
        alt=""
        :key="item"
        v-for="item in getIndex(137, 151)"
        @click="addItem"
      />
    </div>

    <myTitle title="树木"></myTitle>
    <div class="box">
      <img
        :src="`./svg/${item}.svg`"
        alt=""
        :key="item"
        v-for="item in getIndex(152, 181)"
        @click="addItem"
      />
    </div>

    <myTitle title="食物"></myTitle>
    <div class="box">
      <img
        :src="`./svg/${item}.svg`"
        alt=""
        :key="item"
        v-for="item in getIndex(182, 201)"
        @click="addItem"
      />
    </div>

    <myTitle title="手绘服饰"></myTitle>
    <div class="box">
      <img
        :src="`./svg/${item}.svg`"
        alt=""
        :key="item"
        v-for="item in getIndex(202, 222)"
        @click="addItem"
      />
    </div>

    <myTitle title="奖牌"></myTitle>
    <div class="box">
      <img
        :src="`./svg/${item}.svg`"
        alt=""
        :key="item"
        v-for="item in getIndex(223, 252)"
        @click="addItem"
      />
    </div>

    <myTitle title="商务"></myTitle>
    <div class="box">
      <img
        :src="`./svg/${item}.svg`"
        alt=""
        :key="item"
        v-for="item in getIndex(253, 261)"
        @click="addItem"
      />
    </div>

    <myTitle title="活动"></myTitle>
    <div class="box">
      <img
        :src="`./svg/${item}.svg`"
        alt=""
        :key="item"
        v-for="item in getIndex(262, 270)"
        @click="addItem"
      />
    </div>

    <myTitle title="水果"></myTitle>
    <div class="box">
      <img
        :src="`./svg/${item}.svg`"
        alt=""
        :key="item"
        v-for="item in getIndex(271, 300)"
        @click="addItem"
      />
    </div>

    <myTitle title="复古"></myTitle>
    <div class="box">
      <img
        :src="`./svg/${item}.svg`"
        alt=""
        :key="item"
        v-for="item in getIndex(301, 350)"
        @click="addItem"
      />
    </div>

    <myTitle title="卡通"></myTitle>
    <div class="box">
      <img
        :src="`./svg/${item}.svg`"
        alt=""
        :key="item"
        v-for="item in getIndex(351, 385)"
        @click="addItem"
      />
    </div>

    <myTitle title="动物"></myTitle>
    <div class="box">
      <img
        :src="`./svg/${item}.svg`"
        alt=""
        :key="item"
        v-for="item in getIndex(490, 519)"
        @click="addItem"
      />
    </div>

    <myTitle title="手绘"></myTitle>
    <div class="box">
      <img
        :src="`./svg/${item}.svg`"
        alt=""
        :key="item"
        v-for="item in getIndex(0, 39)"
        @click="addItem"
      />
    </div>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";
import myTitle from "@/components/myTitle";
const defaultPosition = {
  left: 100,
  top: 100,
  shadow: "",
  fontFamily: "1-1",
};
export default {
  components: { myTitle },
  inject: ["canvas", "fabric"],
  methods: {
    // 获取svg序号
    getIndex(start, end) {
      const arr = Array(end - (start - 1)).fill("");
      return arr.map((item, i) => {
        return start + i;
      });
    },
    // 添加svg图标
    addItem(e) {
      const url = e.target.src;
      // loadSVGFromURL中回调函数返回路径的文件，svg是由许多物件组合而成，
      this.fabric.loadSVGFromURL(url, (objects, options) => {
        // 使用 this.fabric.util.groupSVGElemnt（）把svg的各部分组合起来,并给svg图片设置唯一标识和位置
        let item = this.fabric.util.groupSVGElements(objects, {
          ...options,
          ...defaultPosition,
          id: uuid(),
          name: "svg元素",
        });
        item.scale(0.1);
        this.canvas.c.add(item);
        this.canvas.c.renderAll();
      });
    },
  },
};
</script>


<style lang="less" scoped>
.box {
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  flex-wrap: wrap;
  img {
    width: 45px;
    height: 45px;
    background-color: #f6f6f6;
    padding: 5px;
    margin-bottom: 2px;
  }
}
</style>