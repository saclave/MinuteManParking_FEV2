import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import MPHeader from './MPHeader';
import { Menu, Dropdown, Button, message } from 'antd';
import { DollarCircleOutlined } from '@ant-design/icons';
import gcash from '../images/gcash.png'
import cards from '../images/cards.png'
import { Redirect } from "react-router-dom";
import { Card, Col, Row } from 'antd';

import { Layout } from 'antd';

class PaymentPage extends Component {
    
  state = {
    redirect: false
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/ticket' />
    }
  }
    render() {
        const data = [
            {
              title: 'E-Load',
              description: 'E-Wallet',
              logo: gcash,
            }
          ];
        const menu = (
            <Menu onClick={handleMenuClick}>
              <Menu.Item key="1" icon={<DollarCircleOutlined />}>
                E-Load
              </Menu.Item>
            </Menu>
          );
          function handleMenuClick(e) {
            message.info('Click on menu item.');
            console.log('click', e);
          }
        const onClick = () => {
            alert("you paid!")
            
            const availability = this.props.parkinglot.availability - 1;
            const load = this.props.account.load - this.props.parkinglot.price;
            var today = new Date(),
            time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            //const slot = this.props.ticket.slot;
            this.props.updateParkinglot({...this.props.parkinglot, availability});
            this.props.updateUser({...this.props.account, load});

            this.props.updateTicket({...this.props.ticket, date, time});

            console.log(this.props.parkinglot)
            this.setState({
              redirect: true
            });
        }
        console.log(this.props.ticket)
        return (
            <Layout>
              
               {this.renderRedirect()}
                <div className="site-card-wrapper">
                  <Row gutter={16}>
                    <Col span={8}>
                      <Card title={<a href="" onClick={onClick}>GCash/Paymaya</a>} bordered={false}>
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card title={<a href="" onClick={onClick}>Credit Card</a>} bordered={false}>
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card title={<a href="" onClick={onClick}>Cash on Deliver</a>} bordered={false}>
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      </Card>
                    </Col>
                  </Row>
                </div>
            </Layout>
        );
    }
}

export default PaymentPage;