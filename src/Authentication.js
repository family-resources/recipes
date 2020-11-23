import * as React from "react";
import { API_KEY, CLIENT_ID, RECIPES_SHEET_ID } from "./constants";

export function Authentication({ loaded, setRecipes }): React.Node {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  /**
   * Print the contents of the spreadsheet
   * https://docs.google.com/spreadsheets/d/1mlCIY1G-CW1EfNddv7tjEVJoXCz6TyXLcNfqLdBRkzU/edit#gid=1825319816
   */
  const getRecipes = React.useCallback(() => {
    global.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: RECIPES_SHEET_ID,
        range: "Recipes!A2:L92",
      })
      .then(
        (response) => {
          const rawRecipes = response.result.values;
          if (rawRecipes.length > 0) {
            const recipesNormalized = rawRecipes.map((r) => {
              const [
                timestamp,
                person,
                name,
                raw_cat,
                alt_cat,
                ingreds,
                instructions,
                story,
                source,
                cooking_time,
                servings,
                photos,
                preheat_temp,
                raw_recipe,
              ] = r;
              return {
                name,
                person,
                raw_cat,
                raw_recipe,
                ingreds,
                instructions,
                story,
                source,
                cooking_time,
                preheat_temp,
                servings,
                photos,
                timestamp,
                alt_cat,
              };
            });
            setRecipes(recipesNormalized);
          } else {
            console.error("No Data Found");
          }
        },
        function (response) {
          console.error("Error: " + response.result.error.message);
        }
      );
  }, [setRecipes]);

  React.useEffect(() => {
    const { gapi } = global;
    if (loaded) {
      function updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
          setIsLoggedIn(true);
          getRecipes();
        } else {
          setIsLoggedIn(false);
        }
      }
      if (gapi) {
        gapi.load("client:auth2", () => {
          gapi.client
            .init({
              apiKey: API_KEY,
              clientId: CLIENT_ID,
              discoveryDocs: [
                "https://sheets.googleapis.com/$discovery/rest?version=v4",
              ],
              scope: "https://www.googleapis.com/auth/spreadsheets.readonly",
            })
            .then(
              function () {
                // Listen for sign-in state changes.
                gapi.auth2
                  .getAuthInstance()
                  .isSignedIn.listen(updateSigninStatus);

                // Handle the initial sign-in state.
                updateSigninStatus(
                  gapi.auth2.getAuthInstance().isSignedIn.get()
                );
              },
              function (error) {
                console.error(JSON.stringify(error, null, 2));
              }
            );
        });
      }
    }
  }, [loaded, getRecipes]);

  function handleAuthClick(event) {
    global.gapi.auth2.getAuthInstance().signIn();
  }

  function handleSignoutClick(event) {
    global.gapi.auth2.getAuthInstance().signOut();
  }
  return (
    <div
      className={`auth_container ${
        isLoggedIn ? "logged_in" : "not_authorized"
      }`}
    >
      {isLoggedIn ? (
        <button className="logout_button" onClick={handleSignoutClick}>
          LOGOUT
        </button>
      ) : (
        <button className="authorize_button" onClick={handleAuthClick}>
          AUTHORIZE WITH GOOGLE ACCOUNT
        </button>
      )}
    </div>
  );
}
