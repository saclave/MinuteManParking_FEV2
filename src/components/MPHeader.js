import React, { Component } from 'react';

import ViewProfileContainer from '../containers/ViewProfileContainer';
import ViewTransactionHistoryContainer from '../containers/ViewTransactionHistoryContainer';

import { Col, Row, Layout, Menu } from 'antd';
import {
    QuestionCircleOutlined, AndroidOutlined, OrderedListOutlined,
    LoginOutlined, UserAddOutlined, UserOutlined, AreaChartOutlined,
    LogoutOutlined, HistoryOutlined
} from '@ant-design/icons';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const { Header } = Layout;
const { SubMenu } = Menu;

class MPHeader extends Component {
    onLogout = () => {
        this.props.logout();
    }

    render() {
        const className = 'mp-header' + (this.props.fixed ? ' mp-header-fixed' : '');

        return (
            <Header className={className}>
                <Row>
                    <Col flex="auto">
                        <Menu
                            mode="horizontal"
                            className="header-menu"
                        >
                            {
                                this.props.authenticated &&
                                <Menu.Item key="0" icon={<AreaChartOutlined />}>
                                    <Link smooth to={{ pathname: '/park' }}>Let's Park</Link>
                                </Menu.Item>
                            }
                            <Menu.Item key="1" icon={<QuestionCircleOutlined />}>
                                <HashLink smooth to={{ pathname: '/', hash: '#about_us' }}>About Us</HashLink>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<AndroidOutlined />}>
                                <HashLink smooth to={{ pathname: '/', hash: '#other_services' }}>Other Services</HashLink>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<OrderedListOutlined />}>
                                <HashLink smooth to={{ pathname: '/', hash: '#how_it_works' }}>How It Works</HashLink>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col flex="auto">
                        <Menu
                            mode="horizontal"
                            className="header-menu header-menu-right"
                        >
                            {
                                this.props.authenticated
                                    ?
                                    <SubMenu key="sub2" icon={<UserOutlined />} title={this.props.account.firstName}>
                                        <Menu.Item key="5" icon={<UserOutlined />}>
                                            <ViewProfileContainer />
                                        </Menu.Item>
                                        <Menu.Item key="7" icon={<HistoryOutlined />}>
                                            <ViewTransactionHistoryContainer />
                                        </Menu.Item>
                                        <Menu.Divider />
                                        <Menu.Item key="6" icon={<LogoutOutlined />}>
                                            <a onClick={this.onLogout}>Logout</a>
                                        </Menu.Item>
                                    </SubMenu>
                                    :
                                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                                        <Menu.Item key="5" icon={<LoginOutlined />}>
                                            <Link to={{ pathname: '/login' }}>Login</Link>
                                        </Menu.Item>
                                        <Menu.Item key="6" icon={<UserAddOutlined />}>
                                            <Link to={{ pathname: '/register' }}>Register</Link>
                                        </Menu.Item>
                                    </SubMenu>
                            }
                        </Menu>
                    </Col>
                </Row>
            </Header >
        );
    }
}

export default MPHeader;