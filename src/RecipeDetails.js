import * as React from "react";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { DISPLAY_NAMES_BY_KEY } from "./constants";
import { formatPhotoLink } from "./utils";

const METADATA_PROPS = ["cooking_time", "preheat_temp", "servings", "source"];
export function RecipeDetails(props) {
  const { recipes } = props;
  const { recipeId } = useParams();
  const printElRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => printElRef.current,
  });

  if (!recipes || recipes.length === 0) return null;

  const currentRecipe = recipes.find((r) => r.id === recipeId);
  const { name, person, ingreds, instructions, photos, story } = currentRecipe;

  const photoUris = photos ? photos.split(", ") : [];

  return (
    <div ref={printElRef} className="recipe_container">
      <div className="button_row">
        <button
          onClick={handlePrint}
          title="print this recipe"
          className="print_recipe_button"
        >
          <svg
            id="_x31__px"
            enableBackground="new 0 0 24 24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m21.5 18h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3c.827 0 1.5-.673 1.5-1.5v-7c0-.827-.673-1.5-1.5-1.5h-19c-.827 0-1.5.673-1.5 1.5v7c0 .827.673 1.5 1.5 1.5h3c.276 0 .5.224.5.5s-.224.5-.5.5h-3c-1.379 0-2.5-1.122-2.5-2.5v-7c0-1.378 1.121-2.5 2.5-2.5h19c1.379 0 2.5 1.122 2.5 2.5v7c0 1.378-1.121 2.5-2.5 2.5z" />
            <path d="m14.5 21h-6c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h6c.276 0 .5.224.5.5s-.224.5-.5.5z" />
            <path d="m14.5 19h-6c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h6c.276 0 .5.224.5.5s-.224.5-.5.5z" />
            <path d="m10.5 17h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z" />
            <path d="m18.5 7c-.276 0-.5-.224-.5-.5v-4c0-.827-.673-1.5-1.5-1.5h-9c-.827 0-1.5.673-1.5 1.5v4c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-4c0-1.378 1.121-2.5 2.5-2.5h9c1.379 0 2.5 1.122 2.5 2.5v4c0 .276-.224.5-.5.5z" />
            <path d="m16.5 24h-9c-1.379 0-2.5-1.122-2.5-2.5v-8c0-.276.224-.5.5-.5h13c.276 0 .5.224.5.5v8c0 1.378-1.121 2.5-2.5 2.5zm-10.5-10v7.5c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5v-7.5z" />
          </svg>
        </button>
      </div>
      {photoUris.map((p, i) => (
        <img
          key={i}
          className="recipe_photo_detail"
          src={formatPhotoLink(p)}
          alt={`${name}${i}`}
        />
      ))}
      <div className="info_section">
        <h3 className="recipe_name">{name}</h3>
        <p className="recipe_person">{`Contributed By: ${person}`}</p>
        <table className="recipe_metadata">
          <tbody>
            {METADATA_PROPS.map((p) =>
              props[p] ? (
                <React.Fragment key={p}>
                  <tr className="metadata_item">
                    <td className="metadata_key">{DISPLAY_NAMES_BY_KEY[p]}</td>
                    <td>{props[p]}</td>
                  </tr>
                  <tr className="page_break"></tr>
                </React.Fragment>
              ) : null
            )}
          </tbody>
        </table>
        {story && <p className="recipe_story">{story}</p>}
      </div>
      <div className="page_break" />
      <div className="making_it_section">
        <div className="ingreds_wrapper">
          <strong className="category_header">
            {DISPLAY_NAMES_BY_KEY.ingreds}
          </strong>
          <ul className="ingreds_list">
            {ingreds &&
              ingreds
                .split("\n")
                .filter((i) => i)
                .map((i, index) => (
                  <React.Fragment key={`${index}${i}`}>
                    <li className="ingred_item">{i}</li>
                    <div className="page_break" />
                  </React.Fragment>
                ))}
          </ul>
        </div>
        <div className="instructions_wrapper">
          <strong className="category_header">
            {DISPLAY_NAMES_BY_KEY.instructions}
          </strong>
          <div>
            {instructions &&
              instructions
                .split("\n")
                .filter((i) => i)
                .map((i, index) => (
                  <React.Fragment key={`${index}${i}`}>
                    <p className="instruction_item">{i}</p>
                    <div className="page_break" />
                  </React.Fragment>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
