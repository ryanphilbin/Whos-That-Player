import React from 'react';
import HomePageTitle from '../components/HomePageTitle';

function HomePage() {

    return(
        <div>
            <HomePageTitle />
            <br />
            <h3>Please select a team, and then enter the Jersey Number
            of a Player to view their information.</h3>
        </div>
        
    );
}// end selectTeam()

export default HomePage;