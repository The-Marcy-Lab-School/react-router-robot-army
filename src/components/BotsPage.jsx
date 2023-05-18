import BotsList from "./BotsList";
import Filter from "./Filter";

function BotPage(){
    return (
        <div>
            <h1>Robot Army:</h1>
            <Filter/>
            <BotsList/>
        </div>
    )
}

export default BotPage