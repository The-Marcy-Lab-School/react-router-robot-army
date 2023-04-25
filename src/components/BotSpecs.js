import { Link } from 'react-router-dom'

function BotSpecs() {

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
              src={""}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {"Name Here"}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {"Catchphrase Here"}
            </p>
            <strong>
              Class: {"Bot Class Here"} {botClassIcon("Bot Class Here")}
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{"Health Here"}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{"Damage Here"}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{"Armor Here"}</strong>
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
};

export default BotSpecs;
