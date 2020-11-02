import React, { Component } from 'react';
import MPHeader from './MPHeader';
import { Table } from 'antd';

class ViewTransactionHistory extends Component {
    render() {
        const columns = [
            {
                title: 'Transaction ID',
                dataIndex: 'transactId',
                key: 'id',
                render: text => <b>{text}</b>,
            },
            {
                title: 'Parking Lot Name',
                dataIndex: 'parkingLotName',
                key: 'text',
                render: text => <b>{text}</b>,
            },
            {
                title: 'Ticket ID',
                dataIndex: 'ticketId',
                key: 'id',
                render: text => <b>{text}</b>,
            },
            {
                title: 'Trasaction Date',
                dataIndex: 'transactDate',
                key: 'id',
                render: text => <b>{text}</b>,
            }];

        const dataSource = [
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
            <div className="table-div">
                <div className="first">
                    <MPHeader />
                </div>
                <Table id="done"
                    columns={columns}
                    dataSource={dataSource}
                    pagination={{ pageSize: 10 }}
                    scroll={{ y: 550 }} />
            </div>
        );
    }
}

export default ViewTransactionHistory;