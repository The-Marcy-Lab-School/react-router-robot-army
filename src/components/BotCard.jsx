function BotCard(props) {

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
   <div className="ui card">
      <div className="image">
        <img alt="oh no!" src={""} />
      </div>
      <div className="content">
        <div className="header">
          {"Name Here"} {botClassIcon("Bot Class Here")}
        </div>

        <div className="meta">
          <small>{"Catchphrase Here"}</small>
        </div>
      </div>
      <div className="extra content">
        <span>
          <i className="icon heartbeat" />
          {"Healt Here"}
        </span>

        <span>
          <i className="icon lightning" />
          {"Damage Here"}
        </span>
        <span>
          <i className="icon shield" />
          {"Armor Here"}
        </span>
      </div>
    </div>
  );
}

export default BotCard;
