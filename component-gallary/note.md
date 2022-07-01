## 开发笔记
> 尽可能和饿了么ui一样代码结构

### md渲染成html
#### markdown-it-container使用（自定义渲染）
+ validate返回匹配（可通过正则），内容通过validate则经过render函数处理

#### markdown-it的config配置
+ highlight属性。highlight.js配合使用，可以加样式
+ 使用如下
```js
  {
    highlight: function (str, lang) {
      // 匹配到模板类型
      if (lang && hljs.getLanguage(lang)) {
          try {
              // 这里实际上做的是将 html的标签内容用 <template> 包裹，用于代码的展示。
              let replaceStr = stripTemplate(str);

              let template = replaceStr
              str = str.replace(replaceStr, template);
              return '<pre class="hljs"><code>' +
              hljs.highlight(lang, str, true).value +
              '</code></pre>';
          } catch (__) {console.log('highlight-err')}
      }
      return '<pre class="hljs"><code>' + markdown.utils.escapeHtml(str) + '</code></pre>';
    }
  }
```