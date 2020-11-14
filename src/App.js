import * as React from "react";
import "./App.css";
import { Authentication } from "./Authentication";
import { Recipes } from "./Recipes";
import { useScript } from "./useScript";

function App() {
  const [gapiLoaded, gapiError] = useScript(
    "https://apis.google.com/js/api.js"
  );
  const [recipes, setRecipes] = React.useState(null);

  return (
    <div className="App">
      <Recipes recipes={recipes} />
      <Authentication loaded={gapiLoaded} setRecipes={setRecipes} />
      {gapiError && <p>gapiError</p>}
    </div>
  );
}

export default App;
