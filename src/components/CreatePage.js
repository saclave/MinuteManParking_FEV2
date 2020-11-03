import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import Highlighter from './Highlighter';

import {
    Form, Input, Button, DatePicker,
    Select, Row, Col, Typography
} from 'antd';

import { v4 as uuidv4 } from 'uuid';

import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Title } = Typography;

class CreatePage extends Component {
    constructor(props) {
        super(props);
        this.state = { redirect: null };
    }

    onFinish = values => {
        const id = uuidv4();
        const account = {
            id: id, firstName: values.firstName, lastName: values.lastName,
            userName: values.username, passWord: values.password, email: values.email, gender: values.gender, birthday: values.birthday
        };

        this.props.addUser(account);
        console.log(id);
        console.log(values);
        this.setState({ redirect: "/" });
        console.log("nag redirect");
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <Row align="middle" className="headerless-page-content">
                <Col
                    xs={{ span: 14, offset: 5 }}
                    sm={{ span: 12, offset: 6 }}
                    md={{ span: 10, offset: 7 }}
                    lg={{ span: 8, offset: 8 }}
                    xl={{ span: 6, offset: 9 }}>
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

                        <Form.Item
                            name="gender"
                            rules={[{ required: true, message: 'Please select your Gender!' }]}>
                            <Select
                                allowClear
                                placeholder="Gender"
                                style={{ textAlign: 'left' }}
                                required
                            >
                                <Option value="Male">Male</Option>
                                <Option value="Female">Female</Option>
                                <Option value="Other">Other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item name="birthDate"
                            rules={[{ required: true, message: 'Please select your Birth Date!' }]}>
                            <DatePicker
                                style={{ width: '100%' }}
                                placeholder="Birth Date"
                                label="Birthdate"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Register
                    </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default CreatePage;