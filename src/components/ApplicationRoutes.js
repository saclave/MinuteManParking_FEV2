import React, { Component } from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import LetsParkPage from './LetsParkPage';

import HomePage from '../components/HomePage';
import LoginPageContainer from '../containers/LoginPageContainer';
import CreatePageContainer from '../container/CreatePageContainer';
import UpdateUserProfileContainer from '../container/UpdateUserProfileContainer';
import ViewTransactionHistory from '../components/ViewTransactionHistory';
import ViewTicketContainer from '../container/ViewTicketContainer';
import ReservePageContainer from '../container/ReservePageContainer';
import PaymentPageContainer from '../container/PaymentPageContainer';
import MapPageContainer from '../container/MapPageContainer';

class ApplicationRoutes extends Component {
    render() {
        const authenticated = this.props.authentication.authenticated;
        const PrivateRoute = ({ component: Component, restricted, ...rest }) => {
            return (
                <Route {...rest} render={props => (
                    (authenticated) ?
                        <Component {...props} />
                        : <Redirect to="/login" />
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
                    <PrivateRoute path="/viewMap" component={MapPageContainer} />
                    <PrivateRoute path="/ticket" component={ViewTicketContainer} />
                    <PrivateRoute path="/reserve" component={ReservePageContainer} />
                    <PrivateRoute path="/payment" component={PaymentPageContainer} />
                    <PrivateRoute path="/history" component={ViewTransactionHistory} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default ApplicationRoutes;