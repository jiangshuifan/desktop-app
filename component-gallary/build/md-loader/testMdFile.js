
let md  =  require ('markdown-it')() ;
let fs =require('fs')
const info = fs.readFileSync('../../examples/docs/grid.md',{
  encoding:'utf-8'
})

const tranferToHtml = md.render(info)
//这是没有额外处理，md文件转为html内容
console.log(tranferToHtml)
//#region 1.显然直接转html不行，可以改造render函数，提取文件内容（效果区），组件渲染，组件应该全局注册

//#endregion



//获取按效果显示区域代码
const getTemplate = () =>{

}
