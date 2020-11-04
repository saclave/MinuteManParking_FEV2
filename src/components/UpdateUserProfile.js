import React, { Component } from 'react';
import { Form, Input, Button, DatePicker, Select, Modal, Row, Col } from 'antd';
import { updateUser, getAll, addCar } from '../apis/accounts';
import HeaderlessPageComponent from '../components/HeaderlessPageContent'
import Draggable from 'react-draggable';
import { Redirect } from "react-router-dom";
class UpdateUserProfile extends Component {
    state = { visible: false,redirect: false };

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
      goBack =() =>{
        this.setState({
            redirect: true
          });
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
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
                firstName: values.firstName, lastName: values.lastName,
                username: values.username, password: values.password, email: values.email, gender: values.gender, birthdate: values.birthday, cash: 500
            }).then(() => {
                this.props.updateUser(values);
            });
        };
        const onCarFinish = values => {
            const id = this.props.account.id;
            const car = {
                plateNumber: values.platenumber, brand: values.brand,
                color: values.color, userId: id
            };
            addCar(car).then(() => {
                this.props.addCar(car);
            });
                this.setState({
                    visible: false,
                  });
        };

        const { Option } = Select;

        return (
            
                     <Row align="middle" className="headerless-page-content">
                         {this.renderRedirect()}
                     <Col xs={{ span: 14, offset: 5 }}
                             sm={{ span: 12, offset: 6 }}
                             md={{ span: 10, offset: 7 }}
                             lg={{ span: 8, offset: 8 }}
                             xl={{ span: 6, offset: 9 }}>
                                                     
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
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
                    <Button onClick={this.goBack}>
                            Back
                    </Button>
                    
                    </Form.Item>
                </Form>
                </Col>
                <Col>
                <Row  align = 'top'>
                    <Col span={24}>
                <Button type="primary" onClick={this.showModal}>
                          Open Modal
                        </Button>
               
                        <Modal className="modal"
              title={
                <div >
                  Ticket:  aawdawd
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
                    <Form.Item name='color' label="Color" rules={[{ required: true }]}>
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