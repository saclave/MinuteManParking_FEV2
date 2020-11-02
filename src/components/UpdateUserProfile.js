import React, { Component } from 'react';
import { Form, Input, Button, DatePicker, Select } from 'antd';

class UpdateUserProfile extends Component {
    
    isIdExist = (id) => {
        const accounts = this.props.accounts.filter(account => account.id === id);
        console.log(this.props.accounts);
        return accounts.length > 0;
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
            const id = values.id;
            if (this.isIdExist(id)){
                console.log(values);
                this.props.updateUser(values);
            }
        };

        const { Option } = Select;

        return (
            <div>
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item name='id' label="User Id" rules={[{ required: true }]} >
                        <Input />
                    </Form.Item>
                    <Form.Item name='firstName' label="First Name" rules={[{ required: true }]} >
                        <Input />
                    </Form.Item>
                    <Form.Item name='lastName' label="Last Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name='username' label="Username" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name='password' label="Password" rules={[{ required: true }]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item name='email' label="Email" rules={[{ type: 'email' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name='gender' label="Gender" rules={[{ required: true }]}>
                        <Select
                            placeholder="Select a option and change input text above"
                            allowClear
                        >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name='birthDate' label="Birthdate" {...config}>
                        <DatePicker />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Update
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default UpdateUserProfile;