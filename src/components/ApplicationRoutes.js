import React, { Component } from 'react';

import HomePage from '../components/HomePage';
import AuthenticatedHomePage from '../components/AuthenticatedHomePage';

import LoginPageContainer from '../containers/LoginPageContainer';
import CreatePageContainer from '../container/CreatePageContainer';
import UpdateUserProfileContainer from '../container/UpdateUserProfileContainer';
import ViewPageContainer from '../container/ViewPageContainer';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
                </Switch>
            </BrowserRouter>
        );
    }
}

export default ApplicationRoutes;