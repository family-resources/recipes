import * as React from "react";
import "./App.css";
import { RecipeDetails } from "./RecipeDetails";
import { RecipeGrid } from "./RecipeGrid";
import { SearchBar } from "./SearchBar";
import { Filters } from "./Filters";

export function Home(props) {
  const { recipes } = props;

  const [filters, setFilters] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [focusedRecipe, setFocusedRecipe] = React.useState(null);

  if (!recipes) return null;

  return focusedRecipe ? (
    <RecipeDetails
      clearFocus={() => setFocusedRecipe(null)}
      {...recipes.find((r) => r.name === focusedRecipe)}
    />
  ) : (
    <>
      <div className="controls_container">
        <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        <Filters recipes={recipes} setFilters={setFilters} filters={filters} />
      </div>
      <RecipeGrid
        recipes={recipes}
        filters={filters}
        searchTerm={searchTerm}
        setFocusedRecipe={setFocusedRecipe}
      />
    </>
  );
}
