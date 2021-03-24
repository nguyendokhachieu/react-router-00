import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from './components/Menu';
import Routes from './components/Routes';

function App() {
  return (
    <Router>
      <div className="left">
        <Menu />
      </div>
      <div className="right">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
