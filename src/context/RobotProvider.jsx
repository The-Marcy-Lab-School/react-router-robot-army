import { useState, useEffect } from 'react'
import RobotContext from './RobotContext'
import handleFetch from '../utils/handleFetch'

const apiURL = 'http://localhost:4000/robots'

function RobotProvider({ children }){
    const [robots, setRobots] = useState([]) // Make a fetch call to the API update the state
    const [filterType, setFilterType] = useState('');
    const [botToDisplay, setBotToDisplay] = useState(-1);

    useEffect(() => {
        async function doFetch() {
            const response = await handleFetch(apiURL);
            if (response.ok) {
                setRobots(response.data);
            }
        }
        doFetch();
    }, [botToDisplay]);

    const value = {
        robots, filterType, setFilterType, botToDisplay, setBotToDisplay
    }

    console.log(value);

    return (
        <RobotContext.Provider value={value}>
            {children}
        </RobotContext.Provider>
    )
}

export default RobotProvider