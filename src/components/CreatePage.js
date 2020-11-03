import React, { Component } from 'react';
import { Form, Input, Button, DatePicker, Select } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { Redirect } from "react-router-dom";

class CreatePage extends Component {
    constructor(props) {
        super(props);
        this.state = { redirect: null };

    }
    render() {
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 9 },
        };

        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select birthday!' }],
        };

        const validateMessages = {
            required: '${label} is required!',
            types: {
                email: '${label} is not validate email!',
            },
        };

        const onFinish = values => {
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

        const { Option } = Select;

        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <div className="create-page-content">
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item name="firstName" label="First Name" rules={[{ required: true }]} >
                        <Input />
                    </Form.Item>
                    <Form.Item name="lastName" label="Last Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="username" label="Username" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item name="email" label="Email" rules={[{ type: 'email' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                        <Select
                            placeholder="Select a option and change input text above"
                            allowClear
                        >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="birthDate" label="Birthdate" {...config}>
                        <DatePicker />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default CreatePage;