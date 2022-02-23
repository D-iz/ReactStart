import React from "react";
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import Example from "../Example";

function App() {
  return (
    <BrowserRouter>
        <Example />
    </BrowserRouter>
  );
}

export default App;
