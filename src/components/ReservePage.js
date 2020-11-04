import React, { Component } from 'react';
import { Modal, Button, Input, Label } from 'antd';
import Draggable from 'react-draggable';
import { Redirect } from "react-router-dom";
class ReservePage extends Component {
  constructor(props) {
    super(props); 
  }
  state = {
    visible: true,
    disabled: true,
    redirect: false
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
      redirect: true
    });
    
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  setRedirect = () => {
    this.setState({
     
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/payment' />
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
            <h2>{this.props.parkinglot.name}</h2>
            <h3>{this.props.parkinglot.address}</h3>
          </div>

          <div className="available">
            <label name="reserveLabel" for="capacity">Capacity: </label>
            <input type="text" id="reserveValues" value={this.props.parkinglot.capacity} disabled /><br />
            <label for="availableSize">Available: </label>
            <input type="text" id="reserveValues" value={this.props.parkinglot.available} disabled /><br />
          </div>
          <br />
        </Modal>
      </div>
    );
  }
}

export default ReservePage;
