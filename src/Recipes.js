import * as React from "react";
import { Recipe } from "./Recipe";

export function Recipes(props) {
  const { recipes, filters } = props;

  return recipes ? (
    <div className="recipes_container">
      {recipes.map((recipe, index) => {
        const passesFilters = filters.every(({ key, value }) => {
          return recipe[key] === value;
        });
        return passesFilters ? (
          <Recipe key={`${recipe.name} ${index}`} {...recipe} />
        ) : null;
      })}
    </div>
  ) : null;
}
