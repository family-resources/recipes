import * as React from "react";
import { formatPhotoLink } from "./utils";

export function RecipeTile(props) {
  const { name, person, photos, setFocus } = props;

  return (
    <div className="recipe_tile" onClick={() => setFocus(name)}>
      {photos ? (
        <img
          className="recipe_photo_thumbnail"
          src={formatPhotoLink(photos.split(", ")[0])}
          alt={name}
        />
      ) : (
        <div className="recipe_placeholder_thumbnail" />
      )}
      <p className="recipe_tile_name">{name}</p>
      <p className="recipe_tile_person">{person}</p>
    </div>
  );
}
