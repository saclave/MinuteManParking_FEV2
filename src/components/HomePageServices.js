import React, { Component } from 'react';

import HomePageContentTitle from './HomePageContentTitle';
import MPCard from './MPCard';

import { Col, Row } from 'antd';

import picGeolocation from '../images/geolocation.png';
import picIndicators from '../images/indicators.png';
import picMonitoring from '../images/monitoring.png';
import picReservation from '../images/reservation.png';
import picMicrotransactions from '../images/microtransactions.png';
import picTicket from '../images/ticket.png';

class HomePageServices extends Component {
    render() {
        return (
            <div className="home-page-content container">
                <HomePageContentTitle id="services" text="WHAT WE OFFER" />
                <Row>
                    <Col sm={{ span: 12 }} lg={{ span: 6, offset: 3 }} xl={{ span: 4, offset: 6 }}>
                        <MPCard title="Map Indicators" image={picIndicators} />
                    </Col>
                    <Col sm={12} lg={6} xl={4}>
                        <MPCard title="Reservation System" image={picReservation} />
                    </Col>
                    <Col sm={12} lg={6} xl={{ span: 4, offset: 0 }}>
                        <MPCard title="E-Ticket System" image={picTicket} />
                    </Col>
                    <Col sm={12} lg={{ span: 6, offset: 3 }} xl={{ span: 4, offset: 6 }}>
                        <MPCard title="Geolocation" image={picGeolocation} />
                    </Col>
                    <Col sm={12} lg={6} xl={{ span: 4, offset: 0 }}>
                        <MPCard title="Real-Time Status Monitoring" image={picMonitoring} />
                    </Col>
                    <Col sm={12} lg={6} xl={4}>
                        <MPCard title="Microtransactions" image={picMicrotransactions} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default HomePageServices;