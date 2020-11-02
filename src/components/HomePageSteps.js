import React, { Component } from 'react';

import { Steps } from 'antd';
import HomePageContentTitle from './HomePageContentTitle';

const { Step } = Steps;

class HomePageSteps extends Component {
    render() {
        return (
            <div className="home-page-content">
                <HomePageContentTitle id="how_it_works" text="How it Works" />
                <Steps direction="vertical" current={3}>
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