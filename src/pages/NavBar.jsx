import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 0",
        borderBottom: "1px solid #eaeaea",
        marginBottom: "30px",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <h1
          style={{
            margin: 0,
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Bon Appetite
        </h1>
      </Link>

      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px 15px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            fontSize: "14px",
            width: "250px",
          }}
        />
        <button
          style={{
            marginLeft: "10px",
            padding: "10px 15px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
