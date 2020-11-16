import * as React from "react";
import { Filter } from "./Filter";

const FILTERABLE_KEYS = ["person", "raw_cat"];

export function Filters(props) {
  const { recipes, setFilters, filters } = props;

  const setKeyFilter = (key, value) => {
    if (value) {
      setFilters([...filters.filter((f) => f.key !== key), { key, value }]);
    } else {
      setFilters([...filters.filter((f) => f.key !== key)]);
    }
  };

  const getFilterValueForKey = (key) =>
    filters.find((f) => f.key === key)?.value;

  const getUniqueValuesForKey = (key) =>
    recipes
      .map((r) => r[key])
      .filter((value, index, all) => value && all.indexOf(value) === index);

  return recipes ? (
    <div className="filters_container">
      {FILTERABLE_KEYS.map((key) => (
        <Filter
          key={key}
          filterKey={key}
          currentValue={getFilterValueForKey(key)}
          allValues={getUniqueValuesForKey(key)}
          setKeyFilter={setKeyFilter}
        />
      ))}
      {filters.length > 0 && (
        <button onClick={() => setFilters([])}>clear all</button>
      )}
    </div>
  ) : null;
}
