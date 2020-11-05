import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { Redirect, Link } from "react-router-dom";

class ViewTicket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      disabled: true,
      redirect: false
    };
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

  handleExit = () => {
    this.setState({
      visible: false,
      redirect: true
    });
  };

  render() {
    console.log(this.props.ticket);
    return (
      <>
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
          onCancel={this.handleExit}
          footer={<Button key="back" onClick={this.handleExit}>Close</Button>}
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