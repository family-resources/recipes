import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import "./App.css";
import { Authentication } from "./Authentication";
import { useScript } from "./useScript";

export function NavBar(props) {
  const { setRecipes } = props;
  const { pathname } = useLocation();
  const [gapiLoaded, gapiError] = useScript(
    "https://apis.google.com/js/api.js"
  );

  return (
    <div className="main_nav">
      <NavLink to="/" path={pathname}>
        Recipes
      </NavLink>
      <NavLink to="/about" path={pathname}>
        About
      </NavLink>
      <Authentication loaded={gapiLoaded} setRecipes={setRecipes} />
      {gapiError && <p>gapiError</p>}
    </div>
  );
}

function NavLink(props) {
  const className = `nav_link ${props.path === props.to ? "active" : ""}`;

  return <Link {...{ className, ...props }}>{props.children}</Link>;
}
