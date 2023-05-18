/* eslint-disable no-unused-vars */
import BotSpecs from './components/BotSpecs'
import Page404 from './components/Page404'

import BotPage from './components/BotsPage'
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
