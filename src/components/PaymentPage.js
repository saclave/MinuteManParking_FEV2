import React, { Component } from 'react';
import { Avatar } from 'antd';
import { Menu, Button, message, Typography } from 'antd';
import { DollarCircleOutlined } from '@ant-design/icons';
import gcash from '../images/gcash.png'
import cards from '../images/cards.png'
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
    const data = [
      {
        title: 'GCash',
        description: 'E-Wallet',
        logo: gcash,
      },
      {
        title: 'Credit Card',
        description: 'Cards',
        logo: cards,
      }
    ];
    const menu = (
      <Menu onClick={handleMenuClick}>
        <Menu.Item key="1" icon={<DollarCircleOutlined />}>
          GCash
              </Menu.Item>
        <Menu.Item key="2" icon={<DollarCircleOutlined />}>
          Card
              </Menu.Item>
      </Menu>
    );
    function handleMenuClick(e) {
      message.info('Click on menu item.');
      console.log('click', e);
    }
    const onClick = () => {

      var parkingSlotId = null;
      var flag = true;
      const availability = this.props.parkinglot.availability - 1;
      console.log("Price: " + this.props.parkinglot.price);
      const cash = this.props.account.cash - this.props.parkinglot.price;
      var today = new Date(),
        time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      //const slot = this.props.ticket.slot;
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
              alert("you paid!");
              this.setState({
                redirect: true
              });
            } else {
              alert("you already parked");
              this.props.history.push('/viewMap');
            }
          } else {
            alert("no more parking");
            this.props.history.push('/viewMap');
          }
        }
        else {
          alert("you have no cars!");
          this.props.history.push('/update');
        }
      } else {
        alert("not enough cash");
        this.props.history.push('/viewMap');
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
                <DollarCircleOutlined style={{ fontSize: '16px' }} /> <Button type="link" onClick={onClick}>E-Load</Button>
              </Card>
            </Col>
          </Row>
        </div>
      </HeaderlessPageContent>
      // <Layout>

      //    {this.renderRedirect()}
      //     <div>
      //         <MPHeader />
      //         <h2>Payment Options</h2>
      //         <Layout>
      //             <div  className="payment-page">                      
      //             <List
      //                 itemLayout="vertical"
      //                 dataSource={data}
      //                 renderItem={item => (
      //                 <List.Item>
      //                     <List.Item.Meta
      //                     avatar={<Avatar src={item.logo} />}
      //                     title={item.title}
      //                     description={item.description}
      //                     />
      //                     <Button onClick={onClick}>Click me</Button>
      //                 </List.Item>

      //                 )}
      //             />
      //             </div>
      //         </Layout>
      //     </div>
      // </Layout>
    );
  }
}

export default PaymentPage;