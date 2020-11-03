import React, { Component } from 'react';

import { Layout, Menu } from 'antd';

import { HashLink } from 'react-router-hash-link';
import { QuestionCircleOutlined, AreaChartOutlined, AndroidOutlined, OrderedListOutlined } from '@ant-design/icons';

const { Header } = Layout;

class MPHeader extends Component {
    render() {
        return (
            <Header className="mp-header">
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
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
            </Header >
        );
    }
}

export default MPHeader;