import React, { Component } from 'react';

import MPHeader from './MPHeader';
import HomePageAboutUs from './HomePageAboutUs';
import HomePageMap from './HomePageMap';
import HomePageServices from './HomePageServices';
import { Link } from 'react-router-dom';
import HomePageSteps from './HomePageSteps';
import { Layout } from 'antd';

const { Content } = Layout;

class AuthenticatedHomePage extends Component {
    render() {
        return (
            <Layout>
                <MPHeader />
                <Layout>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <HomePageServices />
                            <HomePageSteps />
                            <HomePageMap />
                            <HomePageAboutUs />
                        </Content>
                    </Layout>
                    <Link smooth to={{ pathname: '/reserve' }}>reserve</Link>
                    <Link smooth to={{ pathname: '/payment' }}>payment</Link>
                </Layout>
            </Layout>
        );
    }
}

export default AuthenticatedHomePage;