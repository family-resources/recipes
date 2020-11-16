import * as React from "react";

export function SearchBar(props) {
  const { setSearchTerm, searchTerm } = props;

  return (
    <div className="search_container">
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        value={searchTerm}
      ></input>
      {searchTerm && (
        <i className="clear_search_button" onClick={() => setSearchTerm("")}>
          &times;
        </i>
      )}
    </div>
  );
}
