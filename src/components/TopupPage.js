import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import { Button, Typography } from 'antd';
import { DollarCircleOutlined } from '@ant-design/icons';
import gcash from '../images/gcash.png'
import cards from '../images/cards.png'
import { Redirect } from "react-router-dom"; 
import { Card, Col, Row } from 'antd';
import HeaderlessPageContent from './HeaderlessPageContent';
import { updateUser} from "../apis/accounts"

import { Layout } from 'antd'; 
import { updateAuthenticatedUser } from '../actions';
const { Title } = Typography;

class TopupPage extends Component {
    
  state = {
    redirect: false
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/park' />
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
            const toppedUpCash = this.props.account.cash + 100;
            const id = this.props.account.id;

            console.log("Before: "+this.props.account.cash);

            updateUser(id, {
              firstName: this.props.account.firstName,
              lastName: this.props.account.lastName,
              username: this.props.account.username,
              password: this.props.account.password,
              email: this.props.account.email,
              gender: this.props.account.gender,
              birthdate: this.props.account.birthday,
              cash: toppedUpCash
            }).then((response) => {
              this.props.updateUser(response.data);
              this.props.updateAuthenticatedUser(response.data);
            });
            
            console.log("After: "+this.props.account.cash);

            this.setState({
              redirect: true
            });
        }

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
                      <DollarCircleOutlined style={{ fontSize: '16px' }} /> <Button type="link" onClick={onClick}>Credit/Debit Card</Button>
                      </Card>
                    </Col>
                  </Row>
                </div>
          </HeaderlessPageContent>
        );
    }
}

export default TopupPage;