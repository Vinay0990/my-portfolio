import logo from "./logo.svg";
import "./App.css";
import SideNav from "./Components/NavBar/SideNav";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Education from "./Pages/Education/Education";
import Experience from "./Pages/Experience/Experience";

function App() {
  return (
    <div className="App">
      <SideNav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/education" component={Education} />
        <Route path="/experience" component={Experience} />
      </Switch>
    </div>
  );
}

export default App;
