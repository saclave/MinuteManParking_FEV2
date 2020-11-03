import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Affix, Layout, Menu } from 'antd';
import { LoginOutlined, UserAddOutlined } from '@ant-design/icons';

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
            <Affix offsetTop={65}>
                <Sider width={150} className="site-layout-background"
                    collapsed={this.state.collapsed}>
                    <Menu
                        mode="inline"
                        style={{ height: '100%', borderLeft: 0 }}
                        className="menu-right"
                    >
                        <Menu.Item key="1" icon={<LoginOutlined />}>
                            <Link to={{ pathname: '/login' }}>Login</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserAddOutlined />}>
                            <Link to={{ pathname: '/register' }}>Register</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
            </Affix>
        );
    }
}

export default HomePageSider;