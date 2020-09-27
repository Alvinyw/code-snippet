<template>
  <div id="main">
    <pre class="CodeHighlight">
&lt;html>
&lt;head>
&lt;title>Thumbnail Navigation&lt;/title>
&lt;meta name ="distribution" content="global" />
&lt;link type= "text/css" rel="stylesheet" href="assets/css/bootstrap.min.css"/>
&lt;style type="text/css" >
//...
&lt;/style>
&lt;/head>
&lt;body>
&lt;div id="image-container" style="width: 150px; height: 525px; border: solid 1px #ddd; display: inline-block">
    &lt;div id="black-bar" style="width: 100%; padding: 10px 0;">
        &lt;button onClick="cancelClick()" style="margin-left: 100px;">cancel&lt;/button>
        &lt;img class="img-responsive" src="../../" title="codehightlight" alt="codehightlight"/>
        &lt;p>Dynamic Web TWAIN is a browser-based document scanning SDK specifically designed for web applications. &lt;/p>
    &lt;/div>
&lt;/div>
&lt;button id="btn-grab" style="margin-left: 400px; display: block;" onClick="onBtnGrabClick()">Grab a Snapshot&lt;/button>
&lt;br />
&lt;script type="text/javascript" src="DCSResources/dynamsoft.camera.config.js"> &lt;/script> 
&lt;script type="text/javascript">
	for(var i=0;i&lt;10;i++){
		if(iArray[i]>20){
			//...
		}	 
	}
&lt;/script>
&lt;/body>
&lt;/html>
</pre
    >
  </div>
</template>
<script>
import createCodeHighlight from "alvin-codehighlight";
export default {
  name: "Codehighlight",
  data() {
    return {
      codehighlight: "",
    };
  },
  mounted() {
    var cfg = {
      //特殊的 element 样式
      jsColor: "#d10303",
      cssColor: "#f408af",
      metaColor: "#c1ad04",
      //特殊的 attribute 样式
      idColor: "#fe8e14",
      claColor: "green",
      styColor: "pink",
    };
    this.codehighlight = createCodeHighlight(cfg);
  },
};
</script>