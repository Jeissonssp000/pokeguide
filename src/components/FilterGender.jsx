import React, { useState } from "react";
import { InfoContext } from "../context/InfoContext";

const FilterGender = () => {
  const { typesList } = InfoContext();
  const [checked, setChecked] = useState([]);

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    console.log(updatedList);
    setChecked(updatedList);
  };

  return (
    <div className="filter-type_container">
      <h4 style={{ margin: 0 }}>Gender:</h4>
      {typesList.map((type, index) => (
        <div className="item-horizontal" key={index}>
          <input value={type.url} type="checkbox" onChange={handleCheck} />
          <span>{type.name}</span>
        </div>
      ))}
    </div>
  );
};

export default FilterGender;
