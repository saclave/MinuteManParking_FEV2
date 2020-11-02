import React, { Component } from 'react';
import { Card } from 'antd';
import { EditOutlined, SettingOutlined } from '@ant-design/icons';
import QRCode from 'qrcode.react';
class ViewTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: '12:45',
            date: '5/21/2020',
            ticket: '#13CFD3'

        }
    }
    render() {
        
        const { Meta } = Card;
        return (
            <div>
                <label>ticket number</label>
            <Card
                className="viewCard"
                style={{ width: 250 , color:'blue', fontWeight: 'bold', fontSize:'20px', border: '2px solid lightblue'}}
                
                cover={
                     <QRCode value={this.state.ticket} size='1000'/>
    
                  }>
                <Meta title={"Time: " + this.state.time}/>
                <Meta description={this.state.date} />
            </Card>
        </div>
        );
    }
}

export default ViewTicket;