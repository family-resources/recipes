export const CLIENT_ID =
  "452500646277-1ghe20uhksl0eeidurc0bifcue2skevh.apps.googleusercontent.com";
const DEV_KEY = "AIzaSyAdcHAtEa90lkJQwgpirQNhg-K0hJq4agw";
const PROD_KEY = "AIzaSyArIxWcUVKS77HiW62vDeSPP7WDADJGSOQ";
export const API_KEY =
  process.env.NODE_ENV === "production" ? PROD_KEY : DEV_KEY;

export const RECIPES_SHEET_ID = "1mlCIY1G-CW1EfNddv7tjEVJoXCz6TyXLcNfqLdBRkzU";
export const RECIPES_SHEET_RANGE = "Recipes!A2:O";

export const FIELD_TYPE = {
  SHORT_TEXT: "short_text",
  LONG_TEXT: "long_text",
  FILE_UPLOAD: "file_upload",
  CAT_SELECT: "cat_select",
};

export const DISPLAY_NAMES_BY_KEY = {
  name: "name",
  person: "person",
  raw_cat: "category",
  raw_recipe: "raw recipe",
  ingreds: "ingredients",
  instructions: "preparation",
  story: "story",
  source: "source",
  cooking_time: "cooking time",
  preheat_temp: "preheat temperature",
  servings: "servings",
  photos: "photos",
  timestamp: "when recipe was added",
  alt_cat: "alternate category (if non-canonical)",
  id: "unique identifier",
};

export const PLURAL_DISPLAY_NAMES_BY_KEY = {
  name: "names",
  person: "people",
  raw_cat: "categories",
  raw_recipe: "raw recipes",
  ingreds: "ingredients",
  instructions: "preparation",
  story: "stories",
  source: "sources",
  cooking_time: "cooking times",
  preheat_temp: "preheat temperatures",
  servings: "servings",
  photos: "photos",
};

export const KEYS_IN_ORDER = [
  "timestamp",
  "person",
  "name",
  "raw_cat",
  "alt_cat",
  "ingreds",
  "instructions",
  "story",
  "source",
  "cooking_time",
  "servings",
  "photos",
  "preheat_temp",
  "raw_recipe",
  "id",
];

export const SEARCHABLE_KEYS = [
  "name",
  "person",
  "raw_cat",
  "ingreds",
  "instructions",
  "story",
  "source",
  "cooking_time",
  "preheat_temp",
  "servings",
];

// color pallete

/* Array */
export const COLOR_HEXES = ["dde8b9", "e8d2ae", "d7b29d", "cb8589", "796465"];

/* Object */
export const COLOR_MAP = {
  "Pale Spring Bud": "dde8b9",
  Wheat: "e8d2ae",
  Tumbleweed: "d7b29d",
  "Old Rose": "cb8589",
  "Deep Taupe": "796465",
};

/* Extended Array */
export const COLOR_MANIFEST = [
  {
    name: "Pale Spring Bud",
    hex: "dde8b9",
    rgb: [221, 232, 185],
    cmyk: [5, 0, 20, 9],
    hsb: [74, 20, 91],
    hsl: [74, 51, 82],
    lab: [90, -12, 22],
  },
  {
    name: "Wheat",
    hex: "e8d2ae",
    rgb: [232, 210, 174],
    cmyk: [0, 9, 25, 9],
    hsb: [37, 25, 91],
    hsl: [37, 56, 80],
    lab: [85, 2, 21],
  },
  {
    name: "Tumbleweed",
    hex: "d7b29d",
    rgb: [215, 178, 157],
    cmyk: [0, 17, 27, 16],
    hsb: [22, 27, 84],
    hsl: [22, 42, 73],
    lab: [75, 10, 16],
  },
  {
    name: "Old Rose",
    hex: "cb8589",
    rgb: [203, 133, 137],
    cmyk: [0, 34, 33, 20],
    hsb: [357, 34, 80],
    hsl: [357, 40, 66],
    lab: [63, 27, 9],
  },
  {
    name: "Deep Taupe",
    hex: "796465",
    rgb: [121, 100, 101],
    cmyk: [0, 17, 17, 53],
    hsb: [357, 17, 47],
    hsl: [357, 10, 43],
    lab: [44, 9, 3],
  },
];
