import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import MPHeader from './MPHeader';
import { Menu, Dropdown, Button, message } from 'antd';
import { DollarCircleOutlined } from '@ant-design/icons';
import gcash from '../images/gcash.png'
import cards from '../images/cards.png'
import { Redirect } from "react-router-dom";

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
            alert("you paid!")
            const availability = this.props.parkinglot.availability - 1;
            const load = this.props.account.load - this.props.parkinglot.price;
            var today = new Date(),
            time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            
            this.props.updateParkinglot({...this.props.parkinglot, availability});
            this.props.updateUser({...this.props.account, load});
            this.props.updateTicket({...this.props.ticket, date})
            console.log(this.props.parkinglot)
            this.setState({
              redirect: true
            });
        }
        
        return (
            <Layout>
               {this.renderRedirect()}
                <div>
                    <MPHeader />
                    <h2>Payment Options</h2>
                    <Layout>
                        <div  className="payment-page">                      
                        <List
                            itemLayout="vertical"
                            dataSource={data}
                            renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                avatar={<Avatar src={item.logo} />}
                                title={<a href="#" onClick={onClick}>{item.title}</a>}
                                description={item.description}
                                />
                            </List.Item>
                            )}
                        />
                        </div>
                    </Layout>
                </div>
            </Layout>
        );
    }
}

export default PaymentPage;