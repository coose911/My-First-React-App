import React from 'react'
import './SavedLaunches.css'

function SavedLaunches({missionList}) {

    const listedMissions = missionList.map((mission) => {
        return <li>{mission.name}</li>
    })

    return ( 
            <>
            <h1>Saved Launches</h1>
            <h6 className='SavedLaunches' >{listedMissions}</h6>
            </>
            
            );
}

export default SavedLaunches;