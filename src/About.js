import * as React from "react";

export function About() {
  return (
    <div className="about_container">
      <p>
        The goal of this web app is to provide our family with a way to easily
        browse, search, view, print, share, and create recipes that mean
        something to us.
      </p>
      <p>
        If something is not functioning properly or you'd like to recommend a
        new feature be added, please file an issue in the{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/family-resources/recipes/issues/new"
        >
          issue tracker
        </a>
        .
      </p>
    </div>
  );
}
