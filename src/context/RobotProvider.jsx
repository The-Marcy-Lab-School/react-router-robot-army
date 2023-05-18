import { useState, useEffect } from 'react'
import RobotContext from './RobotContext'
import handleFetch from '../utils/handleFetch'

const apiURL = 'http://localhost:4000/robots'

function RobotProvider({ children }){
    const [robots, setRobots] = useState([]) // Make a fetch call to the API update the state

    useEffect(() => {
        async function doFetch() {
            const response = await handleFetch(apiURL);
            if (response.ok) {
                setRobots(response.data);
            }
        }
        doFetch();
    }, [])

    const value = {
        robots
    }

    return (
        <RobotContext.Provider value={value}>
            {children}
        </RobotContext.Provider>
    )
}

export default RobotProvider