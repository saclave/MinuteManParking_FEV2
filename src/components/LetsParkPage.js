import React, { Component } from 'react';

import HomePageFooter from './HomePageFooter';

import MPHeaderContainer from '../containers/MPHeaderContainer';

import { Link } from 'react-router-dom';
import { Layout, Input, Image, Row, Col } from 'antd';

import sampleMap from '../images/sample-map.png';

const { Sider, Content } = Layout;
const { Search } = Input;

class LetsParkPage extends Component {
    render() {
        return (
            <>
                <Layout>
                    <MPHeaderContainer />
                    <Sider theme="light" width={300} style={{ marginTop: 65 }}>
                        <Search style={{ padding: 20 }} placeholder="Search for parking lots here" />
                    </Sider>
                    <div className="park-page-map-container" style={{ marginTop: 65 }}>
                        <Image src={sampleMap}></Image>
                    </div>
                </Layout>
                <Link smooth to={{ pathname: '/reserve' }}>reserve</Link>
                <Link smooth to={{ pathname: '/update' }}>update</Link>
                <Link to={{ pathname: '/history' }}>history</Link>
                <Link smooth to={{ pathname: '/viewMap' }}>MAP</Link>
            </>
        );
    }
}

export default LetsParkPage;