import React, { Component } from 'react';

import HomePageContentTitle from './HomePageContentTitle';

import { Card, Col, Row } from 'antd';

const { Meta } = Card;

class HomePageServices extends Component {
    render() {
        return (
            <div className="home-page-content">
                <HomePageContentTitle id="services" text="Services" />
                <Row>
                    <Col span={8}>
                        <Card hoverable cover={
                            <img
                                alt="parking-lot"
                                src="https://thumbs.dreamstime.com/b/parking-lot-car-area-isometric-cartoon-vector-illustration-173721678.jpg"
                            />
                        }
                        >
                            <Meta
                                // title="Parking Lots"
                                description="Helps you search for parking lots"
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable cover={
                            <img
                                alt="parking-slot"
                                src="https://www.restonnow.com/files/2016/08/DSC03348.jpg"
                            />
                        }
                        >
                            <Meta
                                // title="Parking Slot"
                                description="Shows you the realtime available slots of a parking lot"
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable cover={
                            <img
                                alt="parking-slot"
                                src="https://thumbs.dreamstime.com/b/parking-lot-area-car-road-sign-concept-isoometric-cartoon-vector-illustration-173851550.jpg"
                            />
                        }
                        >
                            <Meta
                                // title="Parking Slot"
                                description="Reserves you a parking slot"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default HomePageServices;