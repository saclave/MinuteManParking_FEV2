import React, { Component } from 'react';

import MPHeader from './MPHeader';
import HomePageAboutUs from './HomePageAboutUs';
import HomePageLoginContainer from '../containers/HomePageLoginContainer';
import HomePageMap from './HomePageMap';
import HomePageSider from './HomePageSider';
import HomePageServices from './HomePageServices';
import HomePageSteps from './HomePageSteps';
import HomePageFooter from './HomePageFooter';

import { Layout, Col, Row, Image } from 'antd';

const { Content } = Layout;

class HomePage extends Component {
    render() {
        return (
            <Layout>
                <MPHeader />
                <Layout>
                    <HomePageSider />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <Row>
                                <Col xs={24}>
                                    <HomePageServices />
                                </Col>
                                <Col xs={24}>
                                    <HomePageSteps />
                                </Col>
                                <Col xs={24}>
                                    <HomePageMap />
                                </Col>
                                <Col xs={24}>
                                    <HomePageAboutUs />
                                </Col>
                            </Row>
                        </Content>
                    </Layout>
                    <HomePageLoginContainer />
                </Layout>
                <HomePageFooter/>
            </Layout>
        );
    }
}

export default HomePage;