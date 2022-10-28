<template>
  <div>
    <!-- 字体属性 -->
    <div class="fontAttr" v-show="textType.includes(mSelectOneType)">
      <myTitle title="字体"></myTitle>
      <el-form ref="form" label-width="40px" size="mini">
        <!-- 大小 -->
        <el-form-item label="大小">
          <el-input-number
            v-model="fontAttr.fontSize"
            controls-position="right"
            @change="change('fontSize', fontAttr.fontSize)"
            :min="12"
            :max="100"
          ></el-input-number>
        </el-form-item>
        <!-- 字体 -->
        <el-form-item label="字体">
          <el-select
            v-model="fontAttr.fontFamily"
            placeholder="请选择"
            @change="changeFontFamily(fontAttr.fontFamily)"
          >
            <el-option
              :label="item"
              :value="item"
              v-for="(item, index) in fontFamilyList"
              :key="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 背景 -->
        <el-form-item label="背景">
          <el-color-picker
            v-model="fontAttr.fontBg"
            size="mini"
            @change="change('textBackgroundColor', fontAttr.fontBg)"
          ></el-color-picker>
        </el-form-item>
        <!--对齐方式  -->
        <el-form-item label="对齐">
          <el-button size="mini" @click="change('textAlign', 'left')">
            <svg
              t="1650441458823"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3554"
              width="14"
              height="14"
            >
              <path
                d="M198.4 198.4h341.333333c8.533333 0 14.933333 2.133333 19.2 8.533333 6.4 6.4 8.533333 12.8 8.533334 19.2v57.6c0 8.533333-2.133333 14.933333-8.533334 19.2-6.4 6.4-12.8 8.533333-19.2 8.533334h-341.333333c-8.533333 0-14.933333-2.133333-19.2-8.533334-6.4-6.4-8.533333-12.8-8.533333-19.2v-57.6c0-8.533333 2.133333-14.933333 8.533333-19.2 4.266667-4.266667 12.8-8.533333 19.2-8.533333z m0 170.666667h569.6c8.533333 0 14.933333 2.133333 19.2 8.533333 6.4 6.4 8.533333 12.8 8.533333 19.2v57.6c0 8.533333-2.133333 14.933333-8.533333 19.2-6.4 6.4-12.8 8.533333-19.2 8.533333h-569.6c-8.533333 0-14.933333-2.133333-19.2-8.533333-6.4-6.4-8.533333-12.8-8.533333-19.2v-57.6c0-8.533333 2.133333-14.933333 8.533333-19.2 4.266667-4.266667 12.8-8.533333 19.2-8.533333z m0 170.666666h454.4c8.533333 0 14.933333 2.133333 19.2 8.533334 6.4 6.4 8.533333 12.8 8.533333 19.2v57.6c0 8.533333-2.133333 14.933333-8.533333 19.2-6.4 6.4-12.8 8.533333-19.2 8.533333h-454.4c-8.533333 0-14.933333-2.133333-19.2-8.533333-6.4-6.4-8.533333-12.8-8.533333-19.2v-57.6c0-8.533333 2.133333-14.933333 8.533333-19.2 4.266667-4.266667 12.8-8.533333 19.2-8.533334z m0 170.666667h625.066667c8.533333 0 14.933333 2.133333 19.2 8.533333 6.4 6.4 8.533333 12.8 8.533333 19.2v57.6c0 8.533333-2.133333 14.933333-8.533333 19.2-6.4 6.4-12.8 8.533333-19.2 8.533334h-625.066667c-8.533333 0-14.933333-2.133333-19.2-8.533334-6.4-6.4-8.533333-12.8-8.533333-19.2v-57.6c0-8.533333 2.133333-14.933333 8.533333-19.2 4.266667-4.266667 12.8-8.533333 19.2-8.533333z"
                p-id="3555"
              ></path>
            </svg>
          </el-button>
          <el-button size="mini" @click="change('textAlign', 'center')">
            <svg
              t="1650441512015"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3704"
              width="14"
              height="14"
            >
              <path
                d="M313.6 198.4h398.933333c8.533333 0 14.933333 2.133333 19.2 8.533333 6.4 6.4 8.533333 12.8 8.533334 19.2v57.6c0 8.533333-2.133333 14.933333-8.533334 19.2-6.4 6.4-12.8 8.533333-19.2 8.533334h-398.933333c-8.533333 0-14.933333-2.133333-19.2-8.533334-6.4-6.4-8.533333-12.8-8.533333-19.2v-57.6c0-8.533333 2.133333-14.933333 8.533333-19.2 4.266667-4.266667 10.666667-8.533333 19.2-8.533333z m-115.2 170.666667h625.066667c8.533333 0 14.933333 2.133333 19.2 8.533333 6.4 6.4 8.533333 12.8 8.533333 19.2v57.6c0 8.533333-2.133333 14.933333-8.533333 19.2-6.4 6.4-12.8 8.533333-19.2 8.533333h-625.066667c-8.533333 0-14.933333-2.133333-19.2-8.533333-6.4-6.4-8.533333-12.8-8.533333-19.2v-57.6c0-8.533333 2.133333-14.933333 8.533333-19.2 4.266667-4.266667 12.8-8.533333 19.2-8.533333z m115.2 170.666666h398.933333c8.533333 0 14.933333 2.133333 19.2 8.533334 6.4 6.4 8.533333 12.8 8.533334 19.2v57.6c0 8.533333-2.133333 14.933333-8.533334 19.2-6.4 6.4-12.8 8.533333-19.2 8.533333h-398.933333c-8.533333 0-14.933333-2.133333-19.2-8.533333-6.4-6.4-8.533333-12.8-8.533333-19.2v-57.6c0-8.533333 2.133333-14.933333 8.533333-19.2 4.266667-4.266667 10.666667-8.533333 19.2-8.533334z m-115.2 170.666667h625.066667c8.533333 0 14.933333 2.133333 19.2 8.533333 6.4 6.4 8.533333 12.8 8.533333 19.2v57.6c0 8.533333-2.133333 14.933333-8.533333 19.2-6.4 6.4-12.8 8.533333-19.2 8.533334h-625.066667c-8.533333 0-14.933333-2.133333-19.2-8.533334-6.4-6.4-8.533333-12.8-8.533333-19.2v-57.6c0-8.533333 2.133333-14.933333 8.533333-19.2 4.266667-4.266667 12.8-8.533333 19.2-8.533333z"
                p-id="3705"
              ></path>
            </svg>
          </el-button>
          <el-button size="mini" @click="change('textAlign', 'right')">
            <svg
              t="1650441519862"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3854"
              width="14"
              height="14"
            >
              <path
                d="M454.4 283.733333v-57.6c0-8.533333 2.133333-14.933333 8.533333-19.2 6.4-6.4 12.8-8.533333 19.2-8.533333h341.333334c8.533333 0 14.933333 2.133333 19.2 8.533333 6.4 6.4 8.533333 12.8 8.533333 19.2v57.6c0 8.533333-2.133333 14.933333-8.533333 19.2-6.4 6.4-12.8 8.533333-19.2 8.533334h-341.333334c-8.533333 0-14.933333-2.133333-19.2-8.533334-4.266667-4.266667-8.533333-10.666667-8.533333-19.2z m-226.133333 170.666667v-57.6c0-8.533333 2.133333-14.933333 8.533333-19.2 6.4-6.4 12.8-8.533333 19.2-8.533333h569.6c8.533333 0 14.933333 2.133333 19.2 8.533333 6.4 6.4 8.533333 12.8 8.533333 19.2v57.6c0 8.533333-2.133333 14.933333-8.533333 19.2-6.4 6.4-12.8 8.533333-19.2 8.533333H256c-8.533333 0-14.933333-2.133333-19.2-8.533333-6.4-4.266667-8.533333-10.666667-8.533333-19.2z m113.066666 170.666667v-57.6c0-8.533333 2.133333-14.933333 8.533334-19.2 6.4-6.4 12.8-8.533333 19.2-8.533334h454.4c8.533333 0 14.933333 2.133333 19.2 8.533334 6.4 6.4 8.533333 12.8 8.533333 19.2v57.6c0 8.533333-2.133333 14.933333-8.533333 19.2-6.4 6.4-12.8 8.533333-19.2 8.533333h-454.4c-8.533333 0-14.933333-2.133333-19.2-8.533333-6.4-4.266667-8.533333-10.666667-8.533334-19.2z m-170.666666 170.666666v-57.6c0-8.533333 2.133333-14.933333 8.533333-19.2 6.4-6.4 12.8-8.533333 19.2-8.533333h625.066667c8.533333 0 14.933333 2.133333 19.2 8.533333 6.4 6.4 8.533333 12.8 8.533333 19.2v57.6c0 8.533333-2.133333 14.933333-8.533333 19.2-6.4 6.4-12.8 8.533333-19.2 8.533334h-625.066667c-8.533333 0-14.933333-2.133333-19.2-8.533334-6.4-4.266667-8.533333-10.666667-8.533333-19.2z"
                p-id="3855"
              ></path>
            </svg>
          </el-button>
        </el-form-item>
        <!-- 其他-->
        <div class="other">
          <span>加粗:</span
          ><el-switch
            v-model="fontAttr.fontWight"
            active-value="bold"
            inactive-value="normal"
            @change="change('fontWeight', fontAttr.fontWight)"
          ></el-switch>
          <span>斜体:</span
          ><el-switch
            v-model="fontAttr.fontStyle"
            active-value="italic"
            inactive-value="normal"
            @change="change('fontStyle', fontAttr.fontStyle)"
          ></el-switch>
          <span>下划:</span
          ><el-switch
            v-model="fontAttr.underline"
            @change="change('underline', fontAttr.underline)"
          ></el-switch>
          <span>中划:</span
          ><el-switch
            v-model="fontAttr.linethrought"
            @change="change('linethrought', fontAttr.linethrought)"
          ></el-switch>
          <span>上划:</span
          ><el-switch
            v-model="fontAttr.overline"
            @change="change('overline', fontAttr.overline)"
          ></el-switch>
        </div>
        <!-- 行高 -->
        <el-form-item label="行高">
          <el-input
            v-model="fontAttr.lineHeight"
            :placeholder="fontAttr.lineHeight"
            @change="change('lineHeight', fontAttr.lineHeight)"
          ></el-input>
        </el-form-item>
        <el-form-item label="间距">
          <el-input
            v-model="fontAttr.charSpacing"
            :placeholder="fontAttr.charSpacing"
            @change="change('charSpacing', fontAttr.charSpacing)"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="baseAttr" v-show="mSelectMode === 'one'">
      <!-- 外观 -->
      <div class="appearance">
        <myTitle title="外观"> </myTitle>
        <el-form ref="form" label-width="40px" size="mini">
          <el-form-item label="颜色">
            <el-color-picker
              v-model="baseAttr.fill"
              size="mini"
              @change="change('fill', baseAttr.fill)"
            ></el-color-picker>
          </el-form-item>
          <el-form-item label="旋转">
            <el-input-number
              v-model="baseAttr.angle"
              controls-position="right"
              @change="change('angle', baseAttr.angle)"
              :min="0"
              :max="360"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="X轴">
            <el-input-number
              v-model="baseAttr.left"
              controls-position="right"
              @change="change('left', baseAttr.left)"
              :min="0"
              :max="360"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="Y轴">
            <el-input-number
              v-model="baseAttr.top"
              controls-position="right"
              @change="change('right', baseAttr.right)"
              :min="0"
              :max="360"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="透明">
            <el-slider
              v-model="baseAttr.opacity"
              size="mini"
              @change="change('opacity', baseAttr.opacity)"
            ></el-slider>
          </el-form-item>
        </el-form>
      </div>
      <!-- 描边 -->
      <myTitle title="描边"></myTitle>
      <el-form label-width="40px" size="mini">
        <el-form-item label="宽度">
          <el-input-number
            v-model="baseAttr.strokeWidth"
            controls-position="right"
            @change="change('strokeWidth', baseAttr.strokeWidth)"
            size="mini"
            :min="0"
            :max="180"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="颜色">
          <el-color-picker
            v-model="baseAttr.stroke"
            @change="change('stroke', baseAttr.stroke)"
            size="mini"
          ></el-color-picker>
        </el-form-item>
      </el-form>
      <!-- 阴影 -->
      <myTitle title="阴影"> </myTitle>
      <el-form label-width="40px" size="mini">
        <el-form-item label="颜色">
          <el-color-picker
            v-model="baseAttr.shadow.color"
            @change="changeShadow()"
            size="mini"
          ></el-color-picker>
        </el-form-item>
        <el-form-item label="模糊">
          <el-input-number
            v-model="baseAttr.shadow.blur"
            controls-position="right"
            @change="changeShadow()"
            size="mini"
            :min="0"
            :max="30"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="X轴">
          <el-input-number
            v-model="baseAttr.shadow.offsetX"
            controls-position="right"
            @change="changeShadow()"
            size="mini"
            :min="0"
            :max="30"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="Y轴">
          <el-input-number
            v-model="baseAttr.shadow.offsetY"
            controls-position="right"
            @change="changeShadow()"
            size="mini"
            :min="0"
            :max="30"
          ></el-input-number>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import myTitle from "@/components/myTitle";
