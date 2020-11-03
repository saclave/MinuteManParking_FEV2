import React, { Component } from 'react';
import { List, Layout, Typography, Image, Col, Row, Divider } from 'antd';
import Highlighter from '../components/Highlighter';
import logo from '../images/logo.png';



const { Footer } = Layout;
const { Paragraph, Title } = Typography;


class HomePageFooter extends Component {
    render() {
        return (
            <Footer>
                <Row>
                    <Col xs={24} xl={12} rasterOrder={0}>
                        <div className="container">
                            <Title>
                                MINUTE<Highlighter>MAN</Highlighter>
                            </Title>
                            <Title level={5}>Mall of Asia Complex, 5 Diosdado Macapagal Blvd, Pasay, Metro Manila</Title>
                            <Divider />
                            ©2020 MinuteMan. All Rights Reserved.<br />
                            Website Designed and Developed by Woody & Friends
                    </div>
                    </Col>
                    <Col xs={24} xl={10} rasterOrder={1}>
                        <div className="container">
                            <Image
                                preview={false}
                                width="50%"
                                src={logo}
                            />
                        </div>

                    </Col>
                </Row>
            </Footer>
        );
    }
}

export default HomePageFooter;
