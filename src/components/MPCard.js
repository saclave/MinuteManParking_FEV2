import React, { Component } from 'react';

import { Card, Image } from 'antd';

const { Meta } = Card;

class MPCard extends Component {
    render() {
        return (
            <Card bordered={false} cover={
                <Image alt={this.props.title} src={this.props.image} preview={false} />
            }>
                <Meta title={this.props.title} description={this.props.description} />
            </Card>
        );
    }
}

export default MPCard;