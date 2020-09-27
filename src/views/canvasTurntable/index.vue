<template>
  <div id="main">
    <div id="canvasTurntable"></div>
  </div>
</template>
<script>
import createCanvasTurntable from "alvin-canvasturntable";
export default {
  name: "CanvasTurntable",
  data() {
    return {
      tooltip: "",
    };
  },
  mounted() {
    var cfg = {
      targetNodeId: "canvasTurntable",
      sectorText: ["张某某", "李某某", "王某某", "韩某某", "廖某某", "赵某某"],
      rotateTime: 3,
    };
    this.tooltip = createCanvasTurntable(cfg);
  },
};
</script>