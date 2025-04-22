import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import recipes from "../data/RecipeData";

const RecipePage = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);

  const [completedIngredients, setCompletedIngredients] = useState({});
  const [completedSteps, setCompletedSteps] = useState({});

  const toggleIngredient = (index) => {
    setCompletedIngredients((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleStep = (index) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

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
            fontFamily: "garamond",
          }}
        >
          Back to recipes
        </Link>
      </div>
    );
  }

  // new ingredient list rendering
  const ingredientList = recipe.ingredients.map((ingredient, index) => (
    <li
      key={index}
      onClick={() => toggleIngredient(index)}
      style={{
        marginBottom: "10px",
        fontSize: "16px",
        lineHeight: "1.4",
        textDecoration: completedIngredients[index] ? "line-through" : "none",
        opacity: completedIngredients[index] ? 0.4 : 1,
        cursor: "pointer",
        transition: "opacity 0.3s ease",
      }}
    >
      {ingredient}
    </li>
  ));

  // new instruction list rendering
  const instructionList = recipe.instructions.map((step, index) => (
    <li
      key={index}
      onClick={() => toggleStep(index)}
      style={{
        marginBottom: "10px",
        fontSize: "16px",
        lineHeight: "1.4",
        textDecoration: completedSteps[index] ? "line-through" : "none",
        opacity: completedSteps[index] ? 0.4 : 1,
        cursor: "pointer",
        transition: "opacity 0.3s ease",
      }}
    >
      {step}
    </li>
  ));

  // Update the table to use the new lists
  return (
    <div
      style={{
        fontFamily: "garamond",
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
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
      <h1 style={{ marginBottom: "15px", fontFamily: "Playwrite US Modern" }}>
        {recipe.title}
      </h1>
      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "25px",
          fontSize: "17px",
          color: "#666",
        }}
      >
        <span>Prep time: {recipe.time} minutes</span>
        <span>•</span>
        <span>Difficulty: {recipe.difficulty}</span>
        <span>•</span>
        <span style={{ display: "flex", alignItems: "center" }}>
          {recipe.isVegetarian ? "Vegetarian" : "Non-Vegetarian"}
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: recipe.isVegetarian ? "#4CAF50" : "#F44336",
              marginLeft: "5px",
            }}
          />
        </span>
      </div>
      <table
        style={{
          width: "100%",
          borderCollapse: "separate",
          borderSpacing: "20px 0",
          fontFamily: "Playwrite US Modern",
        }}
      >
        <tbody>
          <tr>
            <td
              style={{
                width: "25%",
                verticalAlign: "top",
                borderRight: "1px solid #eaeaea",
              }}
            >
              <h2 style={{ fontSize: "20px", marginBottom: "15px" }}>
                Ingredients
              </h2>
              <ul
                style={{
                  paddingLeft: "20px",
                  listStyleType: "circle",
                  marginTop: 0,
                }}
              >
                {ingredientList}
              </ul>
            </td>
            <td
              style={{
                width: "70%",
                verticalAlign: "top",
                paddingLeft: "20px",
              }}
            >
              <h2 style={{ fontSize: "20px", marginBottom: "15px" }}>
                Instructions
              </h2>
              <ol
                style={{
                  paddingLeft: "25px",
                  marginTop: 0,
                }}
              >
                {instructionList}
              </ol>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecipePage;
