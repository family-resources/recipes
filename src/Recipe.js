import * as React from "react";
import { useReactToPrint } from "react-to-print";
import { DISPLAY_NAMES_BY_KEY } from "./constants";
import { formatPhotoLink } from "./utils";

const PRINT_ONLY_PROPS = [
  "story",
  "source",
  "cooking_time",
  "preheat_temp",
  "servings",
];
export function Recipe(props) {
  const { name, person, ingreds, instructions, photos } = props;

  console.log("TODO: unhandled photos", photos);
  const printElRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => printElRef.current,
  });

  return (
    <div ref={printElRef} className="recipe_container">
      <button
        onClick={handlePrint}
        title="print this recipe"
        className="print_recipe_button"
      >
        <svg
          id="_x31__px"
          enable-background="new 0 0 24 24"
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
      <h3 className="recipe_name">{name}</h3>
      <h5 className="recipe_person">{person}</h5>
      <strong className="category_header">
        {DISPLAY_NAMES_BY_KEY.ingreds}
      </strong>
      <ul>
        {ingreds
          .split("\n")
          .filter((i) => i)
          .map((i, index) => (
            <li key={`${index}${i}`}>{i}</li>
          ))}
      </ul>
      <strong className="category_header">
        {DISPLAY_NAMES_BY_KEY.instructions}
      </strong>
      <div>
        {instructions
          .split("\n")
          .filter((i) => i)
          .map((i, index) => (
            <p key={`${index}${i}`}>{i}</p>
          ))}
      </div>
      {photos &&
        photos
          .split(", ")
          .map((p, i) => (
            <img
              className="recipe_photo_thumbnail"
              src={formatPhotoLink(p)}
              alt={`${name}${i}`}
            />
          ))}
      <div className="print_only">
        {PRINT_ONLY_PROPS.map((p) =>
          props[p] ? (
            <label className="print_only_item">
              <strong className="category_header">
                {DISPLAY_NAMES_BY_KEY[p]}
              </strong>
              <p>{props[p]}</p>
            </label>
          ) : null
        )}
      </div>
    </div>
  );
}
