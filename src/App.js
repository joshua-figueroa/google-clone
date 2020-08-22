import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { Home, Search } from "./pages";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/search">
                        <Search />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
