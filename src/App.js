import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import Components from "./component";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Components />
      </BrowserRouter>
    </div>
  )
}

export default App;