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

    // const clickWiki = () => {
    //     clickedWiki(list)
    // }


    return ( 
            <>
                <li>
                    <div className='Launches'>
                        <div>
                            <p>Rocket Name</p>
                            <h1>{list.mission.name}</h1>
                        </div>
                    
                        <div>
                            <p>Mission Type</p>
                            <h3>{list.mission.type}</h3>
                        </div>
                        <div>
                        <button className='button' onClick={clickAddToList }>Save Launch</button>
                        <button className='button' onClick={clickMission}>Mission Information</button>
                        {/* <button className='button' onClick={clickWiki}>Wikipedia</button> */}
                        </div>
                    </div>
                </li>
            </>
            );
}

export default Launches;