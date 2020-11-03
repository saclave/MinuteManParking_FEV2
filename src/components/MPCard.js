import React, { Component } from 'react';

import { Card, Image } from 'antd';

const { Meta } = Card;

class MPCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const bordered = this.props.bordered;
        const hoverable = this.props.hoverable;

        return (
            <Card bordered={bordered === undefined ? false : bordered}
                hoverable={hoverable === undefined ? false : hoverable}
                cover={
                    <Image alt={this.props.title} src={this.props.image} preview={false} />
                }>
                <Meta title={this.props.title} description={this.props.description} />
            </Card>
        );
    }
}

export default MPCard;