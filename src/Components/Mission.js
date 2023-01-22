import React from 'react'

const Mission = ({mission}) => {




    return (    
            <>  <h1>Rocket</h1>
                <p>{mission.rocket.configuration.name}</p>
                <h3>Mission Details</h3>
                <p>{mission.mission.type}</p>
                <p>{mission.mission.description}</p>
                <p>{mission.mission.orbit.name}</p>
                <h3>Launch pad information</h3>
                <p>{mission.pad.location.name}</p>
                <h3>Launch Status</h3>
                <p>{mission.status.name}</p>
                <p>{mission.status.description}</p>
            </>
    );
}

export default Mission;