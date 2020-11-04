import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button, Modal, Table } from 'antd';

class ViewTransactionHistory extends Component {
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

    render() {
        const columns = [
            {
                title: 'Transaction ID',
                dataIndex: 'transactId',
                key: 'id'
            },
            {
                title: 'Parking Lot Name',
                dataIndex: 'parkingLotName',
                key: 'text'
            },
            {
                title: 'Ticket ID',
                dataIndex: 'ticketId',
                key: 'id'
            },
            {
                title: 'Trasaction Date',
                dataIndex: 'transactDate',
                key: 'id'
            }];

        const data = [
            {
                key: '1',
                parkingLotName: 'A-01',
                transactId: '1',
                ticketId: '1',
                transactDate: '2019-11-02',
            },
            {
                key: '2',
                parkingLotName: 'A-02',
                transactId: '2',
                ticketId: '2',
                transactDate: '2019-11-02',
            },
            {
                key: '3',
                parkingLotName: 'A-03',
                transactId: '3',
                ticketId: '2',
                transactDate: '2019-11-02',
            },
            {
                key: '4',
                parkingLotName: 'A-04',
                transactId: '4',
                ticketId: '2',
                transactDate: '2019-11-02',
            },
            {
                key: '5',
                parkingLotName: 'A-05',
                transactId: '5',
                ticketId: '2',
                transactDate: '2019-11-02',
            },
            {
                key: '6',
                parkingLotName: 'B-01',
                transactId: '6',
                ticketId: '2',
                transactDate: '2019-11-02',
            },
            {
                key: '7',
                parkingLotName: 'B-02',
                transactId: '7',
                ticketId: '2',
                transactDate: '2019-11-02',
            },
            {
                key: '8',
                parkingLotName: 'B-03',
                transactId: '8',
                ticketId: '2',
                transactDate: '2019-11-02',
            },
            {
                key: '9',
                parkingLotName: 'B-04',
                transactId: '9',
                ticketId: '2',
                transactDate: '2019-11-02',
            },
            {
                key: '10',
                parkingLotName: 'B-05',
                transactId: '10',
                ticketId: '2',
                transactDate: '2019-11-02',
            },
            {
                key: '11',
                parkingLotName: 'C-01',
                transactId: '11',
                ticketId: '2',
                transactDate: '2019-11-02',
            },
            {
                key: '12',
                parkingLotName: 'C-02',
                transactId: '12',
                ticketId: '2',
                transactDate: '2019-11-02',
            }
        ];

        return (
            <>
                <Link onClick={this.showModal}>
                    Transaction History
                </Link>
                <Modal
                    title="Transaction History"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={<Button key="back" onClick={this.handleCancel}>Close</Button>}
                    width={700}
                >
                    <Table columns={columns}
                        dataSource={data}
                        pagination={{ pageSize: 10 }}
                        scroll={{ y: 400 }}
                        simple
                        bordered />
                </Modal>
            </>
        );
    }
}

export default ViewTransactionHistory;