import React, { Component } from 'react';

import MPHeader from './MPHeader';
import HomePageAboutUs from './HomePageAboutUs';
import HomePageMap from './HomePageMap';
import HomePageSider from './HomePageSider';
import HomePageServices from './HomePageServices';
import HomePageSteps from './HomePageSteps';
import { Link } from 'react-router-dom';
import HomePageOtherServices from './HomePageOtherServices';
import HomePageFooter from './HomePageFooter';
import { Layout, Col, Row, Image } from 'antd';
import picHeader from '../images/header.jpg'

const { Content } = Layout;

class HomePage extends Component {
    render() {
        return (
            <Layout>
                <MPHeader />
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
                    </Layout>
                    <Link smooth to={{ pathname: '/reserve' }}>reserve</Link>
                </Content>
                <HomePageFooter />
            </Layout>
        );
    }
}

export default HomePage;