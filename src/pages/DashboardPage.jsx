import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Footer} from 'components';
import Header from 'components/Header';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import ProductPage from './ProductPage';
import routes from '../Routes';
import { isAuth } from 'actions/authAction';

export default class DashboardPage extends Component {
  constructor(props) {
    super(props);
  }

  getWrapperClass() {
    if (['/register-success'].indexOf(window.location.pathname) !== -1) {
      return "wrapper wrapper--white";
    }
    return "wrapper";
  }

  render() {
    return (
      <div className={this.getWrapperClass()}>
          <Header/>
            <div className="main main--center">
              <Switch>
                {
                  routes.map((route, index) => {
                    let redirectComponent = route.main;
                    if (isAuth() && !route.auth) {
                      redirectComponent = (props) => <Redirect to={{pathname: "/product"}} />;
                    }

                    if (!isAuth() && route.auth) {
                      redirectComponent = (props) => <Redirect to={{pathname: "/login"}} />;
                    }
                    return (
                      <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={redirectComponent}
                     />
                    )
                  })
                }
              </Switch>
            </div>
          <Footer/>
      </div>
    )
  }
}
