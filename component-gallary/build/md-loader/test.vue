
  <template>
    <div>
    <h2>Tag 标签</h2>
<p>用于标记和选择。</p>
<h3>基础用法</h3>
<div class='component-demo-container'>
                    <GuiDemoBlock>
                      <template #demo-tip>
                        由`type`属性来选择tag的类型，也可以通过`color`属性来自定义背景色。
                      </template>
                  </GuiDemoBlock>
                  <!--component-demo: <el-tag>标签一</el-tag>
<el-tag type="success">标签二</el-tag>
<el-tag type="info">标签三</el-tag>
<el-tag type="warning">标签四</el-tag>
<el-tag type="danger">标签五</el-tag> :component-demo-->
          <pre v-pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">el-tag</span>&gt;</span>标签一<span class="hljs-tag">&lt;/<span class="hljs-name">el-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>标签二<span class="hljs-tag">&lt;/<span class="hljs-name">el-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>标签三<span class="hljs-tag">&lt;/<span class="hljs-name">el-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>标签四<span class="hljs-tag">&lt;/<span class="hljs-name">el-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>标签五<span class="hljs-tag">&lt;/<span class="hljs-name">el-tag</span>&gt;</span>
</code></pre>
</div>
<h3>可移除标签</h3>
<div class='component-demo-container'>
                    <GuiDemoBlock>
                      <template #demo-tip>
                        设置`closable`属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置`disable-transitions`属性，它接受一个`Boolean`，true 为关闭。
                      </template>
                  </GuiDemoBlock>
                  <!--component-demo: <el-tag
  v-for="tag in tags"
  :key="tag.name"
  closable
  :type="tag.type">
  {{tag.name}}
</el-tag>

<script>
  export default {
    data() {
      return {
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ]
      };
    }
  }
</script> :component-demo-->
          <pre v-pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">el-tag</span>
  <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;tag in tags&quot;</span>
  <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;tag.name&quot;</span>
  <span class="hljs-attr">closable</span>
  <span class="hljs-attr">:type</span>=<span class="hljs-string">&quot;tag.type&quot;</span>&gt;</span>
  {{tag.name}}
