import React from 'react';
import HomePageTitle from '../components/HomePageTitle';
import {Link} from 'react-router-dom';

function HomePage() {

    return(
        <div>
            <HomePageTitle />
            <br />
            <h3>Please select a team, and then enter the Jersey Number
            of a Player to view their information.</h3>
            <br />
            <Link to="superbowl56">Super Bowl 56</Link>
        </div>
        
    );
}// end selectTeam()

export default HomePage;