import React, { Component } from 'react';

import HomePage from '../components/HomePage';
import AuthenticatedHomePage from '../components/AuthenticatedHomePage';

import LoginPageContainer from '../containers/LoginPageContainer';
import CreatePageContainer from '../container/CreatePageContainer';
import UpdateUserProfileContainer from '../container/UpdateUserProfileContainer';
import ViewPageContainer from '../container/ViewPageContainer';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ViewTicketContainer from '../container/ViewTicketContainer';
import MapPage from './MapPage';
import ReservePage from './ReservePage';
import PaymentPage from './PaymentPage';

class ApplicationRoutes extends Component {
    render() {
        const authenticated = this.props.authentication.authenticated;

        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={(authenticated) ? AuthenticatedHomePage : HomePage} />
                    <Route path="/login" component={LoginPageContainer} />
                    <Route path="/register" component={CreatePageContainer} />
                    <Route path="/update" component={UpdateUserProfileContainer} />
                    <Route path="/view" component={ViewPageContainer} />
                    <Route path="/viewMap" component={MapPage} />
                    <Route path="/ticket" component={ViewTicketContainer} />
                    <Route path="/reserve" component={ReservePage} />
                    <Route path="/payment" component={PaymentPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default ApplicationRoutes;