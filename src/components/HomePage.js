import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { DesktopOutlined, QuestionCircleOutlined, CarOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons';
import Login from './Login';
import '../css/HomePage.css';
import About from './About';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class HomePage extends Component {
    state = {
        collapsed: false,
        showLogin: false,
        showAbout: true,
        showConsumer: false,
        showServices: false,
        showDrivers: false,
        showMap: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    onShowAbout = () => {
        this.setState({
            showMap: false,
            showAbout: true,
            showLogin: false
        })
    }

    onShowLogin = () => {
        this.setState({
            showMap: false,
            showLogin: true,
            showAbout: false
        })
    }

    onShowMap = () => {
        this.setState({
            showLogin: false,
            showAbout: false,
            showMap: true
        })
    }


    render() {
        const { collapsed } = this.state;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<QuestionCircleOutlined />} onClick={this.onShowAbout}>
                            About Us
                        </Menu.Item>
                        <Menu.Item key="2" icon={<CarOutlined />} onClick={this.onShowAbout}>
                            Drivers
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UsergroupAddOutlined />} onClick={this.onShowAbout}>
                            Consumer
                        </Menu.Item>
                        <Menu.Item key="4" icon={<DesktopOutlined />} onClick={this.onShowAbout}>
                            Services
                        </Menu.Item>
                        <Menu.Item key="5" icon={<DesktopOutlined />} onClick={this.onShowMap}>
                            Map
                        </Menu.Item>
                        <Menu.Item key="6" icon={<UserOutlined />} onClick={this.onShowLogin}>
                            Login
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
                    <Content style={{ margin: '0 16px' }}>
                        {
                            this.state.showAbout ?
                                <div id="about" >
                                        <About />
                                </div>
                                : null
                        }
                        {
                            this.state.showLogin ?
                                <div id="login" >
                                    <div class="col-lg-1 col-centered">
                                        <Login />
                                    </div>
                                </div>
                                : null
                        }
                        {
                            this.state.showMap ?
                                <div id="map" >
                                    <div class="col-lg-1 col-centered">
                                     
                                    </div>
                                </div>
                                : null
                        }
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default HomePage;