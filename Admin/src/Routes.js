import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { ThemeProvider } from '@material-ui/styles';

import MuiTheme from './theme';

import useToken from './useToken';

// Layout Blueprints

import { LeftSidebar } from './layout-blueprints';

// Example Pages
const DashboardDefault = lazy(() => import('./example-pages/DashboardDefault'));
const Login = lazy(() => import('./example-pages/Login'));
const ForgotPassword = lazy(() => import('./example-pages/ForgotPassword'));

const Customer = lazy(() => import('./example-pages/Customer'));
const EditCustomer = lazy(() => import('./example-pages/EditCustomer'));
const AddCustomer = lazy(() => import('./example-pages/AddCustomer'));


const Routes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.01
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };

  return (
    <ThemeProvider theme={MuiTheme}>
      <AnimatePresence>
        <Suspense
          fallback={
            <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
              <div className="w-50 mx-auto">
                Please wait while we load the live preview examples
              </div>
            </div>
          }>
          <Switch>
            <LeftSidebar>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/forgotpassword' component={ForgotPassword} />
                  <PrivateRoute exact path='/' />
                  <PrivateRoute exact path="/dashboard" component={DashboardDefault} />
   
                  <PrivateRoute exact path="/customer" component={Customer} />
                  <PrivateRoute exact path="/editcustomer" component={EditCustomer} />
                  <PrivateRoute exact path="/addcustomer" component={AddCustomer} />

                </motion.div>
              </Switch>
            </LeftSidebar>
          </Switch>
        </Suspense>
      </AnimatePresence>
    </ThemeProvider>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useToken();
  console.log('token: ', token);
  return (
    <Route
      {...rest}
      render={props => {
        return token.jwt ?
          props.match.path === "/" ?
            <Redirect
              to={{
                pathname: "/dashboard"
              }}
            />
            :
            <Component {...props} />
          :
          <Redirect
            to={{
              pathname: "/login"
            }}
          />

      }
      }
    />
  )
};

export default Routes;
