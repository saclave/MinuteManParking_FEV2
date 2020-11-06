import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { Link } from "react-router-dom";

class ViewTicket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      disabled: true,
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleExit = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    console.log(this.props.ticket);
    return (
      <>
        <Link onClick={this.showModal}>
          View Ticket
            </Link>
        <Modal className="modal"
          title={
            <div >
              Ticket:<div className="ticket-id">{this.props.ticket.name}</div>
            </div>
          }
          visible={this.state.visible}
          onCancel={this.handleExit}
          footer={<Button key="back" onClick={this.handleExit}>Close</Button>}
        >
          <div className="reserve">
            <h2>Parking Lot:<div className="ticket-details">{this.props.parkinglot.name}</div></h2>
            {/* <h4>Slot Name: <div className="ticket-details">{this.props.parkinglot.parkingSlotList.find(slot => slot.id === this.props.ticket.parkingSlotId).name} </div></h4> */}
            <h4>Slot Name: <div className="ticket-details">{this.props.ticket.name.substring(this.props.ticket.name.indexOf("_")+1,this.props.ticket.name.indexOf("-"))} </div></h4>
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