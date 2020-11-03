import React, { Component } from 'react';
import { Modal, Button, Input, Label } from 'antd';
import Draggable from 'react-draggable';

class ReservePage extends Component {
  state = {
    visible: false,
    disabled: true,
  };

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

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.showModal}>Reserve</Button>
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
            <h2>Parking Lot Name</h2>
            <h3>Full Address of Parking Lot</h3>
          </div>

          <div className="available">
            <label name="reserveLabel" for="capacity">Capacity: </label>
            <input type="text" id="reserveValues" value="20" disabled /><br />
            <label for="availableSize">Available: </label>
            <input type="text" id="reserveValues" value="18" disabled /><br />
          </div>
          <br />
        </Modal>
      </div>
    );
  }
}

export default ReservePage;
