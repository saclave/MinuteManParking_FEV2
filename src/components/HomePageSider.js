import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';

import { Affix, Layout, Menu } from 'antd';
import { QuestionCircleOutlined, AreaChartOutlined, AndroidOutlined, OrderedListOutlined } from '@ant-design/icons';

const { Sider } = Layout;

class HomePageSider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }

    componentDidMount() {
        this.updateCollapse();
        window.addEventListener('resize', this.updateCollapse);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateCollapse);
    }

    updateCollapse = () => {
        const collapsed = window.innerWidth >= 992 ? false : true
        this.setState({ collapsed });
    }

    render() {
        return (
            <Affix offsetTop={20}>
                <Sider width={200} className="site-layout-background" collapsible collapsed={this.state.collapsed}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
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
                </Sider>
            </Affix>
        );
    }
}

export default HomePageSider;