function BotCard({ bot }) {

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
        <img alt="oh no!" src={bot.avatar_url} />
      </div>
      <div className="content">
        <div className="header">
          {bot.name} {botClassIcon(bot.bot_class)}
        </div>

        <div className="meta">
          <small>{bot.catchphrase}</small>
        </div>
      </div>
      <div className="extra content">
        <span>
          <i className="icon heartbeat" />
          {bot.health}
        </span>

        <span>
          <i className="icon lightning" />
          {bot.damage}
        </span>
        <span>
          <i className="icon shield" />
          {bot.armor}
        </span>
      </div>
    </div>
  );
}

export default BotCard;
