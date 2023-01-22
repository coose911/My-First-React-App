import React from 'react'
import './Mission.css'

const Mission = ({mission}) => {




    return (    
            <>  
                <div className='MissionClass'>
                    <h1 className='Rocket'>Rocket</h1>
                    <p className='RocketName'>{mission.rocket.configuration.name}</p>
                    <hr></hr>
                    <h3 className='MissionDetails'>Mission Details</h3>
                    <p className='MissionInfoText'>{mission.mission.type}</p>
                    <p className='MissionInfoText'>{mission.mission.description}</p>
                    <p className='MissionInfoText'>{mission.mission.orbit.name}</p>
                    <hr></hr>
                    <h3 className='LaunchPadInfo'>Launch Pad Location</h3>
                    <p className='MissionInfoText'>{mission.pad.location.name}</p>
                    <hr></hr>
                    <h3 className='LaunchStatus'>Launch Status :</h3>
                    <p className='MissionInfoText'>{mission.status.name}</p>
                    <p className='MissionInfoText'>{mission.status.description}</p>
                    <hr></hr>
                </div>
            </>
    );
}

export default Mission;