import Path from "../views/router/Path";
import reduxDemo from '../views/redux/demo';
import ReactReduxDemo from '../views/redux/ReactReduxDemo';
import Redux from "../views/redux/Redux";
import Fetch from "../views/router/Fetch";

export default [
  {to:'/Path?name=1', path:'/Path', component:Path, _name:'Path'},
  {to:'/reduxDemo', path:'/reduxDemo', component:reduxDemo, _name:'reduxDemo'},
  {to:'/ReactReduxDemo', path:'/ReactReduxDemo', component:ReactReduxDemo, _name:'ReactReduxDemo'},
  {to:'/Redux', path:'/Redux', component:Redux, _name:'Hook-Redux'},
  {to:'/Fetch', path:'/Fetch', component:Fetch, _name:'http-Fetch'},
]