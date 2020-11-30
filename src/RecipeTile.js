import * as React from "react";
import { Link } from "react-router-dom";
import { formatPhotoLink } from "./utils";

export function RecipeTile(props) {
  const { name, person, photos, id } = props;

  return (
    <div className="recipe_tile">
      <Link to={`/${id}`} className="recipe_tile_anchor">
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
      </Link>
    </div>
  );
}
