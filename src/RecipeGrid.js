import * as React from "react";
import { RecipeTile } from "./RecipeTile";
import { getSearchStringForRecipe } from "./utils";

export function RecipeGrid(props) {
  const { recipes, filters, searchTerm } = props;

  return (
    <div className="recipes_container">
      {recipes.map((recipe) => {
        const passesFilters = filters.every(({ key, value }) => {
          return recipe[key] === value;
        });
        const passesSearch =
          searchTerm === "" ||
          getSearchStringForRecipe(recipe).search(
            new RegExp(searchTerm, "i")
          ) >= 0;
        return passesFilters && passesSearch ? (
          <RecipeTile key={recipe.id} {...recipe} />
        ) : null;
      })}
    </div>
  );
}
