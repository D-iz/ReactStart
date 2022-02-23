import React from "react";
import "./App.css";
import Routers from "components/Routers";
import { BrowserRouter } from "react-router-dom";
import GlobalLayout from "components/GlobalLayout";

function App() {
  return (
    <BrowserRouter>
      <GlobalLayout>
        <Routers />
      </GlobalLayout>
    </BrowserRouter>
  );
}

export default App;
