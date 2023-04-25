import { useState } from 'react'
import RobotContext from './RobotContext'

function RobotProvider(props){
    const [robots] = useState([]) // Make a fetch call to the API update the state

    const value = {
        robots
    }

    return (
        <RobotContext.Provider value={value}>
            {props.children}
        </RobotContext.Provider>
    )
}

export default RobotProvider