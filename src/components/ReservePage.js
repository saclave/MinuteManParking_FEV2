import React, { Component } from 'react';
import { Modal, Button, Typography, Input, Label } from 'antd';
import Draggable from 'react-draggable';
import { Redirect } from "react-router-dom";

const { Title, Paragraph } = Typography;

class ReservePage extends Component {
  constructor(props) {
    super(props); 
  }
  state = {
    visible: true,
    disabled: true,
    redirect: null
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log("nag redirect");
    console.log(e);
    this.setState({
      visible: false,
      redirect: "/payment"
    });
    
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
      redirect: "/viewMap"
    });
  };

  renderRedirect = () => {
    if (this.state.redirect !== null) {
      return <Redirect to= {this.state.redirect} />
    }
  }
  render() {
 
    console.log(this.props.parkinglot)
    return (
      <div>
        {/* <Button onClick={this.showModal}>Reserve</Button> */}
        {this.renderRedirect()}
        <Modal className="modal"
          title={
            <div
              style={{
                width: '100%',
                cursor: 'move',
              }}
              onMouseOver={() => {
                if (this.state.disabled) {
                  this.setState({
                    disabled: false,
                  });
                }
              }}
              onMouseOut={() => {
                this.setState({
                  disabled: true,
                });
              }}
              onFocus={() => { }}
              onBlur={() => { }}
            // end
            >
              Reserve Slot
            </div>
          }
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          modalRender={modal => <Draggable disabled={this.state.disabled}>{modal}</Draggable>}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={this.handleOk}>
              Reserve
            </Button>
          ]}
        >
          <div className="reserve">
            <h2><Title level={3}>{this.props.parkinglot.name}</Title></h2>
            <h3><Paragraph>{this.props.parkinglot.address}</Paragraph></h3>
          </div>

          <div className="capacity">
            <label name="reserveLabel" for="capacity">Capacity: </label>
            <input type="text" id="reserveValues" value={this.props.parkinglot.capacity} size="6" disabled /><br />
          </div>
          <div className="available">
            <label for="availableSize">Available: </label>
            <input type="text" id="reserveValues" value={this.props.parkinglot.available} size="6" disabled /><br />
          </div>
          <div className="parking-fee">
            <label name="reserveLabel">Parking Fee: </label>
            <input type="text" id="reserveValues" value={this.props.parkinglot.price} size="6" disabled /><br />
          </div>
          <div className="remaining-balance">
            <label name="reserveLabel">Remaining Balance: </label>
            <input type="text" id="reserveValues" value={this.props.account.cash} size="6" disabled /><br />
          </div>
          <br />
        </Modal>
      </div>
    );
  }
}

export default ReservePage;
