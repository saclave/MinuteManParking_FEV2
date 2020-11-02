import React, { Component } from 'react';

import { Layout, Menu } from 'antd';

import logo from '../images/minuteman-V2.png';

const { Header } = Layout;

class MPHeader extends Component {
    render() {
        return (
            <Header className="header">
                <div className="logo">
                    <img width={100} src={logo} />
                </div>
            </Header>
        );
    }
}

export default MPHeader;