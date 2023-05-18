import { useContext } from 'react'
import RobotContext from '../context/RobotContext'
import BotCard from './BotCard'

function BotsList(){
    const { robots, filterType } = useContext(RobotContext)

    return (
        <div className="ui centered cards">
            { 
                robots
                    .filter(robot => robot.bot_class.includes(filterType))
                    .map(robot => { return <BotCard key={robot.id} bot={robot}/>}) 
            } 
        </div>
    )
}

export default BotsList