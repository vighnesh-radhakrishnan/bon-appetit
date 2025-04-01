import React from "react";
import { useParams, Link } from "react-router-dom";
import recipes from "../data/RecipeData";

const RecipePage = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Recipe not found</h2>
        <Link
          to="/"
          style={{
            display: "inline-block",
            marginTop: "20px",
            color: "black",
            textDecoration: "underline",
          }}
        >
          Back to recipes
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link
        to="/"
        style={{
          display: "inline-block",
          marginBottom: "20px",
          color: "black",
          textDecoration: "underline",
        }}
      >
        &larr; Back to recipes
      </Link>

      <h1 style={{ marginBottom: "15px" }}>{recipe.title}</h1>

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "25px",
          fontSize: "14px",
          color: "#666",
        }}
      >
        <span>Prep time: {recipe.time} minutes</span>
        <span>•</span>
        <span>Difficulty: {recipe.difficulty}</span>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>Ingredients</h2>
        <ul style={{ paddingLeft: "20px" }}>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} style={{ marginBottom: "5px" }}>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>Instructions</h2>
        <ol style={{ paddingLeft: "20px" }}>
          {recipe.instructions.map((step, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipePage;
