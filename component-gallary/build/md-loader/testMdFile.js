
let md  =  require ('markdown-it')() ;
const hljs = require('highlight.js');
let fs =require('fs')
let path = require('path')
const render = require('json-templater/string');
const {HTMLTransferToString,stripTemplate} = require('../utils/html-string')
const mdFileInfo = fs.readFileSync('./grid.md',{
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
  .hljs{
    overflow:auto
  }
  .hljs-tag,.hljs-name,.hljs-attr{color:#3182bd}
  .hljs-string{color:#756bb1}
    .component-demo-container{
      padding:10px;
      border:1px solid #ebebeb
    }
  </style>`

//md.use(markdownItContainer)
  function useContainer(md){
    md.use(require('markdown-it-container'), 'demo', {
      //valid 正则获取自定义代码块数据
      validate: function(params) {
        return params.trim().match(/^demo\s+(.*)$/);
      },

      render: function (tokens, idx) {
        // console.log(tokens[idx].nesting) 这里经过这个render函数的只有tokens[idx].nesting为1和-1的。为0（为code部分）不经过render处理
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
                      </template>
                  </GuiDemoBlock>
                  <!--component-demo: ${content} :component-demo-->
          `
          }else{
            return `</div>\n`;
          }
      }
    });
  }

//#region 1.显然直接转html不行，可以改造render函数，提取文件内容（效果区），组件渲染，组件应该全局注册


// 定义一些配置，这里重点是highlight里面的转换
let markdown_config = {
  html: true,           // Enable HTML tags in source
  xhtmlOut: true,       // Use '/' to close single tags (<br />).
  breaks: true,         // Convert '\n' in paragraphs into <br>
  langPrefix: 'lang-',  // CSS language prefix for fenced blocks. Can be
  linkify: false,       // 自动识别url
  typographer: true,
  quotes: '“”‘’',
  //highlight  highlight.js匹配到模板内容
  highlight: function (str, lang) {
      // 匹配到模板类型
      if (lang && hljs.getLanguage(lang)) {
          try {
              // 这里实际上做的是将 html的标签内容用 <template> 包裹，用于代码的展示。
              let replaceStr = stripTemplate(str);
              let template = replaceStr
              str = str.replace(replaceStr, template);
              return '<pre v-pre class="hljs"><code>' +
              hljs.highlight(lang, str, true).value +
              '</code></pre>';
          } catch (__) {console.log('highlight-err')}
      }
      return '<pre v-pre class="hljs"><code>' + markdown.utils.escapeHtml(str) + '</code></pre>';
  }
}

// markdown-it对象
let markdown = require('markdown-it')(markdown_config);
//#endregion
useContainer(markdown)

//md => html代码  tranferToHtml 不用markdown-it-container前这是没有额外处理，md文件转为html内容
const tranferToHtml = markdown.render(mdFileInfo.trim())



//获取按效果显示区域代码

const  targetContent = render(vueFile_TEMPLATE,{
  componentContent:tranferToHtml
 })
 fs.writeFileSync(targetVueFilePath, targetContent);
