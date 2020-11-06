import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Form, Input, Button, Typography, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { getUserByUsernameAndPassword } from '../apis/accounts'
import HeaderlessPageContent from './HeaderlessPageContent';

const { Title } = Typography;

class LoginPage extends Component {
    formRef = React.createRef();

    onFinish = values => {
        getUserByUsernameAndPassword(values.username, values.password).then(response => {
            // console.log(response);
            if (response.data === "") {
                this.formRef.current.resetFields();
                notification.open({
                    message: 'Login Failed',
                    description: 'Your username or password is incorrect. Please try again.',
                });

                return;
            }

            this.props.authenticate(response.data);

            notification.open({
                message: 'Login Successful',
                description: `Hi ${response.data.firstName}! Where are we gonna park your car today?`,
            });

            this.props.history.push('/park');
        });
    };

    getAccountByUsernameAndPassword = (username, password) => {
        return this.props.accounts.find(account =>
            account.username === username &&
            account.password === password);
    }

    render() {
        return (
            <HeaderlessPageContent>
                <Title>Log into your account</Title>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    ref={this.formRef}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
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
                                message: 'Please input your password!',
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
                        or create an account <Link to="/register">here</Link>
                    </Form.Item>
                </Form>
            </HeaderlessPageContent>
        );
    }
}

export default LoginPage;