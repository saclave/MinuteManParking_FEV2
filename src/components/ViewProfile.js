import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import {
    Modal, Button, Table,
    Divider, Row, Col, Image
} from 'antd';

import { EditOutlined } from '@ant-design/icons';

class ViewProfile extends Component {
    constructor(props) {
        super(props);

        this.state = { visible: false, redirect: false };
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
        this.setState({ redirect: true });
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/edit' />
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
                            <p>{this.props.account.username}</p>
                            <p>{`${this.props.account.firstName} ${this.props.account.lastName}`}</p>
                            <p>{`${this.props.account.age} yrs old`}</p>
                            <p>{this.props.account.email}</p>
                            <Button icon={<EditOutlined />}
                                onClick={this.onEdit}>Edit</Button>
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