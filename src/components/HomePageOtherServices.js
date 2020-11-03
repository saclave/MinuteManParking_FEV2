import React, { Component } from 'react';

import MPCard from './MPCard';
import HomePageContentTitle from './HomePageContentTitle';

import { Col, Row } from 'antd';

import picGeolocation from '../images/geolocation.png';
import picMonitoring from '../images/monitoring.png';
import picMicrotransactions from '../images/microtransactions.png';

class HomePageOtherServices extends Component {
    render() {
        return (
            <div className="home-page-content container">
                <HomePageContentTitle id="other_services" text="OTHER SERVICES" />
                <Row justify="space-around">
                    <Col xs={0} lg={3} xl={3}></Col>
                    <Col xs={8} lg={5} xl={6}>
                        <MPCard hoverable bordered title="Geolocation" image={picGeolocation} />
                    </Col>
                    <Col xs={8} lg={5} xl={6}>
                        <MPCard hoverable bordered title="Real-Time Status Monitoring" image={picMonitoring} />
                    </Col>
                    <Col xs={8} lg={5} xl={6}>
                        <MPCard hoverable bordered title="Microtransactions" image={picMicrotransactions} />
                    </Col>
                    <Col xs={0} lg={3} xl={3}></Col>
                </Row>
            </div>
        );
    }
}

export default HomePageOtherServices;