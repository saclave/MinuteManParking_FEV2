import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { addUser } from "../apis/accounts"

import Highlighter from './Highlighter';
import HeaderlessPageContent from './HeaderlessPageContent';

import {
    Form, Input, Button, DatePicker,
    Select, Typography, notification
} from 'antd';

import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Title } = Typography;

class CreatePage extends Component {
    constructor(props) {
        super(props);
        this.state = { redirect: null };
    }

    onFinish = values => {
            const account = {
                firstName: values.firstName, 
                lastName: values.lastName,
                username: values.username, 
                password: values.password, 
                email: values.email, 
                cash: 100
            };

            addUser(account).then((response) => {
                if(response.data.usernameExist){
                    notification.open({
                        message: 'Registration Failed',
                        description: 'Username already exist',
                    });
                }
                if(response.data.emailExist){
                    notification.open({
                        message: 'Registration Failed',
                        description: 'Email already exist',
                    });
                }
                if(response.data.emailExist === undefined && response.data.usernameExist === undefined){
                    this.props.addUser(response.data);
                    notification.open({
                        message: 'Registration Successful',
                        description: 'Please login to your account',
                    });
            
                    this.setState({ redirect: "/" });
                    console.log("nag redirect");
                }
            });
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <HeaderlessPageContent>
                <Title>Become a MINUTE<Highlighter>MAN</Highlighter></Title>
                <Form name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}>

                    <Form.Item
                        name="firstName"
                        rules={[{ required: true, message: 'Please input your First Name!' }]}
                    >
                        <Input placeholder="First Name" />
                    </Form.Item>

                    <Form.Item
                        name="lastName"
                        rules={[{ required: true, message: 'Please input your Last Name!' }]}
                    >
                        <Input placeholder="Last Name" />
                    </Form.Item>

                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
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

                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<MailOutlined />}
                            type="email"
                            placeholder="Email"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Register
                    </Button>
                    </Form.Item>
                </Form>
            </HeaderlessPageContent>
        );
    }
}

export default CreatePage;