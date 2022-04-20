import "./Filter.css";
import React, { useEffect, useState } from "react";
import { getTypes } from "../../utils/api";

const FilterSection = () => {
  const [typesList, setTypesList] = useState([]);
  const [checked, setChecked] = useState([]);
  useEffect(() => getTypes(setTypesList), []);

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  return (
    <section className="filter_section">
      {typesList.map((type, index) => (
        <div key={index}>
          <input value={type.code} type="checkbox" onChange={handleCheck} />
          <span>{type.name}</span>
        </div>
      ))}
    </section>
  );
};

export default FilterSection;
