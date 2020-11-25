
import "./App.css";
import Efek from "./pages/efek";
import Reducer from "./pages/reducer"
import Home from "./pages/home"
import Ref from "./pages/ref"
import Back from "./pages/back"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/efek">useEffect</Link>
              </li>
              <li>
                <Link to="/reducer">useReducer</Link>
              </li>
              <li>
                <Link to="/ref">useRef</Link>
              </li>
              <li>
                <Link to="/back">useCallback</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/efek" component={Efek} />
            <Route path="/reducer" component={Reducer} />
            <Route path="/ref" component={Ref} />
            <Route path="/back" component={Back} />
            <Route path="/" component={Home}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;