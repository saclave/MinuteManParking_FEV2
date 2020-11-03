import React, { Component } from 'react';

import MPCard from './MPCard';

import { Col, Row } from 'antd';

import picIndicator from '../images/icon-map-indicator.png';
import picReservation from '../images/icon-reservation.png';
import picTicket from '../images/icon-ticket.png';

class HomePageServices extends Component {
    render() {
        return (
            <div className="home-page-content">
                <Row justify="space-around">
                    <Col xs={0} lg={3} xl={5}></Col>
                    <Col xs={9} lg={5} xl={3}>
                        <MPCard title="Map Indicators" image={picIndicator}
                            description="Integrated with a map where you can see your current location and of parking lots around you." />
                    </Col>
                    <Col xs={9} lg={5} xl={3}>
                        <MPCard title="Reservation System" image={picReservation}
                            description="Parking slot reservation at your fingertips." />
                    </Col>
                    <Col xs={9} lg={5} xl={3}>
                        <MPCard title="E-Ticket System" image={picTicket}
                            description="Paperless ticket generation upon reservation" />
                    </Col>
                    <Col xs={0} lg={3} xl={5}></Col>
                </Row>
            </div>
        );
    }
}

export default HomePageServices;