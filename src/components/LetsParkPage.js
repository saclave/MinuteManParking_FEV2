import React, { Component } from 'react';

import MPHeaderContainer from '../containers/MPHeaderContainer';
import MapGeocoderContainer from '../containers/MapGeocoderContainer';
import MapContainer from '../containers/MapContainer';

import { Layout } from 'antd';

const { Sider } = Layout;

class LetsParkPage extends Component {
    render() {
        return (
            <Layout>
                <MPHeaderContainer />
                <Sider theme="light" width={300} style={{ marginTop: 65 }}>
                    <MapGeocoderContainer />
                </Sider>
                <div className="park-page-map-container" style={{ marginTop: 65 }}>
                    <MapContainer />
                </div>
            </Layout>
        );
    }
}

export default LetsParkPage;