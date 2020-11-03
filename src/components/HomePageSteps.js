import React, { Component } from 'react';

import { Steps } from 'antd';
import HomePageContentTitle from './HomePageContentTitle';

const { Step } = Steps;

class HomePageSteps extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0 };
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth });
    }

    render() {
        const className = this.state.width >= 992 ? 'horizontal' : 'vertical';

        return (
            <div className="home-page-content container">
                <HomePageContentTitle id="how_it_works" text="HOW IT WORKS" />
                <Steps direction={className}>
                    <Step title="Authenticate" description="Login to your account or register." />
                    <Step title="Search" description="Ping your location to find the nearest parking lots around you. You can also search for your desired parking lot using our map." />
                    <Step title="Choose" description="Select one to check for its available slots and reservation rate." />
                    <Step title="Reserve" description="Reserve a slot." />
                    <Step title="Park" description="Park your car." />
                </Steps>
            </div>
        );
    }
}

export default HomePageSteps;