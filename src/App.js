import * as React from "react";
import "./App.css";
import { Authentication } from "./Authentication";
import { Home } from "./Home";
import { useScript } from "./useScript";

function App() {
  const [gapiLoaded, gapiError] = useScript(
    "https://apis.google.com/js/api.js"
  );
  const [recipes, setRecipes] = React.useState(null);

  return (
    <div className="app_container">
      <Authentication loaded={gapiLoaded} setRecipes={setRecipes} />
      {gapiError && <p>gapiError</p>}
      {recipes && <Home recipes={recipes} />}
    </div>
  );
}

export default App;
