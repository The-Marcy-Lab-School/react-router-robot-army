import { useState } from 'react'
import RobotContext from './RobotContext'

function RobotProvider({ children }){
    const [robots] = useState([]) // Make a fetch call to the API update the state

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