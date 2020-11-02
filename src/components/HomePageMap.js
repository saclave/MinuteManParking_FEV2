import React, { Component } from 'react';

import HomePageContentTitle from './HomePageContentTitle';

class HomePageMap extends Component {
    render() {
        return (
            <div className="home-page-content">
                <HomePageContentTitle id="our_map" text="Our Map" />
            </div>
        );
    }
}

export default HomePageMap;