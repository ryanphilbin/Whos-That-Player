import React from 'react';

function selectTeam() {

    const select = async event => {
        event.preventDefault();
        alert('Selected');
    };

    return(
        <div id='TeamSelction'>
            <form onSubmit={select}>
                <span id="inner-title">Select a Team</span><br />
                <input type="text" id="teamName" placeholder="Team Name" />
                <input type="submit" id="selectTeam" class="buttons" value="Select"
                 onClick={select} />
            </form>
        </div>
    );
}// end selectTeam()

export default selectTeam;