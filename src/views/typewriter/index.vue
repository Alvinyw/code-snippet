<template>
  <div id="main">
    <div id="typewriter" class="item">
        <span class="comments">/**</span><br />
        <span class="comments pl10">*2015—10-08,</span><br />
        <span class="comments pl10">*2017-02-14.</span><br />
        <span class="comments">*/</span><br />
        Boy name = <span class="keyword">Mr</span> Liao<br />
        Girl name = <span class="keyword">Ms</span> Zhou<br />
        <span class="comments">// Fall in love river. </span><br />
        The boy love the girl;<br />
        <span class="comments">// They love each other.</span><br />
        The girl loved the boy;<br />
        <span class="comments">// AS time goes on.</span><br />
        The boy can not be separated the girl;<br />
        <span class="comments">// At the same time.</span><br />
        The girl can not be separated the boy;<br />
        <span class="comments">// Both wind and snow all over the sky.</span><br />
        <span class="comments">// Whether on foot or 5 kilometers.</span><br />
        <span class="keyword">The boy</span> very <span class="keyword">happy</span>;<br />
        <span class="keyword">The girl</span> is also very <span class="keyword">happy</span>;<br />
        <span class="comments">// Whether it is right now</span><br />
        <span class="comments">// Still in the distant future.</span><br />
        The boy has but one dream;<br />
        <span class="comments">// The boy wants the girl could well have been happy.</span><br />
        <br>
        I want to say:<br />
        Baby, I love you forever;<br />
        <br />
        -- Alvin
    </div>
  </div>
</template>
<script>
import createTypewriter from "alvin-typewriter";
export default {
  name: "Typewriter",
  data() {
    return {
      typewriter: "",
    };
  },
  mounted() {
    var cfg = {
      targetNodeId: "typewriter",
      typingSpeed: 70
    };
    this.typewriter = createTypewriter(cfg);
  },
};
</script>
<style lang="scss" scoped>
#main { margin:0 auto 50px; width:485px;}
.item { padding:15px; min-height:660px; line-height:26px; border:2px solid #ccc; border-radius:3px;}
/**/
#typewriter { color: #333; font-family: "Consolas", "Monaco", "Bitstream Vera Sans Mono", "Courier New", "sans-serif"; font-size: 12px; line-height: 24px; }
#typewriter .string { color: #2a36ff }
#typewriter .keyword { color: #7f0055; font-weight: bold }
#typewriter .space { margin-left: 7px }
#typewriter .comments { color: #3f7f5f }
#typewriter .chin { letter-spacing: 2px; }
#typewriter .pl10 { padding-left: 10px; }
</style>