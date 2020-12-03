import * as React from "react";
import CreatableSelect from "react-select/creatable";

import {
  RECIPES_SHEET_ID,
  RECIPES_SHEET_RANGE,
  KEYS_IN_ORDER,
} from "./constants";

function ShortTextField(props) {
  return (
    <label
      htmlFor={props.name}
      className={`add_recipe_field_label ${props.name}`}
    >
      {props.label}
      <input className="short_text_field" {...props}></input>
    </label>
  );
}
function LongTextField(props) {
  return (
    <label
      htmlFor={props.name}
      className={`add_recipe_field_label ${props.name}`}
    >
      {props.label}
      <textarea className="long_text_field" {...props}></textarea>
    </label>
  );
}
function FileUploadField(props) {
  return (
    <label
      htmlFor={props.name}
      className={`add_recipe_field_label ${props.name}`}
    >
      {props.label}
      <input className="file_upload_field" {...props}></input>
    </label>
  );
}
function CategoryField(props) {
  return (
    <label
      htmlFor={props.name}
      className={`add_recipe_field_label ${props.name}`}
    >
      {props.label}
      <CreatableSelect
        isClearable
        onChange={props.handleChange}
        onInputChange={props.handleChange}
        options={props.options}
        className="category_field"
      />
    </label>
  );
}

const INITIAL_FORM = {
  name: "",
  person: "",
  raw_cat: "",
  ingreds: "",
  instructions: "",
  story: "",
  source: "",
  cooking_time: "",
  preheat_temp: "",
  servings: "",
  photos: "",
};

export function AddRecipe(props) {
  const { recipes } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    const allFormState = {
      ...formState,
      timestamp: new Date(),
      raw_recipe: "",
      id: "", // spreadsheet macro handles id for now
    };
    const appendRowRequestBody = {
      values: [KEYS_IN_ORDER.map((key) => allFormState[key])], // NOTE: must be 2d array
    };
    const request = global.gapi.client.sheets.spreadsheets.values.append(
      {
        spreadsheetId: RECIPES_SHEET_ID,
        range: RECIPES_SHEET_RANGE,
        valueInputOption: "USER_ENTERED",
      },
      appendRowRequestBody
    );
    request.then(
      function (response) {
        console.log(response.result);
      },
      function (reason) {
        console.error("error: " + reason.result.error.message);
      }
    );
  };
  function formReducer(prevState, { key, value }) {
    return { ...prevState, [key]: value };
  }

  const [formState, dispatchFormUpdate] = React.useReducer(
    formReducer,
    INITIAL_FORM
  );

  const categoryOptions = recipes
    ? recipes.reduce((acc, r) => {
        const { raw_cat } = r;
        return acc.some((o) => o.value === raw_cat)
          ? acc
          : [...acc, { value: raw_cat, label: raw_cat }];
      }, [])
    : [];

  return (
    <div className="add_recipe_form_wrapper">
      <form onSubmit={handleSubmit} className="add_recipe_form">
        <div className="add_recipe_form_row">
          <ShortTextField
            label="recipe title"
            placeholder="Pumpkin Bread..."
            onChange={({ target: { value } }) =>
              dispatchFormUpdate({ key: "name", value })
            }
            value={formState.name}
            required
          />
          <ShortTextField
            name="person"
            label="your name"
            placeholder="Suzanne Cooper..."
            onChange={({ target: { value } }) =>
              dispatchFormUpdate({ key: "person", value })
            }
            value={formState.person}
            required
          />
          <CategoryField
            name="raw_cat"
            label="category"
            handleChange={(value) =>
              dispatchFormUpdate({ key: "raw_cat", value })
            }
            value={formState.raw_cat}
            options={categoryOptions}
            required
          />
        </div>

        <div className="add_recipe_form_row">
          <LongTextField
            name="ingreds"
            label="ingredients list"
            placeholder="One ingredient (w/ measurement) per line..."
            onChange={({ target: { value } }) =>
              dispatchFormUpdate({ key: "ingreds", value })
            }
            value={formState.ingreds}
            required
          />
          <LongTextField
            name="instructions"
            label="instructions"
            placeholder="List preparation steps..."
            onChange={({ target: { value } }) =>
              dispatchFormUpdate({ key: "instructions", value })
            }
            value={formState.instructions}
            required
          />
        </div>
        <div className="add_recipe_form_row">
          <ShortTextField
            name="cooking_time"
            label="cooking time"
            placeholder="2 hours..."
            onChange={({ target: { value } }) =>
              dispatchFormUpdate({ key: "cooking_time", value })
            }
            value={formState.cooking_time}
          />
          <ShortTextField
            name="preheat_temp"
            label="oven temperature"
            placeholder="if applicable..."
            onChange={({ target: { value } }) =>
              dispatchFormUpdate({ key: "preheat_temp", value })
            }
            value={formState.preheat_temp}
          />
          <ShortTextField
            name="servings"
            label="serving size"
            placeholder="4 people, 10 cookies, etc..."
            onChange={({ target: { value } }) =>
              dispatchFormUpdate({ key: "servings", value })
            }
            value={formState.servings}
          />
        </div>

        <LongTextField
          name="story"
          label="backstory"
          placeholder="What is this recipe's backstory?"
          onChange={({ target: { value } }) =>
            dispatchFormUpdate({ key: "story", value })
          }
          value={formState.story}
        />

        <div className="add_recipe_form_row">
          <ShortTextField
            name="source"
            label="original source"
            placeholder="Julia Child, Bisquick Box..."
            onChange={({ target: { value } }) =>
              dispatchFormUpdate({ key: "source", value })
            }
            value={formState.source}
          />
          <FileUploadField name="photos" label="photos" />
        </div>
        <button type="submit" className="add_recipe_submit_button">
          SUBMIT RECIPE
        </button>
      </form>
    </div>
  );
}
