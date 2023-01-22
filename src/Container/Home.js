import React, {useState, useEffect} from 'react'
import LaunchList from '../Components/LaunchList'
import Launches from '../Components/Launches'
import SavedLaunches from '../Components/SavedLaunches'
import Mission from '../Components/Mission'
import './Home.css'

function Home() {

    const [launchList, setLaunchList] = useState([])
    const [missionList, setMissionList] = useState('')
    const [mission, setMission] = useState('')

    useEffect(() => {
        loadLaunches()
    }, [])


        const loadLaunches = () => {
            fetch('https://ll.thespacedevs.com/2.2.0/launch/')
            .then(response => response.json())
            .then(launches=> setLaunchList(launches['results']))
            .catch(error => console.log('error', error))
        };

        
        const addToList = (listObject) => {
            const addMissionToList = [...missionList, listObject ]
            setMissionList(addMissionToList)
        }

        const clickedMission = (missionObject) => {
            setMission(missionObject)
        }


    return ( 
            <>  
            
                {!mission && <LaunchList launchList={launchList} addToList={addToList} clickedMission={clickedMission}/>}
                {missionList && <SavedLaunches missionList={missionList}/>}
                {mission && <Mission mission={mission}/>}
            </>
    );
}

export default Home;