import React, { Component } from 'react';

import HomePage from '../components/HomePage';
import LetsParkPage from './LetsParkPage';

import LoginPageContainer from '../containers/LoginPageContainer';
import CreatePageContainer from '../container/CreatePageContainer';
import UpdateUserProfileContainer from '../container/UpdateUserProfileContainer';
import ViewProfileContainer from '../containers/ViewPageContainer';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ViewTicketContainer from '../container/ViewTicketContainer';
import MapPage from './MapPage';
import PaymentPage from './PaymentPage';
import ReservePageContainer from '../container/ReservePageContainer';
import PaymentPageContainer from '../container/PaymentPageContainer';

class ApplicationRoutes extends Component {
    render() {
        const authenticated = this.props.authentication.authenticated;
        const PrivateRoute = ({ component: Component, restricted, ...rest }) => {
            return (
                <Route {...rest} render={props => (
                    (authenticated) ?
                        <Component {...props} />
                        : <Redirect to="/" />
                )} />
            );
        };
        const ProtectedRoute = ({ component: Component, restricted, ...rest }) => {
            return (
                <Route {...rest} render={props => (
                    (authenticated)
                        ? <Redirect to="/" />
                        : <Component {...props} />
                )} />
            );
        };
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <ProtectedRoute path="/login" component={LoginPageContainer} />
                    <ProtectedRoute path="/register" component={CreatePageContainer} />
                    <PrivateRoute path="/park" component={LetsParkPage} />
                    <PrivateRoute path="/edit" component={UpdateUserProfileContainer} />
                    <PrivateRoute path="/view" component={ViewProfileContainer} />
                    <PrivateRoute path="/viewMap" component={MapPage} />
                    <PrivateRoute path="/ticket" component={ViewTicketContainer} />
                    <PrivateRoute path="/reserve" component={ReservePageContainer} />
                    <PrivateRoute path="/payment" component={PaymentPageContainer} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default ApplicationRoutes;