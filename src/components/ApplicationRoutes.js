import React, { Component } from 'react';
import HomePage from '../components/HomePage';
import AuthenticatedHomePage from '../components/AuthenticatedHomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class ApplicationRoutes extends Component {
    render() {
        const authenticated = this.props.authentication.authenticated;

        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={(authenticated) ? AuthenticatedHomePage : HomePage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default ApplicationRoutes;