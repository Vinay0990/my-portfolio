import "./assets/css/main.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Education from "./Pages/Education/Education";
import Experience from "./Pages/Experience/Experience";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/education" component={Education} />
        <Route path="/experience" component={Experience} />
      </Switch>
    </div>
  );
}

export default App;
