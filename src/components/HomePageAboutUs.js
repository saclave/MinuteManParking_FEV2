import React, { Component } from 'react';

import HomePageContentTitle from './HomePageContentTitle';

class HomePageAboutUs extends Component {
    render() {
        return (
            <div className="home-page-content">
                <HomePageContentTitle id="about_us" text="About Us" />
                <div className="home-page-about-us-content">
                    <p>Hello there! We are Woody & Friends. We have seen the hassle of drivers in finding a parking space here in the Philippines and we were driven to devise a way to help drivers avoid the stresses of finding a decent parking slot.</p>
                    <p>That drive was what led us to develop MinuteMan Parking! Park cars in less than a minute.</p>
                    <p>It differs from the usual parking operations seen in malls that uses detectors or works by the find-it-yourself concept where MinuteMan Parking now offers you a realtime online gateway to find parking lots close to you, warn you of any nearby hazards, and gives you your parking slot right at the entrance.  Experience the convenience of automatic space allocation done just for you with no need to search for spaces yourself.</p>
                    <p>Easy. Fast. Comfortable.</p>
                </div>
            </div >
        );
    }
}

export default HomePageAboutUs;