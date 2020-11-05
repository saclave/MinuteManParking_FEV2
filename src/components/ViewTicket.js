import React, { Component } from 'react';
import { EditOutlined, SettingOutlined } from '@ant-design/icons';
import QRCode from 'qrcode.react';
import Draggable from 'react-draggable';
import { Modal, Button, Card, Space } from 'antd';
import { Redirect, Link } from "react-router-dom";

class ViewTicket extends Component {
    constructor(props) {
        super(props);
    } 
    state = {
      visible: false,
      disabled:true,
      redirect: false
  }
    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/park' />
      }
    }

      handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
          redirect: true
        });
      };

      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
          redirect: true
        });
      };
    

    render() {
      console.log(this.props.ticket);
      // if(this.props.ticket === undefined){
      //     return <Redirect to='/' />
      // }
        const { Meta } = Card;
        return (
            <>
            {/* <Button onClick={this.showModal}>Ticket</Button> */}
            <Link onClick={this.showModal}>
                    View Ticket
            </Link>
            {this.renderRedirect()}
            <Modal className="modal"
              title={
                <div >
                  Ticket:<div className="ticket-id">#{this.props.ticket.id}</div>
                </div>
              }
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              // modalRender={modal => <Draggable disabled={this.state.disabled}>{modal}</Draggable>}
              // footer={[
              //   <Button key="submit" type="primary" onClick={this.handleOk}>
              //     Ok
              //   </Button>
              // ]}
            >
              <div className="reserve">
                <h2>Parking:<div className="ticket-details">{this.props.parkinglot.name}</div></h2>
                <h4>Name: <div className="ticket-details">{this.props.ticket.name} </div></h4>
                <h4>Time in: <div className="ticket-details">{this.props.ticket.timeIn}</div></h4>
                <h4>Amount: <div className="ticket-details">{this.props.parkinglot.price}</div></h4>
              </div>
              <br />
            </Modal>
          </>
        );
    }
}

export default ViewTicket;