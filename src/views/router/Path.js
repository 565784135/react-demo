import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,
  // Redirect,
  useLocation,
  useParams
} from "react-router-dom";

function Path(props) {
  let match = useRouteMatch();
  let location = useLocation();
  let params = useParams();
  let query = new URLSearchParams(location.search);

  console.log('location',location);
  console.log('params',params);
  console.log('query',query.get('name'));

  return (
    <BrowserRouter>
      <p><Link to={match.url+'/a'}>默认点击跳转{match.url+'/a'}</Link></p>
      <p><NavLink to={match.url+'/b?b=2'} activeClassName="hurray">导航标签激活时，添加类名hurray</NavLink></p>
      {/*<p><Redirect to={match.url+'/c?a=1'}>强制重定向到{match.url+'/c'}</Redirect></p>*/}

      <Switch>
        <Route path={match.url+'/a'}>aaaa</Route>
        <Route path={match.url+'/b'}>bbbb</Route>
        <Route path={match.url+'/c'}>cccc</Route>

      </Switch>
    </BrowserRouter>
  )

}

export default Path;