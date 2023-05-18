function Filter(){

    return (
        <div>
            <label>Filter Bots:</label>
            <select className="ui dropdown">
                <option value="">--Select Bot Type--</option>
                <option value="Defender" >Defender</option>
                <option value="Assault" >Assault</option>
                <option value="Support" >Support</option>
            </select>
        </div>
    )
}

export default Filter