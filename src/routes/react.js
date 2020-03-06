import Jsx from '../views/component/Jsx';
import RenderEle from '../views/component/RenderEle';
import Props from '../views/component/Props';
import StateLifecycle from '../views/component/StateLifecycle';
import Events from '../views/component/Events';
import List from '../views/component/List';
import Form from '../views/component/Form';
import CompositionInheritance from '../views/component/CompositionInheritance';
import Context from '../views/component/Context';
import Ref from '../views/component/Ref';
import Fragments from '../views/component/Fragments';
import Render from '../views/component/Render';
import Effect from '../views/component/Effect';

export default [
  {path:'/Jsx', component:Jsx, _name:'Jsx'},
  {path:'/RenderEle', component:RenderEle, _name:'元素渲染'},
  {path:'/Props', component:Props, _name:'组件传值'},
  {path:'/StateLifecycle', component:StateLifecycle, _name:'State & 生命周期'},
  {path:'/Events', component:Events, _name:'事件处理-判断'},
  {path:'/List', component:List, _name:'列表循环'},
  {path:'/Form', component:Form, _name:'表单'},
  {path:'/CompositionInheritance', component:CompositionInheritance, _name:'组合-继承'},
  {path:'/Context', component:Context, _name:'嵌套组件静默传值'},
  {path:'/Ref', component:Ref, _name:'Ref转发'},
  {path:'/Fragments', component:Fragments, _name:'占位符标签'},
  {path:'/Render', component:Render, _name:'props-Render'},
  {path:'/Effect', component:Effect, _name:'Effect'},
]