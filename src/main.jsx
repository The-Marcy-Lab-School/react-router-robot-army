import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import RobotProvider from './context/RobotProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RobotProvider>
      <App />
    </RobotProvider>
  </BrowserRouter>,
);
