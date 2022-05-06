//统一处理生成package/component/index文件 同时 生成component.json
const fs = require('fs')
const path = require('path')
const PACKAGE_PATH =  path.join(__dirname, '../../packages');
const COPONENT_JSON_PATH = path.join(__dirname,'../../components.json')
const render = require('json-templater/string');
var endOfLine = require('os').EOL;
let fileList = fs.readdirSync(PACKAGE_PATH);


const PACKAGE_TEMPLATE = `
import {{component}} from './src/main.vue'

{{component}}.install=function(Vue){
  Vue.component({{component}}.name,{{component}})
}

export default {{component}}
`

const IMPORT_TEMPLATE =`  "{{component}}":"{{path}}"`;

const componentJsonContent = []

for (let file of fileList) {
  let content = render(PACKAGE_TEMPLATE,{
   component:file
  })
  const COMPONENT_JSON_PATH = path.join(PACKAGE_PATH + '\\' + file + '\\index.js')
  const  componentJsonContentItem = render(IMPORT_TEMPLATE,{
    component:file,
    path:`./packages/${file}/index.js`
  })
  componentJsonContent.push(componentJsonContentItem)
  fs.writeFileSync(COMPONENT_JSON_PATH, content);
}

fs.writeFileSync(COPONENT_JSON_PATH,`{\n${componentJsonContent.join(',\n')}\n}`)


