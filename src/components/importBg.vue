<template>
  <div>
    <!-- 宽高设置 -->
    <myTitle title="尺寸"></myTitle>
    <div class="attr-name size">
      <span class="type">宽度</span>
      <el-input-number
        v-model="widthNum"
        controls-position="right"
        @change="handleChange"
        :min="450"
        :max="800"
        size="small"
      ></el-input-number>
    </div>
    <div class="attr-name size">
      <span class="type">高度</span>
      <el-input-number
        v-model="heightNum"
        controls-position="right"
        @change="handleChange"
        :min="600"
        :max="730"
        size="small"
      ></el-input-number>
    </div>
    <!-- 预设尺寸 -->
    <myTitle title="预设尺寸"></myTitle>
    <div class="pre-size">
      <div @click="setSize(450, 600)">红书竖版：900x1200*0.5</div>
      <div @click="setSize(600, 450)">红书横版：1200x900*0.5</div>
      <div @click="setSize(432, 730)">手机壁纸：1080x1920*0.4</div>
    </div>
    <!-- 颜色 -->
    <myTitle title="颜色"></myTitle>
    <div class="attr-name color">
      <span>颜色</span>
      <el-color-picker v-model="color" size="small"></el-color-picker>
    </div>
    <div class="attr-name color">
      <span>图片</span>
      <el-upload
        class="upload-demo"
        action="#"
        :on-error="createImg"
        :before-upload="handleUpload"
        :on-success="createImg"
      >
        <el-button size="small" type="primary">上传背景</el-button>
      </el-upload>
    </div>
    <myTitle title="纹理背景"></myTitle>
    <div class="bg-img">
      <img
        :src="`./images/${item}.png`"
        alt=""
        v-for="(item, index) in getImgIndex(1, 5)"
        :key="index"
        @click="setBgOfTemp"
      />
    </div>
  </div>
</template>

<script>
import myTitle from "@/components/myTitle";
import { getImgStr } from "@/utils/utils";
export default {
  components: { myTitle },
  inject: ["canvas", "fabric"],
  data() {
    return {
      widthNum: 450,
      heightNum: 600,
      color: "",
      imgFile: "",
    };
  },
  methods: {
    handleChange() {},
    // 获取图片序号
    getImgIndex(start, end) {
      const arr = Array(end - (start - 1)).fill("");
      return arr.map((item, index) => {
        return start + index;
      });
    },
    // 修改画布宽高
    setSize(width, height) {
      this.widthNum = width;
      this.heightNum = height;
    },
    // 拿到上传的图片
    handleUpload(file) {
      getImgStr(file).then((res) => {
        this.imgFile = res;
      });
    },
    // 创建图片
    createImg() {
      let imgEle = document.createElement("img");
      imgEle.src = this.imgFile;
      document.body.appendChild(imgEle);
      imgEle.onload = () => {
        this.setBgImg(imgEle);
        imgEle.remove();
      };
    },
    // 设置背景
    setBgImg(img) {
      const imgEle = img.cloneNode();
      imgEle.onload = () => {
        // 可跨域设置
        const imgInstance = new this.fabric.Image(imgEle, {
          crossOrigin: "anonymous",
        });
        // 渲染背景
        this.canvas.c.setBackgroundImage(
          imgInstance,
          this.canvas.c.renderAll.bind(this.canvas.c),
          {
            scaleX: this.canvas.c.width / imgInstance.width,
            scaleY: this.canvas.c.width / imgInstance.width,
          }
        );
        this.canvas.c.renderAll();
        this.canvas.c.requestRenderAll();
      };
    },
    // 设置纹理背景
    setBgOfTemp(e) {
      this.setBgImg(e.target);
    },
  },
  watch: {
    // 设置画布宽度
    widthNum() {
      this.canvas.c.setWidth(this.widthNum);
      this.canvas.c.renderAll();
    },
    // 设置画布高度
    heightNum() {
      this.canvas.c.setHeight(this.heightNum);
      this.canvas.c.renderAll();
    },
    //设置画布颜色
    color() {
      this.canvas.c.setBackgroundColor(this.color);
      this.canvas.c.renderAll();
    },
  },
};
</script>

<style lang="less" scoped>
.attr-name {
  margin-bottom: 10px;
  span {
    margin-right: 10px;
    font-size: 14px;
    color: #515a6e;
  }
  .el-color-picker {
    display: inline-block;
  }
}
.pre-size {
  div {
    font-size: 14px;
    color: #515a6e;
    border-bottom: none;
    height: 20px;
    line-height: 20px;
    border-radius: 3px;
    padding-left: 10px;
    border: 1px solid #dcdee2;
    cursor: pointer;
  }
  :last-child {
    border-bottom: 1px solid #dcdee2;
  }
  div:hover {
    color: blue;
  }
}
.color {
  display: flex;
  align-items: center;
}
.bg-img {
  img {
    margin-left: 5px;
    background-color: #dcdee2;
    display: inline-block;
    width: 50px;
    height: 70px;
    margin-bottom: 5px;
    padding: 5px;
  }
}
</style>