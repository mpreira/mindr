import React from "react";
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";

//layouts
import HomeLayoutRoute from "./layouts/HomeLayout";

// components
import Home from "./components/home/Home";

function App() {
  return (
    <div className="app">
        <div className="filter">
            <Router>
                <Switch>
                    <HomeLayoutRoute path="/" component={Home} />
                </Switch>
            </Router>
        </div>

    </div>
  );
}

export default App;
