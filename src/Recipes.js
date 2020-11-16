import * as React from "react";
import { Recipe } from "./Recipe";
import { getSearchStringForRecipe } from "./utils";

export function Recipes(props) {
  const { recipes, filters, searchTerm } = props;

  return recipes ? (
    <div className="recipes_container">
      {recipes.map((recipe, index) => {
        const passesFilters = filters.every(({ key, value }) => {
          return recipe[key] === value;
        });
        const passesSearch =
          searchTerm === "" ||
          getSearchStringForRecipe(recipe).search(
            new RegExp(searchTerm, "i")
          ) >= 0;
        return passesFilters && passesSearch ? (
          <Recipe key={`${recipe.name} ${index}`} {...recipe} />
        ) : null;
      })}
    </div>
  ) : null;
}
