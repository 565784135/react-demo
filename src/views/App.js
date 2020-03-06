import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import routes from '../routes/routes';

import ErrorBoundary from './component/ErrorBoundary';

function App () {
  return (
    <Router>
      <div>
        <div className='fix left g-body'>
          {routes.map((item,i)=>(
            <div key={i}>
              <h2>react</h2>
              <ol>
                {item.routes.map((route,n)=>(
                  <li key={'r'+n}><Link to={route.path}>{route._name}</Link></li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <div className='fix'>
          <Switch>
            {routes.map((item)=>(
              item.routes.map((route,i)=>(
                <Route key={i} path={route.path} render={props => (
                  <ErrorBoundary><route.component {...props} /></ErrorBoundary>
                )} />
              ))
            ))}
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;

