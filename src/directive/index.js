//#region directive知识点
/**五个钩子
 * @bind 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
 * @inserted  被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
 * @update  所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
 * @componentUpdated 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
 * @unbind 只调用一次，指令与元素解绑时调用。
 */
/**钩子函数参数
 * @el 指令所绑定的元素，可以用来直接操作 DOM
 * @binding 
 *  { 
 *    @name  指令名,不包括'v-'前缀
 *    @value  指令的绑定值 v-my-directive="1 + 1" 中，绑定值为 2
 *    @oldValue 指令绑定的前一个值,update和componentUpdated钩子可用
 *    @expression  字符串形式的指令表达式。v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
 *    @arg    传给指令的参数  v-my-directive:foo 中，参数为 "foo"。
 *    @modifiers   一个包含修饰符的对象 v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
 *  }
 * @vnode  Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
 * @oldVnode 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
 * 
 * bind:(el, binding, vnode)=>{}
 * inserted:(el, binding, vnode)=>{}
 * update:(el, binding, vnode,oldVnode)=>{}
 * componentUpdated:(el, binding, vnode,oldVnode)=>{}
 * unbind:(el, binding, vnode)=>{}
 * 
 */
//#endregion


//#region 拖拽
const draggable ={
  name:'draggable',
  config: {
    bind(el){
      el.setAttribute('draggable',true)
      // el.ondragstart=(event)=>{
      //   for (let i in event.target){
      //     console.log(i,event.target[i])
      //   }
      // }
    }
  }
}
//#endregion

//#region 
const dragBox = {
  name:'drag-box',
  config: {
    bind(el){
      el.ondrop=(event)=>{
        event.preventDefault();
      }
    }
  }
}
//#endregion

//#region 节流
 const debounce ={
  name:'debounce',
  config: {
    bind(el){
      // el.setAttribute('draggable',true)
    }
  }
}
//#endregion
export default [draggable,dragBox,debounce]