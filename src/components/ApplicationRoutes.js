import React, { Component } from 'react';
import HomePage from '../components/HomePage';
import AuthenticatedHomePage from '../components/AuthenticatedHomePage';
import CreatePageContainer from '../container/CreatePageContainer';
import UpdateUserProfileContainer from '../container/UpdateUserProfileContainer';
import ViewPageContainer from '../container/ViewPageContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ViewTicketContainer from '../container/ViewTicketContainer';
import ReservePage from './ReservePage';
import PaymentPage from './PaymentPage';
import ReservePageContainer from '../container/ReservePageContainer';
import PaymentPageContainer from '../container/PaymentPageContainer';

class ApplicationRoutes extends Component {
    render() {
        const authenticated = this.props.authentication.authenticated;

        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={(authenticated) ? AuthenticatedHomePage : HomePage} />
                    <Route path="/create" component={CreatePageContainer} />
                    <Route path="/update" component={UpdateUserProfileContainer} />
                    <Route path="/view" component={ViewPageContainer} />
                    <Route path="/ticket" component={ViewTicketContainer} />
                    <Route path="/reserve" component={ReservePageContainer} />
                    <Route path="/payment" component={PaymentPageContainer} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default ApplicationRoutes;