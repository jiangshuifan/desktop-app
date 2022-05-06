# markdown-it
> markdown排版,比如一二级标题字体大小，注释样式等
> 语法可自己配置、高速、安全，可扩展插件

### 基本用法
```js
//有段落换行的渲染
  let md = require('markdown-it')() //<=>let markdownIt = require('markdown-it'); let md = new markdown()
  let info = md.render('# markdown-it rulezz!');

//没有段落换行的渲染（单行渲染）

```