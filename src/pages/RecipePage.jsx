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
            fontFamily: "garamond",
          }}
        >
          Back to recipes
        </Link>
      </div>
    );
  }

  // Apply a specific class name for easier debugging
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

      {/* Create a table-like structure for more reliable layout */}
      <table
        style={{
          width: "100%",
          borderCollapse: "separate",
          borderSpacing: "20px 0",
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
                {recipe.ingredients.map((ingredient, index) => (
                  <li
                    key={index}
                    style={{
                      marginBottom: "10px",
                      fontSize: "16px",
                      lineHeight: "1.4",
                    }}
                  >
                    {ingredient}
                  </li>
                ))}
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
                {recipe.instructions.map((step, index) => (
                  <li
                    key={index}
                    style={{
                      marginBottom: "10px",
                      fontSize: "16px",
                      lineHeight: "1.4",
                    }}
                  >
                    {step}
                  </li>
                ))}
              </ol>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecipePage;
