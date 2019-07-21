import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import Index from "./components/Index";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Index} />
      <Route path="/profile/:id" component={Profile} />
    </Router>
  );
}

export default App;
