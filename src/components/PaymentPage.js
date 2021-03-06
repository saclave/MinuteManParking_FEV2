import React, { Component } from 'react';
import { Button, Typography, notification } from 'antd';
import { DollarCircleOutlined } from '@ant-design/icons';
import { Redirect } from "react-router-dom";
import { Card, Col, Row } from 'antd';
import { addTicket, updateUser, updateAvailability } from "../apis/accounts"
import HeaderlessPageContent from './HeaderlessPageContent';

const { Title } = Typography;

class PaymentPage extends Component {

  state = {
    redirect: false
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }
  render() {
    const onClick = () => {

      var parkingSlotId = null;
      var flag = true;
      const availability = this.props.parkinglot.availability - 1;
      console.log("Price: " + this.props.parkinglot.price);
      var today = new Date(),
        time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
      this.props.updateParkinglot({ ...this.props.parkinglot, availability });
      const id = this.props.account.id;
      const remaining = this.props.account.cash - this.props.parkinglot.price

      if (remaining >= 0) {
        try {
          var carId = this.props.account.carList[0].id;
        } catch{
          flag = false;
        }
        if (flag === true) {
          for (var i = 0; i < this.props.parkinglot.parkingSlotList.length; i++) {
            if (this.props.parkinglot.parkingSlotList[i].availability) {
              parkingSlotId = this.props.parkinglot.parkingSlotList[i].id;
              updateAvailability(parkingSlotId, this.props.parkinglot.parkingSlotList[i].availability, this.props.parkinglot.parkingSlotList[i].name).then(() => {
              });
              break;
            }
          }
          if (parkingSlotId !== null) {
            if (this.props.ticket === undefined) {
              const ticket = { parkingSlotId: parkingSlotId, carId: carId, timeIn: time, timeOut: time, amount: this.props.parkinglot.price };
              addTicket(ticket).then((response) => {
                console.log(response.data);
                this.props.addTicket(response.data);
              });
              updateUser(id, {
                firstName: this.props.account.firstName,
                lastName: this.props.account.lastName,
                username: this.props.account.username,
                password: this.props.account.password,
                email: this.props.account.email,
                image: this.props.account.image,
                cash: remaining
              }).then((response) => {
                this.props.updateUser(response.data);
              });
              notification.open({
                message: 'Payment Successful',
                description: 'Your payment using MinuteMoney was successful.',
              });
              this.setState({
                redirect: true
              });
            } else {
              notification.open({
                message: 'You Already Parked',
                description: 'You already parked that car.',
              });
              this.props.history.push('/park');
            }
          } else {
            notification.open({
              message: 'No More Available Parking',
              description: 'There are no more available slots in this parking lot.',
            });
            this.props.history.push('/park');
          }
        }
        else {
          notification.open({
            message: 'You have no Registered Cars',
            description: 'You must register a car first in your profile before parking.',
          });
          this.props.history.push('/update');
        }
      } else {
        notification.open({
          message: 'Insufficient MinuteMoney',
          description: 'Please topup your MinuteMoney wallet.',
        });
        this.props.history.push('/park');
      }
    }
    console.log(this.props.ticket)
    return (
      <HeaderlessPageContent>
        {this.renderRedirect()}
        <Title>Payment</Title>
        <div className="site-card-wrapper">
          <Row gutter={16} >
            <Col span={24}>
              <Card bordered={true} className="payment-page" title={`Remaining Balance: ${this.props.account.cash}`}>
                <DollarCircleOutlined style={{ fontSize: '16px' }} /> <Button type="link" onClick={onClick}>MinuteMoney</Button>
                <Button className="back-button" onClick={() => this.props.history.push('/park')}>Back</Button>
              </Card>
            </Col>
          </Row>
        </div>
      </HeaderlessPageContent>
    );
  }
}

export default PaymentPage;