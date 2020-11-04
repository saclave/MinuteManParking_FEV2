import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button, Modal, Table } from 'antd';

import { getTicketsByUserId } from '../apis/accounts';

class ViewTransactionHistory extends Component {
    constructor(props) {
        super(props);

        this.state = { visible: false, redirect: null, data: [] };
    }

    showModal = () => {
        getTicketsByUserId(this.props.account.id)
            .then(response => {
                const data = response.data.map((transaction, i) => ({
                    key: i,
                    parkingLotName: transaction.parkingLotName,
                    ticketId: transaction.id,
                    reservedTime: transaction.timeIn,
                    timeOut: transaction.timeOut,
                    rate: transaction.amount
                }))

                this.setState({
                    visible: true,
                    data
                });

            }).catch(error => {
                console.log(error);
            });
    };

    handleExit = e => {
        console.log(e);
        this.setState({
            visible: false,
            transactionList: []
        });
    };

    render() {
        const columns = [
            {
                title: 'Parking Lot Name',
                dataIndex: 'parkingLotName'
            },
            {
                title: 'Ticket ID',
                dataIndex: 'ticketId'
            },
            {
                title: 'Reserved Time',
                dataIndex: 'reservedTime'
            },
            {
                title: 'Time Out',
                dataIndex: 'timeOut'
            },
            {
                title: 'Rate',
                dataIndex: 'rate'
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
                    onCancel={this.handleExit}
                    footer={<Button key="back" onClick={this.handleExit}>Close</Button>}
                    width={700}
                >
                    <Table columns={columns}
                        dataSource={this.state.data}
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