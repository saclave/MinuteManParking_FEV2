import React, { Component } from 'react';

import { Card, Image } from 'antd';

const { Meta } = Card;

class MPCard extends Component {
    render() {
        return (
            <Card hoverable cover={
                <Image alt={this.props.title} src={this.props.image} preview={false} />
            }>
                <Meta title={this.props.title} />
            </Card>
        );
    }
}

export default MPCard;