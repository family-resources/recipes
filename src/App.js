import * as React from "react";
import "./App.css";
import { Authentication } from "./Authentication";
import { Recipes } from "./Recipes";
import { SearchBar } from "./SearchBar";
import { Filters } from "./Filters";
import { useScript } from "./useScript";

function App() {
  const [gapiLoaded, gapiError] = useScript(
    "https://apis.google.com/js/api.js"
  );
  const [recipes, setRecipes] = React.useState(null);
  const [filters, setFilters] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <div className="app_container">
      <Authentication loaded={gapiLoaded} setRecipes={setRecipes} />
      {gapiError && <p>gapiError</p>}
      {recipes && (
        <>
          <div className="controls_container">
            <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            <Filters
              recipes={recipes}
              setFilters={setFilters}
              filters={filters}
            />
          </div>
          <Recipes
            recipes={recipes}
            filters={filters}
            searchTerm={searchTerm}
          />
        </>
      )}
    </div>
  );
}

export default App;
