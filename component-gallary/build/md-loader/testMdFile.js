//#region
console.log('========================基本用法=========================')

let md  =  require ('markdown-it')() ;
let result = md.render('#markdown-it rulezz!')
console.log(result)
result = md.renderInline('#markdown-it rulezz!')
console.log(result)
//#endregion
//#region 配置
console.log('==========================配置===========================')
md = require('markdown-it')('zero')//取值包括commonmark,zero,default
result = md.render('#markdown-it rulezz!')
console.log(result)
md = require('markdown-it')({
  html:         false,        // Enable HTML tags in source
  xhtmlOut:     false,        // Use '/' to close single tags (<br />).
                              // This is only for full CommonMark compatibility.
  breaks:       false,        // Convert '\n' in paragraphs into <br>
  langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
                              // useful for external highlighters.
  linkify:      false,        // Autoconvert URL-like text to links

  // Enable some language-neutral replacement + quotes beautification
  // For the full list of replacements, see https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js
  typographer:  false,//排版

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Could be either a String or an Array.
  //
  // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
  // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
  quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed and should be escaped externally.
  // If result starts with <pre... internal wrapper is skipped.
  highlight: function (/*str, lang*/) { return ''; }
})
result = md.render('#markdown-it rulezz!')
console.log(result)
//#endregion


//#region 插件加载
console.log('========================插件加载=========================')
//  md = require('markdown-it')()
//     .use(plugin1)
//     .use(plugin2, opts)
//     .use(plugin3);
//#endregion

//#region 高亮
console.log('==========================高亮===========================')
let hljs = require('highlight.js')
// Actual default values
md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
               '</code></pre>';
      } catch (__) { console.log('err')}
    }
    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
});
//#endregion
