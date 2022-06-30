
  <template>
    <div>
    <h2>Alert 警告</h2>
<p>用于页面中展示重要的提示信息。</p>
<h3>基本用法</h3>
<p>页面中的非浮层元素，不会自动消失。</p>
<div class='component-demo-container'>
                <GuiDemoBlock>
                  <template #demo-tip>
                    Alert 组件提供四种主题，由`type`属性指定，默认值为`info`。
                    &lt;template&gt;
&nbsp;&nbsp;&lt;el-alert
&nbsp;&nbsp;&nbsp;&nbsp;title=&quot;成功提示的文案&quot;
&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;success&quot;&gt;
&nbsp;&nbsp;&lt;/el-alert&gt;
&nbsp;&nbsp;&lt;el-alert
&nbsp;&nbsp;&nbsp;&nbsp;title=&quot;消息提示的文案&quot;
&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;info&quot;&gt;
&nbsp;&nbsp;&lt;/el-alert&gt;
&nbsp;&nbsp;&lt;el-alert
&nbsp;&nbsp;&nbsp;&nbsp;title=&quot;警告提示的文案&quot;
&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;warning&quot;&gt;
&nbsp;&nbsp;&lt;/el-alert&gt;
&nbsp;&nbsp;&lt;el-alert
&nbsp;&nbsp;&nbsp;&nbsp;title=&quot;错误提示的文案&quot;
&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;error&quot;&gt;
&nbsp;&nbsp;&lt;/el-alert&gt;
&lt;/template&gt;
                  </template>
              </GuiDemoBlock>
      <pre><code class="language-html">&lt;template&gt;
  &lt;el-alert
    title=&quot;成功提示的文案&quot;
    type=&quot;success&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;消息提示的文案&quot;
    type=&quot;info&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;警告提示的文案&quot;
    type=&quot;warning&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;错误提示的文案&quot;
    type=&quot;error&quot;&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
</code></pre>
</div>
<h3>主题</h3>
<p>Alert 组件提供了两个不同的主题：<code>light</code>和<code>dark</code>。</p>
<div class='component-demo-container'>
                <GuiDemoBlock>
                  <template #demo-tip>
                    通过设置`effect`属性来改变主题，默认为`light`。
                    &lt;template&gt;
&nbsp;&nbsp;&lt;el-alert
&nbsp;&nbsp;&nbsp;&nbsp;title=&quot;成功提示的文案&quot;
&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;success&quot;
&nbsp;&nbsp;&nbsp;&nbsp;effect=&quot;dark&quot;&gt;
&nbsp;&nbsp;&lt;/el-alert&gt;
&nbsp;&nbsp;&lt;el-alert
&nbsp;&nbsp;&nbsp;&nbsp;title=&quot;消息提示的文案&quot;
&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;info&quot;
&nbsp;&nbsp;&nbsp;&nbsp;effect=&quot;dark&quot;&gt;
&nbsp;&nbsp;&lt;/el-alert&gt;
&nbsp;&nbsp;&lt;el-alert
&nbsp;&nbsp;&nbsp;&nbsp;title=&quot;警告提示的文案&quot;
&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;warning&quot;
&nbsp;&nbsp;&nbsp;&nbsp;effect=&quot;dark&quot;&gt;
&nbsp;&nbsp;&lt;/el-alert&gt;
&nbsp;&nbsp;&lt;el-alert
&nbsp;&nbsp;&nbsp;&nbsp;title=&quot;错误提示的文案&quot;
&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;error&quot;
&nbsp;&nbsp;&nbsp;&nbsp;effect=&quot;dark&quot;&gt;
&nbsp;&nbsp;&lt;/el-alert&gt;
&lt;/template&gt;
                  </template>
              </GuiDemoBlock>
      <pre><code class="language-html">&lt;template&gt;
  &lt;el-alert
    title=&quot;成功提示的文案&quot;
    type=&quot;success&quot;
    effect=&quot;dark&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;消息提示的文案&quot;
    type=&quot;info&quot;
    effect=&quot;dark&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;警告提示的文案&quot;
    type=&quot;warning&quot;
    effect=&quot;dark&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;错误提示的文案&quot;
    type=&quot;error&quot;
    effect=&quot;dark&quot;&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
