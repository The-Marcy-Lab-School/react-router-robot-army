import { useContext } from "react"
import RobotContext from "../context/RobotContext"

function Filter(){

    const { setFilterType } = useContext(RobotContext)

    const chooseFilterType = (e) => {
        setFilterType(e.target.value);
    }

    return (
        <div>
            <label>Filter Bots:</label>
            <select onChange={chooseFilterType} className="ui dropdown">
                <option value="">--Select Bot Type--</option>
                <option value="Defender" >Defender</option>
                <option value="Assault" >Assault</option>
                <option value="Support" >Support</option>
            </select>
        </div>
    )
}

export default Filter