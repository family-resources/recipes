import { DISPLAY_NAMES_BY_KEY, PLURAL_DISPLAY_NAMES_BY_KEY } from "./constants";

export function getKeyDisplayName(key) {
  return DISPLAY_NAMES_BY_KEY[key];
}

export function getKeyPluralDisplayName(key) {
  return PLURAL_DISPLAY_NAMES_BY_KEY[key];
}
