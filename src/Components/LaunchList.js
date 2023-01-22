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
                        <h1>Launchlist</h1>
                        {listOfLaunches}
                    </ul>
                </div>
            </>
            );
}

export default LaunchList;