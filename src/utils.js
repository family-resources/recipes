import {
  DISPLAY_NAMES_BY_KEY,
  PLURAL_DISPLAY_NAMES_BY_KEY,
  SEARCHABLE_KEYS,
} from "./constants";

export function getKeyDisplayName(key) {
  return DISPLAY_NAMES_BY_KEY[key];
}

export function getKeyPluralDisplayName(key) {
  return PLURAL_DISPLAY_NAMES_BY_KEY[key];
}

export function getSearchStringForRecipe(recipe) {
  return Object.keys(recipe).reduce(
    (acc, key) =>
      SEARCHABLE_KEYS.includes(key) ? `${acc}${recipe[key]}` : acc,
    ""
  );
}

export function formatPhotoLink(raw_uri) {
  // if (raw_uri.includes("open?")) {
  //   const [path, idParam] = raw_uri.split("open?");
  //   return `${path}uc?export=view&${idParam}`;
  // } else {
  //   const [path, idParam] = raw_uri.split("view?");
  //   return `${path}uc?export=view&${idParam}`;
  // }
  const match = raw_uri.match(
    new RegExp("(https://drive.google.com/)file/d/(.+)/.*")
  );

  console.log(raw_uri, match);

  return match && `${match[1]}uc?export=view&id=${match[2]}`;
}
