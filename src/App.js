import * as React from "react";
import "./App.css";
import { Authentication } from "./Authentication";
import { Recipes } from "./Recipes";
import { Filters } from "./Filters";
import { useScript } from "./useScript";

function App() {
  const [gapiLoaded, gapiError] = useScript(
    "https://apis.google.com/js/api.js"
  );
  const [recipes, setRecipes] = React.useState(null);
  const [filters, setFilters] = React.useState([]);

  return (
    <div className="App">
      <Authentication loaded={gapiLoaded} setRecipes={setRecipes} />
      {gapiError && <p>gapiError</p>}
      <Filters recipes={recipes} setFilters={setFilters} filters={filters} />
      <Recipes recipes={recipes} filters={filters} />
    </div>
  );
}

export default App;
