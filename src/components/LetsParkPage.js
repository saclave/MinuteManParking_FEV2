import React, { Component } from 'react';

import MPHeaderContainer from '../containers/MPHeaderContainer';

import { Link } from 'react-router-dom';
import { Layout, Input } from 'antd';

const { Content, Sider } = Layout;
const { Search } = Input;

class LetsParkPage extends Component {
    render() {
        return (
            <Layout>
                <MPHeaderContainer />
                <Content>
                    <Sider theme="light" width={200}
                        style={{ marginTop: 65 }} collapsible>
                        <Search placeholder="input search loading default" loading />
                    </Sider>
                    <Content>
                        <Link smooth to={{ pathname: '/reserve' }}>reserve</Link>
                        <Link smooth to={{ pathname: '/update' }}>update</Link>
                    </Content>
                </Content>
            </Layout>
        );
    }
}

export default LetsParkPage;