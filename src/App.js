import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="main">
      <Router>
        <Header></Header>
        <Home></Home>
      </Router>
    </div>
  );
}

export default App;
