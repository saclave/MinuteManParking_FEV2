import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Form, Input, Button, Typography, notification, Layout } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Title } = Typography;

class LoginPage extends Component {
    formRef = React.createRef();

    onFinish = values => {
        const account = this.getAccountByUsernameAndPassword(values.username, values.password);
        if (account === undefined) {
            this.formRef.current.resetFields();
            notification.open({
                message: 'Login Failed',
                description: 'Your username or password is incorrect. Please try again.',
            });
        }

        this.props.authenticate(account);

        notification.open({
            message: 'Login Successful',
            description: `Hi ${account.firstName}! Where are we gonna park your car today?`,
        });

        this.props.history.push('/');
    };

    getAccountByUsernameAndPassword = (username, password) => {
        return this.props.accounts.find(account =>
            account.username === username &&
            account.password === password);
    }

    render() {
        return (
            <div>
                <Title>Log In</Title>
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
            </div>
        );
    }
}

export default LoginPage;