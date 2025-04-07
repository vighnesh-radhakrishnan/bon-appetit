import React, { useState } from "react";
import { Routes, Route, HashRouter as Router } from "react-router-dom";
import NavBar from "./pages/NavBar";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import recipes from "./data/RecipeData";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const handleSearch = (term) => {
    setSearchTerm(term);

    if (!term.trim()) {
      setFilteredRecipes(recipes);
      return;
    }

    const filtered = recipes.filter((recipe) => {
      const searchLower = term.toLowerCase();
      return (
        recipe.title.toLowerCase().includes(searchLower) ||
        recipe.description.toLowerCase().includes(searchLower) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(searchLower)
        ) ||
        recipe.difficulty.toLowerCase().includes(searchLower)
      );
    });

    setFilteredRecipes(filtered);
  };

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
        <NavBar searchTerm={searchTerm} onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<HomePage recipes={filteredRecipes} />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
