
let md  =  require ('markdown-it')() ;
const hljs = require('highlight.js');
let fs =require('fs')
let path = require('path')
const render = require('json-templater/string');
const {HTMLTransferToString} = require('../utils/html-string')
const info = fs.readFileSync('./grid.md',{
  encoding:'utf-8'
})
//目标测试文件
const targetVueFilePath = path.join(__dirname, './test.vue');


//vue文件模板：vueFile_TEMPLATE
const vueFile_TEMPLATE = `
  <template>
    <div>
    {{componentContent}}
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
  </style>`



//#region 1.显然直接转html不行，可以改造render函数，提取文件内容（效果区），组件渲染，组件应该全局注册
md.use(require('markdown-it-container'), 'demo', {
  //valid 正则获取自定义代码块数据
  validate: function(params) {
    return params.trim().match(/^demo\s+(.*)$/);
  },

  render: function (tokens, idx) {
    console.log(tokens[idx].nesting)
    if (tokens[idx].nesting === 1) {
      // 获取demo后面一个token的内容，如：
      // ```html
      // (省略...)
      // ````
      const m = tokens[idx].info.trim().match(/^demo\s+(.*)$/);
      const content = tokens[idx+1].type === 'fence' ? tokens[idx+1].content.trim() : '';
      // 组装成组件并返回
      // <GuiDemoBlock> 自己定义的一个组件
      // <!--component-demo: ${content} :component-demo--> 就是后面用来解析成组件的内容
      return `<div class='component-demo-container'>
                <GuiDemoBlock>
                  <template #demo-tip>
                    ${md.utils.escapeHtml(m[1])}
                    ${HTMLTransferToString(content)}
                  </template>
              </GuiDemoBlock>
      `

      }else{
        return `</div>\n`;
      }
  }
});

// 定义一些配置，这里重点是highlight里面的转换
let markdown_config = {
  html: true,           // Enable HTML tags in source
  xhtmlOut: true,       // Use '/' to close single tags (<br />).
  breaks: true,         // Convert '\n' in paragraphs into <br>
  langPrefix: 'lang-',  // CSS language prefix for fenced blocks. Can be
  linkify: false,       // 自动识别url
  typographer: true,
  quotes: '“”‘’',
  highlight: function (str, lang) {
      // 匹配到模板类型
      if (lang && hljs.getLanguage(lang)) {
          try {
              // 这里实际上做的是将 html的标签内容用 <template> 包裹，用于代码的展示。
              let replaceStr = stripTemplate(str);
              let template = `<template>\n${replaceStr}\n</template>`;
              str = str.replace(replaceStr, template);
              return '<pre class="hljs"><code>' +
              hljs.highlight(lang, str, true).value +
              '</code></pre>';
          } catch (__) { }
      }
      return '<pre class="hljs"><code>' + markdown.utils.escapeHtml(str) + '</code></pre>';
  }
}

// markdown-it对象
let markdown = require('markdown-it')(markdown_config);
//#endregion


//md => html代码  tranferToHtml 不用markdown-it-container前这是没有额外处理，md文件转为html内容
const tranferToHtml = md.render(info.trim())

//获取到标识区域代码？用正则？
const getSpecialCode =/:::demo[\s\S]+?:::/g
const markCode = info.match(getSpecialCode)
// console.log(markCode)


//获取按效果显示区域代码

const  targetContent = render(vueFile_TEMPLATE,{
  componentContent:tranferToHtml
 })
 fs.writeFileSync(targetVueFilePath, targetContent);

const getTemplate = () =>{

}