</code></pre>
</div>
<h3>自定义关闭按钮</h3>
<p>自定义关闭按钮为文字或其他符号。</p>
<div class='component-demo-container'>
                <GuiDemoBlock>
                  <template #demo-tip>
                    在 Alert 组件中，你可以设置是否可关闭，关闭按钮的文本以及关闭时的回调函数。`closable`属性决定是否可关闭，接受`boolean`，默认为`true`。你可以设置`close-text`属性来代替右侧的关闭图标，注意：`close-text`必须为文本。设置`close`事件来设置关闭时的回调。
                    &lt;template&gt;
&nbsp;&nbsp;&lt;el-alert
&nbsp;&nbsp;&nbsp;&nbsp;title=&quot;不可关闭的&nbsp;alert&quot;
&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;success&quot;
&nbsp;&nbsp;&nbsp;&nbsp;:closable=&quot;false&quot;&gt;
&nbsp;&nbsp;&lt;/el-alert&gt;
&nbsp;&nbsp;&lt;el-alert
&nbsp;&nbsp;&nbsp;&nbsp;title=&quot;自定义&nbsp;close-text&quot;
&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;info&quot;
&nbsp;&nbsp;&nbsp;&nbsp;close-text=&quot;知道了&quot;&gt;
&nbsp;&nbsp;&lt;/el-alert&gt;
&nbsp;&nbsp;&lt;el-alert
&nbsp;&nbsp;&nbsp;&nbsp;title=&quot;设置了回调的&nbsp;alert&quot;
&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;warning&quot;
&nbsp;&nbsp;&nbsp;&nbsp;@close=&quot;hello&quot;&gt;
&nbsp;&nbsp;&lt;/el-alert&gt;
&lt;/template&gt;

