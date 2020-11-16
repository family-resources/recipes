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
