import React from 'react'
import SavedLaunches from './SavedLaunches';
import './LaunchList.css'

function Launches({list, addToList, clickedMission}) {

    const clickAddToList = () => {
        addToList(list)
    }

    const clickMission  = () => {
        clickedMission(list)
    }


    return ( 
            <>
                <li>
                    <div className='Launches'>
                    <h1>{list.mission.name}</h1>
                    <h4>{list.mission.type}</h4>
                    <button className='button' onClick={clickAddToList }>Save Launch</button>
                    <button className='button' onClick={clickMission}>Mission Information</button>
                    </div>
                </li>
            </>
            );
}

export default Launches;