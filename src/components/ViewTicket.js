import React, { Component } from 'react';
import { EditOutlined, SettingOutlined } from '@ant-design/icons';
import QRCode from 'qrcode.react';
import Draggable from 'react-draggable';
import { Modal, Button, Card, Space } from 'antd';


class ViewTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: '12:45',
            date: '5/21/2020',
            ticket: '#13CFD3',
            slotName: '5A',
            lotName: 'Moa Parking',
            rate: '50',
            visible: false,
            disabled:true,

        }
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
    

    render() {
        
        const { Meta } = Card;
        return (
            <div>
            <Button onClick={this.showModal}>Reserve</Button>
            <Modal className="modal"
              title={
                <div >
                  Ticket:  {this.state.ticket}
                </div>
              }
              visible={this.state.visible}
              onOk={this.handleOk}
              modalRender={modal => <Draggable disabled={this.state.disabled}>{modal}</Draggable>}
              footer={[
                <Button key="submit" type="primary" onClick={this.handleOk}>
                  Ok
                </Button>
              ]}
            >
              <div className="reserve">
                <h2>Parking: {this.state.lotName} </h2>
                <h4>{this.state.date}</h4>
                <h4>Slot: {this.state.slotName}</h4>
                <h4>Rate: {this.state.rate} /hr</h4>
              </div>
              <br />
            </Modal>
          </div>
        );
    }
}

export default ViewTicket;