import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import { Menu, Dropdown, Button, message, Typography } from 'antd';
import { DollarCircleOutlined } from '@ant-design/icons';
import gcash from '../images/gcash.png'
import cards from '../images/cards.png'
import { Redirect } from "react-router-dom"; 
import { Card, Col, Row } from 'antd';
import HeaderlessPageContent from './HeaderlessPageContent';

import { Layout } from 'antd'; 
const { Title } = Typography;

class TopupPage extends Component {
    
  state = {
    redirect: false
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/view' />
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
            },
          ];
        const onClick = () => {
            alert("you topped up!")
            console.log(this.props.account.cash);
            const cash = this.props.account.cash + 100;
            this.props.updateUser({...this.props.account, cash});

            console.log(this.props.account);
            this.setState({
              redirect: true
            });
        }
        console.log(this.props.ticket)
        return (
            <HeaderlessPageContent>
               {this.renderRedirect()}
               <Title>Topup Here</Title>
                <div className="site-card-wrapper">
                  <Row gutter={16} >
                    <Col span={24}>
                      <Card bordered={true} className="payment-page" title={`Remaining Balance: ${this.props.account.cash}`}>
                      <DollarCircleOutlined style={{ fontSize: '16px' }} /> <Button type="link" onClick={onClick}>G-Cash/Paymaya</Button>
                      </Card>
                      <Card bordered={true} className="payment-page">
                      <DollarCircleOutlined style={{ fontSize: '16px' }} /> <Button type="link" onClick={onClick}>Credit Card</Button>
                      </Card>
                    </Col>
                  </Row>
                </div>
          </HeaderlessPageContent>
        );
    }
}

export default TopupPage;