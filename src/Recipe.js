import * as React from "react";

export function Recipe(props) {
  const {
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
  } = props;

  return (
    <div class="recipe_container">
      <h3 class="recipe_name">{name}</h3>
      <h5 class="recipe_person">{person}</h5>
      <ul>
        {ingreds
          .split("\n")
          .filter((i) => i)
          .map((i) => (
            <li>{i}</li>
          ))}
      </ul>
      <div>
        {instructions
          .split("\n")
          .filter((i) => i)
          .map((i) => (
            <p>{i}</p>
          ))}
      </div>
    </div>
  );
}
