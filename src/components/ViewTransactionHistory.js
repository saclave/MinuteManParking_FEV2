import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button, Modal, Table } from 'antd';

import { getTicketsByUserId } from '../apis/accounts';

class ViewTransactionHistory extends Component {
    constructor(props) {
        super(props);

        this.state = { visible: false, redirect: null, data: [], loading: true };
    }

    showModal = () => {
        getTicketsByUserId(this.props.account.id)
            .then(response => {
                const data = response.data
                    .map((ticket, i) => ({
                        key: i,
                        parkingLotName: ticket.parkingLotName,
                        ticketId: ticket.id,
                        reservedTime: ticket.timeIn,
                        timeOut: ticket.timeOut,
                        rate: ticket.amount
                    }))

                this.setState({
                    visible: true,
                    data,
                    loading: false
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
                        loading={this.state.loading}
                        simple
                        bordered />
                </Modal>
            </>
        );
    }
}

export default ViewTransactionHistory;