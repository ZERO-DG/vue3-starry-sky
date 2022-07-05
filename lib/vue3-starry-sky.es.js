import { ref, onMounted, openBlock, createElementBlock, createElementVNode, Fragment, renderList } from "vue";
var starrySky_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".starry-sky-bg[data-v-469e5ae1]{width:100%;height:100vh;position:fixed;top:0;left:0;z-index:-100;background:radial-gradient(200% 100% at bottom center,#f7f7b6,#e96f92,#75517d,#1b2947);background:radial-gradient(220% 105% at top center,#1b2947 10%,#75517d 40%,#e96f92 65%,#f7f7b6);background-attachment:fixed}@keyframes rotate-469e5ae1{0%{transform:perspective(400px) rotate(20deg) rotateX(-40deg) rotateY(0)}to{transform:perspective(400px) rotate(20deg) rotateX(-40deg) rotateY(-360deg)}}.stars[data-v-469e5ae1]{transform:perspective(500px);transform-style:preserve-3d;position:fixed;perspective-origin:50% 100%;left:50%;animation:rotate-469e5ae1 66s infinite linear;bottom:0;z-index:-99}.star[data-v-469e5ae1]{width:2px;height:2px;background:#f7f7b8;position:fixed;top:0px;left:0;backface-visibility:hidden}\n")();
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "starry-sky-bg" };
const _hoisted_2 = { class: "stars" };
const _sfc_main = {
  __name: "starry-sky",
  props: {
    starsCount: {
      type: Number,
      default: () => 800
    },
    distance: {
      type: Number,
      default: () => 800
    }
  },
  setup(__props) {
    const props = __props;
    const star = ref();
    onMounted(() => {
      let starArr = star.value;
      starArr.forEach((item) => {
        let speed = 0.1 + Math.random() * 1;
        let thisDistance = props.distance + Math.random() * 300;
        item.style.transformOrigin = `0 0 ${thisDistance}px`;
        item.style.transform = `translate3d(0,0,-${thisDistance}px) rotateY(${Math.random() * 360}deg) rotateX(${Math.random() * -50}deg) scale(${speed},${speed})`;
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.starsCount, (item) => {
            return openBlock(), createElementBlock("div", {
              key: item,
              class: "star",
              ref_for: true,
              ref_key: "star",
              ref: star
            });
          }), 128))
        ])
      ]);
    };
  }
};
var StarrySky = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-469e5ae1"]]);
StarrySky.install = (App) => {
  App.component(StarrySky.__name, StarrySky);
};
const components = [StarrySky];
const install = (App) => {
  components.forEach((item) => {
    App.component(item.__name, item);
  });
};
var index = { install };
export { StarrySky, index as default };
