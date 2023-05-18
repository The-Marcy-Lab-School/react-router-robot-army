/* eslint-disable no-unused-vars */
import BotSpecs from './components/BotSpecs'
import Page404 from './components/Page404'

import BotPage from './components/BotsPage'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BotPage />} />
        <Route path="/robots/:id" element={<BotSpecs />} />
        <Route path="*" element={< Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
