import React, { Component } from 'react';
import { Form, Input, Button, Space, Select, Modal, Row, Col, notification, Image } from 'antd';
import { updateUser, addCar } from '../apis/accounts';
import Draggable from 'react-draggable';

class UpdateUserProfile extends Component {
    state = {
        visible: false, redirect: false,
        defaultpic: "https://snworksceo.imgix.net/dtc/3f037af6-87ce-4a37-bb37-55b48029727d.sized-1000x1000.jpg?w=1000"

    };



    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    goBack = () => {
        this.props.history.push('/');
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
            const id = this.props.account.id;
            updateUser(id, {
                firstName: values.firstName,
                lastName: values.lastName,
                username: values.username,
                password: values.password,
                email: values.email,
                cash: this.props.account.cash,
                image: values.image
            }).then((response) => {
                if (response.data.usernameExist) {
                    notification.open({
                        message: 'Update Failed',
                        description: 'Username already exist',
                    });
                }
                if (response.data.emailExist) {
                    notification.open({
                        message: 'Update Failed',
                        description: 'Email already exist',
                    });
                }
                if (response.data.emailExist === undefined && response.data.usernameExist === undefined) {
                    this.props.updateUser(response.data);
                    notification.open({
                        message: 'Update Successful',
                    });
                }
            });
        };
        const onCarFinish = values => {
            const id = this.props.account.id;
            const car = {
                plateNumber: values.platenumber, brand: values.brand,
                color: values.color, userId: id
            };
            addCar(car).then((response) => {
                this.props.addCar(response.data);
            });
            this.setState({
                visible: false,
            });
        };

        const { Option } = Select;
        console.log(this.props.account.image);
        if (this.props.account.image === undefined) {
            this.props.account.image = this.state.defaultpic;
        }
        else if (this.props.account.image === null) {
            this.props.account.image = this.state.defaultpic;
        }
        return (

            <Row align="middle" className="headerless-page-content">

                <Col xs={{ span: 14, offset: 5 }}
                    sm={{ span: 12, offset: 6 }}
                    md={{ span: 10, offset: 7 }}
                    lg={{ span: 8, offset: 8 }}
                    xl={{ span: 6, offset: 9 }}>

                    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}
                        initialValues={{
                            firstName: this.props.account.firstName,
                            lastName: this.props.account.lastName,
                            username: this.props.account.username,
                            password: this.props.account.password,
                            email: this.props.account.email,
                            image: this.props.account.image
                        }}
                    >

                        <Image src={this.props.account.image} alt='pic' width={200} style={{ padding: '50px' }} />
                        <Form.Item name='image' label="Image Link" rules={[{ required: false }]} >
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
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Space size={4}>
                                <Button type="primary" htmlType="submit">
                                    Update
                                </Button>
                                <Button onClick={this.goBack}>
                                    Back
                                </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </Col>
                <Col>
                    <Row align='top'>
                        <Col span={24}>
                            <Button type="primary" onClick={this.showModal}>
                                Add Car
                        </Button>

                            <Modal className="modal"
                                title={
                                    <div >
                                        Add Car
                </div>
                                }
                                visible={this.state.visible}
                                onOk={this.handleOk}
                                modalRender={modal => <Draggable disabled={this.state.disabled}>{modal}</Draggable>}
                                footer={[
                                    <Button key="back" onClick={this.handleCancel}>
                                        Cancel
            </Button>,
                                ]}
                            >
                                <Form {...layout} name="nest-messages" onFinish={onCarFinish} validateMessages={validateMessages}>
                                    <Form.Item name='platenumber' label="Plate Number" rules={[{ required: true }]} >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item name='brand' label="Brand" rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item name='color' label="Description" rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                                        <Button type="primary" htmlType="submit">
                                            Update
                    </Button>
                                    </Form.Item>
                                </Form>

                            </Modal>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default UpdateUserProfile;