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
  const match = raw_uri.match(
    new RegExp(/(https:\/\/drive.google.com\/)(file\/d\/|open\?id=)([^/]*)/)
  );

  if (!match) return null;

  const path = match[1];
  const id = match[3];
  return `${path}uc?export=view&id=${id}`;
}
