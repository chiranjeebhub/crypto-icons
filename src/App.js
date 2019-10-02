import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Crypto from "./components/Index";

function App() {
  return (
    <div className="App">
      <Crypto name={"btc"} />
    </div>
  );
}

export default App;
