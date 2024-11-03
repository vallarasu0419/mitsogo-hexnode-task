import React from "react";
import "./App.css";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import Demo from "./Demo";
import CountryDropdown from "./Components/CountryDropdown";

function App() {
  return (
    // <Demo />
    // <CountryDropdown />
    <div class="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
