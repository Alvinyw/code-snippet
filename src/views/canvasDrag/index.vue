<template>
  <div id="main">
    <a href="javascript:void(0)" @click="fuc_getPointInfo">getPointInfo</a>
    <div id="canvasdrag"></div>
  </div>
</template>
<script>
import createCanvasDrag from "alvin-canvasdrag";
export default {
  name: "CanvasDrag",
  data() {
    return {
      canvasdrag: "",
    };
  },
  mounted() {
    var cfg = {
      operationPanel: "#canvasdrag",
      defaultPointInfo: [58, 189, 440, 87, 475, 211, 92, 314],
    };
    this.canvasdrag = createCanvasDrag(cfg);
  },
  methods: {
    fuc_getPointInfo() {
      if (!this.canvasdrag) {
        return false;
      }

      this.canvasdrag.getPointInfo();
    },
  },
};
</script>
<style lang="scss" scoped>
#canvasdrag {
  width: 600px;
  height: 400px;
}
</style>