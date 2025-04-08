import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ searchTerm, onSearch }) => {
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
          Bon Appétit
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
          onChange={(e) => onSearch(e.target.value)}
          style={{
            padding: "10px 15px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            fontSize: "14px",
            width: "250px",
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
