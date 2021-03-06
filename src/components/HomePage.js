import React, { Component } from 'react';

import MPHeaderContainer from '../containers/MPHeaderContainer';

import HomePageAboutUs from './HomePageAboutUs';
import HomePageServices from './HomePageServices';
import HomePageSteps from './HomePageSteps';
import HomePageOtherServices from './HomePageOtherServices';
import HomePageFooter from './HomePageFooter';
import { Layout, Image } from 'antd';
import picHeader from '../images/header.jpg'

const { Content } = Layout;

class HomePage extends Component {
    render() {
        return (
            <Layout>
                <MPHeaderContainer fixed />
                <Image className="home-page-banner" src={picHeader} preview={false} />
                <Content className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}>
                    <HomePageServices />
                    <HomePageAboutUs />
                    <HomePageOtherServices />
                    <HomePageSteps />
                </Content>
                <HomePageFooter />
            </Layout >
        );
    }
}

export default HomePage;