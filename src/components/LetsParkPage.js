import React, { Component } from 'react';

import MPHeaderContainer from '../containers/MPHeaderContainer';
import MapGeocoderContainer from '../containers/MapGeocoderContainer';
import MapContainer from '../containers/MapContainer';

import { Layout } from 'antd';

const { Sider, Content } = Layout;

class LetsParkPage extends Component {
    render() {
        return (
            <Layout>
                <MPHeaderContainer />
                <Layout>
                    <Sider theme="light" width={300} style={{ marginTop: 2 }}>
                        <MapGeocoderContainer />
                    </Sider>
                    <Content style={{ marginTop: 2 }}>
                        <div className="map-container">
                            <MapContainer />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default LetsParkPage;