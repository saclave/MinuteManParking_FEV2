import React, { Component } from 'react';

import { Typography } from 'antd';

const { Title } = Typography;

class HomePageContentTitle extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Title className="home-page-content-title">
                {this.props.text}
                <a id={this.props.id} className="home-page-content-title-link"></a>
            </Title>
        );
    }
}

export default HomePageContentTitle;