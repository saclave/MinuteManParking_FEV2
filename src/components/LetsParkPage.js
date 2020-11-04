import React, { Component } from 'react';

import MPHeaderContainer from '../containers/MPHeaderContainer';

import HomePageAboutUs from './HomePageAboutUs';
import HomePageMap from './HomePageMap';
import HomePageServices from './HomePageServices';
import { Link } from 'react-router-dom';
import HomePageSteps from './HomePageSteps';
import { Layout } from 'antd';

const { Content } = Layout;

class LetsParkPage extends Component {
    render() {
        return (
            <Layout>
                <MPHeaderContainer />
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                </Content>
                <Link smooth to={{ pathname: '/reserve' }}>reserve</Link>
                <Link smooth to={{ pathname: '/update' }}>update</Link>
            </Layout>
        );
    }
}

export default LetsParkPage;