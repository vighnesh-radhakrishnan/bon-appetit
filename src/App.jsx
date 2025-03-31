import React from "react";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#333",
        }}
      >
        Recipe Book
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#666",
        }}
      >
        Your personal collection of recipes
      </p>
    </div>
  );
}

export default App;
