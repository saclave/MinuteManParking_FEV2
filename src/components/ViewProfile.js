import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import {
    Modal, Button, Table, Divider, Tooltip,
    Row, Col, Image, Typography, Space
} from 'antd';

import { EditOutlined, DollarCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;

class ViewProfile extends Component {
    constructor(props) {
        super(props);

        this.state = { visible: false, redirect: null };
    }

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

    onEdit = () => {
        this.setState({ redirect: '/edit' });
    }

    onTopup = () => {
        this.setState({ redirect: '/topup' });
    }

    renderRedirect = () => {
        if (this.state.redirect !== null) {
            return <Redirect to={this.state.redirect} />
        }
    }

    render() {
        const columns = [
            { title: 'Plate No.', dataIndex: 'plateNumber' },
            { title: 'Brand', dataIndex: 'brand' },
            { title: 'Color', dataIndex: 'color' },
        ];

        const data = [];
        this.props.account.carList.map((car, i) => {
            data.push({
                key: i,
                plateNumber: car.plateNumber,
                brand: car.brand,
                color: car.color,
            })
        })

        return (
            <>
                {this.renderRedirect()}
                <Link onClick={this.showModal}>
                    Profile
                </Link>
                <Modal
                    title="Profile"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={<Button key="back" onClick={this.handleCancel}>Close</Button>}
                >
                    <Row align="middle">
                        <Col span={12}>
                            <div className="profile-image">
                                <Image src={this.props.account.imgSrc} />
                            </div>
                        </Col>
                        <Col span={12}>
                            <Title level={4}>{`${this.props.account.firstName} ${this.props.account.lastName}`}</Title>
                            <p>{`${this.props.account.username} / ${this.props.account.email}`}</p>
                            <p>{`${this.props.account.age} years old`}</p>
                            <Space size={4}>
                                <Button icon={<EditOutlined />}
                                    onClick={this.onEdit}>Edit</Button>
                                <Tooltip placement="right" title="Click here to topup">
                                    <Button icon={<DollarCircleOutlined />}
                                        onClick={this.onTopup}>{` ${this.props.account.cash}`}</Button>
                                </Tooltip>
                            </Space>
                        </Col>
                        <Col span={24}>
                            <Divider orientation="left">Registered cars:</Divider>
                            <Table columns={columns} dataSource={data}
                                pagination={false} scroll={{ y: 240 }} />
                        </Col>
                    </Row>
                </Modal>
            </>
        );
    }
}

export default ViewProfile;