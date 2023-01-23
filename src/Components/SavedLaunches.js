import React from 'react'
import './SavedLaunches.css'

function SavedLaunches({missionList}) {

    const listedMissions = missionList.map((mission) => {
        return <li>{mission.name}</li>
    })

    

    return ( 
            <>
            <h2 className='SavedLaunches' >{listedMissions}</h2>
            </>
            
            );
}

export default SavedLaunches;