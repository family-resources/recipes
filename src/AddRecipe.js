import * as React from "react";

function ShortTextField(props) {
  return (
    <label
      htmlFor={props.name}
      className={`add_recipe_field_label ${props.name}`}
    >
      {props.label}
      <input {...props}></input>
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
      <input {...props}></input>
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
      <input {...props}></input>
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
  };
  function formReducer(prevState, { key, value }) {
    return { ...prevState, [key]: value };
  }

  const [formState, dispatchFormUpdate] = React.useReducer(
    formReducer,
    INITIAL_FORM
  );

  return (
    <div className="add_recipe_form_wrapper">
      <form onSubmit={handleSubmit} className="add_recipe_form">
        <div className="add_recipe_form_row">
          <ShortTextField
            label="recipe title"
            placeholder="e.g. Pumpkin Bread"
            onChange={({ target: { value } }) =>
              dispatchFormUpdate({ key: "name", value })
            }
            value={formState.name}
            required
          />
          <ShortTextField
            name="person"
            label="your name"
            placeholder="e.g. Suzanne Cooper"
            onChange={({ target: { value } }) =>
              dispatchFormUpdate({ key: "person", value })
            }
            value={formState.person}
            required
          />
          <CategoryField name="raw_cat" label="category" required />
        </div>

        <div className="add_recipe_form_row">
          <LongTextField
            name="ingreds"
            label="ingredients list"
            placeholder="one ingredient (including measurement) per line"
            onChange={({ target: { value } }) =>
              dispatchFormUpdate({ key: "ingreds", value })
            }
            value={formState.ingreds}
            required
          />
          <LongTextField
            name="instructions"
            label="instructions"
            placeholder="preparation step by step"
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
            label="total cooking time"
            placeholder="2 hours..."
            onChange={({ target: { value } }) =>
              dispatchFormUpdate({ key: "cooking_time", value })
            }
            value={formState.cooking_time}
          />
          <ShortTextField
            name="preheat_temp"
            label="oven preheat temperature"
            placeholder="350°F..."
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
          placeholder="Does this recipe have special significance? If so, what's its story?"
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
          <FileUploadField name="photos" label="photos of this recipe" />
        </div>
        <button type="submit">SUBMIT RECIPE</button>
      </form>
    </div>
  );
}
