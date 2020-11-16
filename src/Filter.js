import * as React from "react";
import { getKeyPluralDisplayName } from "./utils";

export function Filter(props) {
  const { filterKey, currentValue, allValues, setKeyFilter } = props;
  return (
    <div className={`filter_container ${filterKey}_filter`}>
      <select
        onChange={(e) => {
          const options = e.target.options;
          const index = e.target.selectedIndex;
          const value = options[index].value;
          setKeyFilter(filterKey, value);
        }}
        value={currentValue ?? ""}
      >
        <option value={""}>{`all ${getKeyPluralDisplayName(
          filterKey
        )}...`}</option>
        {allValues.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}
