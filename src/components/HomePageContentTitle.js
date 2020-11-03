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
                <a id={this.props.id} className="home-page-content-title-link">
                    {this.props.text}
                </a>
            </Title>
        );
    }
}

export default HomePageContentTitle;