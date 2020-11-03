import React, { Component } from 'react';

import { Col, Row, Layout, Menu } from 'antd';
import {
    QuestionCircleOutlined, AreaChartOutlined, AndroidOutlined,
    OrderedListOutlined, LoginOutlined, UserAddOutlined, UserOutlined
} from '@ant-design/icons';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const { Header } = Layout;
const { SubMenu } = Menu;

class MPHeader extends Component {
    render() {
        return (
            <Header className="mp-header">
                <Row>
                    <Col flex="auto">
                        <Menu
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            className="header-menu"
                        >
                            <Menu.Item key="1" icon={<AndroidOutlined />}>
                                <HashLink smooth to={{ pathname: '/', hash: '#services' }}>What We Offer</HashLink>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<OrderedListOutlined />}>
                                <HashLink smooth to={{ pathname: '/', hash: '#how_it_works' }}>How It Works</HashLink>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<AreaChartOutlined />}>
                                <HashLink smooth to={{ pathname: '/', hash: '#our_map' }}>Our Map</HashLink>
                            </Menu.Item>
                            <Menu.Item key="4" icon={<QuestionCircleOutlined />}>
                                <HashLink smooth to={{ pathname: '/', hash: '#about_us' }}>About Us</HashLink>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col flex="auto">
                        <Menu
                            mode="horizontal"
                            className="header-menu header-menu-right"
                        >
                            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                                <Menu.Item key="5" icon={<LoginOutlined />}>
                                    <Link to={{ pathname: '/login' }}>Login</Link>
                                </Menu.Item>
                                <Menu.Item key="6" icon={<UserAddOutlined />}>
                                    <Link to={{ pathname: '/register' }}>Register</Link>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Col>
                </Row>
            </Header >
        );
    }
}

export default MPHeader;