import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./pages/NavBar";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";

function App() {
  return (
    <Router>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
