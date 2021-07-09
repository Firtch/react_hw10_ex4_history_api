import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import GamePage from "./GamePage";
import WinnerPage from "./WinnerPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Route exact path="/" component={HomePage} />
      <Route path="/game" component={GamePage} />
      <Route path="/winner" component={WinnerPage} />
    </BrowserRouter>
  );
}

export default App;
