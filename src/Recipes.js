import * as React from "react";
import { Recipe } from "./Recipe";

export function Recipes(props) {
  const { recipes } = props;

  return recipes ? (
    <div class="recipes_container">
      {recipes.map((recipe) => {
        const [
          name,
          person,
          raw_cat,
          raw_recipe,
          ingreds,
          instructions,
          story,
          source,
          cooking_time,
          preheat_temp,
          servings,
          photos,
        ] = recipe;
        return (
          <Recipe
            {...{
              name,
              person,
              raw_cat,
              raw_recipe,
              ingreds,
              instructions,
              story,
              source,
              cooking_time,
              preheat_temp,
              servings,
              photos,
            }}
          />
        );
      })}
    </div>
  ) : null;
}
