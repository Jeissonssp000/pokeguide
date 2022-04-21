import React from "react";
import { InfoContext } from "../context/InfoContext";

const FilterType = () => {
  const { typesList, handleCheck } = InfoContext();

  return (
    <div className="filter-type_container">
      <h4 style={{ margin: 0 }}>Type:</h4>
      {typesList
        ? typesList.map((type, index) => (
            <div className="item-horizontal" key={index}>
              <input value={type.url} type="checkbox" onChange={handleCheck} />
              <span>{type.name}</span>
            </div>
          ))
        : null}
    </div>
  );
};

export default FilterType;
