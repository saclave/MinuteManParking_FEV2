import React, { Component } from 'react';

import Highlighter from '../components/Highlighter';

import { Image, Col, Row, Typography } from 'antd';
import pcPic from '../images/pc.png';

const { Paragraph, Title } = Typography;

class HomePageAboutUs extends Component {
    render() {
        return (
            <div className="home-page-content">
                <Row>
                    <Col xs={24} xl={12}>
                        <div className="container">
                            <Title>
                                <Highlighter>PARK</Highlighter> IN LESS THAN A <Highlighter>MINUTE</Highlighter>!
                                <a id="about_us" className="home-page-content-title-link"></a>
                            </Title>
                            <div className="home-page-about-us-content">
                                <Paragraph>Hello there! We are Woody & Friends. We have seen the hassle of drivers in finding a parking space here in the Philippines and we were driven to devise a way to help drivers avoid the stresses of finding a decent parking slot.</Paragraph>
                                <Paragraph>That drive was what led us to develop MinuteMan Parking! Park cars in less than a minute.</Paragraph>
                                <Paragraph>It differs from the usual parking operations seen in malls that uses detectors or works by the find-it-yourself concept where MinuteMan Parking now offers you a realtime online gateway to find parking lots close to you, warn you of any nearby hazards, and gives you your parking slot right at the entrance.  Experience the convenience of automatic space allocation done just for you with no need to search for spaces yourself.</Paragraph>
                                <Title level={4}><Highlighter>EASY.</Highlighter> FAST. <Highlighter>COMFORTABLE.</Highlighter></Title>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} xl={12}>
                        <div className="container">
                            <Image
                                preview={false}
                                width="100%"
                                src={pcPic}
                            />
                        </div>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default HomePageAboutUs;