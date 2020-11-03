import React, { Component } from 'react';

import MPHeader from './MPHeader';
import HomePageAboutUs from './HomePageAboutUs';
import HomePageMap from './HomePageMap';
import HomePageServices from './HomePageServices';
import HomePageSteps from './HomePageSteps';

import { Layout, Col, Row, Image } from 'antd';
import picHeader from '../images/header.jpg'

const { Content } = Layout;

class HomePage extends Component {
    render() {
        return (
            <Layout>
                <MPHeader />
                <Content className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}>
                    <Image src={picHeader} preview={false} />
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
        );
    }
}

export default HomePage;