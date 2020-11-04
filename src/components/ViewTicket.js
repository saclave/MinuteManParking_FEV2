import React, { Component } from 'react';
import { EditOutlined, SettingOutlined } from '@ant-design/icons';
import QRCode from 'qrcode.react';
import Draggable from 'react-draggable';
import { Modal, Button, Card, Space } from 'antd';


class ViewTicket extends Component {
    constructor(props) {
        super(props);
      
    } 
    state = {
      // time: 'sefsef',
      // date: 'fsese',
      // ticket: '#13CFD3',
      // slotName: '5A',
      // lotName: 'Moa Parking',
      // rate: '50',
      visible: false,
      disabled:true,

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
      console.log(this.props.parkinglot);
        const { Meta } = Card;
        return (
            <div>
            <Button onClick={this.showModal}>Reserve</Button>
            <Modal className="modal"
              title={
                <div >
                  Ticket:  aawdawd
                </div>
              }
              visible={this.state.visible}
              onOk={this.handleOk}
              modalRender={modal => <Draggable disabled={this.state.disabled}>{modal}</Draggable>}
              // footer={[
              //   <Button key="submit" type="primary" onClick={this.handleOk}>
              //     Ok
              //   </Button>
              // ]}
            >
              <div className="reserve">
                <h2>Parking: {this.props.parkinglot.name} </h2>
                <h4>slot: {this.props.ticket.slot}</h4>
                <h4>Time in: {this.props.ticket.time}</h4>
                <h4>Date: {this.props.ticket.date} </h4>
                <h4>Rate: {this.props.parkinglot.price}/hr</h4>
              </div>
              <br />
            </Modal>
          </div>
        );
    }
}

export default ViewTicket;