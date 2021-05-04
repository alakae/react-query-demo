import React from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Switch, Route,
    Link
} from "react-router-dom";
import {routes} from "./routes";

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/tacos">Tacos</Link>
                    </li>
                    <li>
                        <Link to="/sandwiches">Sandwiches</Link>
                    </li>
                </ul>

                <Switch>
                    {
                        routes.map(({path, component: Component}, i) =>
                            (
                                <Route path={path}>
                                    <Component key={i}/>
                                </Route>
                            ))
                    }
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
