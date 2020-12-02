import * as React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { RecipeDetails } from "./RecipeDetails";
import { AddRecipe } from "./AddRecipe";
import { Home } from "./Home";
import { NavBar } from "./NavBar";

function App() {
  const [recipes, setRecipes] = React.useState(null);

  return (
    <HashRouter basename="/">
      <div className="app_container">
        <NavBar setRecipes={setRecipes} />
        <Route exact path="/">
          <Home recipes={recipes} />
        </Route>
        <Switch>
          <Route exact path="/about">
            <div>TODO: about page</div>
          </Route>
          <Route path="/add">
            <AddRecipe recipes={recipes} />
          </Route>
          <Route path="/:recipeId">
            <RecipeDetails recipes={recipes} />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
