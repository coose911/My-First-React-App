import React from 'react'
import Launches from './Launches';
import SavedLaunches from './SavedLaunches';
import './LaunchList.css'

function LaunchList({launchList, addToList, clickedMission}) {


        const listOfLaunches = launchList.map((list) => {
            return (
                <Launches key={list.id} list={list} addToList ={addToList} clickedMission={clickedMission}/>
            )
        })



    return (
            <>
                <div className=''>
                    <ul>
                        <h1 className='launch-list-title'>Launchlist</h1>
                        <hr></hr>
                        {listOfLaunches}
                        <hr></hr>
                        <h1 className='saved-launch-list-title'>Saved Launches</h1>
                    </ul>
                </div>
            </>
            );
}

export default LaunchList;