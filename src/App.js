import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registration from "./components/registration.component";

function App() {
    return ( 
        <Router>
        <Route exact path="/" component={Registration} />
        </Router>
    );
}

export default App;