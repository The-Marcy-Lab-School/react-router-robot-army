import { useContext } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom'
import RobotContext from '../context/RobotContext';

function BotSpecs() {

  const { id } = useParams()
  const { robots } = useContext(RobotContext);
  const bot = robots.find(robot => robot.id === Number(id));

  if (!bot) {
    return <Navigate to="/" />
  }

  function botClassIcon(bot_class){
    switch (bot_class) {
      case "Assault":
       return <i className="icon military" />;
      case "Defender":
        return <i className="icon shield" />;
      case "Support":
        return <i className="icon ambulance" />;
      default:
        return <div />;
    }
  }

  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={bot.avatar_url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {bot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {bot.catchphrase}
            </p>
            <strong>
              Class: {bot.bot_class} {botClassIcon(bot.bot_class)}
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{bot.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{bot.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/"><button className="ui button fluid">
              Go Back
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default BotSpecs;