<span class="hljs-tag">&lt;/<span class="hljs-name">el-tag</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">tags</span>: [
          { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;标签一&#x27;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;&#x27;</span> },
          { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;标签二&#x27;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;success&#x27;</span> },
          { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;标签三&#x27;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;info&#x27;</span> },
          { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;标签四&#x27;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;warning&#x27;</span> },
          { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;标签五&#x27;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;danger&#x27;</span> }
        ]
      };
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
</div>
<h3>动态编辑标签</h3>
<div class='component-demo-container'>
                    <GuiDemoBlock>
                      <template #demo-tip>
                        动态编辑标签可以通过点击标签关闭按钮后触发的 `close` 事件来实现
                      </template>
                  </GuiDemoBlock>
                  <!--component-demo: <el-tag
  :key="tag"
  v-for="tag in dynamicTags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)">
  {{tag}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisible"
  v-model="inputValue"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirm"
  @blur="handleInputConfirm"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>

<style>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>

<script>
  export default {
    data() {
      return {
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script> :component-demo-->
          <pre v-pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">el-tag</span>
  <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;tag&quot;</span>
  <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;tag in dynamicTags&quot;</span>
  <span class="hljs-attr">closable</span>
  <span class="hljs-attr">:disable-transitions</span>=<span class="hljs-string">&quot;false&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;handleClose(tag)&quot;</span>&gt;</span>
  {{tag}}
<span class="hljs-tag">&lt;/<span class="hljs-name">el-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-input</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;input-new-tag&quot;</span>
  <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;inputVisible&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;inputValue&quot;</span>
  <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;saveTagInput&quot;</span>
  <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>
  @<span class="hljs-attr">keyup.enter.native</span>=<span class="hljs-string">&quot;handleInputConfirm&quot;</span>
  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;handleInputConfirm&quot;</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-input</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">v-else</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button-new-tag&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showInput&quot;</span>&gt;</span>+ New Tag<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.el-tag</span> + <span class="hljs-selector-class">.el-tag</span> {
    <span class="hljs-attribute">margin-left</span>: <span class="hljs-number">10px</span>;
  }
  <span class="hljs-selector-class">.button-new-tag</span> {
    <span class="hljs-attribute">margin-left</span>: <span class="hljs-number">10px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">32px</span>;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">30px</span>;
    <span class="hljs-attribute">padding-top</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">padding-bottom</span>: <span class="hljs-number">0</span>;
  }
  <span class="hljs-selector-class">.input-new-tag</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">90px</span>;
    <span class="hljs-attribute">margin-left</span>: <span class="hljs-number">10px</span>;
    <span class="hljs-attribute">vertical-align</span>: bottom;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">dynamicTags</span>: [<span class="hljs-string">&#x27;标签一&#x27;</span>, <span class="hljs-string">&#x27;标签二&#x27;</span>, <span class="hljs-string">&#x27;标签三&#x27;</span>],
        <span class="hljs-attr">inputVisible</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">inputValue</span>: <span class="hljs-string">&#x27;&#x27;</span>
      };
    },
    <span class="hljs-attr">methods</span>: {
      <span class="hljs-function"><span class="hljs-title">handleClose</span>(<span class="hljs-params">tag</span>)</span> {
        <span class="hljs-built_in">this</span>.dynamicTags.splice(<span class="hljs-built_in">this</span>.dynamicTags.indexOf(tag), <span class="hljs-number">1</span>);
      },

      <span class="hljs-function"><span class="hljs-title">showInput</span>(<span class="hljs-params"></span>)</span> {
        <span class="hljs-built_in">this</span>.inputVisible = <span class="hljs-literal">true</span>;
        <span class="hljs-built_in">this</span>.$nextTick(<span class="hljs-function"><span class="hljs-params">_</span> =&gt;</span> {
          <span class="hljs-built_in">this</span>.$refs.saveTagInput.$refs.input.focus();
        });
      },

      <span class="hljs-function"><span class="hljs-title">handleInputConfirm</span>(<span class="hljs-params"></span>)</span> {
        <span class="hljs-keyword">let</span> inputValue = <span class="hljs-built_in">this</span>.inputValue;
        <span class="hljs-keyword">if</span> (inputValue) {
          <span class="hljs-built_in">this</span>.dynamicTags.push(inputValue);
        }
        <span class="hljs-built_in">this</span>.inputVisible = <span class="hljs-literal">false</span>;
        <span class="hljs-built_in">this</span>.inputValue = <span class="hljs-string">&#x27;&#x27;</span>;
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
</div>
<h3>不同尺寸</h3>
<p>Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
<div class='component-demo-container'>
                    <GuiDemoBlock>
                      <template #demo-tip>
                        额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。
                      </template>
                  </GuiDemoBlock>
                  <!--component-demo: <el-tag closable>默认标签</el-tag>
<el-tag size="medium" closable>中等标签</el-tag>
<el-tag size="small" closable>小型标签</el-tag>
<el-tag size="mini" closable>超小标签</el-tag> :component-demo-->
          <pre v-pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">el-tag</span> <span class="hljs-attr">closable</span>&gt;</span>默认标签<span class="hljs-tag">&lt;/<span class="hljs-name">el-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-tag</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span> <span class="hljs-attr">closable</span>&gt;</span>中等标签<span class="hljs-tag">&lt;/<span class="hljs-name">el-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-tag</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">closable</span>&gt;</span>小型标签<span class="hljs-tag">&lt;/<span class="hljs-name">el-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-tag</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span> <span class="hljs-attr">closable</span>&gt;</span>超小标签<span class="hljs-tag">&lt;/<span class="hljs-name">el-tag</span>&gt;</span>
</code></pre>
</div>
<h3>不同主题</h3>
<p>Tag 组件提供了三个不同的主题：<code>dark</code>、<code>light</code> 和 <code>plain</code></p>
<div class='component-demo-container'>
                    <GuiDemoBlock>
                      <template #demo-tip>
                        通过设置`effect`属性来改变主题，默认为 `light`
                      </template>
                  </GuiDemoBlock>
                  <!--component-demo: <div class="tag-group">
  <span class="tag-group__title">Dark</span>
  <el-tag
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    effect="dark">
    {{ item.label }}
  </el-tag>
</div>
<div class="tag-group">
  <span class="tag-group__title">Plain</span>
  <el-tag
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    effect="plain">
    {{ item.label }}
  </el-tag>
</div>

<script>
  export default {
    data() {
      return {
        items: [
          { type: '', label: '标签一' },
          { type: 'success', label: '标签二' },
          { type: 'info', label: '标签三' },
          { type: 'danger', label: '标签四' },
          { type: 'warning', label: '标签五' }
        ]
      }
    }
  }
</script> :component-demo-->
          <pre v-pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tag-group&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tag-group__title&quot;</span>&gt;</span>Dark<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-tag</span>
    <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in items&quot;</span>
    <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item.label&quot;</span>
    <span class="hljs-attr">:type</span>=<span class="hljs-string">&quot;item.type&quot;</span>
    <span class="hljs-attr">effect</span>=<span class="hljs-string">&quot;dark&quot;</span>&gt;</span>
    {{ item.label }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-tag</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tag-group&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tag-group__title&quot;</span>&gt;</span>Plain<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-tag</span>
    <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in items&quot;</span>
    <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item.label&quot;</span>
    <span class="hljs-attr">:type</span>=<span class="hljs-string">&quot;item.type&quot;</span>
    <span class="hljs-attr">effect</span>=<span class="hljs-string">&quot;plain&quot;</span>&gt;</span>
    {{ item.label }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-tag</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">items</span>: [
          { <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;标签一&#x27;</span> },
          { <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;success&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;标签二&#x27;</span> },
          { <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;info&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;标签三&#x27;</span> },
          { <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;danger&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;标签四&#x27;</span> },
          { <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;warning&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;标签五&#x27;</span> }
        ]
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
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
<td>type</td>
<td>类型</td>
<td>string</td>
<td>success/info/warning/danger</td>
<td>—</td>
</tr>
<tr>
<td>closable</td>
<td>是否可关闭</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disable-transitions</td>
<td>是否禁用渐变动画</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>hit</td>
<td>是否有边框描边</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>color</td>
<td>背景色</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>size</td>
<td>尺寸</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>effect</td>
<td>主题</td>
<td>string</td>
<td>dark / light / plain</td>
<td>light</td>
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
<td>click</td>
<td>点击 Tag 时触发的事件</td>
<td>—</td>
</tr>
<tr>
<td>close</td>
<td>关闭 Tag 时触发的事件</td>
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
  .hljs{
    overflow:auto
  }
  .hljs-tag,.hljs-name,.hljs-attr{color:#3182bd}
  .hljs-string{color:#756bb1}
    .component-demo-container{
      padding:10px;
      border:1px solid #ebebeb
    }
  </style>