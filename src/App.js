// App.js
import React from "react";

// import things from react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Home from "./components/home";
import Map from "./components/map";

function App() {
  return (
    <BrowserRouter>
      <div style={{padding: 30}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;