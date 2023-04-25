import BotPage from './BotsPage'
import BotSpecs from './BotSpecs'
import Page404 from './Page404'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} Component={BotPage} />
        <Route exact path={"/robots/:id"} />
      </Routes>
    </div>
  );
}

export default App;
