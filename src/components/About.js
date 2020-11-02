import React, { Component } from 'react';
import {Image} from 'antd';
import parking from '../images/parking.jpg';
import { Typography } from 'antd';

class About extends Component {
    render() {
        const { Title } = Typography;
        return (
            <div>
                <Title> About Us </Title>
                <Image width={1000} src={parking}/>
            </div>
        );
    }
}

export default About;