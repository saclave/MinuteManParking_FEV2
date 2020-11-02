import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import { Affix, Form, Input, Layout, Button, Typography } from 'antd';

import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { Title } = Typography;

class HomePageLogin extends Component {
    render() {
        const onFinish = values => {
            console.log('Received values of form: ', values);
        };

        return (
            <Affix offsetTop={20}>
                <Sider width={300} className="site-layout-background">
                    <div className="home-page-login">
                        <Title>Log In</Title>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" block>
                                    Log in
                                </Button>
                                or create an account <Link to="/create">here</Link>
                            </Form.Item>
                        </Form>
                    </div>
                </Sider>
            </Affix>
        );
    }
}

export default HomePageLogin;