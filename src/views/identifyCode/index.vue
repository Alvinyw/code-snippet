<template>
  <div id="main">
    <IdentifyCode :identify-code="code" :content-width="100" :content-height="48"></IdentifyCode>
  </div>
</template>
<script>
import IdentifyCode from 'vue-identifycode' // 引入包

export default {
  name: "IdentifyCodeTest",
  components: { IdentifyCode },
  data() {
    return {
      code: "25fg"
    };
  }
};
</script>