import select from "@/mixins/select";
import fontList from "@/assets/fonts/font";
import FontFaceObserver from "fontfaceobserver";
import { fabric } from "fabric";
export default {
  components: { myTitle },
  mixins: [select],
  data() {
    return {
      // 字体type类型
      textType: ["i-text", "text", "textbox"],
      fontAttr: {
        fontSize: "",
        fontFamily: "",
        fontBg: "",
        fontWight: "",
        fontStyle: "",
        underline: false,
        linethrought: false,
        overline: false,
        lineHeight: 0,
        charSpacing: 0,
        textAlign: "",
      },
      //   通用属性
      baseAttr: {
        opacity: 0,
        angle: 0,
        fill: "#fff",
        left: 0,
        top: 0,
        strokeWidth: 0,
        stroke: "#fff",
        shadow: {
          color: "#fff",
          blur: 0,
          offsetX: 0,
          offsetY: 0,
        },
      },
      fontFamilyList: fontList.map((item) => item.fontFamily),
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.event.on("selectOne", (e) => {
        const activeObject = this.canvas.c.getActiveObject();
        if (activeObject) {
          this.baseAttr.opacity = activeObject.get("opacity") * 100;
          this.baseAttr.fill = activeObject.get("fill");
          this.baseAttr.left = activeObject.get("left");
          this.baseAttr.top = activeObject.get("top");
          this.baseAttr.stroke = activeObject.get("stroke");
          this.baseAttr.strokeWidth = activeObject.get("strokeWidth");
          this.baseAttr.shadow = activeObject.get("shadow") || {};
          if (activeObject.type === "i-text" || "text" || "textbox") {
            this.fontAttr.fontSize = activeObject.get("fontSize");
            this.fontAttr.fontFamily = activeObject.get("fontFamily");
            this.fontAttr.fontBg = activeObject.get("textBackgroundColor");
            this.fontAttr.fontWight = activeObject.get("fontWight");
            this.fontAttr.fontStyle = activeObject.get("fontStyle");
            this.fontAttr.underline = activeObject.get("underline");
            this.fontAttr.linethrought = activeObject.get("linethrough");
            this.fontAttr.overline = activeObject.get("overline");
            this.fontAttr.lineHeight = activeObject.get("lineHeight");
            this.fontAttr.charSpacing = activeObject.get("charSpacing");
            this.fontAttr.textAlign = activeObject.get("textAlign");
          }
        }
      });
    });
  },
  methods: {
    // 改变选中对象的属性
    change(key, value) {
      console.log(key, value);
      const activeObject = this.canvas.c.getActiveObject();
      //  透明度
      if (key === "opacity") {
        activeObject.canvas.c.set(key, value / 100);
        this.canvas.c.renderAll();
      }
      activeObject && activeObject.set(key, value);
      this.canvas.c.renderAll();
    },
    // 改变字体
    changeFontFamily(fontName) {
      var font = new FontFaceObserver(fontName);
      font
        .load(null, 150000)
        .then(() => {
          const activeObject = this.canvas.c.getActiveObjects()[0];
          activeObject && activeObject.set("fontFamily", fontName);
          this.canvas.c.renderAll();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 改变阴影
    changeShadow() {
      const activeObject = this.canvas.c.getActiveObject();
      activeObject &&
        activeObject.set("shadow", new fabric.Shadow(this.baseAttr.shadow));
      this.canvas.c.renderAll();
    },
  },
};
</script>

<style lang="less" scoped>
.el-input-number {
  width: 170px;
}
.el-form {
  .el-form-item {
    margin-bottom: 5px;
    height: 28px;
  }
}
.fontAttr {
  font-size: 12px;
  .el-form {
    .el-form-item {
      margin-bottom: 5px;
      .el-button {
        padding: 4px 10px;
        margin-left: 0;
      }
    }
  }
  .other {
    margin: 10px 0;
    .el-switch {
      margin: 0 26px 5px 10px;
    }
  }
}
.baseAttr {
  .appearance {
    .el-form-item {
      margin-bottom: 5px;
      height: 28px;
      .el-form-item__content {
        height: 28px !important;
      }
      .el-slider {
        ::v-deep .el-slider__runway {
          margin: 10px 0;
        }
        ::v-deep .el-slider__button {
          width: 10px;
          height: 10px;
        }
      }
    }
  }
}
</style>