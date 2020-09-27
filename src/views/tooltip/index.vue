<template>
  <div id="main">
    <div id="tooltip"></div>
  </div>
</template>
<script>
import createToolTip from "alvin-tooltip";
export default {
  name: "Tooltip",
  data() {
    return {
      tooltip: "",
    };
  },
  mounted() {
    var cfg = {
      targetNodeId: "tooltip",
      tooltipDir: "right",
      content: "I am a sample.",
      tooltipPosition: "",
    };
    this.tooltip = createToolTip(cfg);
  },
};
</script>
<style lang="scss" scoped>
#tooltip {
  width: 150px;
  height: 50px;
  line-height: 48px;
  background: #ddd;
  text-align: center;
}
</style>