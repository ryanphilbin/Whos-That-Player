import React, {useState} from 'react';
import HomePageTitle from '../components/HomePageTitle';

function SuperBowl56() {

    const [team, setTeam] = useState(null);

    function toggleActiveBox(name) {
        setTeam(name);
    }

    function toggleBoxBorder(name) {
        if(team === name) {
            return "teamButton active";
        } else {
            return "teamButton";
        }
    }

    return(
        <div class="SuperBowl">
            <HomePageTitle />
            <h3>This is the page to find players in the Super Bowl.</h3>
            <h3>Selected Team: {team}</h3>
            <div>
                <button 
                class={toggleBoxBorder("Bengals")}
                onClick={(e)=>{toggleActiveBox("Bengals")}}>
                    Cincinnatti Bengals
                </button>
                <button 
                class={toggleBoxBorder("Rams")}
                onClick={(e)=>{toggleActiveBox("Rams")}}>
                    Los Angeles Rams
                </button>
            </div>
            <input defaultValue="Jersey Number"></input>
            
        </div>
        
    );
}// end selectTeam()

export default SuperBowl56;