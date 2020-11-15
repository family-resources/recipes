import * as React from "react";

export function Recipe(props) {
  const {
    name,
    person,
    // raw_cat,
    // raw_recipe,
    ingreds,
    instructions,
    // story,
    // source,
    // cooking_time,
    // preheat_temp,
    // servings,
    // photos,
  } = props;

  return (
    <div className="recipe_container">
      <h3 className="recipe_name">{name}</h3>
      <h5 className="recipe_person">{person}</h5>
      <ul>
        {ingreds
          .split("\n")
          .filter((i) => i)
          .map((i, index) => (
            <li key={`${index}${i}`}>{i}</li>
          ))}
      </ul>
      <div>
        {instructions
          .split("\n")
          .filter((i) => i)
          .map((i, index) => (
            <p key={`${index}${i}`}>{i}</p>
          ))}
      </div>
    </div>
  );
}
