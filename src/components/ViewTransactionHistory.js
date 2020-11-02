import React, { Component } from 'react';
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
                title: 'Ticket ID',
                dataIndex: 'ticketId',
                key: 'id',
                render: text => <b>{text}</b>,
            },
            {
                title: 'Trasanction Date',
                dataIndex: 'transactDate',
                key: 'id',
                render: text => <b>{text}</b>,
            }];

        const dataSource = [
            {
                key: '1',
                transactId: '1',            
                ticketId: '1',
                transactDate: '2019-11-02',
            },
            {
                key: '2',
                transactId: '2',
                ticketId: '2',
                transactDate: '2019-11-02',
            },
            {
                key: '3',
                transactId: '3',
                ticketId: '2',
                transactDate: '2019-11-02',
            },
            {
                key: '4',
                transactId: '4',
                ticketId: '2',
                transactDate: '2019-11-02',
            },
            {
                key: '5',
                transactId: '5',
                ticketId: '2',
                transactDate: '2019-11-02',
            },
            {
                key: '6',
                transactId: '6',
                ticketId: '2',
                transactDate: '2019-11-02',
            },
            {
                key: '7',
                transactId: '7',
                ticketId: '2',
                transactDate: '2019-11-02',
            },
            {
                key: '8',
                transactId: '8',
                ticketId: '2',
                transactDate: '2019-11-02',
            },
            {
                key: '9',
                transactId: '9',
                ticketId: '2',
                transactDate: '2019-11-02',
            },
            {
                key: '10',
                transactId: '10',
                ticketId: '2',
                transactDate: '2019-11-02',
            },
            {
                key: '11',
                transactId: '11',
                ticketId: '2',
                transactDate: '2019-11-02',
            },
            {
                key: '12',
                transactId: '12',
                ticketId: '2',
                transactDate: '2019-11-02',
            }
        ];

        return (
            <div className = "table-div">
                <Table id="done" 
                    columns={columns}
                    dataSource={dataSource}
                    pagination={{ pageSize: 10 }} 
                    scroll={{ y: 500 }} />
            </div>
        );
    }
}

export default ViewTransactionHistory;