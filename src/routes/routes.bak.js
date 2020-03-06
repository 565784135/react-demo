import {lazy} from "react";
const jsx = lazy(() => import( '../views/component/Jsx'));
const renderEle = lazy(() => import( '../views/component/RenderEle'));
const props = lazy(() => import( '../views/component/Props'));
const stateLifecycle = lazy(() => import( '../views/component/StateLifecycle'));
const Events = lazy(() => import( '../views/component/Events'));
const List = lazy(() => import( '../views/component/List'));
const Form = lazy(() => import( '../views/component/Form'));
const CompositionInheritance = lazy(() => import( '../views/component/CompositionInheritance'));

export default [
  {path:'/jsx', component:jsx, _name:'jsx'},
  {path:'/renderEle', component:renderEle, _name:'元素渲染'},
  {path:'/props', component:props, _name:'组件传值'},
  {path:'/state-lifecycle', component:stateLifecycle, _name:'State & 生命周期'},
  {path:'/Events', component:Events, _name:'事件处理-判断'},
  {path:'/List', component:List, _name:'列表循环'},
  {path:'/Form', component:Form, _name:'表单'},
  {path:'/CompositionInheritance', component:CompositionInheritance, _name:'组合-继承'},
];


/*
代码分割

App.js

<Suspense fallback='<div>loading...</div>'></Suspense>
 */