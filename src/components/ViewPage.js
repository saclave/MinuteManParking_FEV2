import React, { Component } from 'react';
import { Card } from 'antd';
import { EditOutlined, SettingOutlined } from '@ant-design/icons';
// import QRCode from 'qrcode.react';

class ViewPage extends Component {
    constructor(props) {
        super(props);
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
                        <EditOutlined key="edit" style={{ color: "blue" }} />,
                    ]}
                >
                    <Meta title={this.props.account.firstName + " " + this.props.account.lastName}
                        description={this.props.account.age + " yrs old"} />
                    <Meta description={this.props.account.email} />
                    <Meta description={this.props.account.birthday} />
                </Card>
            </div>
        );
    }
}

export default ViewPage;