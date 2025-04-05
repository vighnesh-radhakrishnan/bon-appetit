import React from "react";
import { Link } from "react-router-dom";
import recipes from "../data/RecipeData";

const RecipeCard = ({ recipe }) => {
  return (
    <Link
      to={`/recipe/${recipe.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          border: "1px solid #eaeaea",
          borderRadius: "8px",
          padding: "20px",
          marginBottom: "20px",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          cursor: "pointer",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "garamond",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            marginTop: 0,
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          {recipe.title}
        </h2>
        <p
          style={{
            color: "#666",
            margin: "10px 0",
            fontSize: "14px",
          }}
        >
          {recipe.description}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
            fontSize: "14px",
            color: "#888",
            alignItems: "center",
          }}
        >
          <span>{recipe.time} min</span>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5px",
              alignItems: "center",
            }}
          >
            {" "}
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: recipe.isVegetarian ? "#4CAF50" : "#F44336",
              }}
            />
            <span>{recipe.difficulty}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const HomePage = () => {
  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>My Recipes</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
