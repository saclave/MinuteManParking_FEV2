import React, { Component } from 'react';

import MPHeaderContainer from '../containers/MPHeaderContainer';
import MapGeocoderContainer from '../containers/MapGeocoderContainer';
import MapContainer from '../containers/MapContainer';

import { Link } from 'react-router-dom';
import { Layout } from 'antd';

const { Sider } = Layout;

class LetsParkPage extends Component {
    render() {
        return (
            <>
                <Layout>
                    <MPHeaderContainer />
                    <Sider theme="light" width={300} style={{ marginTop: 65 }}>
                        <MapGeocoderContainer />
                    </Sider>
                    <div className="park-page-map-container" style={{ marginTop: 65 }}>
                        <MapContainer />
                    </div>
                </Layout>
                <Link smooth to={{ pathname: '/ticket' }}>Ticket</Link>
                <Link smooth to={{ pathname: '/reserve' }}>reserve</Link>
                <Link smooth to={{ pathname: '/update' }}>update</Link>
                <Link smooth to={{ pathname: '/topup' }}> Topup </Link>
                <Link to={{ pathname: '/history' }}>history</Link>
                <Link smooth to={{ pathname: '/viewMap' }}>MAP</Link>
            </>
        );
    }
}

export default LetsParkPage;