&lt;script&gt;
&nbsp;&nbsp;export&nbsp;default&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;methods:&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hello()&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert(&#39;Hello&nbsp;World!&#39;);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;}
&lt;/script&gt;
                  </template>
              </GuiDemoBlock>
      <pre><code class="language-html">&lt;template&gt;
  &lt;el-alert
    title=&quot;不可关闭的 alert&quot;
    type=&quot;success&quot;
    :closable=&quot;false&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;自定义 close-text&quot;
    type=&quot;info&quot;
    close-text=&quot;知道了&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;设置了回调的 alert&quot;
    type=&quot;warning&quot;
    @close=&quot;hello&quot;&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
&lt;/script&gt;
</code></pre>
</div>
<h3>带有 icon</h3>
<p>表示某种状态时提升可读性。</p>
<div class='component-demo-container'>
                <GuiDemoBlock>
                  <template #demo-tip>
                    通过设置`show-icon`属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。
                    &lt;template&gt;
&nbsp;&nbsp;&lt;el-alert
&nbsp;&nbsp;&nbsp;&nbsp;title=&quot;成功提示的文案&quot;
&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;success&quot;
&nbsp;&nbsp;&nbsp;&nbsp;show-icon&gt;
&nbsp;&nbsp;&lt;/el-alert&gt;
&nbsp;&nbsp;&lt;el-alert
&nbsp;&nbsp;&nbsp;&nbsp;title=&quot;消息提示的文案&quot;
&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;info&quot;
&nbsp;&nbsp;&nbsp;&nbsp;show-icon&gt;
&nbsp;&nbsp;&lt;/el-alert&gt;
&nbsp;&nbsp;&lt;el-alert
&nbsp;&nbsp;&nbsp;&nbsp;title=&quot;警告提示的文案&quot;
&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;warning&quot;
&nbsp;&nbsp;&nbsp;&nbsp;show-icon&gt;
&nbsp;&nbsp;&lt;/el-alert&gt;
&nbsp;&nbsp;&lt;el-alert
&nbsp;&nbsp;&nbsp;&nbsp;title=&quot;错误提示的文案&quot;
&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;error&quot;
&nbsp;&nbsp;&nbsp;&nbsp;show-icon&gt;
&nbsp;&nbsp;&lt;/el-alert&gt;
&lt;/template&gt;
                  </template>
              </GuiDemoBlock>
      <pre><code class="language-html">&lt;template&gt;
  &lt;el-alert
    title=&quot;成功提示的文案&quot;
    type=&quot;success&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;消息提示的文案&quot;
    type=&quot;info&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;警告提示的文案&quot;
    type=&quot;warning&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;错误提示的文案&quot;
    type=&quot;error&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
</code></pre>
</div>
<h3>文字居中</h3>
<div class='component-demo-container'>
                <GuiDemoBlock>
                  <template #demo-tip>
                    使用 `center` 属性让文字水平居中。
                    &lt;template&gt;
&nbsp;&nbsp;&lt;el-alert
&nbsp;&nbsp;&nbsp;&nbsp;title=&quot;成功提示的文案&quot;
&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;success&quot;
&nbsp;&nbsp;&nbsp;&nbsp;center
&nbsp;&nbsp;&nbsp;&nbsp;show-icon&gt;
&nbsp;&nbsp;&lt;/el-alert&gt;
&nbsp;&nbsp;&lt;el-alert
&nbsp;&nbsp;&nbsp;&nbsp;title=&quot;消息提示的文案&quot;
&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;info&quot;
&nbsp;&nbsp;&nbsp;&nbsp;center
&nbsp;&nbsp;&nbsp;&nbsp;show-icon&gt;
&nbsp;&nbsp;&lt;/el-alert&gt;
&nbsp;&nbsp;&lt;el-alert
&nbsp;&nbsp;&nbsp;&nbsp;title=&quot;警告提示的文案&quot;
&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;warning&quot;
&nbsp;&nbsp;&nbsp;&nbsp;center
&nbsp;&nbsp;&nbsp;&nbsp;show-icon&gt;
&nbsp;&nbsp;&lt;/el-alert&gt;
&nbsp;&nbsp;&lt;el-alert
&nbsp;&nbsp;&nbsp;&nbsp;title=&quot;错误提示的文案&quot;
&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;error&quot;
&nbsp;&nbsp;&nbsp;&nbsp;center
&nbsp;&nbsp;&nbsp;&nbsp;show-icon&gt;
&nbsp;&nbsp;&lt;/el-alert&gt;
&lt;/template&gt;
                  </template>
              </GuiDemoBlock>
      <pre><code class="language-html">&lt;template&gt;
  &lt;el-alert
    title=&quot;成功提示的文案&quot;
    type=&quot;success&quot;
    center
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;消息提示的文案&quot;
    type=&quot;info&quot;
    center
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;警告提示的文案&quot;
    type=&quot;warning&quot;
    center
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;错误提示的文案&quot;
    type=&quot;error&quot;
    center
    show-icon&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
</code></pre>
</div>
<h3>带有辅助性文字介绍</h3>
<p>包含标题和内容，解释更详细的警告。</p>
<div class='component-demo-container'>
                <GuiDemoBlock>
                  <template #demo-tip>
                    除了必填的`title`属性外，你可以设置`description`属性来帮助你更好地介绍，我们称之为辅助性文字。辅助性文字只能存放单行文本，会自动换行显示。
                    &lt;template&gt;
&nbsp;&nbsp;&lt;el-alert
&nbsp;&nbsp;&nbsp;&nbsp;title=&quot;带辅助性文字介绍&quot;
&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;success&quot;
&nbsp;&nbsp;&nbsp;&nbsp;description=&quot;这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。&nbsp;黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……&quot;&gt;
&nbsp;&nbsp;&lt;/el-alert&gt;
&lt;/template&gt;
                  </template>
              </GuiDemoBlock>
      <pre><code class="language-html">&lt;template&gt;
  &lt;el-alert
    title=&quot;带辅助性文字介绍&quot;
    type=&quot;success&quot;
    description=&quot;这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……&quot;&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
</code></pre>
</div>
<h3>带有 icon 和辅助性文字介绍</h3>
<div class='component-demo-container'>
                <GuiDemoBlock>
                  <template #demo-tip>
                    最后，这是一个同时具有 icon 和辅助性文字的样例。
                    &lt;template&gt;
&nbsp;&nbsp;&lt;el-alert
&nbsp;&nbsp;&nbsp;&nbsp;title=&quot;成功提示的文案&quot;
&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;success&quot;
&nbsp;&nbsp;&nbsp;&nbsp;description=&quot;文字说明文字说明文字说明文字说明文字说明文字说明&quot;
&nbsp;&nbsp;&nbsp;&nbsp;show-icon&gt;
&nbsp;&nbsp;&lt;/el-alert&gt;
&nbsp;&nbsp;&lt;el-alert
&nbsp;&nbsp;&nbsp;&nbsp;title=&quot;消息提示的文案&quot;
&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;info&quot;
&nbsp;&nbsp;&nbsp;&nbsp;description=&quot;文字说明文字说明文字说明文字说明文字说明文字说明&quot;
&nbsp;&nbsp;&nbsp;&nbsp;show-icon&gt;
&nbsp;&nbsp;&lt;/el-alert&gt;
&nbsp;&nbsp;&lt;el-alert
&nbsp;&nbsp;&nbsp;&nbsp;title=&quot;警告提示的文案&quot;
&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;warning&quot;
&nbsp;&nbsp;&nbsp;&nbsp;description=&quot;文字说明文字说明文字说明文字说明文字说明文字说明&quot;
&nbsp;&nbsp;&nbsp;&nbsp;show-icon&gt;
&nbsp;&nbsp;&lt;/el-alert&gt;
&nbsp;&nbsp;&lt;el-alert
&nbsp;&nbsp;&nbsp;&nbsp;title=&quot;错误提示的文案&quot;
&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;error&quot;
&nbsp;&nbsp;&nbsp;&nbsp;description=&quot;文字说明文字说明文字说明文字说明文字说明文字说明&quot;
&nbsp;&nbsp;&nbsp;&nbsp;show-icon&gt;
&nbsp;&nbsp;&lt;/el-alert&gt;
&lt;/template&gt;
                  </template>
              </GuiDemoBlock>
      <pre><code class="language-html">&lt;template&gt;
  &lt;el-alert
    title=&quot;成功提示的文案&quot;
    type=&quot;success&quot;
    description=&quot;文字说明文字说明文字说明文字说明文字说明文字说明&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;消息提示的文案&quot;
    type=&quot;info&quot;
    description=&quot;文字说明文字说明文字说明文字说明文字说明文字说明&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;警告提示的文案&quot;
    type=&quot;warning&quot;
    description=&quot;文字说明文字说明文字说明文字说明文字说明文字说明&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;错误提示的文案&quot;
    type=&quot;error&quot;
    description=&quot;文字说明文字说明文字说明文字说明文字说明文字说明&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
</code></pre>
</div>
<h3>Attributes</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>标题</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>type</td>
<td>主题</td>
<td>string</td>
<td>success/warning/info/error</td>
<td>info</td>
</tr>
<tr>
<td>description</td>
<td>辅助性文字。也可通过默认 slot 传入</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>closable</td>
<td>是否可关闭</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>center</td>
<td>文字是否居中</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>close-text</td>
<td>关闭按钮自定义文本</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-icon</td>
<td>是否显示图标</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>effect</td>
<td>选择提供的主题</td>
<td>string</td>
<td>light/dark</td>
<td>light</td>
</tr>
</tbody>
</table>
<h3>Slot</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>描述</td>
</tr>
<tr>
<td>title</td>
<td>标题的内容</td>
</tr>
</tbody>
</table>
<h3>Events</h3>
<table>
<thead>
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>close</td>
<td>关闭alert时触发的事件</td>
<td>—</td>
</tr>
</tbody>
</table>

    </div>
  </template>

  <script>
    import GuiDemoBlock from '@/components/gui-demo-block'
    export default {
      components:{
        GuiDemoBlock
      }
    }
  </script>

  <style lang='scss' scoped>
  .component-demo-tip{
    border:1px solid #ebebeb;
    padding:20px 10px;
    font-weight: bold;
    color:#5e6d82;
  }
  .language-html{
    color:#3182bd
  }
  .component-demo-container{

  }
  </style>