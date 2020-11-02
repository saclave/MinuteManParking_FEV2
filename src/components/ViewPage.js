import React, { Component } from 'react';
import { Card} from 'antd';
import { EditOutlined, SettingOutlined } from '@ant-design/icons';
import QRCode from 'qrcode.react';

class ViewPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            firstName:'Red',
            lastName:'Adanza',
            age: '22',
            email: 'adanzra@oocl.com',
            birthday: '5/21/1998',
            ticket: '#13CFD3'

        }    
    }
    render() {
        const { Meta } = Card;
        return (
            <div>
                
                <Card
                      className="viewCard"
                      style={{ width: 250 }}
                    //   cover={
                    //     <QRCode value={this.state.ticket} size='1000'/>
                    //   }
                      actions={[
                        //<SettingOutlined key="setting" style={{color: "blue"}}/>,
                        <EditOutlined key="edit" style={{color: "blue"}}/>,
                      ]}
                >   
                <Meta title={this.state.firstName +" " + this.state.lastName} 
                    description={this.state.age + " yrs old"} />
                <Meta description={this.state.email}/>
                <Meta description={this.state.birthday} />
                    </Card>
          </div>
        );
    }
}

export default ViewPage;