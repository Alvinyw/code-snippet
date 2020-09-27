<template>
  <div id="main">
    <a href="javascript:void(0)" @click="fuc_LoadImage">LoadImage</a>
    <div id="imageViewer"></div>
  </div>
</template>
<script>
import createImageViewer from "alvin-imageviewer";
export default {
  name: "ImageViewer",
  data() {
    return {
      imageViewer: "",
    };
  },
  mounted() {
    var cfg = {
      ContainerId: "imageViewer",
      Width: "1000px",
      Height: "1000px",
    };
    this.imageViewer = createImageViewer(cfg);
  },
  methods: {
    fuc_LoadImage() {
      if (!this.imageViewer) {
        return false;
      }

      this.imageViewer.LoadImageEx();
    },
  },
};
</script>